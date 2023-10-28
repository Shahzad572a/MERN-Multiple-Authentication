import express from "express";
import { signIn } from "../controlar/auth.js";
import {userSignupValidator} from '../middleware/auth.js'
import { runValidation } from '../middleware/index.js';


const router =express.Router()

router.get('/signup',userSignupValidator,runValidation, signIn)
 

   
export default router 