const router = require('express').Router();
const userRoutes = require('./userRoutes');
const signUpRoutes = require('./signUpRoutes')


router.use('/users', userRoutes);
router.use('/signup', signUpRoutes);


module.exports = router;