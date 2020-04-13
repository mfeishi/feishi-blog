FROM node:10.11.0

COPY . /feishi-blog

WORKDIR /feishi-blog

RUN npm install&&npm run build

EXPOSE 8000

CMD npm run dev
