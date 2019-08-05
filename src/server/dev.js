import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import isObject from 'is-object';
import 'ignore-styles';

import devConfig from '../../webpack.dev.config';

function normalizeAssets(assets) {
  if (isObject(assets)) {
    return Object.values(assets);
  }
  return Array.isArray(assets) ? assets : [assets];
}

const compiler = webpack(devConfig);
const app = express();

app.use(
  devMiddleware(compiler, {
    serverSideRender: true
  })
);

app.use(
  hotMiddleware(compiler, {
    serverSideRender: true
  })
);

app.get('*', (req, res) => {
  const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName;
  const fs = res.locals.fs;
  const outputPath = res.locals.webpackStats.toJson().outputPath;
  res.send(`
<html>
  <head>
    <title>Kayak UI Academy</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <style>
		${normalizeAssets(assetsByChunkName.main)
      .filter(path => path.endsWith('.css'))
      .map(path => fs.readFileSync(`${outputPath}/${path}`))
      .join('\n')}
      ${normalizeAssets(assetsByChunkName.main)
        .filter(path => path.endsWith('.scss'))
        .map(path => fs.readFileSync(`${outputPath}/${path}`))
        .join('\n')}
    </style>
  </head>
  <body>
    <div id="root"></div>
		${normalizeAssets(assetsByChunkName.main)
      .filter(path => path.endsWith('.js'))
      .map(path => `<script src="${path}"></script>`)
      .join('\n')}
  </body>
</html>
  `);
});

app.listen(3000, () => console.log('Development server is running on!'));
