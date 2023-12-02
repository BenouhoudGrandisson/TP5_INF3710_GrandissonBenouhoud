FROM node:lts-alpine AS server
COPY ./server /app/server
COPY ./common /app/common
WORKDIR /app/server
CMD npm install && npm run start

FROM node:lts-alpine AS client
COPY ./client /app/client
COPY ./common /app/common
WORKDIR /app/client
CMD npm install && npm run start -- --host 0.0.0.0