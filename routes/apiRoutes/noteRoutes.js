// Grabs our array of note objects
const notes = require('../../db/db.json'); 
const createNewNote = require('../../lib/notes'); 
const { nanoid } = require('nanoid'); 

const router = require('express').Router();

router.get('/notes', (req, res) => {
    console.log(notes);
})

router.post('/notes', (req, res) => {
    req.body.id = nanoid(10); 
    const note = createNewNote(req.body, notes);
    res.json(note); 
})

module.exports = router; 