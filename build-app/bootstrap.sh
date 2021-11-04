#!/usr/bin/env bash
 #git
sudo yum install git -y

 #Go
sudo yum install golang -y

 #Node and npm
curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -
sudo yum install nodejs -y
source ~/.bash_profile
 #Vue cli
npm install -g yarn -y
yarn global add @vue/cli -y

 #Clone repo
git clone https://github.com/jdmendozaa/vuego-demoapp.git

 #build go server
 cd vuego-demoapp/server
 go build -o /shared/server

 cd ../spa

 sudo echo 'VUE_APP_API_ENDPOINT="http://10.0.0.8:4001/api"' >> .env.production.local

 yarn install

 yarn build

 tar -zcvf vue_dist.tar.gz ./dist
 mv vue_dist.tar.gz /shared

