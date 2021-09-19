const {usermodel ,seedfunction}=require("../module/User");
let usercontroolers= (req,res)=>{
    // seedfunction()
let bookId = req.query.id
    usermodel.findOne({_id:bookId}).then(data=>{
         res.json(data);
     })  

}


module.exports=  usercontroolers

