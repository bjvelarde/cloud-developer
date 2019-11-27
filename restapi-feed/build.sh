#!/bin/bash
set -e
# Any subsequent(*) commands which fail will cause the shell script to exit immediately

docker build -t benjvelarde/udacity-restapi-feed .
#docker tag benjvelarde/udacity-restapi-feed:latest benjvelarde/feed:prod
#docker push benjvelarde/feed:prod
