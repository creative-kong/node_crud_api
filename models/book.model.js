const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'pleace add book name.']
    },
    description : {
        type : String,
        required : [true, 'pleace add description.']
    },
    price : {
        type : Number,
        required : [true, 'pleace add price']
    }
})

module.exports = mongoose.model('Book', BookSchema)