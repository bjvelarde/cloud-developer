#!/bin/bash
set -e
# Any subsequent(*) commands which fail will cause the shell script to exit immediately

docker build -t benjvelarde/udacity-restapi-user .
#docker tag benjvelarde/udacity-restapi-user:latest benjvelarde/user:prod
#docker push benjvelarde/user:prod
