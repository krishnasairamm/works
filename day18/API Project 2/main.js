const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const dbConfig = require('./config/db.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


mongoose.connect(dbConfig.url, {
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database.', err);
  process.exit();
});

// Require Users routes
const userRoutes = require('./src/routes/cust.routes')

// using as middleware
app.use('/api/customer', userRoutes)

// listen for requests
app.listen(5000, () => {
  console.log(`Node server is listening on port `);
});
