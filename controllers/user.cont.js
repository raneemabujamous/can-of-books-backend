const { usermodel, seedfunction } = require("../module/User");


let usercontroolers = (req, res) => {

    usermodel.find().then(data => {
        res.json(data);
    })
}

const createBook = async (req, res) => {
    // console.log(req.body)
    const email= req.body.email;
    const title = req.body.title;
    const description = req.body.description;
    console.log(description);
    const status = req.body.status;

    const newObj = new usermodel({

        email: email,
        title: title,
        description:description,
        status: status

    })
    console.log(newObj, "hi from user");
    newObj.save();

    let createbook= await usermodel.find({});
    res.json(createbook);

   
}


const deleteBook=  (req,res)=>{
    let id=req.params.id;
    usermodel.findByIdAndDelete(id,async (err,data)=>{
        if(err){
            res.status(500).send("an error occured");
        }
        let booksList= await usermodel.find({});
        res.json(booksList);
           
    })
}
module.exports = {
    usercontroolers,
    createBook,
    deleteBook,

}
