const Book = require('../models/book.model')

const getBooks = async(req, res) => {
    try{
        const books = await Book.find({})
        res.status(200).json({
            data : books,
            success : true,
            message : 'successfully.'
        })
    } catch (err) {
        res.status(500).json({
            data : [],
            success : false,
            message : err.message
        })
    }
}

const getBook = async(req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        if(!book) {
            return res.status(400).json({
                data : [],
                success : false,
                message : 'data not found.'
            })
        }
        res.status(200).json({
            data : book,
            success : true,
            message : 'successfully.'
        })
    } catch (err) {
        res.status(500).json({
            data : [],
            success : false,
            message : err.message
        })
    }
}

const createBook = async(req, res) => {
    try {
        const book = await Book.create(req.body)
        res.status(200).json({
            data : book,
            success : true,
            message : 'successfully.'
        })
    } catch (err) {
        res.status(500).json({
            data : [],
            success : false,
            message : err.message
        })
    }
}

const updateBook = async(req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new : true,
            runValidators : true
        })
        res.status(200).json({
            data : book,
            success : true,
            message : 'successfully.'
        })
    } catch (err) {
        res.status(500).json({
            data : [],
            success : false,
            message : err.message
        })
    }
}

const deleteBook = async(req, res) => {
    try {
        const book = await Book.findByIdAndRemove(req.params.id)
        res.status(200).json({
            data : [],
            success : true,
            message : 'successfully.'
        })
    } catch (err) {
        res.status(500).json({
            data : [],
            success : false,
            message : err.message
        })
    }
}

module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
}