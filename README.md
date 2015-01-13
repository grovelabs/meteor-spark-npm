# Spark
This Meteor package is a wrapper for the [Spark npm package](https://www.npmjs.org/package/spark), which is a Javascript library for interacting with the Spark HTTP API. Since this is a wrapper for the npm package it's strictly for use on the server. If you're interested in using Spark on the client, you want to use [grove:spark.js](https://github.com/grovelabs/meteor-spark.js)

Spark is a platform for building web-connected hardware. Read more about it at https://www.spark.io/


## Installation
````
$ meteor add grove:spark
````
This will expose the `Spark` variable to global scope on the server and client

## Usage
Before using the library, you need to login with your Spark Cloud credentials. This is as described [in their docs](http://docs.spark.io/javascript/#getting-started-logging-in). I recommend putting the login call into a `Meteor.startup` function. By doing it on startup you don't have to use a promise, i.e. `Spark.login().then(...`. Alternatively, you can set up a handler with `Spark.on('login', function( error, body) {...})`

### Logging in with an access token

````
Meteor.startup( function() {
  // Get your accessToken from your account, this is fake
  Spark.login({accessToken: 'ljewtlksdfljk23423klsdlksd'}); 
});
````

### Logging in with your email and password

````
Meteor.startup( function() {
  Spark.login({username: 'username@gmail.com', password: '12345'}); 
});
````

Then go to it! Read more about what you can do in the [docs](http://docs.spark.io/javascript)
