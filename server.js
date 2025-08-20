// const https = require('https'); // ❌ Chưa cần dùng HTTPS
const http = require("http"); // ✅ Dùng HTTP tạm thời
const fs = require("fs");
const next = require("next");

const app = next({ dev: false });
const handle = app.getRequestHandler();

// const sslOptions = {
//   key: fs.readFileSync('./ssl/private.key'),
//   cert: fs.readFileSync('./ssl/certificate.crt')
// };

app.prepare().then(() => {
  // https.createServer(sslOptions, (req, res) => {
  //   handle(req, res);
  // }).listen(443, () => {
  //   console.log('✅ Server running at https://yourdomain.com');
  // });

  // ✅ Dùng HTTP tạm thời trên port 3000
  http
    .createServer((req, res) => {
      handle(req, res);
    })
    .listen(80, () => { });
});
