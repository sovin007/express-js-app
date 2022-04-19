const express = require('express');
const app = express();
const hbs = require('hbs');

hbs.registerPartials('./templates/partials');
app.set('view engine','hbs');

app.set('views','templates')

app.get('/',(req,res)=>{
   res.render('home');
});

app.get('/about',(req,res)=>{
  res.render('about',{
     name:"sovin"
  });
});

app.get('/param',(req,res)=>{
   res.send(req.query.name);
});

app.get("*",(req,res)=>{

   res.render('404');

});

//app.use("/",express.static('public'+'/index.html'));

/*app.get('/',(req,res)=>{

   res.write("<h1>sdsdsdsd</h1>");
   res.write("<h1>qwqwqw</h1>");
   
   res.send();

});
*/

/*app.get('/about',(req,res)=>{

   
 res.send({
    name:"sovin",
    address:"noida"     
 });


res.json({
   name:"sovin",
   address:"noida"
 });

 res.send();
});*/


app.listen(5000,()=>{ console.log("server started"); });