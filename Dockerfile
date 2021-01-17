FROM node:alpine

COPY . .
RUN yarn

EXPOSE 5000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=5000

RUN yarn build

CMD [ "yarn", "start" ]