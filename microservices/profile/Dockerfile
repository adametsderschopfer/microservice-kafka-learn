FROM node:22

WORKDIR /profile-microservice

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "profile.service.js"]