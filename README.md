# Webpack Boilerplate

Webpack is a module bundler for JavaScript files.

This repository is a Webpack boilerplate for my new projects. It's designed to make environment-specific configuration to build up a web app.

This Webpack boilerplate includes the following libs:

* jQuery
* font-awesome
* bootstrap (not added)

## Requirements

Is only needs **node.js** v6 pre-installed.

## Features and plugins

- Babel package allows transpiling of JavaScript files
- Development and production
    - Development: enables Webpack's dev server
    - Production: minification and css and html extraction
- HTML Webpack Plugin
- Sass loader
- Extract Text Plugin
- Hot Modules Replacement

## How to use

1. Clone this repo
2. Install the dependencies
  `npm install`
3. Launch the boilerplate app
  `npm start`
4. A new browser tab should be opening on [http://localhost:8081/](http://localhost:8081/), with livereload and autocompile
5. Don't horget to update `package.json` with your `name`, `version`, `description`, `author`, `license` for your project.

 To build the app for production run
  `npm run prod`
