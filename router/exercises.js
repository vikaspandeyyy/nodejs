const router = require("express").Router();
// const express = require('express');
let Exercise = require("../models/exercise.model");

router.post("/", async(req,res)=>{
  const response= await new Exercise({
    username:req.body.username,
    description:req.body.description,
    duration:req.body.duration,

  }).save();
  res.status(200).send(response)
})

module.exports = router;
