import React from "react";

const SearchBox = ({ searchChange}) => {
    return(
       <div className="pa2">
         <input 
         className=' ba b--green bg-lightest-blue tc br3 pa3 ' 
         type= 'search'
         placeholder='Search Robots'
         onChange={searchChange}
         />
       </div>
    );
}

export default SearchBox;