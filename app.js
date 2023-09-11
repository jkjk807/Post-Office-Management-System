const express = require('express');
const mongoose = require("mongoose");
const path = require('path');
// const cors = require('cors');


// const parcel = require("./routers/parcel");
const sender = require("./routers/sender");
const parcel = require("./routers/parcel");


let app = express();
// app.use(cors())
const PORT_NUMBER = 8081;

app.use(express.static(path.join(__dirname,'./dist/poms')))

app.listen(PORT_NUMBER, () => {
  console.log(`Listening on port ${PORT_NUMBER}`);
});

app.use(express.json())

let url = "mongodb://localhost:27017/labweek9";

let print = console.log;

mongoose.connect(url, function (err) {
  if (err) print("unable to connect to Mongoose");
  else print("connect to DB successfully");
});

app.get('/sender/:name', sender.getAllByName);
app.get('/sender/', sender.getAllSenders);
app.post('/sender', sender.createSender);
app.delete('/sender/:id', sender.deleteSender);
app.put('/sender', sender.updateSender);
app.put('/sender/parcel', sender.addParcel);


app.get('/parcel', parcel.getAll);
app.get('/parcel/address', parcel.getAllByAddress);
app.put('/parcel', parcel.updateAddress);