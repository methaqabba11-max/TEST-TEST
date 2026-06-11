# Rust + Node.js image for cargo test execution
FROM rust:1.82-slim

# Install Node.js 20
RUN apt-get update && apt-get install -y curl ca-certificates && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package files and install Node deps
COPY package*.json ./
RUN npm install --production

# Copy app source
COPY . .

# Pre-warm the Rust registry cache (speeds up first test run)
RUN cargo search hello_rust --limit 1 || true

ENV PORT=3000
EXPOSE 3000

CMD ["node", "server.js"]
