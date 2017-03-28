var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var collections     = require('metalsmith-collections');
var layouts     = require('metalsmith-layouts');
var permalinks     = require('metalsmith-permalinks');
var debug = require('metalsmith-debug');

Metalsmith(__dirname)
  .metadata({
    title: "ZL",
    description: "Desc",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/"
  })
  .source('./src')
  .destination('./_build')
  .clean(true)
  .use(collections({
	Pens: {
		pattern: '?**/index.md'
	  }
  }))
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    engine: 'handlebars',
	default: 'layout.html'
  }))
  .use(debug())
  .build(function(err, files) {
    if (err) { throw err; }
  });