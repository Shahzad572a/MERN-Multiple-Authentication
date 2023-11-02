import express from "express";
import { signUp,accountActivtion } from "../controlar/auth.js";
import {userSignupValidator} from '../middleware/auth.js'
import { runValidation } from '../middleware/index.js';


const router =express.Router()

router.post('/signup',userSignupValidator,runValidation, signUp)
router.post('/acount-activation', accountActivtion)

 

//    
export default router 
// module.exports = router