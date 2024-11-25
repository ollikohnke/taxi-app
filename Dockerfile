FROM node:lts-alpine

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app

COPY package*.json ./
COPY src_server ./
## UNCOMMENT FOR PRODUCTION ##
## COPY dist_back ./
## COPY dist_front ./
## COPY .env.prod ./

RUN chown -R node:node /home/node/app

USER node

COPY --chown=node:node . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "nodemon" ]