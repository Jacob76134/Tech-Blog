const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

//find all posts
router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.findAll();

        if (!allPosts) {
            res.status(400).json(err)
        }
        res.status(200).json(getPosts)
    }
    catch (err) {
        res.status(500).json(err);

    }
});

//creates new post
router.post('/', withAuth, async (req, res) => {
    try{
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        })
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

//update post

// router.put('/:id', withAuth, async (req, res) => {
//     try{
//         const postInfo = await Post.update(req.body, {
//             where: {
//                 id: req.params.id,
//                 user_id: req.session.user_id,
//             },
//         });
//         if (!postData) {
//             res.status(404)
//         }
//         res.status(200).json(postInfo);
//     } catch (err){
//         console.log(err);
//     }
// });

// //delete post

// router.delete("/:id", withAuth, async (req, res) => {
//     try {
//       const postRemove = await Post.destroy({
//         where: {
//           id: req.params.id,
//           user_id: req.session.user_id,
//         },
//       });
//       if (!postData) {
//         res.status(404);
//       }
//       res.status(200).json(postRemove);
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
// });

module.exports = router;