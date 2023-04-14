import express from 'express';
import TodoController from '../controllers/todoController.js';


const router=express.Router();

router.post("/add",TodoController.addtodo);

export default router