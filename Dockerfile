FROM node:17.2.0-alpine3.12

WORKDIR /Webxforce

COPY package*.json ./

RUN npm install

EXPOSE 3000

COPY . .

CMD ["npm", "start"] 