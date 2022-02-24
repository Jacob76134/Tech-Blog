const router = require('express').Router();
const User  = require('../../models/User');


router.get('/',  (req, res)=>{
    res.send('<h1>test sign up Routes...<h1>')
});

module.exports = router;
 