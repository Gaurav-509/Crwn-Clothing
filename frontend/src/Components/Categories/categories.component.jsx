import { Link } from 'react-router-dom';
import './categories.styles.scss';


const Categories = ({category}) => {
  const {image, title} = category;
  return( 
      <div className="category-container">
        <div className='background-image' 
        style={{
          backgroundImage: `url(${image})`,
          }}
        />
        <div className='category-body-container'>
          <h2>{title}</h2>
          <Link className='shopNowLink' to={`/shop/${title}`}><p className='shopNowKey'>Shop Now</p></Link>
        </div>
      </div> 
  )
}
export default Categories;