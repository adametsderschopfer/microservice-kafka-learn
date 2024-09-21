FROM node:22

WORKDIR /user-microservice

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "user.service.js"]