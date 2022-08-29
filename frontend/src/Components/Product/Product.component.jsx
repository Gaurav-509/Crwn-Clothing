import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './Product.styles.scss';

const Products = () => {

    const { category } = useParams();
  const [productsData, setProductsData] = useState([]);

      useEffect(() => {
        fetch(`http://localhost:3005/api/products/shop/${category}`)
          .then((response) => response.json())
          .then((hats) => {setProductsData(hats.data)});
      }, [category]);

  return (
    <div className="shop-page">
      <div className="collection-page">
      <h2 className="title">{category}</h2>
      {
        productsData.length > 0 ? <div className="items">
        {
          productsData.map ((hats)=>(
            <div className="collection-item">
              <div className='image' style={{ backgroundImage: `url(${hats.imageUrl})`}}
                />
              <div className="collection-footer">
                <span className="name">{hats.name}</span>
                <span className="price">{hats.price}</span>
                
              </div>
              <button className="inverted  custom-button">Add to Cart</button>
            </div>
          ))
        } 
        
      </div> : 'No Data Found'
      
      }
      
      
    </div>
    </div>
  

    
  );

}

export default Products;