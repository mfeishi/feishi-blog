FROM node:10.11.0

RUN mkdir /workspace

WORKDIR /workspace

COPY ./package.json /workspace/package.json
COPY ./package-lock.json /workspace/package-lock.lock

RUN npm install

COPY . /workspace

EXPOSE 8000

CMD npm run dev