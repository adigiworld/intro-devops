# Use a maintained LTS Node base image to reduce known vulnerabilities.
FROM node:26.13-alpine3.23
# Apply available Alpine security updates to the base image.
RUN apk upgrade --no-cache
WORKDIR /app
COPY package*.json ./
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; then \
    npm install; \
    else \
    npm install --omit=dev; \
    fi

COPY . /app
ENV PORT=8080
EXPOSE 1500
CMD [ "npm", "run", "start" ]
# ENTRYPOINT [ "npm", "run", "start" ]
