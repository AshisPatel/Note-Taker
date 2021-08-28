const notes = require('../db/db.json');
const { createNewNote, validateNote } = require('../lib/notes'); 
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
});

test('validate note object', () => {
    const note = createNewNote(
        {
            title: 'Insert Title',
            text: 'Insert Note Text',
            id: 'RandomID'
        },  notes);

    const invalidNote = createNewNote( 
        {
            title: 'Title 2',
            id: 'RandomID2'
        }, notes);

    expect(validateNote(note)).toBe(true); 
    
    expect(validateNote(invalidNote)).toBe(false); 
});