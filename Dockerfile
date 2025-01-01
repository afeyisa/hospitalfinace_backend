FROM node:20

WORKDIR /finance

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD ["npx", "nodemon", "main"]

#docker build -t finance_backend .

