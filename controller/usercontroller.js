const user = require('../model/usermodel');
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'computerwork424@gmail.com',
        pass: 'ugbx arhf scbn igrl'
    }
});

exports.insert = async (req, res) => {
    let data = await user.create(req.body);
    res.status(200).json({
        status: "succefully data insert",
        data
    })
}

exports.select = async (req, res) => {
    let data = await user.find();
    res.status(200).json({
        status: "Succefully data Show",
        data
    })
}

exports.login = async (req, res) => {
    let data = await user.find({ "email": req.body.email });
    if (data.length == 1) {

        var mailOptions = {
            from: 'computerwork424@gmail.com',
            to: req.body.email,
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + req.body.email);
            }
        });

        res.status(200).json({
            status: "succefully data",
            data
        })
    }
    else {
        res.status(200).json({
            status: "Check you Email Password",
        })
    }
}
