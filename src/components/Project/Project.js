import React from 'react'
import { useLocation } from 'react-router-dom';
import './Project.css'

const Project =(props)=>{

  const  location = useLocation()
  const from  = location.state


    return (
        <div className='w-100 pa2 ma3 main' >
            <div>
                <h1>{from.project_name}</h1>
            </div>
            <div className='w-75'>
                <img src={from.image_url} alt='1'/>
            </div>
            <div>
                <p>Description: {from.description}</p>
            </div>
            
            <div>
                <p>Tech used: {from.tech_used}</p> 
                <p>project link</p> 
                <p>github link </p>
            </div>

        </div>
    )
}

export default Project; 