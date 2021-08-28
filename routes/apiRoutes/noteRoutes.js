// Grabs our array of note objects
const notes = require('../../db/db.json'); 

const router = require('express').Router();

router.get('/notes', (req, res) => {
    console.log(notes);
})

module.exports = router; 