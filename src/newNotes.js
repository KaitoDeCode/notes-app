import React from 'react';


class ContentInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            body:'',
            createAt:'',
            archieved:false
        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
        this.onDateChangeEventHandler = this.onDateChangeEventHandler.bind(this)
        this.onArchievedChangeEventHandler = this.onArchievedChangeEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
       
    }

    onArchievedChangeEventHandler=({content})=>{
        const archieved = this.state.contents.map(content=>content === content ?{...content,archieved: !content.archieved} : content
            );
            this.setState({ contens: archieved})
    }
    onTitleChangeEventHandler(event) {
        this.setState(() => {
          return {
            title: event.target.value,
          }
        });
      }

      onBodyChangeEventHandler(event) {
        this.setState(() => {
          return {
            body: event.target.value,
          }
        });
      }





      onDateChangeEventHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
     }





      onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addContent(this.state);
      {this.state.contents.filter(content => content.isCompleted === true).map((content, index) => {
        return(
            <form key={index}className='form' onSubmit={this.onSubmitEventHandler} style={{color:'red'}}>
                <input type="text" placeholder='Title' value={this.state.title} onChange={this.onTitleChangeEventHandler} style={{color:'red'}} /><br/>
                <textarea type="text" placeholder='content...' value={this.state.body} onChange={this.onBodyChangeEventHandler} /><br/>
                <input type="datetime-local" value={this.state.createAt} onChange={this.onDateChangeEventHandler} name="createdAt" style={{color:'red',backgroundColor:'black',borderWidth:2,borderColor:'red'}}/><br/>
                <button type="submit">ADD</button>
            </form>
         )
        })}
    }

    render(){
        return(
            <form className='form' onSubmit={this.onSubmitEventHandler} style={{color:'red'}}>
                <input type="text" placeholder='Title' value={this.state.title} onChange={this.onTitleChangeEventHandler} style={{color:'red'}} /><br/>
                <textarea type="text" placeholder='content...' value={this.state.body} onChange={this.onBodyChangeEventHandler} /><br/>
                <input type="datetime-local" value={this.state.createAt} onChange={this.onDateChangeEventHandler} name="createdAt" style={{color:'red',backgroundColor:'black',borderWidth:2,borderColor:'red'}}/><br/>
                <button type="submit">ADD</button>
            </form>
        )
        }

}    
export default ContentInput;