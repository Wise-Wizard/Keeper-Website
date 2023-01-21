import React from "react";

function CreateNote() {
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button>ADD</button>
      </form>
    </div>
  );
}

export default CreateNote;
