#!/usr/bin/env bash

mv Dockerfile Dockerfile.orig

set -e

cp Dockerfile.test Dockerfile
docker build -t vfarcic/books-fe-tests .
mv Dockerfile.orig Dockerfile