   
   
   // this code should be in the server 
   // and this server must be replace with the project server i mean the server which include all other pages
   
    const dotenv    = require('dotenv');    
    const express  = require('express');
    const path     = require('path');
    const cors     = require('cors');
    const mongoose = require('mongoose');
    
    dotenv.config({path: './.env'});
    // import the finance 
    const finance = require('./Finance/finance');

    const server= express();
    server.use(cors());
    server.use(express.json());
    // updated  
    server.use(finance);
    mongoose.connect(process.env.database).then(()=>console.log('data base connected'));
    const port= process.env.PORT;
    server.listen(port,()=>{   
        console.log(`app running on port ${port} ...`); 
    });