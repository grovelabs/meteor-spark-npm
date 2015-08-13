Package.describe({
  name: 'grove:spark',
  summary: 'DEPRECATED - Spark\'s npm package',
  version: '1.1.2',
  git: 'https://github.com/grovelabs/meteor-spark-npm.git'
});

Npm.depends({
  "spark" : "0.2.4"
});

Package.onUse(function(api) {
  api.addFiles('grove:spark-npm.js', 'server');
  api.export('Spark', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('grove:spark');
  // TODO write tests!
});
