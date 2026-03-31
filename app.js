const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from Azure VM - Rishabh 🚀");
}).listen(3000);
