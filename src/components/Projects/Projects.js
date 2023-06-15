import React from "react";
import {Link} from 'react-router-dom'
import brainfr from './../../resources/brainfr.PNG'

const data=[
  { 
    id:1,
    project_name: "Brain Recognition App",
    description: "AI powered face recognition web app. ",
    image_url: brainfr,
    tech_used: "Built with React.js. Consumes API from Clairifai. ", 
    project_link: "https://face-recognition-teqt.onrender.com",
    source_code:'https://github.com/TheAstutian/brainfr'

  },
  
  {
    id:2,
    project_name: "Brain Friend",
    description: "Detects the faces of humans in pictures",
    image_url:'brainfr',
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
            {data.map((item, index)=>{
           return  <Link to={{pathname:`/projects/${item.id}`}} state={data[index]}> <p>{item.project_name}</p> </Link> 
          } )}
        </div>
      </div>
    )
}
}

export default Projects;