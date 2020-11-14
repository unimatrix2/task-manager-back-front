import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
 
class EditProject extends Component {
  state = {
    title: this.props.theProject.title, 
    description: this.props.theProject.description
  }
  
  handleFormSubmit = (event) => {
    const title = this.state.title;
    const description = this.state.description;
 
    event.preventDefault();
 
    axios.put(`${process.env.REACT_APP_API_BASE_URL}/projects/private/update/${this.props.theProject._id}`, { title, description })
    .then( () => {
        // after submitting the form, redirect to '/projects'
        this.props.history.push('/projects');    
    })
    .catch( error => console.log(error) )
  }
 
  handleChangeTitle = (event) => {  
    this.setState({
      title:event.target.value
    })
  }
 
  handleChangeDesc = (event) => {  
    this.setState({
      description:event.target.value
    })
  }
 
  render(){
    return (
      <div className="container is-max-desktop">
        <hr />
        <h3 className="my-2 title is-4"><strong>Edit Project</strong></h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input className="input my-2" type="text" name="title" value={this.state.title} onChange={e => this.handleChangeTitle(e)}/>
          <label>Description:</label>
          <textarea className="textarea my-2" name="description" value={this.state.description} onChange={e => this.handleChangeDesc(e)} />
          
          <input className="button mt-2 is-normal is-warning" type="submit" value="Edit" />
          <button className="button is-danger mt-2 ml-2 is-normal" onClick={() => this.props.deleteProject()}>Delete project</button> {/* <== !!! */}
          <Link className="button mt-2 ml-2 is-normal is-info" to={'/projects'}>Back to projects</Link>
        </form>
      </div>
    )
  }
}
 
export default EditProject;