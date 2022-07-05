FROM node:13-slim

WORKDIR /app

add . /app

CMD node server.js
