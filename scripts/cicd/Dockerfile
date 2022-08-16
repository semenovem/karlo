FROM debian:11.4-slim

RUN apt-get update && \
    apt-get -y install curl git \
    && curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean
