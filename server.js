const https = require('https');
const http = require("http");
const fs = require("fs");
const next = require("next");

const app = next({ dev: false });
const handle = app.getRequestHandler();

const sslOptions = {
   key: fs.readFileSync('./ssl/thientukiem.com.key'),
   cert: fs.readFileSync('./ssl/thientukiem.com.crt')
};

app.prepare().then(() => {
   https.createServer(sslOptions, (req, res) => {
      handle(req, res);
   }).listen(443, () => {
      console.log('✅ Server running at https://thientukiem.com:443');
   });

  // http
  //   .createServer((req, res) => {
  //     handle(req, res);
  //   })
  //   .listen(80, () => {});
});