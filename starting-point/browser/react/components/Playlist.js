import React from 'react'
import {link} from 'react-router-dom'


export default class Playlist extends React.Component{
  constructor(props){
    super(props);
    this.state{
      inputValue:""
    }
    this.handleChange = this.handleChange.bind(this;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({inputValue: event.target.value})
  }
  handleSubmit(event){
    console.log("It's working if you see this:  "+ this.state.inputValue);
    event.preventDefault()
  }


  render(){
    return(
<div className="well">
  <form className="form-horizontal" onSubmit= {this.handleSubmit}>
    <fieldset>
      <legend>New Playlist</legend>
      <div className="form-group">
        <label className="col-xs-2 control-label">Name</label>
        <div className="col-xs-10">
          <input className="form-control" type="text" onChange={this.handleChange}/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-10 col-xs-offset-2">
          <button type="submit" className="btn btn-success">Create Playlist</button>
        </div>
      </div>
    </fieldset>
  </form>
</div>)
  }
}
