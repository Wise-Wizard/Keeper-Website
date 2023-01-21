/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from './Footer';
import Heading from './Header';
import Note from './Note';
import CreateNote from './CreateNote';


function App() {
    const [noteArray, setArray]=React.useState([]);

    function newNote(note){
        setArray((prevValue)=>{return [...prevValue,note]});
    }

    function deleteNote(id){
        setArray(prevValue=>{return prevValue.filter((item,index)=>{return index!==id})})
    }

    return (
      <div>
        <Heading />
        <CreateNote addNote={newNote}/>
        {noteArray.map((item,index)=>{return (<Note key={index} id={index} title={item.title} content={item.content} delete={deleteNote}/>)})}
        <Footer />
      </div>
    );
  }
  
  export default App;
  