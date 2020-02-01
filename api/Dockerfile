FROM node:latest
RUN mkdir -p /usr/src/app/api
WORKDIR /usr/src/app/api
COPY package.json /usr/src/app/api
RUN npm install
COPY . /usr/src/app/api
EXPOSE 3023
CMD ["npm","run","debug"]