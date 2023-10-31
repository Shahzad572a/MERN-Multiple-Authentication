import express from "express";
import UserModel from "../model/user.js";
import bcryptjs from 'bcryptjs'
import asyncHandler from 'express-async-handler'


export const signUp = asyncHandler (async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const user = new UserModel({
      name,
      email,
      hashed_password: hashedPassword // Store the hashed password
    });

    await user.save();
    res.status(201).json({ success: true });
  } catch (error) {
    console.error('User save error:', error);
    res.status(500).json({ error: 'Failed to save user data' });
  }
});
