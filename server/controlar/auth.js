import express from "express";
// import userModle from "../model/user.js";

export const signIn = async (req,res) => {
     try {
         
        res.status(200).json({
            data: 'you hit signup endpoint'
        })
     } catch (error) {
        res.status(404).json({message:error.message})
     }
    }