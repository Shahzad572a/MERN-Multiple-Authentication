import express from "express";
import { signIn } from "../controlar/auth.js";

const router =express.Router()

router.get('/signup', signIn)
 

   
export default router 