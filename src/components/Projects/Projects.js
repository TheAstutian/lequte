import React from "react";


const data=[
  { 
    project_name: "Brain",
    description: "description",
    image:'',
    tech_used: "Reactjs, Nodejs, Postgresql", 
    project_link: "",
    github_link:''

  },
  
  {
    project_name: "Brain2",
    description: "description",
    image:'img',
    tech_used: "Reactjs, Nodejs, Postgresql", 
    project_link: "",
    github_link:''
  }
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
           return   <p><a href="{item.project_link}">{item.project_name}</a></p>
          } )}
        </div>
      </div>
    )
}
}

export default Projects;