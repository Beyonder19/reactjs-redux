const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lateness: {
        type: Number,
        required: true
    }, 
    absence: {
        type: Number,
        required: true,
        
    },
    vocation: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Employees',alienSchema)