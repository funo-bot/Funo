FROM funo/node-gyp-images

WORKDIR /funo

COPY . /funo

EXPOSE 5050

RUN npm i

CMD [ "npm", "start" ]
