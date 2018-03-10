const express = require("express");
const app = express();

app.get("/",  (req, res)=>{
  
  res.writeHead(200, {"Connection-Type":"application/json"});
const ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
  
  const data = {
  ip: ip,
  language:req.headers["accept-language"].split(',')[0],
  software:req.headers["user-agent"].split("(")[1].split(")")[0]
  };
  res.end(JSON.stringify(data));
  
});

app.listen(process.env.PORT)