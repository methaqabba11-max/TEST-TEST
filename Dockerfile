# Rust + Node.js image for cargo test execution
FROM rust:latest

# Install Node.js 20
RUN apt-get update && apt-get install -y curl ca-certificates && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Shared cargo build cache - baked into image so tests compile fast
ENV CARGO_TARGET_DIR=/cargo-target
RUN mkdir -p $CARGO_TARGET_DIR

# Pre-warm: compile a small lib+test so std/core/test-harness are cached
RUN cargo new --lib --vcs none /tmp/wm_sol && \
    cargo new --lib --vcs none /tmp/wm_test && \
    echo 'pub fn add(a:i32,b:i32)->i32{a+b}' > /tmp/wm_sol/src/lib.rs && \
    printf '\n[dependencies]\nwm_sol={path="/tmp/wm_sol"}\n' >> /tmp/wm_test/Cargo.toml && \
    printf 'use wm_sol::add;\n#[test]\nfn t(){assert_eq!(add(1,2),3);}' > /tmp/wm_test/src/lib.rs && \
    cargo test --manifest-path /tmp/wm_test/Cargo.toml && \
    rm -rf /tmp/wm_sol /tmp/wm_test

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

ENV PORT=3000
EXPOSE 3000

CMD ["node", "server.js"]
