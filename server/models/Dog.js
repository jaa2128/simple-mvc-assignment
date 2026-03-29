// require Mongoose
const mongoose = require('mongoose');

// define variable to hold model
let DogModel;

// create the schema
const DogSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    breed:{
        type: String,
        required: true,
        trim: true, 
        unique: false,
    },
    age: {
        type: Number,
        min: 0,
        required: true,
    },
    createdDate: {
        type: Date, 
        default: Date.now,
    }
});

// create dog model based on the schema
DogModel = mongoose.model('Dog', DogSchema);

module.exports = DogModel;