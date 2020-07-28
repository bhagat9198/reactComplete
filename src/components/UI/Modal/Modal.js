import React from 'react';
import classes from './Modal.css';
// if modal is shown than backdrop should be shown
// importing Auxilliary hoc as Modal and Backdrop will be side by side
import Auxilliary from '../../../hoc/Auxilliary'
// importing Backdrop
import Backdrop from '../Backdrop/Backdrop';


const Modal = (props) => {
  return <Auxilliary>
    <Backdrop 
      // 
      show={props.show}
      clicked={props.modalClosed} 
    />
    <div 
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1': '0'
      }}
      className={classes.Modal}>
      {props.children}
    </div>
  </Auxilliary>
}

export default Modal;

