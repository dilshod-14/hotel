FROM node:20.10.0


COPY . /hotel
WORKDIR /hotel
CMD npm install && node server.js
