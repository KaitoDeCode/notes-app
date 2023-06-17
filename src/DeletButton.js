import React from "react";
function DeleteButton({id, onDelete}){
    return(
        <button className="delete-button" onClick={()=>onDelete(id)}>DELETE</button>
    )
}

export default DeleteButton;