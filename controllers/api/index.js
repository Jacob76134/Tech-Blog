const router = require('express').Router();
const userRoutes = require('./userRoutes');
const signUpRoutes = require('./signUpRoutes');
const postRoutes = require('./postRoutes')
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/signup', signUpRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes)


module.exports = router;