import React from "react";
import NotesBody from "./NotesListBody";


function NotesList({ contents, onDelete }) {
    return (
      <div className="body-content">
        {
          contents.map((content) => (
            <NotesBody key={content.id} onDelete={onDelete} {...content} />
            
          ))
        }
      </div>
    );
   }

export default NotesList;