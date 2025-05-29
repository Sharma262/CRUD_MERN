const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const PhoneBook = require('./Model/PhoneBook')



app.use(express.json())
app.use(cors())
const PORT = 5000;
app.listen(PORT,()=>{
console.log('server is running on PORT : ' ,PORT)
})
const DB = 'mongodb+srv://skrakesh2602:8cHLdzRfnsssz4iR@crud.ggncarf.mongodb.net/'



mongoose.connect(DB, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected..');
})


app.post('/add-phone', async(req,res) => {
    const phoneNumber = new PhoneBook(req.body)
    try{
        await phoneNumber.save()
        res.status(201).json({
            status: 'Success',
            data : {
                phoneNumber
            }
        })
    }catch(err){
        res.status(500).json({
            status : 'Failed',
            message : err
        })
    }
})


app.get('/get-phone', async(req,res) => {
    const phoneNumbers = await PhoneBook.find({})
    try{
        res.status(201).json({
            status: 'Success',
            data : {
                phoneNumbers
            }
        })
    }catch(err){
        res.status(500).json({
            status : 'Failed',
            message : err
        })
    }
})


app.patch('/update-phone/:id', async(req,res) => {
    const updatedPhone = await PhoneBook.findByIdAndUpdate(req.params.id,req.body,{
        new : true,
        runValidators : true
    })
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                updatedPhone
            }
        })
    }catch(err){
        console.log(err)
    }
})


app.delete('/delete-phone/:id', async(req,res) => {
    await PhoneBook.findByIdAndDelete(req.params.id)
    try{
        res.status(204).json({
            status : 'Success',
            data : {}
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})