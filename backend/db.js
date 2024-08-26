const  mongoose = require('mongoose')
const { boolean } = require('zod')
// mongodb+srv://tirthchoksi2204:%3Ctirth2204@cluster0.fwscjgf.mongodb.net/todos
mongoose.connect("mongodb+srv://tirthchoksi2204:tirth2204@cluster0.fwscjgf.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})
const todo = mongoose.model('todos',todoSchema)

module.exports ={
    todo
}