FROM node:lts

WORKDIR /usr/src/app

COPY package.json .

COPY . .

CMD ["npm", "start"]
