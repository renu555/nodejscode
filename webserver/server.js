const express =require('express');
const bodyParser =require('body-parser');
const app = express();
app.use("/hello",bodyParser.json());
app.use(express.static(__dirname + '/public'));
//middleware 
//app.get("/", (req,res)=>{
  //  res.send("Hello Express");
//})

app.post("/hello",(req,res)=>{
let body = req.body;
body.message ="Hello"+ body.name;
res.json(body);

})
app.listen(3000,()=>{
    console.log("Listening on port 3000");
})