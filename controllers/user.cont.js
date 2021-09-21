const { usermodel, seedfunction } = require("../module/User");


let usercontroolers = (req, res) => {

    usermodel.find().then(data => {
        res.json(data);
    })
}
//     StudentModel.find({}).then(data=>{res.status(200).json(data)});
// }
// const deleteStudentController=(req,res)=>{
//     // PARAMS
//     let studnetID=req.params.id;
//     StudentModel.findByIdAndDelete(studnetID).then(()=>{
//         StudentModel.find().then(data=>res.json(data));
//     });
const createBook = async (req, res) => {
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
    newObj.save();
  usermodel.find({}).then(data=>{res.status(200).json(data)});

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


const updateBook = async(req,res)=>{
    console.log(req.params,"dddd")
    let bookId = req.params.id
    let upduteData = req.body
    console.log(upduteData,bookId,"from update")
    usermodel.findOne({_id:bookId}).then(book=>{
        console.log(book)
        book.email = upduteData.email
        book.title = upduteData.title
        book.description = upduteData.description
        book.status = upduteData.status
        book.save()

    })
     let updatedbookList=await usermodel.find({});
    res.status(200).send(updatedbookList);
}
    // upduteData.save()

 
   
module.exports = {
    usercontroolers,
    createBook,
    deleteBook,
    updateBook
}