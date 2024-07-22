## Install Project Dependencies

Please run `npm install` within this directory to install the relevant dependencies.

## Use of npx

We typically make use of [npx](https://www.npmjs.com/package/npx) to avoid globally installing the angular CLI project
globally as we work across a couple of versions internally.

If you install the Angular CLI globally, you can make use of `ng ...` commands, otherwise, switch out the `ng` below
for `npx ng ...` instead. Or alternatively, you should be able to run `npm run ng ...` instead.

## Access Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you
change any of the source files.

## Bootstrap

The project includes [bootstrap](https://getbootstrap.com/docs/5.3/getting-started/download/) added as a project
dependency. Use of it is optional, albeit some templating in the base app does make use of it.

## Code scaffolding

Run `ng generate component component-name` to generate a new component.
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Creation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
