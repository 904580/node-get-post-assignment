const express = require('express');
const app = express();
const path = require('path');
const dirPath= path.join(__dirname,'public');

app.get('/user',(req,res)=>{
    res.sendFile(`${dirPath}/User.html`);

});

app.listen(8080,()=>{
    console.log('listening the port on 8080');
});


