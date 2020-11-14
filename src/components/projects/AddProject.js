import React, { Component } from 'react';
import axios from 'axios';

class AddProject extends Component {
    state = { title: "",
    description: ""
    }
     
    handleFormSubmit = async (event) => {
        try {
            event.preventDefault();

            const { title, description } = this.state;

            await axios.post(`${process.env.REACT_APP_API_BASE_URL}/projects/private/create`, { title, description })
            .then( () => {
            this.props.getData();
            this.setState({title: "", description: ""});
        })
        } catch (error) {
            console.log(error)
        }
    }
   
    handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
   
    render(){
      return(
        <div style={{marginTop: 20, marginRight: "20%"}}>
        <p className="title is-3">Create Project</p>
          <form onSubmit={this.handleFormSubmit}>
            <label>Title:</label>
            <input className="input my-2" type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)}/>
            <label>Description:</label>
            <textarea className="textarea my-2" name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
            
            <input className="button mt-2 is-success" type="submit" value="Create Project" />
          </form>
        </div>
      )
    }
  }
   
  export default AddProject;