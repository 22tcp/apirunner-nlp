# Project

Evaluating a news article via natural language processing AI API sentiment 2.1 of meaningcloud.com  

The original example code used node 14 and the Aylien API SDK. These folks went payment only so meaningcloud it is.  
For security reasons and in respect of interoperability this project currently runs with node v18.16.0
instead.  
I recommend using nvm to install and use node 18.  

This minimal application features webpack, a serviceworker setup, and sessions to temporarily handle user specific requests for each user seperately  

dev  build with dev-webserver hot load.  
Credentials for the API are stored server-side only, makes use of the dotenv package.  

# how to run
optional  
install nvm  
and run  
```
nvm install --lts=hydrogen

``` 
to inflate node_modules and start node server
```
npm install
npm run build-prod && npm start
```

dev mode 
```
npm run build-dev
```
webserver starts and browser opens (tested on linux mint lts with ffox )

Listens on *:8080


THIS CODE WILL NOT RUN WITHOUT .env server side file!  
you need to add 2 lines in the file  
API_KEY=   enter your personal token from meaningcloud here  
sessionkey= some  sufficiently long string* for the browser session cookie encryption  
  
 *for my app I used pwgen -c -n -s -B -v 32 1   
