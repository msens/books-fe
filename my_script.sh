#!/bin/sh

http-server -p 8080 &
json-server api/mocks.json --port 8081 &
