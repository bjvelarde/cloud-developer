#!/bin/bash
set -e
# Any subsequent(*) commands which fail will cause the shell script to exit immediately

docker build -t benjvelarde/udacity-frontend .
docker tag benjvelarde/udacity-frontend:latest benjvelarde/udacity-frontend:local
#docker push benjvelarde/feed:prod
