import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import nodemon from 'nodemon'
import bodyParser from 'body-parser'

const app = express()
dotenv.config()

const MONGO_URL = process.env.MONGO_URL
console.log(`Mongo url: ${MONGO_URL}`)

mongoose.connect(MONGO_URL || "", { useNewUrlParser: true })
.then(() => {
    console.log("Mongo connected")
}).catch(err => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    nodemon.once('exit', function () {
        process.exit(); // finish the exit process
     }).emit('quit')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    console.log("New requset: ", req)
    res.status(200).send("Hello world 1")
})

app.get('/home', (req, res) => {
    console.log("New requset: ", req)
    res.status(200).send({"test": "js"})
})

export default app