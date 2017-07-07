import React from 'react';
import {link} from 'react-router-dom';
import axios from 'axios';


export default class Playlist extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      inputValue:"",
      inputLength: false,
      submit_empty: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({inputValue: event.target.value});
    if(this.state.inputValue.length>16){
      this.setState({inputLength: true});
    }else{
      this.setState({inputLength: false})
    }
    if(this.state.inputValue){
      this.setState({submit_empty: false});
    }
  }
  handleSubmit(event){
    console.log("It's working if you see this:  "+ this.state.inputValue);
    this.setState({inputValue: ""})
    if (!this.state.inputValue){
      this.setState({submit_empty: true});
    } else{
      this.setState({submit_empty: false});
    }
    event.preventDefault()

    if(!this.state.inputLength && !this.state.submit_empty){
      
    };
  }


  render(){
    const oError = <div className="alert alert-warning"> Playlist needs a name</div>
    return(
<div className="well">
  <form className="form-horizontal" onSubmit= {this.handleSubmit}>
    <fieldset>
      <legend>New Playlist</legend>
      <div className="form-group">
        <label className="col-xs-2 control-label">Name</label>
        <div className="col-xs-10">
          <input className="form-control" type="text" value={this.state.inputValue} onChange={this.handleChange}/>
          <div className='warning'>
            {this.state.inputLength ? (<div className="alert alert-warning"> No more than 16 characters</div>):(null)}
            {this.state.submit_empty? (<div className="alert alert-warning"> Playlist needs a name</div>):(null)}
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-10 col-xs-offset-2">
          <button type="submit" disabled= {this.state.inputLength} className="btn btn-success">Create Playlist</button>
        </div>
      </div>
    </fieldset>
  </form>
</div>)
  }
}
