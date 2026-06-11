# Rust + Node.js image for cargo test execution
FROM rust:1.82-slim

# Install Node.js 20
RUN apt-get update && apt-get install -y curl ca-certificates && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Shared cargo build cache - persists across test runs in the container
ENV CARGO_TARGET_DIR=/cargo-target
RUN mkdir -p $CARGO_TARGET_DIR

# Pre-warm: compile a minimal lib+test pair so std/core/test-harness are cached
# This makes the first real test run fast (only the solution needs recompiling)
RUN mkdir -p /tmp/wm/sol/src /tmp/wm/test/src && \
    printf '[package]\nname="wm_sol"\nversion="0.1.0"\nedition="2024"\n[dependencies]\n' \
      > /tmp/wm/sol/Cargo.toml && \
    echo 'pub fn add(a: i32, b: i32) -> i32 { a + b }' > /tmp/wm/sol/src/lib.rs && \
    printf '[package]\nname="wm_test"\nversion="0.1.0"\nedition="2024"\n[dependencies]\nwm_sol = { path = "../sol" }\n' \
      > /tmp/wm/test/Cargo.toml && \
    printf 'use wm_sol::*;\n#[test]\nfn t() { assert_eq!(add(1,2), 3); }' \
      > /tmp/wm/test/src/lib.rs && \
    cargo test --manifest-path /tmp/wm/test/Cargo.toml && \
    rm -rf /tmp/wm

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

ENV PORT=3000
EXPOSE 3000

CMD ["node", "server.js"]
