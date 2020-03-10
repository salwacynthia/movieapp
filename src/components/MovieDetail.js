import React from 'react'

const MovieDetail=(props) =>{
    return (
       <div className="container">
           <div className = "row" onClick={props.returnInfo}>
               <i className="fas fa-arrow-left"></i>
               <span style={{marginLeft:10}}> Go back </span>
           </div>
           <div className="row">
               <div className="col s12 m4"> 
               {
                props.currentMovie.poster_path == null ? <img src={"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"} alt="image" 
                style={{width:"100%", height:360}} /> : 
                <img src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="image" 
                style={{width:"100%", height:360}}/>
               } 
               </div>
           <div className="col s12 m8">
               <div className="info-container">
                <p style={{fontSize:"20px", fontWeight:"bold",textDecoration:"underline"}}>Title : {props.currentMovie.title}</p>
                <p style={{fontSize:"15px"}}>Language: {props.currentMovie.original_language}</p>
                <p style={{fontSize:"15px"}}>Date of release: {props.currentMovie.release_date}</p>
                <p style={{fontSize:"15px"}}>Sunopsis:{props.currentMovie.overview}</p>
               </div>
           </div>
       </div>
</div>

    )

}

export default MovieDetail;
