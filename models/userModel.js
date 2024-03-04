import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    StudentNumber:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    fname:{
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    PhoneNo:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    program:{
        type: String,
        required: true
    }

   
})


export default mongoose.model("User", userSchema);