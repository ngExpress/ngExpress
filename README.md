ngExpress
=========

## Prerequisites

### [Git](http://git-scm.com/)

> Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

```
git --version
```

### [Node.js](http://nodejs.org/)

> Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

```
node --version
```

### [Grunt](http://gruntjs.com/)

> Grunt is a JavaScript task runner that help you automate repetitive tasks like minification, compilation, unit testing, linting, etc. After you've configured it, a task runner can do most of that mundane work for you—and your team—with basically zero effort.

```
npm install grunt-cli -g
```

To learn more, read the [getting started](http://gruntjs.com/getting-started) guide

### [Bower](http://bower.io/)

> Bower is a package manager for the web. It offers a generic, unopinionated solution to the problem of front-end package management, while exposing the package dependency model via an API that can be consumed by a more opinionated build stack. There are no system wide dependencies, no dependencies are shared between different apps, and the dependency tree is flat.

```
npm install bower -g
```

## Getting started

### Clone the repository

```
git clone https://github.com/ngExpress/ngExpress.git
```

### Install dependencies

#### Bower

```
bower install
```

#### NPM

```
npm install
```

## Build, run and deploy

To check if all the dependencies installed successfully, run a local server using the following:

```
grunt server
```

This should build your project, start a node.js instance and open your browser at [http://localhost:9000/](http://localhost:9000/).