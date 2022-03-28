const app = require("./index");

const connect = require("./src/configs/db");

app.listed(5000,async()=>{
    try{
        await connect();
    }catch(err){
        console.log(err);
    }
    console.log("listening on port 5000");
});