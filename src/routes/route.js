const express = require('express');
const router = express.Router();


router.get("/sol1",function(req,res){
    let arr= [1,2,4,5,6,7,8,9]
        let sum =0;
        let n = arr.length
        for (let i =0;i<n;i++){
            sum += arr[i]
        }    
        let lastdigit = arr.pop()
      let  consecutiveSum = lastdigit*(lastdigit+1)/2
      let missingNumber =consecutiveSum-sum
      res.send({missingNumber: missingNumber }  );
})
router.get("/sol2", function (req, res) {
       let arr= [33, 34, 35, 37, 38]
       let len= arr.length
  
      let total = 0;
      for (var i in arr) {
         total += arr[i];
    }
  
       let firstDigit= arr[0]
       let lastDigit= arr.pop()
       let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
       let missingNumber= consecutiveSum - total
   
      res.send(  { data: missingNumber  }  );
  });

