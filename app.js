const http = require("http");
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const bodyParser = require("body-parser");
const errorController = require('./controllers/error');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

const server = http.createServer(app);

server.listen(3000);
