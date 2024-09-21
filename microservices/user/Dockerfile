FROM node:22

WORKDIR /user-microservice

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["node", "user.service.js"]