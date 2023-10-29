import express from "express";
import { signUp } from "../controlar/auth.js";
import {userSignupValidator} from '../middleware/auth.js'
import { runValidation } from '../middleware/index.js';


const router =express.Router()

router.post('/signup',userSignupValidator,runValidation, signUp)
 

//    
export default router 
// module.exports = router