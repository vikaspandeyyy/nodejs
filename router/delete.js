const router = require("express").Router();
// const express = require('express');
let Exercise = require("../models/exercise.model");

router.post("/", async (req, res) => {
  const filter = { _id: req.body._id };

  let doc = await Exercise.deleteOne(filter);
  res.status(200).send(req.body);
});

module.exports = router;
