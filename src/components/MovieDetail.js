import React from 'react'

const MovieDetail=(props) =>{
    return (
       <div className="container">
           <div className = "row" onClick={props.returnInfo}>
               <i className="fas fa-arrow-left"></i>
               <span style={{fontStyle:"bold",marginLeft:10,cursor:"default"}}> Go back </span>
           </div>

           <div className="row">
                <div className="container-image"> 
                    {
                        props.currentMovie.poster_path == null ? 
                        <img src={"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"} alt="image" 
                        style={{ height:360}} 
                        />
                        : 
                        <img src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="image" 
                        style={{ height:360}}/>
                    } 
                </div>
           <div className="container-detail">
                <div className="info-container">
                    <p style={{fontSize:"28px", fontWeight:"bold",textDecoration:"underline"}}>Title : {props.currentMovie.title}</p>
                    <p style={{fontSize:"20px"}}>Language: {props.currentMovie.original_language}</p>
                    <p style={{fontSize:"20px"}}>Date of release: {props.currentMovie.release_date}</p>
                    <p style={{fontSize:"20px"}}>Synopsis:{props.currentMovie.overview}</p>
                </div>
           </div>
       </div>
</div>

    )

}

export default MovieDetail;
