import React from 'react';
import Footer from './Footer';
import Heading from './Header';
import Note from './Note';
import notes from '../notes.js';

function createNote(noteDesc){
    return <Note
        key={noteDesc.id}
        title={noteDesc.title}
        content={noteDesc.content}
    />
}

function App(){
    return <div>
    <Heading />
    <Footer />
    {notes.map(createNote)}
    <Note />
    </div>
}

export default App;