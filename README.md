# Project

Evaluating a news article via natural language processing AI API sentiment 2.1 of meaningcloud.com

The original example code used node 14.
For security reasons and in respect of interoperability this project currently runs with node v18.16.0
instead. 
I recommend using nvm to install and use node 18. 

This minimal application features webpack, a serviceworker setup, 
dev and production builds with dev-webserver hot load.
Credentials for the API are stored server-side only, makes use of the dotenv package.

# how to run
optional
install nvm
and run
```
nvm use node 18 --lts
``` 

```
npm install
npm run build-prod && npm start
```
Listens on *:8080

