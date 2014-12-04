Package.describe({
  name: 'grove:spark',
  summary: 'Spark\'s npm package',
  version: '1.0.0',
  git: 'https://github.com/grovelabs/meteor-spark-npm.git'
});

Npm.depends({
  "spark" : "0.2.3"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('grove:spark-npm.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('grove:spark');
  // TODO write tests!
});
