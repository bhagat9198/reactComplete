import React, { Component } from 'react';
import classes from './Modal.css';
import Auxilliary from '../../../hoc/Auxilliary'
import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component {
  // just for checking
  componentDidUpdate() {
    console.log('Component Updated');
  }

  componentWillUpdate() {
    console.log('Component Will Update');
  }

  // putting condition
  shouldComponentUpdate( nextProps, nextSate) {
    return nextProps.show !== this.props.show;
  }

  // everything works fine and now model is not getting updated which meand OrderSummary is also not getting updated as it is within the Modal.
  // we are not extending PureComponenet as we only want to check for only spaecific props ie 'show'. PureCompoenet will check for other other things too like clickListener in backdrop.But we do more checks within  shouldComponentUpdate, but our logic is straight forward, hence not needed.


  render() {

    return <Auxilliary>
    <Backdrop 
      show={this.props.show}
      clicked={this.props.modalClosed} 
    />
    <div 
      style={{
        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: this.props.show ? '1': '0'
      }}
      className={classes.Modal}>
      {this.props.children}
    </div>
  </Auxilliary>
  }
  
}

export default Modal;











// import React from 'react';
// import classes from './Modal.css';
// import Auxilliary from '../../../hoc/Auxilliary'
// import Backdrop from '../Backdrop/Backdrop';


// const Modal = (props) => {
//   return <Auxilliary>
//     <Backdrop 
//       // 
//       show={props.show}
//       clicked={props.modalClosed} 
//     />
//     <div 
//       style={{
//         transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
//         opacity: props.show ? '1': '0'
//       }}
//       className={classes.Modal}>
//       {props.children}
//     </div>
//   </Auxilliary>
// }

// export default Modal;

