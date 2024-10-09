import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FaCartArrowDown } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import React, { useContext } from "react";
import { resturantContext } from "./App";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const {
    name,
    setName,
    cart,
    setCart,
    total,
    setTotal,
    cartItem,
    setCartItem,
    toggle,
    setToggle,
  } = useContext(resturantContext);
  const navigate = useNavigate();

  const cartPage = () => {
    if (cart) {
      setToggle(true);
    }
  };

  const closePage = () => {
    setToggle(false);
  };

  const cartPurchase = () => {
    alert("Food order successfully..🤩");
    setCart(0);
    setTotal(0);
    navigate("/")
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body w-75"
        sticky="top"
        style={{ borderRadius: "20px", marginLeft: "190px", marginTop: "20px" }}
      >
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex w-75 p-3">
              <input
                type="search"
                placeholder="Search"
                className=" form-control me-2"
                aria-label="Search"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form>
            <div className="d-flex justify-contentz">
              <Button variant="outline-dark" onClick={cartPage}>
                <FaCartArrowDown /> Cart {cart}
              </Button>
              <Button
                variant="outline-dark"
                className="ms-2"
                onClick={closePage}
              >
                <RiMoneyRupeeCircleFill fontSize={20} /> Price {total}
              </Button>
              {toggle ? (
                <>
                  <Button
                    variant="outline-danger"
                    className="ms-2"
                    onClick={() => setToggle(false)}
                  >
                    Go Back
                  </Button>
                  <Button
                    variant="outline-success"
                    className="ms-2"
                    onClick={cartPurchase}
                  >
                    Delivery 🛵
                  </Button>
                </>
              ) : (
                ""
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
