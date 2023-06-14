import React from 'react'
import { useLocation } from 'react-router-dom'

const Project =(props)=>{

  const  location = useLocation()
  const from  = location.state


    return (
        <div>

            <p> Name:  {from.project_name}</p>
            <p>Description: {from.description}</p>
            <p>image</p>
            <p>Tech used: {from.tech_used}</p> 
            <p>project link</p> 
            <p>github link </p>
        </div>
    )
}

export default Project; 