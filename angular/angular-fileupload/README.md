# Angular Image upload example

Angular app that demonstrates uploading of images to a nodejs server connected to a MongoDb database. 
This package contains both the server and the client.

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

To build the client alone, run
```
npm run build
```
To start the client without server (losing access to the API and database) run
```
cd client & ng s
```
