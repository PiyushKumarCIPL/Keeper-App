import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Note from './Components/Note';
import CardData from './Components/CardData';
import CreateArea from './Components/CreateArea';
function createCard(prop) {
  return (
    <Note
      key={prop.id}
      CdHeader={prop.CdHeader}
      CdInfo={prop.CdInfo}
    />
  );
}


function App() {
  const [notes, setNotes] = useState([]);
  function AddNote(newNote){
    setNotes(preNote => {
      return [...preNote, newNote]
    });
  }
  function deleteNote(id){
    console.log("delete was trigered");
    setNotes(prevNotes=>{
      return prevNotes.filter((noteItems,index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header/>
      <Footer/>
      <CreateArea onAdd={AddNote}/>
      {notes.map((noteItems, index) =>{
        return <Note 
          key={index}
          id={index}
          title = {noteItems.title}
          content = {noteItems.content}
          onDelete ={deleteNote}
        />
      })}
    </div>
  );
}

export default App;
