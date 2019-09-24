const express = require('express');
const app = express();
const port = 8000;

app.get('/',(reg,res)=>{
    res.send('Halloooo aku express');
});

app.get('/login',(reg,res)=>{
    res.send('LOGIN!!');
});
app.post('/resgister',(reg,res)=>{
    res.send('Request POST for register')
});
app.put('/puts',(reg,res)=>{
    res.send('Request Put for put')
});
app.delete('/hapus',(reg,res)=>{
    res.send('Delete  for is')
});


app.listen(port,()=> console.log(`berhasil di jalankan $(port)`))