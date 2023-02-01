const { setupBot } = require("./bot");

setupBot().launch();

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
dotenv.config();


mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log(`Mongoose - successfully connected...`);
    app.listen(process.env.APP_PORT, () => console.log(`Server started on port: http://localhost:${process.env.APP_PORT}`));
}).on('error', error => console.warn(error));
