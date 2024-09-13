import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FcRating } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";
import CarouselPage from "./CarouselPage";
import { resturantContext } from "./App";
import { Link } from "react-router-dom";

const DisplayResturant = () => {
  const [resturant, setResturant] = useState([]);
  const { name } = useContext(resturantContext);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://resturant-be.onrender.com/api/resturant/allresturant"
      );
      setResturant(res.data.resturant);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="container mt-5">
        {name ? "" : <CarouselPage />}
        <div className=" row row-cols-1 row-cols-md-4 g-4 mt-5">
          {resturant.map((item, index) => {
            return (
              <div
                className="col shadow p-3 mb-5 bg-body-tertiary rounded home"
                key={index}
              >
                {item.name.toLowerCase().includes(name.toLowerCase()) ? (
                  <div className="card h-100">
                    <img
                      src={item.img}
                      className="card-img-top"
                      alt="resturant-img"
                      style={{ height: "250px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <b className="card-text">
                        <FcRating fontSize={"20px"} /> {item.rating}
                      </b>
                      <p className="fst-italic fw-normal mt-3">
                        {item.fooditem}
                      </p>
                      <p className="fw-light">
                        <FaLocationDot fill="green" fontSize={"20px"} />{" "}
                        {item.location}
                      </p>
                      <Link
                        to={item.link}
                        className="btn btn-primary"
                        style={{ marginLeft: "60px" }}
                      >
                        Visit Hotel
                      </Link>
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
    </>
  );
};

export default DisplayResturant;
