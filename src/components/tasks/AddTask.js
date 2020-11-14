import React, { Component } from 'react';
import axios from 'axios';
 
class AddTask extends Component {
  state = { title: "", description: "", isShowing: false } // `isShowing` will help us to toggle add task form
   
  handleFormSubmit = (event) => {
    event.preventDefault();

    const { title, description } = this.state
    const projectID = this.props.theProject._id;

    axios.post(`${process.env.REACT_APP_API_BASE_URL}/tasks/private/create`, { title, description, project: projectID })
    .then( () => {
          // after submitting the form, retrieve project one more time so the new task is displayed as well 
          //              |
        this.props.getTheProject();
        this.setState({title: "", description: "", isShowing: false});
    })
    .catch( error => console.log(error) )
  }
 
  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }
 
  toggleForm = () => {
      this.setState({ isShowing: !this.state.isShowing });
  }
 
  showAddTaskForm = () => {
    return this.state.isShowing && (
        <div className="modal is-active">
            <div className="modal-background" onClick={this.toggleForm}></div>
                <div className="modal-content has-background-white px-4 py-4" style={{width: '40%', height: '45%', borderRadius: 5}}>
                    <p className="title is-4 mt-5">Add Task to Project</p>
                    <form onSubmit={this.handleFormSubmit}>
                        <label>Title:</label>
                        <input className="input my-2" type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)}/>
                        <label>Description:</label>
                        <textarea className="textarea mt-2" name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
                  
                        <input className="button is-success mt-3" type="submit" value="Create Task" />
                    </form>
                </div>
            <button className="modal-close is-large" aria-label="close" onClick={this.toggleForm}></button>
        </div>
          )
  }
 
  render() {
    return (
      <div>
            <hr />
            <button className="button" onClick={() => this.toggleForm()}> Add task </button>
            { this.showAddTaskForm() }
      </div>
    )
  }
}
 
export default AddTask;