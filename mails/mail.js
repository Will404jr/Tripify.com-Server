const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "wjr46269@gmail.com",
    pass: "gkpfylwfovacmedy",
  },
});

const mailOptions = {
  from: "wjr46269@gmail.com",
  to: "alindasergio@gmail.com",
  subject: "PHANEROO",
  text: "Kiku William has a car",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
