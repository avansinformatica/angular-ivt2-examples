# Angular Image upload example

Angular app that demonstrates uploading of images to a nodejs server connected to a MongoDb database. 
The images are stored as base64 strings in the database.

As an example, this package hosts both the server and the client.

![screen print](https://github.com/avansinformatica/angular-ivt2-examples/blob/master/angular/angular-fileupload/doc/imageupload.png)

A live demo is available at [Heroku](https://angular-imageupload.herokuapp.com). 

## Requirements
- nodejs and npm
- mongodb installed, and mongod running

## Note
In this example, the frontend app is hosted by the same server that hosts the api. While this may seem easy, since we do not need to have a separate server running, during development this can be annoying. The server uses the production version
of the app, forcing it to be fully rebuilt every time you change the code. You lose the live update functions that `ng serve` offer. This may be a good reason to have two separate projects, one for the frontend app, and a separate for the server. This problem may be solved by using a build tool like Gulp.

## Usage
Fork this repo and clone your copy onto your local machine. 
Then run
```
npm install
npm start
```
This builds the Angular client and serves it via the nodejs server. The server also hosts the API.
Both the app and the server run on [http://localhost:4200](http://localhost:4200). The server api is available at [http://localhost:4200/api](http://localhost:4200/api).

To build the client alone, run
```
npm run build
```
To start the client without server (losing access to the API and database) run
```
cd client & ng s
```
