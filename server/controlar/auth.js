import express from "express";
import UserModel from "../model/user.js";
import bcryptjs from 'bcryptjs'
import asyncHandler from 'express-async-handler'

import jwt from 'jsonwebtoken'
// import sgMail from '@sendgrid/mail'
// sgMail.setApiKey()
import sendEmail from '../utils/nodemailer.js'
import generateRandomCode from '../utils/nodemailer.js'

 

// export const signUp = asyncHandler (async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const userExists = await UserModel.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ error: 'User already exists' });
//     }

//     const hashedPassword = await bcryptjs.hash(password, 10);

//     const user = new UserModel({
//       name,
//       email,
//       hashed_password: hashedPassword // Store the hashed password
//     });

//     await user.save();
//     res.status(201).json({ success: true });
//   } catch (error) {
//     console.error('User save error:', error);
//     res.status(500).json({ error: 'Failed to save user data' });
//   }
// });


export const signUp = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    // Generate a random confirmation code
    // const confirmationCode = generateRandomCode(16); // Use the code generation function

    const user = new UserModel({
      name,
      email,
      hashed_password: hashedPassword, // Store the hashed password
      confirmationCode: confirmationCode, // Store the confirmation code
    });

    // await user.save();

    // Send an email with the confirmation link
    const confirmationLink = `http://yourwebsite.com/confirm?code=${confirmationCode}`;
    const emailText = `Thank you for signing up! Click the following link to confirm your email: ${confirmationLink}`;
    await sendEmail(email, 'Email Confirmation', emailText);

    res.status(201).json({ success: true, message: 'Please check your email to confirm your account' });
  } catch (error) {
    console.error('User save error:', error);
    res.status(500).json({ error: 'Failed to save user data' });
  }
});

export const accountActivtion = asyncHandler (async (req, res) => {
  const { hashedPassword } = req.query; // Get the hashed password from the query parameters

  try {
    // Find the user with the matching hashed password
    const user = await UserModel.findOne({ hashed_password: hashedPassword });

    if (!user) {
      return res.status(404).json({ error: 'Invalid confirmation data' });
    }

    // Activate the user's account (e.g., set a "confirmed" flag to true)
    user.confirmed = true;
    user.hashed_password = undefined;
    await user.save();

    return res.status(200).json({ message: 'Email confirmed successfully' });
  } catch (error) {
    console.error('Email confirmation error:', error);
    return res.status(500).json({ error: 'Failed to confirm email' });
  }

})