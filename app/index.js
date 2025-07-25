const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js over HTTPS on port 443!');
});

const PORT = 443;
const options = {
  key: fs.readFileSync('cert/server.key'),
  cert: fs.readFileSync('cert/server.crt')
};

https.createServer(options, app).listen(PORT, () => {
  console.log(`HTTPS server listening on port ${PORT}`);
});
