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
npm install -g http-server
npm install -g json-server
npm install
```

Running
-------

Before running the application we need to minify and concatenate our JS files.

```bash
gulp js
```

To run the application in development mode we need to start the server.

```bash
http-server -p 8080
```

For mocking JSON requests, we'll use the json-server NodeJS module. The initial set of mocks can be found in api/mocks.json.

```bash
json-server api/mocks.json --port 8081
```

With servers up and running, we can see the application by opening [http://localhost:8080/](http://localhost:8080/).
