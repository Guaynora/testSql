import express from "express";
//import exphbs from "express-handlebars";
const exphbs = require("express-handlebars");
import path from "path";
import morgan from "morgan";
import Authentication from "./routes/authentication";
import main from "./routes/authentication";
//initializations
const app = express();

//settings
app.set("port", 4000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: import("./lib/handlebars"),
  })
);
app.set("view engine", ".hbs");
//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//Global Variables
app.use((req, res, next) => {
  next();
});

//Routes
app.use(main);
app.use(Authentication);

//public
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.set("port"), () => {
  console.log("server on port ", app.get("port"));
});
