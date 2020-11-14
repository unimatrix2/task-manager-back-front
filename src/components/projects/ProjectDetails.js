import React, { Component } from 'react';
import axios from 'axios';
import EditProject from './EditProject';
import AddTask from '../tasks/AddTask';
import { Link } from 'react-router-dom';
 
class ProjectDetails extends Component {
  state = {}
 
  componentDidMount(){
    this.getSingleProject();
  }
 
  getSingleProject = () => {
    const { params } = this.props.match;
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/projects/private/list/${params.id}`)
    .then( responseFromApi =>{
      const theProject = responseFromApi.data;
      this.setState(theProject);
    })
    .catch((err)=>{
        console.log(err)
    })
  }
 
// DELETE PROJECT:
  deleteProject = () => {
    const { params } = this.props.match;
    axios.delete(`${process.env.REACT_APP_API_BASE_URL}/projects/private/delete/${params.id}`)
    .then( () =>{
        this.props.history.push('/projects'); // !!!         
    })
    .catch((err)=>{
        console.log(err)
    })
  }
 
  render(){
    return(
      <div className="container my-5">
        <h1 className="mb-2"><strong>Project Name: </strong>{this.state.title}</h1>
        <p><strong>Project Description: </strong>{this.state.description}</p>
        <ul style={{listStyle: 'inside'}} className="mt-2"><strong>Tasks:</strong>
            {this.state.tasks && this.state.tasks.map(task => {
                return (
                    <li key={task._id}><Link to={`/tasks/${task._id}`}>{task.title}</Link></li>
                )
            })}
        </ul>
        <div className="container">{this.state.title && <EditProject theProject={this.state} deleteProject={this.deleteProject} {...this.props} />}</div>
        <div className="container">{this.state.title && <AddTask theProject={this.state} getTheProject={this.getSingleProject} />}</div>
      </div>
    )
  }
}
 
export default ProjectDetails;