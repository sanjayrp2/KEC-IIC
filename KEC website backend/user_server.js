const {connectdb} = require('./admin_connect');
const express = require('express');

const admin = require('./controller/admin_controller')
const user= require('./controller/user_controller')
const contest=require('./controller/contest_controller')

const cors = require('cors');
const app= express();
const port= 8080;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());


connectdb()
    .then(()=>{console.log('db connected')})
    .catch((err)=>{console.log(err)});  

app.post('/user/phone_num',user.getone);
app.post('/phone_num/',user.insertdata);

app.get('/api/contest/name',contest.getone);
app.post('/api/contest',contest.insertdata);
app.delete('/api/contest/name',contest.delete);

app.get('/admin/phone_num/:pn',admin.getone);
app.post('/phone_num/',admin.insertdata);

app.listen(port,()=>{console.log("Listening at the port "+port)})
