// import Products from "../../Products/Products.component";

import './shop-menu.styles.scss';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShopMenu = () => {

  const { category } = useParams();
  const [productsData, setProductsData] = useState([]);

      useEffect(() => {
        fetch(`http://localhost:3005/api/products/all/shop-menu`)
          .then((response) => response.json())
          .then((hats) => {setProductsData(hats.data)});
      }, [category]);

  return (
      <div className='shop-page'>
          <div className='collection-overview'>
            {productsData.map ((hats)=>(
              <div className='collection-preview'>
                <h1 className='title'>{hats._id}</h1>
                <div className='preview'>
                  {
                    hats.items.map((obj)=>(
                      <div className='collection-item'>
                        <div className='image' style={{ backgroundImage: `url(${obj.imageUrl})`}}/>
                        <div className='collection-footer'>
                          <span className='name'>{obj.name}</span>
                          <span className='price'>{obj.price}</span>
                        </div>
                        <button className="inverted  custom-button">Add to Cart</button>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))}
          </div>
      </div>
      
    );
}

export default ShopMenu;

