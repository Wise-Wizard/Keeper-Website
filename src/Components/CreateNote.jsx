/* eslint-disable no-unused-vars */
import React from "react";

function CreateNote(props) {
  const [note,setNote]=React.useState({title: "", content: ""});

  function writeNote(event){
    const text=event.target.value;
    const inputName= event.target.name;
    setNote((prevValue)=>{return {...prevValue,[inputName]:text}});
  }

  function submitNote(event){
    props.addNote(note);
    event.preventDefault();
    setNote({title: "", content: ""});
  }


  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={writeNote} value={note.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={writeNote} value={note.content}/>
        <button onClick={submitNote}>ADD</button>
      </form>
    </div>
  );
}

export default CreateNote;
