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

CMD ["/app/run.sh"]

# UNIT TESTS
# docker run -t --rm -e MODE=unit_tests vfarcic/books-fe

# MOCK SERVER
# docker run -d --name books-fe-mock -e MODE=mock_server -e MOCK_PORT=9002 -p 9001:8080 -p 9002:9002 vfarcic/books-fe

# FUNCTIONAL TESTS
# docker run -t --rm \
#   -v /home/vifarcic/IdeaProjects/books-fe/stories:/opt/bdd/data/stories \
#   vfarcic/bdd-runner-phantomjs \
#   -P url=http://172.17.42.1:9001 \
#   -P widthHeight=1024,768 \
#   --story_path data/stories/functional/**

# PRODUCTION SERVER
# docker run -d --name books-fe -p 9003:8080 vfarcic/books-fe

# INTEGRATION TESTS
# docker run -t --rm \
#   -v /home/vifarcic/IdeaProjects/books-fe/stories:/opt/bdd/data/stories \
#   vfarcic/bdd-runner-phantomjs \
#   -P url=http://172.17.42.1:9003 \
#   -P widthHeight=1024,768 \
#   --story_path data/stories/integration/**