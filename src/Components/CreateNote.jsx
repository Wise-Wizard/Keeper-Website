/* eslint-disable no-unused-vars */
import React from "react";
import Add from "@mui/icons-material/Add";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateNote(props) {
  const [note,setNote]=React.useState({title: "", content: ""});
  const [zoom, setZoom]=React.useState(false);

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

  function zoomEvent(){
    setZoom(true);
  }


  return (
    <div>
      <form className="create-note">
        {zoom?<input name="title" placeholder="Title" onChange={writeNote} value={note.title}/>:null}
        <textarea onClick={zoomEvent} name="content" placeholder="Take a note..." rows={zoom?3:1} onChange={writeNote} value={note.content}/>
        <Zoom in={zoom}><Fab onClick={submitNote}><Add /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateNote;
