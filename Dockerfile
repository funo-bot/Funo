FROM funo/node-gyp-images

WORKDIR /funo

COPY . /funo

RUN npm i

CMD [ "npm", "start" ]