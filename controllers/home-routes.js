const router = require('express').Router();
const { User } = require('../models');


router.get("/dashboard", async (req, res) => {
  try {
    const userData = await User.findOne ({
      attributes: { exclude: ["password"] },
     where: {email:req.session.email}
    });
    if (!userData) {
      res.status(500).json({ message: "Could not find user" });
      return;
    }

    const user = userData.get({ plain: true });

    res.render("dashboard", {
      ...user,
      loggedIn: true,
      dashboard: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/signup", (req, res) => {
  
  // if (req.session.loggedIn) {
  //   res.redirect("/dashboard");
  // } else {
  //   res.redirect("signup")
  // };
  res.render("signup");
});

router.get("/login",  (req, res) => {
  //LEAVE THIS CODE FOR LATER USE//
  // if (req.session.loggedIn) {
  //   res.redirect("/dashboard");
  // }
  // else {
    res.render("login");
  // }
  
});

router.get("/logout",  (req, res) => {
  
  if (req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
 
    res.render("/login");

});

router.get("/", (req, res) => {
  
  res.render("signup");
});


module.exports = router;

