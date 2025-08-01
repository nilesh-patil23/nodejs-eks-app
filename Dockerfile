FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY app ./app
COPY cert ./cert

EXPOSE 443

CMD ["npm", "start"]
