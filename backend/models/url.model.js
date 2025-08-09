import mongoose from "mongoose";
import shortid from 'shortid';
const urlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        required: true,
    },
    shortCode: {
        type: String,
        required: true,
        unique: true,
        default: shortid.generate,
    },
    visited:{
        type:Number,
        default:0,
    },
});

const Url = mongoose.model('Url', urlSchema);
export default Url;