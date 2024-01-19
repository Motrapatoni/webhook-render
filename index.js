import express from 'express'

const app = express();
const port = process.env.PORT || 3000;

app.get('/webhook-pos/tech-test', (req, res) => {
    res.send("Hello world")
})

app.listen(port)
console.log("server on port ", port)