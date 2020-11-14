import React, { Component } from 'react';
import axios from 'axios';
import {Link} from  'react-router-dom';
 
 
class TaskDetails extends Component {
  state = {}
 
  componentDidMount(){
    this.getTheTask();
  }
 
  getTheTask = () => {
    const { params } = this.props.match;
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/tasks/private/list/${params.id}`)
    .then( responseFromApi =>{
      const theTask = responseFromApi.data;
      this.setState(theTask);
    })
    .catch((err)=>{
        console.log(err)
    })
  }
 
  render(){
    return (
		<div className="container my-5">
			<div
				className="box"
				key={this.props.match.params.id}
				style={{ width: "60%" }}
			>
				<article className="media">
					<div className="media-content">
						<div className="content">
							<strong>{this.state.title}</strong>
							<p className="my-2">{this.state.description}</p>
							<Link
								className="button is-info mt-2"
								to={`/projects/${this.state.project}`}
							>
								Back to Project
							</Link>
						</div>
					</div>
				</article>
			</div>
		</div>
	);
  }
}
 
export default TaskDetails;