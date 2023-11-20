FROM node:lts-alpine AS server
WORKDIR /app/server
CMD npm install && npm run start

FROM node:lts-alpine AS client
WORKDIR /app/client
CMD npm install && npm run start -- --host 0.0.0.0