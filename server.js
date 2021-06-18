const express=require('express');
const mongoose=require('mongoose');
const sessions=require('express-session')
const mongoStore=require('connect-mongo')
 const app=express();
 //Connection to the database
 mongoose.connect('mongodb://localhost/testdb',{useNewUrlParser:true,useUnifiedTopology: true}).then(()=>{
     console.log('connected to the database')
 }).catch((err)=>{
     console.log(err)
 })
 //Creating database to store the cookies
 const storage=mongoStore.create({
     mongoUrl:'mongodb://localhost/testdb',

 })
 //Creating  the sessions
 app.use(sessions({
     secret:'jasjot',
     resave:false,
     saveUninitialized:true,
     store:storage,
     cookie:{
         maxAge:3600000
     }
 }))

 app.get('/',(req,res)=>{
     res.send('homepage')
 })
 app.listen(5000,()=>{
     console.log('server is up and running')
 })