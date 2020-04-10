FROM node:10.11.0

RUN  npm install&&npm run build

COPY dist/ /root/dockerconfig/nginx/www