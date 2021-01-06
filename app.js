const http = require('http');
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.render('404', {
        pageTitle: '404',
        path: '/',
        activeShop: true,
        productCSS: true
      });
})

const server = http.createServer(app);

server.listen(3000);


