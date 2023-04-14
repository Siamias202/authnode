import  express  from "express";

const router = express.Router();

import UserController from "../controllers/userController.js";
import checkUserAuth from "../middlewares/auth-middleware.js";
import TodoController from "../controllers/todoController.js";

//Route level middleware - To Protect Route
router.use('/changepassword',checkUserAuth)
router.use('/loggeduser',checkUserAuth)


//Public Routes
router.post('/register',UserController.userRegistration)
router.post('/login',UserController.userLogin)
router.post('/send-reset-password-email',UserController.sendUserPasswordResetEmail)
router.post('/resetpassword/:id/:token',UserController.userPasswordReset)

router.post('/createTodo',TodoController.addtodo);

//Protected Routes
router.post('/changepassword',UserController.changeUserPassword)
router.get('/loggeduser',UserController.loggedUser)






export default router