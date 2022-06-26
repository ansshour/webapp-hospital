import mongoose from "mongoose";


const Reviews = new mongoose.Schema({
    name: { type: String },
    number: { type: String },
    mail: { type: String },
    review: { type: String },
})


export default mongoose.model("Reviews", Reviews)