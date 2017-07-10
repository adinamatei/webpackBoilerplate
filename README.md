# Webpack Boilerplate

This is a simple boilerplate to get up and running with a Webpack based build system, designed to make environment-specific configuration as easy as possible, in order to quickly build up a website.

This boilerplate is preconfigured whit a development and production configuration and you can add more as needed.

## Requirements

Is only need **node.js** pre-installed.

## Features

- Babel-loader to transform ES6 for all `.js`
- Development and production
    - Development: enables Webpack's dev server
    - Production: minification and css extraction
- Sass loader
- Easy enviroment configuration on a per-webpack-entry-point basis
- Pre-configured NPM scripts for common tasks


## Setup

Install dependencies
`npm install`

## Development

Run the local webpack-dev-server with livereload and autocompile on [http://http://localhost:8081/](http://localhost:8081/)
`npm run dev`

