const express = require("express");
const app = express();

app.get('/:id/:postid',(req,res)=>{
  res.send(req.params.id + req.params.postid);
});


app.get('*',(req,res)=>{
   res.send("this is 404 page");
});

app.listen(5000,()=>{
    console.log("server started");
});