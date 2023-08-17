let dotenv = require('dotenv').config()
const uuid = require('uuid');
const express = require('express');
const bodyparse = require('body-parser');
const cors = require('cors'); // Import the cors package
const app = express()
app.use(bodyparse.json())
app.use(cors()); 


// for user
const {
    userget,
    usergetById,
    userdelete,
    userpost,
    userput
} = require('./controller/usercontroller');

// for rcform
const {
    rcpost,
    rcget
} = require('./controller/rcForm');

app.get("/", userget);
app.get("/user/:_id",usergetById);
app.post("/", userpost);
app.put("/:_id", userput);
app.delete("/:_id", userdelete);


app.post("/rc",rcpost);
app.get("/rc",rcget);
// mongodb connection

const mongoose = require('mongoose');
const mongoConnectionUrl = process.env.mongoUrl;

console.log('mongourl', mongoConnectionUrl);
mongoose.connect(mongoConnectionUrl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then((res) => {
    console.log("Connected");
}).catch((err) => {
    console.log("mongo not connected", err);
})



// for server 
app.listen(3005, (error) => {
    if (!error) {
        console.log("Server Run")
    }
    else {
        console.log(error);
    }
})