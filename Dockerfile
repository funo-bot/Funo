FROM funo/node-gyp-images

WORKDIR /funo

COPY . /funo

EXPOSE 5000
EXPOSE 2333

RUN npm i

CMD [ "npm", "start" ]

