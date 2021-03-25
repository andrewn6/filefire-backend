FROM node:12
WORKDIR /usr/src/dev

COPY package.json .

RUN npm install --production --ignore-scripts --prefer-offline 

COPY dist/ ./dist 

EXPOSE 8082

CMD ["npm", "start"]