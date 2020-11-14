import ProjectList from './components/projects/ProjectList';
import Navbar from './components/Navbar/Navbar';
import ProjectDetails from './components/projects/ProjectDetails';
import TaskDetails from './components/tasks/TaskDetails';
import './App.css';
import 'bulma/css/bulma.css';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <div className="App">
    <Navbar />
      <Switch>
        <Route exact path="/projects" component={ProjectList} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
        <Route exact path="/tasks/:id" component={TaskDetails} />
      </Switch>
    </div>
  );
}

export default App;
