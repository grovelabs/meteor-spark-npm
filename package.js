Package.describe({
  name: 'grove:spark',
  summary: 'Spark\'s wrapper package for their API',
  version: '0.2.4',
  git: 'https://github.com/grovelabs/meteor-spark.git'
});

Package.onUse(function(api) {
  api.addFiles('spark.min.js');
  api.export('spark');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('spark.min.js');
  // TODO write tests!
});
