// const mongoose = require('mongoose');
const express = require('express');
// const dotenv = require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/', (req, res)=>{
    res.json({message: "Your deployed your file Successfully"});
})

app.get('/add', (req, res)=>{
   res.json({msg: "Thank you for deployed me...!"});
})

app.listen(3005, ()=>{
    console.log('Server is running on 3005')
})

// mongoose.connect('mongodb://127.0.0.1:27017/mydb')
//         .then(()=>console.log('Mongodb connected successfully'))
//         .catch((err)=>console.log(`Have some connection issue ${err}`))