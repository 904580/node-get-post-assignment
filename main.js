const express = require('express');
const app = express();
const BodyParser = require('body-parser');
app.use(BodyParser.urlencoded({
    extended:true

}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
    
});

app.post("/",(req,res)=>{
    var num1 = Number(req.body.num1);
    var num2= Number(req.body.num2);
    var result = num1 + num2;
    res.send("Addition - " + result);
});

app.listen(8000,()=>{
    console.log('listening the port on 8000');
});
