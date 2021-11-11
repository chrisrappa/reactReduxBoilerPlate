import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listItems } from '../actions/itemActions';



function HomeScreen (props) {

  const category = props.match.params.id ? props.match.params.id:'';
  
  const itemList = useSelector(state => state.itemList);
  const {items, loading, error} = itemList;
  
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(listItems(category));
      
      return () => {
          //
      }
  }, [category, dispatch]);

  return (
  <>
    <div className="jumbo">
      <div className="main-img">
        <img className="grow" src="https://res.cloudinary.com/djrbfvpit/image/upload/v1615848655/jumbopicsmaller_fhfhjt.png" alt = '' />
      </div>
      <div className="tagline">
        <h1>Meal Prep.</h1>
        <span className="taglinesub"><h1>Made Easy.</h1></span>
        <img className="fade-in slide-in-down" src="https://res.cloudinary.com/djrbfvpit/image/upload/v1616011006/downarrow_cz4juo.png" alt = '' />
      </div>
    </div>
    <div className="order-steps">
      <img src="https://res.cloudinary.com/djrbfvpit/image/upload/v1616008974/checkoutsteps_phlzyk.png" alt = '' />
    </div>
    {loading ? (
      <div>Loading...</div>
    ) : error? (
      <div>{error}</div>
    ) : (
      <ul className="items" id="items">
        {items.map((item) => (
          <li key={item._id}>
              <div className="item">
                <Link to={'/item/' + item._id}>
                  <img className="item-image" src={item.image} alt="item"/>
                </Link> 
                <div className="item-name">
                  <Link to={'/item/' + item._id}>{item.name}</Link> 
                  </div>
                <div className="item-price">${item.price}</div>
                <div className="item-rating">{item.rating} Stars</div>
                <div className="item-rating">{item.numReviews} Reviews</div>
                <div>
                  <Link to={'/item/' + item._id}>
                    <button className="button primary">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
          </li>
        ))}
        </ul>  
      )}
    
  </>
  );
}
    

export default HomeScreen;