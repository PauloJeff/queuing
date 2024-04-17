FROM node:21.7.3-alpine3.19

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./
COPY ./docker-entry.sh ./

USER node

COPY --chown=node:node . .

CMD ["npm", "run", "dev"]