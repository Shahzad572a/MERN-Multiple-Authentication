import express from "express";
import UserModel from "../model/user.js";

export const signUp = async (req,res) => {
 
      const { name, email, password } = req.body
    
      const userExists = await UserModel.findOne({ email })
      if (userExists) {
        res.status(400)
        throw new Error('User already exists')
      }
      const user = await UserModel.create({
        name,
        email,
        password,
      })
      if (user) {
        res.status(201).json({
          success: true
        })
      } else {
        res.status(400)
        throw new Error('Invalid user data')
      }
    }

    