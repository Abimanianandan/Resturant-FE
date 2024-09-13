import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FcRating } from "react-icons/fc";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { resturantContext } from "./App";
import { Button } from "react-bootstrap";

const Resturant2 = () => {
  const [resturant2, setResturant2] = useState([]);
  const {
    name,
    cart,
    setCart,
    total,
    setTotal,
    cartItem,
    setCartItem,
    toggle,
    setToggle,
  } = useContext(resturantContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://resturant-be.onrender.com/api/hotel2/getAllFoods"
      );
      setResturant2(res.data.foods);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDecrease = (item) => {
    if (cartItem.includes(item)) {
      setCartItem((prevCartItems) =>
        prevCartItems.filter((cartItem) => cartItem !== item)
      );
      setTotal((prevTotal) => prevTotal - item.price);
      setCart((prevCart) => Math.max(prevCart - 1, 0));
    }
  };

  const handleIncrease = (item) => {
    if (!cartItem.includes(item)) {
      setCartItem((prevCartItems) => [...prevCartItems, item]);
    }
    setTotal((prevTotal) => parseInt(prevTotal) + parseInt(item.price));
    setCart((prevCart) => prevCart + 1);
  };

  return (
    <>
      <div
        className="container d-flex flex-wrap p-3 gap-4"
        style={{ border: "2px doted" }}
      >
        {toggle ? (
          cartItem.map((item, index) => {
            return (
              <div
                className="card h-100"
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
        ) : (
          <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">
              {resturant2.map((item, index) => {
                return (
                  <div
                    className="col shadow p-3 mb-5 bg-body-tertiary rounded"
                    key={index}
                  >
                    {item.name.toLowerCase().includes(name.toLowerCase()) ? (
                      <div className="card mb-3" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={item.img}
                              className="img-fluid mt-5 ms-2"
                              alt="foods"
                              style={{ borderRadius: "50%" }}
                            />
                          </div>
                          <div className="col-md-7 ms-3">
                            <div className="card-body">
                              <h5 className="card-title">{item.name}</h5>
                              <p className="card-text fw-bold">
                                <RiMoneyRupeeCircleFill
                                  fill="green"
                                  fontSize={20}
                                />
                                {item.price}
                              </p>
                              <p className="card-text">
                                <FcRating fontSize={20} /> {item.rating}
                              </p>
                              <p className="card-text fst-italic text-secondary">
                                {item.fooditem}
                              </p>
                              <Button
                                to={""}
                                className="btn btn-primary"
                                onClick={() => handleIncrease(item)}
                              >
                                Add to Cart
                              </Button>
                              <Button
                                to={""}
                                className="btn btn-danger ms-3"
                                onClick={() => handleDecrease(item)}
                              >
                                Remove to Cart
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resturant2;
