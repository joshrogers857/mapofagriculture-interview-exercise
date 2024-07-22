# Map of Agriculture Interview Test

This repository provides a full stack interview test covering Angular and Laravel. Details can be found below
under [The Exercise](#exercise)

The project is intended to give us a better understanding of your abilities with these technologies, and
your approaches to completing the activities outlined.

Whilst the project is tailored to those with existing experience with both technologies, it should still be approachable
to those who have experience with similar tech stacks.

---

## Background

### The Project

The project is based on a simple "student grading system", with some activities outlined further below.

This project contains the following sub-directories and associated projects:

- `/app/`
    - An Angular (v16) Application
    - It provide a wireframe angular project with routing and (component) page ready
      to list students
- `/api/`
    - A Laravel (v10) Web API
    - It provides an API endpoint able to serve student details

Each of the above is stubbed out and provides some basic functionality.

Some technologies that we use have been deliberately left out to make this as accessible as possible. We have also aimed
to leave as much of the code as it might be found "out of the box" when stubbing new applications.

### Assumptions

You should be able to complete this test on your choice of machine, a summary of system requirements
are [noted below](#system-requirements).

It's assumed applicants will have pre-existing experience working with Angular and Laravel. Therefore we assume you
should be able to get both applications running locally.

However, some guidance is provided within the respective `/api/README.md` and `/app/README.md` so please review these
and checkout the [useful links](#useful-links) below for more information.

### System Requirements

In order to complete this test you will need the following tools:

- A code editor (e.g. PHPStorm, Visual Studio Code)
- Terminal to run shell commands
- For the API, either
    - (recommended) use of [Docker Desktop](https://www.docker.com/products/docker-desktop/) to make use
      of [Laravel Sail](https://laravel.com/docs/10.x/sail); OR
    - locally installed and configured `php`, `mysql` & `composer`; OR
    - use of one of the other laravel local development environments (
      e.g. [Herd](https://herd.laravel.com/), [Homestead](https://laravel.com/docs/10.x/homestead))
- For the Angular web app
    - `npm` to run `npm ng serve`
    - and we recommend `npx` so you do not require a global install of the angular-cli project

---

## Exercise

### Your Details

Please enter/replace your details below.

| What        | Value                     |
|-------------|---------------------------|
| Name        | Joshua Rogers             |
| Email       | joshuarogers857@gmail.com |
| Date        | 2024-07-22                |
| Start Time  | 15:05                     |
| Finish Time | 00:00                     |

### Instructions

We ask that you spend no more than two hours to complete this exercise.

Before you begin, please take a copy of this repository, that you can share with us via your preferred source control
platform (e.g. BitBucket, GitHub).

> Please ensure that you update your details, and record your start and finish time above within this README.md file.
>
> As you complete each item in the list below, please ensure that you mark it off by changing the `[]` to a `[x]`.
>
> Please ensure you add a commit after each step is completed.

**Frontend Activities**

- [x] Update `app/src/app/service/students.service.ts` to return 3 students from `getStudents`
- [x] Update the `StudentsComponent` to show the resulting list of students from the `StudentsService` and list the
  students in the table provided
- [x] Add a column to display the student grades. Style the display of the grades so that they show a dynamic colour
  based on the following rules:
    - Green: average grade greater than 80%
    - Orange: average grade less than 80% and greater than 50%
    - Red: average grade less than 50%

**Backend Interaction**

- [ ] Update `StudentsService` to pull students from the API (this should be available
  via `http://127.0.0.1:8000/api/students/`)
- [ ] Allow a student to be selected from the list, and display their full details (on the existing page, or a new page
  inc. `id` and `email`)

**Extras for if you have time:**

- [ ] Update the API to support searching of students; allowing partial matches on first_name OR last_name
- [ ] Add a search component to the app, above the table, allowing the students to be filtered using the new search
  capability

---

### Useful Links

- [Angular Local Dev Environment Setup Guide](https://angular.io/guide/setup-local)
- [Laravel Getting Started Guide](https://laravel.com/docs/10.x/installation)
- [Laravel Sail Guide](https://laravel.com/docs/10.x/sail)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [PHP Composer Getting Started Guide](https://getcomposer.org/doc/00-intro.md)
