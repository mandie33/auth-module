require('dotenv').config();
const express =require('express');
const app= express();
const port=3000;
const mongoose=require('mongoose');
const bodyParser=require ('body-parser');
//BODY PARSER
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
//MONGOOSE create connection to DB
const connectionToDB=async()=>{
try{
await mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true ,useUnifiedTopology: true })
}
catch (error){
  console.log(`Oooupps there is this error ${error}`);
}
}
connectionToDB();

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connection to DB OKay")
});

//routes

const authRoute=require('./routes/Auth');
const { json } = require('body-parser');
app.use('/api/user',authRoute);

app.listen (port,()=>console.log(`server is running on port ${port}`))