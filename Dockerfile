FROM node:9

WORKDIR /src
RUN npm install -g gulp

ADD . .
RUN ["bash", "docker/build.sh"]

FROM nginx:stable-alpine
COPY --from=0 /src/dist/ /usr/share/nginx/html/
