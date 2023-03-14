import React from "react";

function Note(prop){
    function handleDelete(){
        prop.onDelete(prop.id);
    }
    return <div className="note">
        <h1>
            {prop.title}
        </h1>
        <p>{prop.content}</p>
        <button onClick={handleDelete}>Delete</button>
    </div>
}

export default Note;
