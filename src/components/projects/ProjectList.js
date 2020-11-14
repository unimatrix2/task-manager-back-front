import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
 
import AddProject from './AddProject'; // <== !!!
 
class ProjectList extends Component {
    state = { listOfProjects: [] }
 
    getAllProjects = () =>{
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/projects/private/list`)
            .then(responseFromApi => {
                this.setState({
                listOfProjects: responseFromApi.data
            })
        })
    }
 
    componentDidMount() {
        this.getAllProjects();
    }
 
    render(){
        return( 
            <div className="container">
                <div style={{width: '30%', float:"left", margin: "20px 0 0 20px"}}>
                    { this.state.listOfProjects.map( project => {
                        return (
                            <div className="box" key={project._id}>
                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <Link to={`/projects/${project._id}`}><strong>{project.title}</strong></Link>
                                                <br></br>
                                                {project.description}
                                            </p>
                                                <ul style={{listStyle: 'none'}}>
                                                    {project.tasks && project.tasks.map(task => {
                                                        return (
                                                            <li key={task._id}><Link to={`/tasks/${task._id}`}>{task.title}</Link></li>
                                                        )
                                                    })}
                                                </ul>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        )})
                    }
                </div>
                <div style={{width: '40%', float:"right"}}>
                    <AddProject getData={() => this.getAllProjects()}/> {/* <== !!! */}
                </div>
            </div>
        )
    }
}
 
export default ProjectList;