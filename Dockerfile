FROM node:10.15.3-alpine

RUN apk add --no-cache \
    build-base \
    g++ \
    cairo-dev \
    jpeg-dev \
    pango-dev \
    giflib-dev \
    python

WORKDIR /funo

COPY . /funo

RUN npm i

CMD [ "npm", "start" ]