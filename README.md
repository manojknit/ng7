# Ng7

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Terminal commands used
```$
ng new my-dream-app
ng serve –open
ng add @angular/material
ng g c components/list     – list component
ng g c components/create
ng g c components/edit

open in visual studio
cd ..
code .

ng generate component nav
ng g c about
ng g c contact
ng g c home 

// generate service – allow to define code that is accessible across components
ng g s data

Form
1.	Reactive Form approach – provide more control and can be unit tested
2.	Template base

Deploy
ng build --prod

run from dist folder
cd ng7
http-server -o
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
