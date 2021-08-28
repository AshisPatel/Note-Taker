const path = require('path');

const router = require('express').Router();

// Navigating to 'root' will display the index.html page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});


// Navigating to the /notes address will display the notes.html page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html')); 
});

// All other route requests should return to the homepage

router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html')); 
}); 

module.exports = router; 

