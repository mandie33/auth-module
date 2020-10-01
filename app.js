require('dotenv').config();
const express =require('express');
const app= express();
const port=3000;
const mongoose=require('mongoose');

//MONGOOSE create connection to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true ,useUnifiedTopology: true })

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connection to DB OKay")
});

//routes

const authRoute=require('./routes/Auth');
app.use('/api/user',authRoute);

app.listen (port,()=>console.log(`server is running on port ${port}`))