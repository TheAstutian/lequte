import React from "react";
import {Link} from 'react-router-dom'
import projectData from './../../assets/ProjectData'

class Projects extends React.Component {

  
    render(){

      const h2Style={
        color: "white", 
        fontSize: "2rem",
        fontWeight: "lighter"
      }

      return (
      <div className="mt5 pt4 pl4 ml2"> 
        <h2 style={h2Style}>Projects</h2>
          <div>
            {projectData.map((item, index)=>{
           return  <Link to={{pathname:`/projects/${item.id}`}} state={projectData[index]}> <p>{item.project_name}</p> </Link> 
          } )}
        </div>
      </div>
    )
}
}

export default Projects;