#!/usr/bin/env bash

set -e

if [ "$MODE" = "mock_server" ]
then
  gulp html --mock $MOCK_PORT
  json-server api/mocks.json --port $MOCK_PORT &
  npm start
else
  npm start
fi
#gulp html --mock 8081 &
#gulp js --mock 8081 &
#json-server api/mocks.json --port 8081 &
#npm start