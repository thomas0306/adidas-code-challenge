# Alpine based image
FROM node:11-alpine
LABEL maintainer="Kwan Hau Thomas, Lee <kwanhauthomas.lee@adidas.com>"

WORKDIR /usr/src/adidas-code-challenge

# Install app dependencies
RUN apk update && \
    apk upgrade && \
    apk add --no-cache alpine-sdk autoconf automake libtool

# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 80
CMD [ "npm", "run", "start:production:notest"]