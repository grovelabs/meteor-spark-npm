# Deprecated!
This package has been deprecated in favor of using a local package or [`meteorhacks:npm`](https://github.com/meteorhacks/npm) with the [official Spark npm package](https://www.npmjs.com/package/spark). Here's how you would do it with a local package in your application:

```javascript
// packages/npm-deps/package.js
Package.onUse(function(api) {
  Npm.depends({
    spark: '1.0.0',
  });
  
  api.addFiles([
    'npm.js',
  ], 'server');

  api.export([
    'Spark',
  ], 'server');
});

```

```js
// package/npm-deps/npm.js
Spark = Npm.require('spark');
```

```javascript
// server/main.js
Meteor.startup(function(){
  Spark.login({
    username: process.env.SPARK_USERNAME,
    password: process.env.SPARK_PASSWORD,
  })
  .then( function(token) {
    console.log('Logged into Spark:', token);
  })
  .catch( function(err) {
    console.error('Login to Spark failed:', err);
  });
});

```

Note that if you want to use this on the client, you'll need to provide the client with login information. Do so at your own risk, or figure out how to use access tokens.