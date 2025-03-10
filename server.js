const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
const app = express();
const db = require("./models");

let corsOptions = {
        origin: 'http://localhost:8080',
        credentials: true
};
app.use(cors(corsOptions));
// analyser les requêtes de type de contenu - application/json
app.use(bodyParser.json());
// analyser les requêtes de type de contenu - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.json({ message: "Bienvenue dans l'application : Auth JWT" });
});

db.sequelize.sync().then(() => {
    console.log('Database synchronized successfully');
});

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// définir le port, écouter les requêtes
const PORT = process.env.PORT | 3000;
app.listen(PORT, () => {
    console.log(`Serveur écoute sur le port ${PORT}.`);
});
