import BookModel from "../models/Book.js";

class BookController {
  static addBook = async (req, res) => {
    const { name, author, category, publisher, year,price, tc } = req.body;
    try {
      const newBook = new BookModel({
        name: name,
        author: author,
        category: category,
        publisher: publisher,
        year: year,
        price:price,
        tc: tc,
      });

      await newBook.save();
      res.send({
        status: "Success",
        message: "Book Added",
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Unable to Add the book",
      });
    }
  };

  static readbook = async (req, res) => {
    try {
      const data =await BookModel.find({author:"nicola"}).where('price').gt(80);
      if (!data) {
        console.log("no book found");
        res.send({
          status: "failed",
          message: "No book found",
        });
      } else {
        console.log(data);
        res.send({
          status: "Success",
          message: data.length + " Book found",
        });
      }
    } catch (error) {
      console.log(error);
      res.send({
        status: "Failed",
        message: "There is a problem in server side"
      });
    }
  };


  static updatebook = async(req,res)=>{
    const {author,price} = req.body;

    try {
        const result= await BookModel.find({author:author}).update({price:price});
        if(result){
            console.log(result);
            res.send({
                status: "Success",
                message: "Updated"
              });
        }
        else{
            res.send({
                status: "Failed",
                message: "Unable to update"
              });
        }


    } catch (error) {
        res.send({
            status: "Failed",
            message: "There is a problem in server side"
          });
        
    }


  }




}

export default BookController;
