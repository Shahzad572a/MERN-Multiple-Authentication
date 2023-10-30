import express from "express";
import UserModel from "../model/user.js";

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await UserModel.findOne({ email });
  if (userExists) {
    return res.status(400).json({ error: 'User already exists' });
  }

  try {
    const user = new UserModel({
      name,
      email,
      password
    });
    

    await user.save();
    res.status(201).json({ success: true });
  } catch (error) {
    console.error('User save error:', error);
    res.status(400).json({ error: 'Failed to save user data' });
  }
};

    