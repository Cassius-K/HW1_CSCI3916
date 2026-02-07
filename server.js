var Express = require('express');
var BodyParser = require('body-parser');
var Server = express();

Server.use(BodyParser.urlencoded({extended: false}));
Server.use(BodyParser.json());

Server.post("/", function(req, res){
  console.log("I got "+req.body.message);
  res.send(req.body.message);
});

Server.listen(3000, function(){
  console.log("Express Echo Server is listening on port 3000");
