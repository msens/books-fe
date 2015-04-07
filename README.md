WEB UI Sample
=============

Installation
------------

Install [NodeJS](http://nodejs.org/).

Run following:

```bash
npm install -g grunt-cli
npm install -g gulp
npm install -g bower
npm install -g json-server
npm install --save-dev gulp-html-replace
npm install --save-dev gulp-util
npm install
bower install --allow-root --config.interactive=false
```

Running
-------

To run the application in **development mode** minify and concatenate our JS files, start the server and start the json-server.

```bash
# Each command should be run in a separate command prompt or as background processes
gulp watch --mock 8081
npm start
json-server api/mocks.json --port 8081
```

To run application **unit tests**.

```bash
gulp test
```

To run the application in **production mode** with the **mock** and the **express** servers.

```bash
gulp html --mock 8081
gulp js
json-server api/mocks.json --port 8081 &
npm start
```

To run the application in **production mode** with the **express** server.

```bash
gulp html
gulp js
npm start
```

With servers up and running, we can see the application by opening [http://localhost:8080/](http://localhost:8080/).


TODO
====

Create a new branch
Remove Dockerfile and run.sh from the master branch
Remove Solutions section of README.md from the master branch
Change presentation references in notes to the new branch

Solutions
=========

Build
-----

```bash
sudo docker build -t books-fe .
```

Mock Server
-----------

```bash
sudo docker run -d --name books-fe-mock \
  -e MODE=mock_server -e MOCK_PORT=9002 \
  -p 9001:8080 -p 9002:9002 \
  books-fe
```

Functional Tests (BDD)
----------------------

```bash
sudo docker run -t --rm \
  -v $PWD/stories:/opt/bdd/data/stories \
  vfarcic/bdd-runner-phantomjs \
  -P url=http://172.17.42.1:9001 \
  -P widthHeight=1024,768 \
  --story_path data/stories/functional/**

Push to Registry
----------------

```bash
sudo docker tag books-fe 192.168.50.91:5000/books-fe
sudo docker push 192.168.50.91:5000/books-fe
```

Production Server (TODO)
-----------------

```bash
sudo docker run -d --name books-fe -p 9003:8080 vfarcic/books-fe
```

Integration Tests (TODO)
-----------------

```bash
sudo docker run -t --rm \
  -v /home/vifarcic/IdeaProjects/books-fe/stories:/opt/bdd/data/stories \
  vfarcic/bdd-runner-phantomjs \
  -P url=http://172.17.42.1:9003 \
  -P widthHeight=1024,768 \
  --story_path data/stories/integration/**
```