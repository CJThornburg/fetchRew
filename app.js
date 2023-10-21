const express = require('express');
const app = express();


app.use(express.json());



app.post('/receipts/process', async (req, res) => {
    let points = 0

    console.log(req.body)

    const {retailer, purchaseDate, purchaseTime, total, items} = req.body

    if ((!retailer || !purchaseDate ||!purchaseTime ||!total || !items)){
        res.json({"error": "data missing"})
        return
    }

    if (items.length ===0) {
        res.json({"error": "receipt has not purchases"})
    }

// One point for every alphanumeric character in the retailer name.
const alphanumericArray = retailer.match(/[a-zA-Z0-9]/g);
 points += alphanumericArray.length

 console.log(points, "after alphanumeric count")

// 50 points if the total is a round dollar amount with no cents.
const cents = total.substring(total.length-2, total.length)
if (cents === "00")  points+= 50
console.log(points, "after 00 cents check")

// 25 points if the total is a multiple of 0.25.
const centsNumber = parseInt(cents)
const divisibleBy25 = centsNumber % 25
if (divisibleBy25 === 0) points += 25
console.log(points, "after divisible by 25 check")

// 5 points for every two items on the receipt.
const numberOfItemsPurchased = items.length

if (numberOfItemsPurchased % 2 === 0) points += ((numberOfItemsPurchased/2) *5)
else (points += (( numberOfItemsPurchased -1 )/2) *5)

console.log(points, "5 points per 2 items")

// If the trimmed length of the item description is a multiple of 3, multiply the price by 0.2 and round up to the nearest integer. The result is the number of points earned.
for (const item of items) {
    if (item.shortDescription.length % 3 === 0) {
        points += Math.ceil(item.price)
    }
}


console.log(points, "after item description length")

// 6 points if the day in the purchase date is odd.
const day = parseInt( purchaseDate.substring(purchaseDate.length-2, purchaseDate.length))
console.log(day)
if (day % 2 !== 0) points += 6
console.log(points, "after day date check")



// 10 points if the time of purchase is after 2:00pm and before 4:00pm.


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
