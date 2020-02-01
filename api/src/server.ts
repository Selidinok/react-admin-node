import app from './app'

const port = process.env.port || 3023

app.listen(port, () => {
    console.log(`App started on ${port} 1`)
})