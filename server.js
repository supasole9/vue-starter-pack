const express = require('express');
const bodyParser = require('body-parser');
const model = require('./model');

const app = express();

app.get("/path", function (req, res) {
  model.type.find().then(function (types) {
    res.json(types)
  })
});

app.post("/path", function (req, res) {
  let type = new model.type ({
    type: req.body.fromClient
  });
  type.save().then(function () {
      res.status(201).json(type)
  })
});

app.delete("path/:id", function (req, res) {
  model.type.remove({ _id:req.params.id }, function (err) {
    if (err) {
      // error stuffs
    }
  }).then(function () {
    res.sendStatus(204);
  })
});
