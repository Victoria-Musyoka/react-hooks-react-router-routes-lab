import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsItem=directors.map((directors)=>(
    <div key={directors.title}>
      <h2>{directors.title} </h2>
      <ul>
        {
          directors.movies.map((movie)=>
          (
            <li key="movie">
             { movie}
            </li>
          ))
        }
      </ul>
    </div>
  ))
  return (
  <div>
    <h1>Directors Page</h1>
    {directorsItem}
  </div>)
}

export default Directors;
