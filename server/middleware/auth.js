import { check } from "express-validator";

export const userSignupValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),

    check('email')
        .not()
        .isEmpty()
        .isEmail()
        .withMessage('Valid email is required'),

    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
];