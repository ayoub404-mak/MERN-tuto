const express = require('express');
const Workout = require('../models/workoutModel');
//const WorkoutModel = require('../models/WorkoutModel');

const routes = express.Router();

// GET all workouts
routes.get('/',(req, res) => {
    res.json({mssg: 'GET all workouts'});
})


//GET a single workout
routes.get('/:id',(req, res) => {
    res.json({mssg: 'GET a single workout'})
})


// POST a new workout
routes.post('/',async (req, res) => {
    const {title, load, reps} = req.body

    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
    res.json({mssg: 'POST  a new workout'})
})


// DELETE a  workout
routes.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})


// UPDATE workout
routes.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = routes;