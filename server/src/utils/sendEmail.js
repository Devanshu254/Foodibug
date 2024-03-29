const nodemailer = require('nodemailer')
exports.sendEmail = async (options) => {
    // const emailOptions = {
    //     from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`, // sender address
    //     to: options.email,
    //     subject: options.subject,
    //     text: options.message

    // }
    // console.log(options)
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });
    // send mail with defined transport object
    const message = {
        from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`, // sender address
        to: options.email, // list of receivers
        subject: options.subject, // Subject line
        text: options.message, // plain text body
    };
    const info = await transporter.sendMail(message)
    console.log("Message sent: %s", info.messageId);
    // await transport.sendMail(emailOptions);
}