import nodemailer from 'nodemailer'

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'shahzad572a@gmail.com',
                pass: 'cakytofjkqqoezfb'
            }
        });

        await transporter.sendMail({
            from: 'shaxad572a@gmail.com',
            to: email,
            subject: subject,
            text: text,
        });

        console.log("email sent sucessfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};

export default sendEmail;