FROM node:26.13-alpine3.23
WORKDIR /app
COPY package* .
RUN npm install
COPY server.js .
COPY index.html .
EXPOSE 1500
CMD [ "node", "server.js" ]

# FROM node:26.13-alpine3.23
