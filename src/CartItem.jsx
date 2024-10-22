import React, { useContext } from 'react'
import { resturantContext } from './App';

const CartItem = () => {
    const {cartItem,model} = useContext(resturantContext);
  return (
    cartItem.map((item, index) => {
        return (
          <div
            className={ model ? "opacity-0" : "card h-100" }
            key={index}
            style={{ width: "18rem" }}
          >
            <img
              src={item.img}
              className="card-img-top"
              alt="resturant-img"
            />
            <div className="card-body text-center">
              <b className="text-success">{item.name}</b> <br />
            </div>
          </div>
        
        );
      })
  )
}

export default CartItem