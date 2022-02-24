const express = require("express");
const session = require('express-session');
const exphbs = require("express-handlebars");
const path = require('path');
const app = express();
const routes = require('./controllers');


const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});

const sequelize = require("./config/connection.js");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));


app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// express middleware:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


// Create database connection:

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening ay"));
});
