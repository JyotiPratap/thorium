const mongoose = require('mongoose');

const authormodel = new mongoose.Schema( {
    fname: { required:true,
    type:String
},
    lname: { required:true,
    type:String 
},
    title: {
        type:String,
        required:true
    },
    email: {
        required:true,
        unique:true,
        type:String,
        // match:/.\@.\..*/
        //xyz@gmail.com
    },
    password:
        { required:true,
        type:String
    }

}, { timestamps: true });   
   
module.exports = mongoose.model('AuthorModel', authormodel) 