import React from 'react'
import { useLocation } from 'react-router-dom';
import './Project.css'

const Project =(props)=>{

  const  location = useLocation()
  const from  = location.state


    return (
        <div className='pa2 mt3 mb3 main' > 
            <div className='title'>
                <h1>{from.project_name}</h1>
            </div>
            <div className='w-50 image'>
                <img src={from.image_url} alt='1'/>
            </div>
            <div className='description'>
                <p> {from.description}</p>
            </div>
            <div className="tech">
                <p>Built with {from.tech_used}</p>
            </div>
            <div className='links'> 
                <p> <a href={`${from.project_link}`} target="blank">Visit Website</a></p> 
                <p><a href={`${from.source_code}`} target="blank">Codes</a></p>
            </div>

        </div>
    )
}

export default Project; 