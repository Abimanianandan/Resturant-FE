import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const Delivery = ({setModel,setCart,setTotal,setToggle,setCartItem}) => {
    const navigate = useNavigate();
    const  cancelCart = () =>{
        setModel(false);        
    }
    const orderCart = () =>{
      alert("your food successfully ordered...❄️");
      setModel(false);
      setToggle(false);
      setCartItem("");
      setCart(0);
      setTotal(0);
      navigate("/");
    }
  return (
    <>
     
     <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog >
        <Modal.Header className='bg-dark text-white'>
          <Modal.Title >Delivery Food</Modal.Title>
        </Modal.Header>

        <Modal.Body className='bg-dark text-white'>
          <p className='fw-bold'>Are you confirm your order</p>
        </Modal.Body>

        <Modal.Footer className='bg-dark text-white'>
          <Button variant="danger" onClick={cancelCart}>Cancel</Button>
          <Button variant="primary" onClick={orderCart}>Order Now</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
</>
  )
}

export default Delivery