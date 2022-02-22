const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('Welcome to my application')
});
router.get("/students/:name", function (req,res){
    let studentName = req.params.name
    console.log(studentName)
    res.send("123455")
});
router.get("/movies",function(req,res){
    let array =["Rang de basanti","border","sultan","dangal"]
    console.log(array)
    res.send(array)
});
router.get("/movie/:movieId",function(req,res){
    mov=["abs","sjdsk","sksdsk","dhsjd","ahsajh"]
    let value = req.params.movieId;
    if(value>mov.length-1){
        res.send("doesnot exist")
    }else{
        res.send(mov[value])
    }
});

router.get("/moviez",function(req,res){
    res.send([{id: 1,name:"a"},{id: 2,name:"b"},{id: 3,name:"b"},{id: 4,name:"d"}])
});

router.get("films/:flims",function(req,res){
    let movi = [{id: 1,name:"a"},{id: 2,name:"b"},{id: 3,name:"b"},{id: 4,name:"d"}]
    let value = req.params.flimsId;
    let found = false;
    for(let i =0;i<movi.length;i++){
        if(movi[i].id==value){
            found=trueres.send(movie[i])
            break;
        }
    }
    if(found==false){
        res.send("No movie exist with this id")}
})
module.exports = router;