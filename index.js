const express = require('express');
const userRouter = require('./router/user');

// const { connectToMongodb } = require('./connect');

const app = express();
const port = 8004;

// connectToMongodb("");

app.use(express.json());

app.use('/user',userRouter);

app.listen(port,()=>{
    console.log(`server is hare at ${port}`);
})
