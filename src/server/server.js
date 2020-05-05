import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import MainPage from '../components/MainPage';

const server = express();
server.use(express.static('dist'));

server.get('/', (req, res) => {
  const initialMarkup = ReactDOMServer.renderToString(<MainPage />);

  res.send(`
    <html>
      <head>
        <title>Freedom in Christ Church</title>
      </head>
      <body>
        <div id="mountNode">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `)
});

server.listen(4242, () => console.log('Server is running...'));