// Grabs our array of note objects
const notes = require('../../db/db.json'); 
const {createNewNote, validateNote, deleteNote} = require('../../lib/notes'); 
const { nanoid } = require('nanoid'); 

const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.json(notes); 
})

router.post('/notes', (req, res) => {
    req.body.id = nanoid(10); 
    if (!validateNote(req.body)) {
        res.status(400).send('A note must contain a title and text in order to submit!'); 
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note); 
    }
    
})


router.delete('/notes/:id', (req,res) => {
    res.json(deleteNote(req.params.id, notes)); 
});

module.exports = router; 