import TodoModel from "../models/Todo.js";

class TodoController {
    static addtodo = async (req, res) => {
        const { name, author } = req.body;
        try {
            const newtodo = new TodoModel({
                name: name,
                author: author,
            })
            await newtodo.save();
            res.send({
                status:"Success",
                message:"Todo Added",
            })
        } catch (error) {
            console.log(error);
            res.send({
                status: "failed",
                message: "Unable to Add the todo",
            });
        }
    }
}

export default TodoController;