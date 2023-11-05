FROM node:latest

WORKDIR /app-incomes

COPY . .

RUN npm install

RUN npm install bcrypt

EXPOSE 3001

CMD ["npm", "start"]