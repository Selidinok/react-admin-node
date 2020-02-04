FROM node:latest
RUN mkdir -p /usr/src/app/web
WORKDIR /usr/src/app/web
COPY package.json /usr/src/app/web
RUN npm install
COPY . /usr/src/app/web
EXPOSE 3000
CMD [ “npm”, “start” ]