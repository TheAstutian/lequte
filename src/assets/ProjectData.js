import image01 from './brainfr.PNG';
import image02 from './wese90.PNG';
import image03 from './reactmovie.PNG';
import image04 from './hpc.PNG';

const  projectData=[
        { 
          id:1,
          project_name: "Brain FR",
          description: "Brain FR is an AI-powered face recognition web application. It receives image links as input from users and then marks out the faces in the image. Users are required to create an account and sign in before they can access the app",
          image_url: image01,
          tech_used: "Reactjs, Nodejs, Postgresql, and API from AI firm Clarifai. ", 
          project_link: "https://face-recognition-teqt.onrender.com",
          source_code:'https://github.com/TheAstutian/brainfr'
      
        },
        
        {
          id:2,
          project_name: "Wese90",
          description: "Wese90 is a simple landing page that I built for a warehouse company in Lagos, Nigeria.",
          image_url: image02,
          tech_used: "Basic HTML and CSS", 
          project_link: "https://wese90.netlify.app/",
          source_code:'https://github.com/TheAstutian/wese90'
        }, 
        { 
          id:3,
          project_name: "Movie Catalogue",
          description: "The Movie Catalogue displays information about latest popular movies in the Box Office. You can look up any movie and find out who the cast is, how much the budget is, etc.",
          image_url: image03,
          tech_used: "Reactjs and API from The Movie DB", 
          project_link: "https://movie-catalogue-yk0w.onrender.com/",
          source_code:'https://github.com/TheAstutian/movie_cat'
      
        }, 
        { 
          id:4,
          project_name: "Harry Potter Corner",
          description: "Most of my close friends love Harry Potter. So I built Harry Potter Corner, an expansive website for them and other Harry Potter fans all over the world",
          image_url: image04,
          tech_used: "Reactjs and APIs from Google, The Movie DB, and so on ", 
          project_link: "https://potter-fans.onrender.com/",
          source_code: "https://github.com/TheAstutian/potter-fans"
      
        },
      ]

 

export default projectData