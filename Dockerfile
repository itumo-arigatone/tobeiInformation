FROM node:20-alpine3.17
WORKDIR /home/node/app
RUN apk update && apk upgrade && \
    apk add git npm build-base autoconf automake libtool pkgconfig nasm python3 && \
    npm install -g gatsby-cli && \
    gatsby options set package-manager npm
EXPOSE 8000 9000