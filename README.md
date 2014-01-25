ngExpress
=========

## Prerequisites

### [Git](http://git-scm.com/)

> Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

**Git version:**

```
git --version
```

### [Node.js](http://nodejs.org/)

> Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

**Node.js version:**

```
node --version
```

### [Grunt](http://gruntjs.com/)

> Grunt is a JavaScript task runner that help you automate repetitive tasks like minification, compilation, unit testing, linting, etc. After you've configured it, a task runner can do most of that mundane work for you—and your team—with basically zero effort.

**Install grunt:**

```
npm install grunt-cli -g
```

**Grunt version:**

```
grunt --version
```

To learn more, read the [getting started](http://gruntjs.com/getting-started) guide

### [Bower](http://bower.io/)

> Bower is a package manager for the web. It offers a generic, unopinionated solution to the problem of front-end package management, while exposing the package dependency model via an API that can be consumed by a more opinionated build stack. There are no system wide dependencies, no dependencies are shared between different apps, and the dependency tree is flat.

**Install bower:**

```
npm install bower -g
```

**Bower version:**

```
bower --version
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

Check if all the dependencies installed successfully by running a local server.

```
grunt server
```

This should build your project, start a node.js instance and open your browser at [http://localhost:9000/](http://localhost:9000/).

### Build

Next, build ngExpress (to prepare for deployment).

```
grunt build
```

This concatenate and minifies all javascript, css, etc. in a new folder.

To check if the build process was successful, navigate to the server folder and install all dependencies

```
npm install
```

Now, run the server in __production__ mode

```
node app.js
```

or if you need cluster support

```
node cluster.js
```