'use strict'

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());
const axios = require('axios')
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const MONGO_DB_URL = process.env.MONGO_DB_URL
const {usercontroolers ,createBook ,deleteBook} = require('./controllers/user.cont')
// const {seedfunction} = require('./module/User')

mongoose.connect(`${MONGO_DB_URL}/book`, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(express.json());

// app.get('/app' , (req,res)=>{
//     seedfunction()
//     console.log(seedfunction())
//     res.json("good")
// } )
app.get('/book',usercontroolers);
app.post('/create-book' , createBook)
app.delete('/delete-book/:id' , deleteBook)
app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
})
