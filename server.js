const http = require("http");
const app = require("./tamilnadu-case-node/app");
const server = http.createServer(app);
server.listen(process.env.PORT || 4000);
