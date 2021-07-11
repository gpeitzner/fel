FROM node:12.18-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN yarn install && mv node_modules ../
COPY ./dist .
EXPOSE 3000
CMD ["node", "./bin/www.js"]
