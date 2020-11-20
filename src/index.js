const jsonServer = require("json-server");
//const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("bd.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

//app.use(cors({origin: '*'}));
//app.use(cors({origin: 'https://kuepj-3000.sse.codesandbox.io'}));
 
var port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log("JSON Server ejecutandose");
});