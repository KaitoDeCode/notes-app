import React from "react";
import DeleteButton from "./DeletButton";

function NotesBody({ id,title,body, createdAt,onDelete, }){

    return(
        <article className="notes-list">
            <h3 className="notes-list-title" id="title">{title}</h3><br/>
            <p id="body" className="notes-list-body">{body}</p><br/>
            <p> <b>Created At:</b> {createdAt}</p>
            <DeleteButton id={id} onDelete={onDelete}/>
         </article>
    )
}

export default NotesBody;