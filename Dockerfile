FROM node:alpine
ENV NODE_ENV production
WORKDIR /app
COPY package.json ./
RUN apk update && apk upgrade &&  apk add ca-certificates && update-ca-certificates && apk add --update tzdata
ENV TZ=Europe/Berlin
RUN yarn install --production
COPY server.js .
EXPOSE 3000
CMD ["yarn", "start"]
