const express = require('express');
const router = express.Router();


let players = [];
   router.post('/player', function (req, res) {
      let player =req.body;
      let playerName =player.name
      for(let i =0;i<players.length;i++){
          if(players[i].name==playerName){
              return res.send("player already exsit")
          }
      }
      players.push(player);
      return res.send(players);
})
router.post('/players/:playerName/bookings/:bookingid',function(req,res){
    let playerName = req.params.playerName;
    let bookingId = req.params.bookingid;
    let booking = req.body;
    let bn = req.body.bookingNumber;
    for(let i=0;i<players.length;i++){
        if(playerName==players[i].name){
            console.log(playerName==players[i].name)
             let x=  players[i].bookings.find(ele=>ele.bookingNumber==bookingId)
             let y=  players[i].bookings.find(ele=>ele.bookingNumber==bn)
             if ( x||y ){
                return res.send("Booking id already exists")
             }
                players[i].bookings.push(booking)
                return res.send(players)
            }
     }
    return res.send("Player does not exist")
})

let arr=[61,42,32,47,58,68,78,97,65,4]
router.post("/post-query-3", function(req, res) {
    let input = req.query.input
    let finalarray = []
    for(i=0;i<arr.length;i++){
    if(arr[i]> input)
      finalarray.push(arr[i])
    }
    res.send( {data: finalarray, status:true} )
})

let persons = [
    {
        name: "PK",
        age: 10,
        votingStatus: false
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false
    }
]

router.post("/election", function (req, res) {
    let votingAge = req.query.votingAge

    let mahir=[];
    for (let i = 0; i < persons.length; i++) {

        if (persons[i].age > votingAge) {
        
            persons[i].votingStatus = true
            mahir.push(persons[i])
        }
    }
if (mahir.length>0)
{
    return res.send(mahir)
}
else{
    return res.send("no member found above this age")
}

})

   module.exports = router;

