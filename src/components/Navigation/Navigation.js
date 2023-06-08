import React from "react";
import Ztext from "react-ztext";
import './Navigation.css'


const Navigation = ()=>{
    const wrapperStyle = {
    //position: "absolute",
       // top: 0,
       // left: 0,
       // right: 0,
        //bottom: 0,
       // height: 100,
        //margin: "auto",
        //textAlign: "center",
        marginLeft: "50px", 
        width: "100px",
        height: "100px", 
      //  fontSize: "3.5em",//
     
      
      };
    return (
        <div className="w-100 pt3 ph3"
            style={{display:"flex", justifyContent: "space-between"}}
            >
            <div className=" "
                style={wrapperStyle}
                >
                 <Ztext 
                        depth="10px"
                        direction="both"
                        event="pointer"
                        eventRotation="30deg"
                        eventDirection="default"
                        fade={false}
                        layers={50}
                        perspective="500px"
                    >
                       <h1 className="logo">Q</h1>
                  </Ztext>
            </div>
            <div className=' pa2 navigation' >
                <a className="no-underline near-white bg-animate email inline-flex items-center ma2 tc br2 pa2" href="mailto:speakingatoms@gmail.com" target="blank">
                <svg className = "dib h2 w2" fill = "currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                <span id="span">speakingatoms@gmail.com</span>
                </a>

                <a className="no-underline near-white bg-animate inline-flex items-center ma2 tc br2 pa2" href="https://github.com/TheAstutian" target="blank">
                    <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
                </a>
                <a className="no-underline near-white bg-animate inline-flex items-center ma2 tc br2 pa2" href="https://twitter.com/lequte" target="blank">
                    <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fill-rule="nonzero"/></svg>
                 </a>
            </div>
        </div>
    )
}

export default Navigation;