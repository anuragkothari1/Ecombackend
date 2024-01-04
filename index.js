const express = require ("express");
const app =express();
const dotenv= require("dotenv");
dotenv.config();
const product=require("./routes/productRoutes");
app.use(express.json());
const mongoose= require("mongoose");

mongoose.connect(process.env.MONGOURL).then((res)=>{
    console.log("mongodb Connected")
}).catch((e)=>{
    console.log(e);
})

app.use("/api/v1",product);

app.listen(process.env.PORT,()=>{
    console.log("server is running ");
})