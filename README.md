# Project

Evaluating a news article via natural language processing AI API sentiment 2.1 of meaningcloud.com  

The original example code used node 14 and the Aylien API SDK. These folks went payment only so meaningcloud it is.  
For security reasons and in respect of interoperability this project currently runs with node v18.16.0
instead.  
I recommend using nvm to install and use node 18 LTS hydrogen, see below. 

This minimal application features webpack, a serviceworker setup, and sessions to temporarily handle user specific requests for each user seperately  
Credentials for the API are stored server-side only, makes use of the dotenv package.  
development mode with dev-webserver hot load.  
 

# how to run
optional  
install nvm, use the original repository on github  
  
https://github.com/nvm-sh/nvm#install--update-script  
  
and run  
```
nvm install 18 --lts=hydrogen
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
when the dev webserver starts and the browser auto-opens it worked (tested on linux mint lts with ffox )
Beware, the complete app needs a running node server -the webpack-dev-server can only simulate the client side delivery.

Listens on *:8080


THIS CODE WILL NOT RUN WITHOUT .env server side file!  
you need to add 2 lines in the file  
API_KEY=   enter your personal token from meaningcloud here  
sessionkey= some  sufficiently long string* for the browser session cookie encryption  
  
 *for my app I used pwgen -c -n -s -B -v 32 1   

This project is not designed for production readiness, I took extra care of 
some aspects but it would need way more sanitizing and filtering for the input data than
I can provide in the time span given.  
-- 
Note to the jest job
: I am studying jest for three weeks now
and still find it impossible to figure out how
to chain the mock functions and if or if not I need to 
import/mock the embedded helper functions for fetchting
to and from my "API" Server.

Every example I find is only a primitive function set with
easy solvable testing which is simply not what I would need.

I find the amount of material and methods of jest are a complete
course in itself and shouldn't have been inserted as a "side note"
in the project outliner. 

