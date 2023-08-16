// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const path = require("path");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers });

// Sets up the Express App
const app = express();
app.set("views", path.join(__dirname, "app", "views"));

const PORT = process.env.PORT || 3001;

const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Sets up sequelize
const sequelize = require("./config/connection");

// Setting up the middleware for express-session
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Setting up the middleware for express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// setting up express to use handlebars as its view engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, "0.0.0.0", () => console.log("Now listening"));
});
