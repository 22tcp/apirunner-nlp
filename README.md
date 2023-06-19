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
Note to jest testing demands

Run tests with:  
npm test -- --silent=false  

to get some additional data into the console  

! Working use cases should be part of the course material, not become injected into a project like a side note !

The documentation is not an answer to any actual question regarding more complex code the best information came from the udacity GPT, though,
which I now will try to use and test my embedded fetch calls.
Yet, not helpful or verbose enough to explain where in the tests things have to be placed to work. 
I have refactored thrice, tried __mocks__ folders etc. to NO avail.
Jest keeps on not finding things, I try to jsdom the central function and mock my minimalist fetch API, which is a headache. I have put three weeks (!) into this,  every night and beyond midnight.
This is in not a reasonable effort / outcome relation, any documentation always revolves around  low complexity function setups,
nowhere is an actual website frontend test explained. 
I looked into other frontend testing but I always find "easy" function testing.

And the docs, where it would have counted, omitted any userspace use case and concentrated on mocking node_module functions, I am biting in my table here.  
How can there be so much documentation without applicability?  
Finally I had a breakthrough. By doing things that nobody did,  
like it was implied that jest-fetch-mock just had to be initialised so-and-so  
and in _truth_ I had to use it to mock the global.fetch - which someone else did    but not in a webpack project. Meaning a dumb global.fetch = fetchMock  
did wonders to my tests, see queryWeb.test.js  
Then there is documentation who try to use their own jest config files to globally enable some settings which horribly errors when following the official jest-fetch-mock initialisation tutorial in the github readme of the project. (Which has precedence in my eyes)
 The init removes any extra files mentioned in package.json and then installs a global jest.config.js with a single huge module.exports config in it.
reintroducing the config file ends with a "no double files please" error message from jest while the configuration implies an array for the file list!?
The list of discrepancies between dozens of tutorials I checked (written ones and videos) and working configurations is discouraging.



