const router = require('express').Router();
const {Post, User, Comment} = require('../models')
const withAuth = require("../utils/auth")

router.get("/", async (req, res) => {
  console.log(req.session);
  try {
    const postData = await Post.findAll({
      attributes: { exclude: ["user_id"] },
      include: [
        { model: User, 
          attributes: { exclude: ["password"] } },
        {
          model: Comment,
          include: [
            { model: User, 
              attributes: { exclude: ["password"] } }],
        },
      ],
    });

    if (!postData) {
      res.json("No posts created yet");
    }

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/post/:id", async (req, res) => {
  console.log(req.session);
  try {
    const postData = await Post.findByPk(req.params.id, {
      attributes: { exclude: ["user_id"] },
      include: [
        { model: User, attributes: { exclude: ["password"] } },
        {
          model: Comment,
          include: [{ model: User, attributes: { exclude: ["password"] } }],
        },
      ],
    });

    if (!postData) {
      res.status(404).json("No posts found with this ID!");
    }
    const post = postData.get({ plain: true });
    console.log(postData)
    res.render("single-post", {
      ...post,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login",  (req, res) => {
    res.render("login");
});

router.get("/signup", (req, res) => {
  
  res.render("signup");
});


module.exports = router;

