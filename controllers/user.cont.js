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
    res.json(newObj);
}


const deleteBook = (req,res) => {
    try{
        const id=req.params.id;

      
            usermodel.deleteOne({ _id: book },(error,book)=>{
                res.json(book);
    });
    }
    catch(error){
        res.send(error.info);
    }
    };
module.exports = {
    usercontroolers,
    createBook,
    deleteBook,

}
