const router = require("express").Router();
// const express = require('express');
let Exercise = require("../models/exercise.model");

router.get("/", async(req,res)=>{
  const response= await  Exercise.find({});
  res.status(200).send(response)
})

module.exports = router;
