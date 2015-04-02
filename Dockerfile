FROM vfarcic/books-fe-base
MAINTAINER Viktor Farcic "viktor@farcic.com"

WORKDIR /app

ADD package.json /app/
ADD bower.json /app/
RUN npm install
RUN bower install --allow-root | xargs echo

ADD run.sh /app/
ADD Gruntfile.js /app/
ADD gulpfile.js /app/
ADD web.js /app/
ADD index.html /app/
ADD api /app/api
ADD src /app/src

RUN gulp

CMD ["/app/run.sh"]