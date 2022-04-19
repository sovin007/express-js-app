const express = require("express");
const app = express();
const things = require('./things.js');

app.use('/things',things);

/* app.get('/',(req,res)=>{
    res.send("this is second home page");
 });

app.get('/',(req,res)=>{
   res.send("this is home page");
});
*/



app.listen(5000);