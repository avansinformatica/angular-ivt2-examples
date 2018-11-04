# Angular Heroku example

Example project that illustrates how to prepare a generated Angular app and deploy it to [Heroku](http://www.heroku.com). 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

To prepare your app for Heroku, you need to add some new files and settings, and alter some existing ones. To do so, follow these steps.

## Add a server.js


## Update package.json


## Add express and path
```
npm install express path --save
```

## Create a new app on Heroku

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Add express and path
```
npm install express path --save
```

## Build your app in production mode

Run `ng build --prod --aot` to build the project. The build artifacts will be stored in the `dist/{appname}` directory. The `--prod` flag triggers a production build. The `--aot` flag triggers a ahead-of-time compilation build.

## Verify that your app runs on localhost
```
ng build --prod --aot
node server.js
```
## Push your project to Heroku Git
```
git commit -am "Your comment here"
git push heroku master
```

To inspect the logging on Heroku, type
```
heroku logs --tail
```


## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
