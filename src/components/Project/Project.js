import React from 'react'
import { useLocation } from 'react-router-dom';
import './Project.css'

const Project =(props)=>{

  const  location = useLocation()
  const from  = location.state


    return (
        <div className='pa2 mv3 main' >
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
                <p>{from.tech_used}</p>
            </div>
            <div className='links'> 
                <p>Link: <a href={`${from.project_link}`} target="blank">{from.project_link}</a></p> 
                <p>Codes: <a href={`${from.source_code}`} target="blank">{from.source_code}</a></p>
            </div>

        </div>
    )
}

export default Project; 