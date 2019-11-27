#!/bin/bash
set -e
# Any subsequent(*) commands which fail will cause the shell script to exit immediately

docker build -t benjvelarde/reverseproxy .
#docker tag benjvelarde/reverseproxy:latest benjvelarde/reverseproxy:prod
#docker push benjvelarde/reverseproxy:prod
