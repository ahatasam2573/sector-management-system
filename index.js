const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080;

//log request
app.use(morgan('tiny'));

//parse request to parser
app.use(bodyParser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs")

//load assets using middleware
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.get('/', (req, res) => {
    res.send("Sector");
})

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) });