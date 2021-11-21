'use strict';

// Require the framework and instantiate it
const express = require('express');
const app = express();

const purpleairdump = require('./purpleair/purpleairdumpall');

// PurpleAir API settings
const purpleAirApiReadKey = process.env.API_READ_KEY || "";
const outdoorsensorindex = process.env.OUTDOOR_SENSOR_ID || "";
const indoorsensorindex = process.env.INDOOR_SENSOR_INDEX || "";
const sensorgroupid = process.env.SENSOR_GROUP_ID || "";

// Declare a route
app.get('/', (req, res) => {
  // purpleairdump.getDetails(indoorsensorindex, purpleAirApiReadKey);
  // res.json({ username: 'Flavio' });
  testdata = purpleairdump.getDetails(indoorsensorindex, purpleAirApiReadKey);
  res.json(purpleairdump.getDetails(indoorsensorindex, purpleAirApiReadKey));
  // res.send('Hello, world');
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})