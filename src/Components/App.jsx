import React from 'react';
import Footer from './Footer';
import Heading from './Header';
import Note from './Note';
import CreateNote from './CreateNote';

function App() {
    return (
      <div>
        <Heading />
        <CreateNote />
        <Note key={1} title="Note title" content="Note content" />
        <Footer />
      </div>
    );
  }
  
  export default App;
  