const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose} = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// mongodb://Jyoti2002:jyoti123@cluster0-shard-00-00.ffcxb.mongodb.net:27017,cluster0-shard-00-01.ffcxb.mongodb.net:27017,cluster0-shard-00-02.ffcxb.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-pin56e-shard-0&authSource=admin&retryWrites=true&w=majority
// mongodb://localhost:27017/test1
mongoose.connect("mongodb://localhost:27017/Mongo3",{
    useNewUrlParser:true
})
.then( () => console.log("mongodb is connected"))
.catch(err => console.log(err))

app.use('/', route); 

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
 