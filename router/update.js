const router = require("express").Router();
// const express = require('express');
let Exercise = require("../models/exercise.model");

router.post("/", async(req,res)=>{
    const filter = {_id:req.body._id};

  const update= {
    username:req.body.username,
    description:req.body.description,
    duration:req.body.duration,

  };
  let doc = await Exercise.findOneAndUpdate(filter,update);
  res.status(200).send(req.body)
})

module.exports = router;
