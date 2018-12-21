# Angular Image upload example

Angular app that demonstrates uploading of images to a nodejs server connected to a MongoDb database. 
The images are stored as base64 strings in the database.

As an example, this package hosts both the server and the client.

![screen print](https://github.com/avansinformatica/angular-ivt2-examples/blob/master/angular/angular-fileupload/doc/imageupload.png)

A live demo is available at [Heroku](https://angular-imageupload.herokuapp.com). 

## Requirements
- nodejs and npm
- mongodb installed, and mongod running

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
