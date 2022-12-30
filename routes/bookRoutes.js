import express from 'express'

const router = express.Router();

import BookController from '../controllers/bookController.js';

router.post("/add",BookController.addBook)
router.get("/getbook",BookController.readbook);
router.post("/updatebook",BookController.updatebook)

export default router

