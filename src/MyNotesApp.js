import React from "react";
import {getInitialData,showFormattedDate} from './data'
import NotesList from './NotesList'
import ContentInput from "./newNotes";

class MyNotesApp extends React.Component {
constructor(props){
    super(props);
    this.state={
        contents : getInitialData(),
        Date:showFormattedDate()
    }
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddBodyHandler = this.onAddBodyHandler.bind(this)

}

onDeleteHandler(id){
    const contents = this.state.contents.filter(content => content.id !==id)
    this.setState({ contents })
}

onAddBodyHandler({ title, body,createdAt,archieved }) {
    this.setState((prevState) => {
      return {
        contents: [
          ...prevState.contents,
          {
            id: +new Date(),
            title,
            body,
            createdAt,
            archieved:false
          }
        ]
      }
    });
  }

  showFormattedDate = (createdAt) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }
    return new Date(createdAt).toLocaleDateString("id-ID", options)
  }

  

render(){
    // const contents = getInitialData();
    return(
        <header>
            <h1>MyNotes App</h1>
            <div className="body">
            <h2>Add New Note</h2>
            <ContentInput addContent={this.onAddBodyHandler}/>
            <h2>Your Notes</h2>
            <NotesList contents={this.state.contents} onDelete={this.onDeleteHandler} />
            </div>
        </header>
    )
  }
}

export default MyNotesApp;