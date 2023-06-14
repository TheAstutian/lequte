import React from "react";
import {Link} from 'react-router-dom'

const data=[
  { 
    id:1,
    project_name: "Brain",
    description: "description",
    image:'',
    tech_used: "Reactjs, Nodejs, Postgresql", 
    project_link: "",
    github_link:''

  },
  
  {
    id:2,
    project_name: "Brain2",
    description: "description2",
    image:'img',
    tech_used: "Reactjs, Nodejs, Postgresql", 
    project_link: "",
    github_link:''
  }, 
  { 
    id:3,
    project_name: "Brain3",
    description: "description3",
    image:'',
    tech_used: "Reactjs, Nodejs, Postgresql", 
    project_link: "",
    github_link:''

  },
]


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
            {data.map((item)=>{
           return  <Link to={{pathname:`/projects/${item.id}`, data:`{item}`}}> <p>{item.project_name}</p> </Link> 
          } )}
        </div>
      </div>
    )
}
}

export default Projects;