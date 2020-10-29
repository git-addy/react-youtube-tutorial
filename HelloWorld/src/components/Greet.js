import React from 'react'

 const Greet = props => {
     //since we will use more than one line of code, we need to make sure to include parenthesis after return. We are using 2 elements now h1 and p and thats why we need to wrap these in a div cause we can render only one wrapper
 return (
     <div>
        <h1>Hello {props.name} a.k.a {props.heroname}</h1>
        {props.children}
    </div>
    )
 }
   


// for connecting this to the rest of of the app
// we need to export it from here
// and import it into App.js
export default Greet