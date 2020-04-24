FROM node:12.16.2

RUN mkdir /workspace

WORKDIR /workspace

COPY ./package.json /workspace/package.json
COPY ./package-lock.json /workspace/package-lock.lock

RUN npm config set registry https://registry.npm.taobao.org && npm install

COPY . /workspace

EXPOSE 8000

CMD npm start

