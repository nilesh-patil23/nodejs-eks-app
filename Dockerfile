FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

COPY cert ./cert

EXPOSE 443

CMD ["npm", "start"]
