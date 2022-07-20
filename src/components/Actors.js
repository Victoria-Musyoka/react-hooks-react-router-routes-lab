import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsItem=actors.map((actors)=>(
    <div key={actors.name}>
     <h2>{actors.name}</h2> 
     <ul>
      {
        actors.movies.map((movies)=>(
         <li key={movies}>
          {movies}
         </li> 
        ))
      }
     </ul>
    </div>
  ))
  return (
    <div>
      <h1>Actors Page</h1>
     {actorsItem}
    </div>
  )
}

export default Actors;
