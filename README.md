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
# Each command should be run in a separate command prompt
gulp watch --mock 8081
npm start
json-server api/mocks.json --port 8081
```

To run application **unit tests**.

```bash
gulp test
```

To run the application in **production mode** minify and concatenate JS files, start the **mock** and the **express** server.

```bash
gulp html --mock 8081
gulp js
json-server api/mocks.json --port 8081 &
npm start
```

To run the application in **production mode** minify and concatenate JS files and start the **express** server.

```bash
gulp html
gulp js
npm start
```

With servers up and running, we can see the application by opening [http://localhost:8080/](http://localhost:8080/).


TODO
====

Remove Dockerfile, Dockerfile.unit_tests
