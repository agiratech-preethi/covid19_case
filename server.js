const http = require("http");
const app = require("./tamilnadu-case-node/app");
const server = http.createServer(app);
server.listen(4000);
