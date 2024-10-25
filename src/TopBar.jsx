import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FaCartArrowDown } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import React, { useContext } from "react";
import { resturantContext } from "./App";
import Delivery from "./Delivery"

const TopBar = () => {
  const {
    name,
    setName,
    cart,
    setCart,
    total,
    setTotal,
    setCartItem,
    toggle,
    setToggle,
    model,
    setModel,
    setSearch
  } = useContext(resturantContext);

  const cartPage = () => {
    if (cart) {
      setToggle(true);
    }
  };

  const closePage = () => {
    setToggle(false);
  };

  const handlePurchase = () => {    
    setModel(true);    
  };

  return (
    <>
    { model ? <Delivery setModel={setModel} setCart={setCart} setTotal={setTotal} setToggle={setToggle} setCartItem={setCartItem} setSearch={setSearch}/>  :
      <Navbar
        expand="lg"
        className="bg-body"
        sticky="top"
      >
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="navbar justify-content-center">
            <Form className=" d-flex  w-50 p-3">
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
                    onClick={handlePurchase}
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
}  
    
    </>
  );
};

export default TopBar;
