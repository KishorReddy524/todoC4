const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema(
    {
        title: {type:String,required:true},
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true,
        }
      
    },
    {
        varsionKey:false,
        timestamps:true,
    }
);

const User = mongoose.model("user",todoSchema);

model.exports= User;