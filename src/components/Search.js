
import React, { Component, Fragment } from "react";

class Search extends Component {
    constructor (props){
        super(props);
        this.state={
            suggestions : [],
            text:'',
        };
    }
onTextChanged =(e)=>{
    const {items} = this.props
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0){
        const regex = new RegExp(`^${value}`,'i');
        var m = JSON.stringify([items]);
        suggestions = JSON.parse(m).filter(v => regex.test(v));
        // suggestions = Object.keys(items).filter(v => regex.test(v));
        console.log(suggestions)
    }
    this.setState(()=> ({suggestions, text:value}));
    }

suggestionSelected (value) {
    this.setState(() =>({
        text:value,
        suggestions:[],
    }))
}

renderSuggestions (){
   const {suggestions} = this.state; // destructuring the suggestions
   if(suggestions.length === 0){
       return null;
   }
   return(
    <ul>
    {suggestions.map((items) => <li onClick={()=>this.suggestionSelected(items)}>{items}</li>)}
  </ul>
   );


}

render (){
    const {text} = this.state;
    return(
        <div>
            <input
            value={text}
            onChange={this.onTextChanged} 
            type = "text"/>
            {this.renderSuggestions()}
        </div>
    )
}
}




//  import React, { useEffect } from "react"

//  function Search (props){
//     // console.log(props.handleSubmit)
//     // useEffect(() => {
//     //     const M = window.M;
//     //     var options ={
//     //         data:props.handleSubmit
//     //     };
//     //     // onAutocomplete((props) => {
//     //         //     props.handleChange();
//     //         // })
//     //         console.log(props)
//     //     document.addEventListener('DOMContentLoaded', function() {
//     //         var elems = document.querySelectorAll('.autocomplete');
//     //         var instances = M.Autocomplete.init(elems, options);
//     //       });
//     //     })
//     return (
//         // <div class="row">
//         //     <div class="col s12">
//         //     <div class="row">
//         //         <div class="input-field col s12">
//         //         {/* <i class="material-icons prefix">textsms</i> */}
//         //         <form action="" onSubmit={props.handleSubmit}></form>
//         //         <input type="text" 
//         //         id="autocomplete-input"
//         //          class="autocomplete"
//         //          onChange={props.handleChange}
//         //          />
//         //         <label for="autocomplete-input">Search Movies</label>
//         //         </div>
//         //     </div>
//         //     </div>
//         // </div>
 
//        <div className="container">
//           <div className = "row">
//               <section className = "col s4 offset-s4">
//                   <form action="" onSubmit={props.handleSubmit}>
//                       <div className="input-field">
//                           <input placeholder = "Type Keywords" 
//                           type="text"
//                           id="autocomplete-input"
//                           onChange={props.handleChange}/>
//                       </div>
//                   </form>
//               </section>
//           </div>
//       </div>
      
       
      
//         )



// }

export default Search;