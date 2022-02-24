const express = require('express');
const router = express.Router();


let arr =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ],
           "bookings": [
               {
                   "bookingNumber": 1,
                   "sportId": "",
                   "centerId": "",
                   "type": "private",
                   "slot": '16286598000000',
                   "bookedOn": '31/08/2021',
                   "bookedFor": '01/09/2021'
               },
               {
                   "bookingNumber": 2,
                   "sportId": "",
                   "centerId": "",
                   "type": "private",
                   "slot": '16286518000000',
                   "bookedOn": '31/08/2001',
                   "bookedFor": '01/09/2001'
               },
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
           "bookings": []
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
           "bookings": []
       },
   ]
   router.post('/player', function (req, res) {
    let details = req.body.name1.name
    let inputDetails = req.body.name1
    for (let i = 0; i < arr.length; i++) {
    if (details === arr[i].name) {
    console.log("Data already exist")
    res.send("Data already exist")
    }
    else if (i === arr.length - 1) {
    arr.push( inputDetails )
    res.send({arr})
    } 
    }  
    res.send(  { data: players , status: true }  )
})
router.post("/players/:playerName/bookings/:bookingId", function(req, res) {
    let play = req.params.playerName
    let book =req.params.bookingId
    
    const index = arr.findIndex(object => object.name === play)
    if(index === -1){
        res.send('player does not exists')   
    }

    else{
    let a = arr[index].bookings
    const i = a.findIndex(object => object.bookingNumber == book)
        if(i === -1 ){
            a.push(req.body)
            res.send(  arr[index] )
           
        }
        else{
            res.send("booking exists")
        }
    }
})
module.exports = router;
