const express = require('express');
const app = express();
const port = 8000;

app.get('/',(reg,res)=>{
    res.send('Halloooo aku express');
})

app.listen(port,()=> console.log(`berhasil di jalankan $(port)`))