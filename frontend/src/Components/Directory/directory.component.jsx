import Categories from "../Categories/categories.component";

import { useEffect, useState } from "react";

import './directory.styles.scss';

const Directory = () =>{
  
      const [actualdata, setActualdata] = useState([]);

      useEffect(() => {
  fetch(`http://localhost:3005/api/categories`)
    .then((response) => response.json())
    .then((json) => {setActualdata(json.data)});
}, []);


    

  return (
    <div className='directory-container'>
      {actualdata.map((category) => (
        <Categories key={category._id} category={category} />
      ))}
    </div>
  )
}

export default Directory;