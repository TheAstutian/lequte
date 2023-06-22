import React from "react";
import {Link} from 'react-router-dom'
import projectData from './../../assets/ProjectData'
import './Projects.css'

class Projects extends React.Component {

  
    render(){

      return (
      <div className="mt5 pt4 pl4 ml2"> 
        <h2 className="h2style">Projects</h2>
          <div>
            {projectData.map((item, index)=>{
           return  <Link className="linkstyle" to={{pathname:`/projects/${item.id}`}} state={projectData[index]}> <p>{item.project_name}</p> </Link> 
          } )}
        </div>
      </div>
    )
}
}

export default Projects;