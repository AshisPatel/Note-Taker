const notes = require('../db/db.json');
const createNewNote = require('../lib/notes'); 
const { nanoid } = require('nanoid');
const fs = require('fs');

jest.mock('nanoid'); 
jest.mock('fs'); 


test('creates a note object', () => {
    const note = createNewNote(
        {
            title: 'Insert Title',
            text: 'Insert Note Text',
            id: 'RandomID'
        },  notes);

    expect(note.title).toBe('Insert Title');
    expect(note.text).toBe('Insert Note Text'); 
    expect(note.id).toBe('RandomID'); 
})