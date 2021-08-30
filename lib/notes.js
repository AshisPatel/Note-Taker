const fs = require('fs');
const path = require('path');

const createNewNote = (body, notesArray) => {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesArray, null, 2)); 
    return note; 
}

const validateNote = (note) => {
   if (!note.title || typeof note.title !== 'string') {
       return false; 
   }

   if (!note.text || typeof note.text !== 'string') {
       return false; 
   }

   return true; 
}

const deleteNote = (noteId, notesArray) => {
    //notesArray = notesArray.filter(obj => obj.id !== noteId); 
    // Find index of object that we want to remove
    const objIndex = notesArray.findIndex(obj => obj.id === noteId);
    // Remove object using splice
    notesArray.splice(objIndex,1);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notesArray, null, 2));
    return notesArray; 
}

module.exports = { createNewNote, validateNote, deleteNote }; 