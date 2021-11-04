#!/usr/bin/env bash

#Run backend
vagracd /shared

export PORT=4001

nohup ./server > server.out 2>&1 &

echo $PORT


