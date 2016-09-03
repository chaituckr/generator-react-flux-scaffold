# generator-react-flux-scaffold [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Scaffolding for project with react, fulx and glup.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-react-flux-scaffold using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-react-flux-scaffold
```

Then generate your new project:

```bash
yo react-flux-scaffold
```

Then start your project:

```bash
gulp
```

## Folder Structure

  * This generator gives you a folder structure as below:
              
            -- docs                               (To store the application docs if any)
            -- src                                (Main Application Folder)
                -- actions                        (All the action files)
                -- components                     (All React Components)
                    -- HomeComponent              (Folder for each component)
                        -- home.css               (Css file for Home component)
                        -- Home.js                (Component file)
                        -- package.json           (this will have version of Component, this is different from Project package.json)
                -- constants                      (all constants for our application)
                -- dispatcher                     (Flux dispather that dispatches our actions)
                -- images                         (images req for our app)
                -- routes                         (This will have routes to our components, we are using "react-router")
                -- services                       (Here we can do ajax/service calls)
                -- stores                         (Flux stores for our app)
                -- utils                          (Anything else like properties files)
                -- index.html                     (Only HTML page for our app)
                -- main.js                        (starting point of our app)
            -- .bablerc
            -- .gitignore
            -- gulpfile.js
            -- package.json


## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Chaitanya]()


[npm-image]: https://badge.fury.io/js/generator-react-flux-scaffold.svg
[npm-url]: https://npmjs.org/package/generator-react-flux-scaffold
[travis-image]: https://travis-ci.org//generator-react-flux-scaffold.svg?branch=master
[travis-url]: https://travis-ci.org//generator-react-flux-scaffold
[daviddm-image]: https://david-dm.org//generator-react-flux-scaffold.svg?theme=shields.io
[daviddm-url]: https://david-dm.org//generator-react-flux-scaffold
