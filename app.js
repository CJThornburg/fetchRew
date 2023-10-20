const express = require('express');
const app = express();


app.use(express.json());



app.post('/receipts/process', async (req, res) => {

    console.log("hi from in post")

    res.json({ hi: "hi" })
})




app.get('/receipts/:id/points', async (req, res) => {
console.log(req.params.id)
    res.json({ "points": 100000000000 })
})


app.use('/', (req, res, next) => {
    let err = new Error("The requested resource couldn't be found.");
    err.statusCode = 404;
    next(err);
});

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}... :)`));
