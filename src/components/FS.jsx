// import { HomeStyles, BtnStyles } from "./styles/Home.styles"
// import {useState} from "react"
// // A hook in react is a special type of function that does a certain job in react, all hooks start with the name "use"
// const Home = () => {
//     // let name = "Dario"
//     const[name, laughName] = useState("Dario Navares");
//     const [age, setAge ] = useState(25);
//     const handleClick = (e) => {
//         laughName("John Carpenter");
//         setAge(32);
//         console.log(`Hello ${name}`, e.target);
//     }
    
//     // Using the setName function triggers react to rerender a component and update the value of the name variable.
//     const handleClickAgain = (name, e) =>{
//         laughName("Dayton Bridgerton");
//         setAge(96);
//         console.log(`Hello ${name}`, e.target);
//     }
    
//     return (
//         <HomeStyles>
//             <h2>Homepage</h2>
//             <p>{name} is {age} years old </p>
//             <BtnStyles>
//             <button onClick={handleClick}>L-Click</button>
//             <button onClick={(e)=>{handleClickAgain('Mario', e)}}>R-ClickA</button>
//             </BtnStyles>
//         </HomeStyles>
//     )
// }
// // Using Anonymous functions, ()=>{}which are functions that are not held in memory (Constants or variables) to handle click events 
// // We wrap functions that take in parameters when a click event is fired in anonymous functions in order to prevent it from automatically setting of irrespective of the event.
// // it is the anon function that gets access to the event object.


// export default Home