const express = require('express');

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
routes.post('/', (req, res) => {
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