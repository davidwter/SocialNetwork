
This is a Showcase project, built upon Mean framework (MongoDB, Express, AngularJs, and NodeJs)

## Before You Begin 
Before you begin we recommend you read about the basic building blocks that assemble a MEAN.JS application: 
* MongoDB - Go through [MongoDB Official Website](http://mongodb.org/) and proceed to their [Official Manual](http://docs.mongodb.org/manual/), which should help you understand NoSQL and MongoDB better.
* Express - The best way to understand express is through its [Official Website](http://expressjs.com/), which has a [Getting Started](http://expressjs.com/starter/installing.html) guide, as well as an [ExpressJS Guide](http://expressjs.com/guide/error-handling.html) guide for general express topics. You can also go through this [StackOverflow Thread](http://stackoverflow.com/questions/8144214/learning-express-for-node-js) for more resources.
* AngularJS - Angular's [Official Website](http://angularjs.org/) is a great starting point. You can also use [Thinkster Popular Guide](http://www.thinkster.io/), and the [Egghead Videos](https://egghead.io/).
* Node.js - Start by going through [Node.js Official Website](http://nodejs.org/) and this [StackOverflow Thread](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js), which should get you going with the Node.js platform in no time.


## Prerequisites
Make sure you have installed all these prerequisites on your development machine.
* Node.js - [Download & Install Node.js](http://www.nodejs.org/download/) and the npm package manager, if you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages, in order to install it make sure you've installed Node.js and npm, then install bower globally using npm:

```
$ npm install -g bower
```

* Grunt - You're going to use the [Grunt Task Runner](http://gruntjs.com/) to automate your development process, in order to install it make sure you've installed Node.js and npm, then install grunt globally using npm:

```
$ sudo npm install -g grunt-cli
```

## Download Source
You have to  use Git to directly clone the  repository:
```
$ git clone https://github.com/davidwter/SocialNetwork.git SocialNetwork
```
This will clone the latest version of SocialNetwork repository to a **SocialNetwork** folder.



The first thing you should do is install the Node.js dependencies. The project comes pre-bundled with a package.json file that contains the list of modules you need to start the application, to learn more about the modules installed visit the NPM & Package.json section.

To install Node.js dependencies you're going to use npm , in the application folder run this in the command-line:

```
$ npm install
```

This command does a few things:
* First it will install the dependencies needed for the application to run.
* If you're running in a development environment, it will then also install development dependencies needed for testing and running your application.
* Finally, when the install process is over, npm will initiate a bower install command to install all the front-end modules needed for the application

## Running Your Application
After the install process is over, you'll be able to run your application using Grunt, just run grunt default task:

```
$ grunt
```

Your application should run on the 3000 port so in your browser just go to [http://localhost:3000](http://localhost:3000)
                            
That's it! your application should be running by now

##Code Architecture
Main files to give a look at are : 
* SocialNetwork/app/models/user.server.model.js : the model of the mongoDB database

Views : 
* SocialNetwork/app/views/layout.server.view.html : main model for the html rendering of this single-page application
* SocialNetwork/public/modules/core/views/social_feed.html : main page for social feed section
* SocialNetwork/public/modules/core/views/contacts.html : main page for friends section
* SocialNetwork/public/modules/users/views/authentication/signin.client.view.html : main page for signin process
* SocialNetwork/public/modules/users/views/authentication/signup.client.view.html : main page for signup process

Controllers : 
* SocialNetwork/app/controllers/users/users.authentication.server.controller.js : main controller for users authentication on server
* SocialNetwork/app/controllers/friends.server.controller.js : controller for friends handling (server)
* SocialNetwork/app/controllers/status.server.controller.js : controller for status handling (server)
* SocialNetwork/public/modules/core/controllers/home.client.controller.js : controller for client side interactions
* SocialNetwork/public/modules/users/controllers/authentication.client.controller.js : controller for authentication services (client)

Routes : 
* SocialNetwork/public/modules/core/config/core.client.routes.js : routing, client side
* SocialNetwork/app/routes/core.server.routes.js : routing, server side (API)

# TO DO
* Add friendship functionnality (restrain status view to friends only)
* Set new service getStatus, to be able to refresh status from comment controller (getStatus is not on Comment controller, hence cannot be called when creating comment)


## License
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
