FROM node:22

WORKDIR /profile-microservice

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3001

CMD ["node", "profile.service.js"]