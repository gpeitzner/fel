FROM node:12.18-alpine as build
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

FROM nginx:latest
COPY --from=build ./app/build ./usr/share/nginx/html/
COPY --from=build ./app/nginx/nginx.conf ./etc/nginx/conf.d/
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]