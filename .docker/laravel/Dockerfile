FROM webdevops/php-nginx:8.1

RUN apt-get clean && \
    apt-get update && \
    apt-get install -y \
    mariadb-client \
    redis-tools \
    nano \
    curl \
    vim \
    unzip \
    && rm -rf /var/lib/apt/lists/*

RUN curl -sL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

RUN npm install -g npm@latest
