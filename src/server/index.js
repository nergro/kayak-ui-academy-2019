import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import express from 'express';

import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import createStore from '../services/store';

import App from '../components/app';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('dist'));

const AppWithRedux = () => (
  <Provider store={createStore()}>
    <StaticRouter>
      <App />
    </StaticRouter>
  </Provider>
);

app.get('*', (req, res) => {
  // then use `assetsByChunkName` for server-sider rendering
  // For example, if you have only one main chunk:
  res.send(`
  <html>
    <head>
      <title>Kayak UI Academy</title>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <div id="root">${renderToStaticMarkup(<AppWithRedux />)}</div>
      <script src="/index.js"></script>
    </body>
  </html>
    `);
});

app.listen(port, () => console.log('Production server is running on!'));
