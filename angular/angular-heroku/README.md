# Angular Heroku example

Example project that illustrates how to prepare a generated Angular app and deploy it to [Heroku](http://www.heroku.com). 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

To prepare your app for Heroku, you need to add some new files and settings, and alter some existing ones. To do so, follow these steps.

## Required
- [Nodejs](https://nodejs.org) installed
- [Angular CLI](https://github.com/angular/angular-cli) installed
- [Heroku CLI](http://www.heroku.com) installed




## Update package.json
Open `package.json` and update the `scripts` section with the following command:
```
    "postinstall": "ng build --prod ",
```

Move the following packages from `devDependencies` into `dependencies`
```
"@angular/cli": "1.0.0",
"@angular/compiler-cli": "^4.0.0",
"typescript": "~2.2.0",
```


## Install Express, Path and Compression via npm

```
npm install express path compression --save
```

## Add a `server.js` file

Add a [server.js](./server.js) file. 




## Build your app in production mode

Run `ng build --prod --aot` to build the project. 

> The build artifacts will be stored in the `dist/{appname}` directory. 
> Verify that this directory exists! 

> The `--prod` flag triggers a production build. The `--aot` flag triggers a ahead-of-time compilation build.

## Verify that your app runs in production mode on localhost
```
ng build --prod --aot
node server.js
```

## Create a new app on Heroku

- Go to [Heroku](http://www.heroku.com) and create a new app. 
- On the Heroku dashboard, go to 'Deploy'. 
- Follow the steps under 'Deploy using Heroku Git'.


## Push your project to Heroku Git
```
git commit -am "Your comment here"
git push heroku master
```
If all is well, your app is available on Heroku.

To inspect the logging on Heroku, type
```
heroku logs --tail
```


## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
