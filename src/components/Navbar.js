import React, {Component} from 'react'

class Navbar extends Component {
    render (){
        return(
        <nav>
            <div class="nav-wrapper" >
                <div class="brand-logo center" style = {{fontSize:"20px", fontWeight:"bold"}} >
                    Movie Searching App
                </div>
            </div>
        </nav>

        )
    }
}

export default Navbar;