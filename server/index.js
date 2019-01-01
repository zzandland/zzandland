import path from 'path';

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchPath, StaticRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from '../client/components/App';
import Blog from '../client/components/Blog/Index';
import rootReducer from '../client/reducers';

import routes from '../client/routes';

const app = express();
const PORT = 80;

app.use('/static', express.static(path.resolve(__dirname + '../../public')));

const handleRender = (req, res) => {
  const store = createStore(rootReducer);

  const activeRoute = routes.find(route => matchPath(req.url, route)) || {}

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const preloadedState = store.getState();

  res.send(renderFullPage(html, preloadedState));
}


const renderFullPage = (html, preloadedState) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Fly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preload" href="https://fonts.googleapis.com/css?family=Lato:400,700,900" as="style" onload="this.rel='stylesheet'">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
        <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" as="style" onload="this.rel='stylesheet'">
        <link rel="preload" type="text/css" href="/static/css/style.css" as="style" onload="this.rel='stylesheet'" />
        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <script defer >
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script defer src="/static/dist/bundle.js"></script>
        <style>
          #loader-wrapper {
            visibility: hidden;
          }
        </style>
      </head>

      <body>
        <div id="container">${html}</div>
      </body>
    </html>
  ` 
}

app.use(handleRender);

app.listen(80, () => {
  console.log(`server initiated at: ${PORT}`);
});
