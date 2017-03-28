var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});

//send email
router.post('/send', function(req, res, next){
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: '...@gmail.com',
            pass: '....'
        }
    });

    var mailOptions = {
        from: '"Services ?" <webngapp@gmail.com>',
        to: '....@gmail.com',
        subject: 'Hello from Systems Repair',
        text: 'You have a submision from ... Name: ' +req.body.name+ ' Emal: ' + req.body.email+ ' Message: ' + req.body.message,
        html: '<p>You have a submision from ... </p> <ul><li>Name: ' +req.body.name+ '</li><li>Emal: ' + req.body.email+ '</li><li> Message: ' + req.body.message +'</li></ul>'
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
        res.redirect('/');
    })
});

module.exports = router;
