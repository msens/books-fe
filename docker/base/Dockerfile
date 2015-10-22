FROM node:4.2.1
MAINTAINER Viktor Farcic "viktor@farcic.com"

# PhantomJS
RUN apt-get update
RUN apt-get install -y build-essential g++ flex bison gperf ruby perl \
  libsqlite3-dev libfontconfig1-dev libicu-dev libfreetype6 libssl-dev \
  libpng-dev libjpeg-dev

RUN npm install -g grunt-cli
RUN npm install -g gulp
RUN npm install -g bower
RUN npm install -g json-server
