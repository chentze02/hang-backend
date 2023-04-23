# Stage 1
FROM node:16-alpine3.11 as development

WORKDIR /usr/app

ARG NPM_TOKEN  

COPY package*.json ./

RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc && \
    npm i --only=development && \
    rm -f .npmrc

COPY . ./

RUN npm run build


# Stage 2
FROM node:16-alpine3.11 as prod1

WORKDIR /usr/app

ARG NPM_TOKEN  

COPY package*.json ./

RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc && \
    npm install --only=production && \
    rm -f .npmrc

COPY . ./

COPY --from=development /usr/app/dist ./dist


# Stage 3
FROM node:16-alpine3.11 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/app

COPY package*.json ./

COPY . ./

COPY --from=prod1 /usr/app/dist ./dist

CMD ["node", "dist/main"]