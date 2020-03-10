import React from 'react';

const Pagination = (props) => {
    const moviepages = []; 

    for ( let i=1; i<=props.pages+1; i++){
        let latestPage= props.currentPage == i ? 'active':'';

    moviepages.push(<li className={`waves-efect ${latestPage}`} key = {i} onClick = {()=>props.nextPage(i)}> <a href = "#">{i}</a></li>)
    }

return (
    <div className="container">
        <div className="row">
            <ul className="pagination">
                {props.currentPage > 1 ? <li className={`waves-efect`}  onClick = {()=>props.nextPage(props.currentPage-1)}> <a href = "#">Previous</a></li> : ''}
                {moviepages}
                {props.currentPage < props.pages+ 1 ? <li className={`waves-efect`}  onClick = {()=>props.nextPage(props.currentPage+1)}> <a href = "#">Next</a></li> : ''}
               
            </ul>
        </div>
    </div>
    )
}
export default Pagination;

