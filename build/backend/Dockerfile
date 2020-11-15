FROM node:latest AS base

WORKDIR /home/node/app

RUN apt-get update -yq \
    && npm install -g @nestjs/cli