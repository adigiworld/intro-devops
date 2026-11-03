FROM node:26.13-alpine3.23
WORKDIR /app
COPY package* .
COPY server.js .
COPY index.html .
RUN npm install
EXPOSE 1500
CMD [ "node", "server.js" ]

# FROM node:26.13-alpine3.23
