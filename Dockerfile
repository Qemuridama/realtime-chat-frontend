FROM node:alpine

WORKDIR /src

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

CMD ["yarn", "run", "start"]
