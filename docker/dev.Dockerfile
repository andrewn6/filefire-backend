FROM node:12
WORKDIR /usr/src/dev

COPY package.json .

RUN npm install --dev --ignore-scripts --prefer-offline 

EXPOSE 8082

CMD ["npm", "start"]