import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0,
  };

  // counterChangedHandler = (action, value) => {
  //   switch (action) {
  //     case "inc":
  //       this.setState((prevState) => {
  //         return { counter: prevState.counter + 1 };
  //       });
  //       break;
  //     case "dec":
  //       this.setState((prevState) => {
  //         return { counter: prevState.counter - 1 };
  //       });
  //       break;
  //     case "add":
  //       this.setState((prevState) => {
  //         return { counter: prevState.counter + value };
  //       });
  //       break;
  //     case "sub":
  //       this.setState((prevState) => {
  //         return { counter: prevState.counter - value };
  //       });
  //       break;
  //   }
  // };


  // adding one more button and unordered list below. when we click on this button, we add the current counter value to the current result stored in unorderedlist 

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctrl} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 10"
          clicked={this.props.onAddCounter}
        />
        <CounterControl
          label="Subtract 15"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        
        {/* button will dispatch the action which will push the counter result to results array in store, update the array with current counter value */}
        {/* adding action to button */}

        {/* <button onClick={this.props.onStoreResult} >Store Result</button>
        <ul>  
          <li onClick={this.props.onDeleteResult}></li>
        </ul> */}

        {/* if we click any of these list, we want to remove the list from the array. thus, each list item should have unique id */}
        {/* if we click on this button, action will be dispatched. we didnt get any errors. 
        why? 
         we have only one reducer and there if none of the case is not matched that it will simply give out the current state. hence no error.
        */}


        {/* once state is set, outputting the list once user clicks on button */}
        <button onClick={this.props.onStoreResult} >Store Result</button>
        <ul>  
          { this.props.storedResults.map(strResult => (
            // as we are iterating over array, we beed set up key
            <li key={strResult.id} onClick={this.props.onDeleteResult}>{strResult.value}</li>))}
        </ul>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctrl: state.counter,
    // once action is set, we should able to extract the value of 'results' array 
    storedResults: state.results
  }
}



const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter : () => dispatch({type: 'INCREMENT'}),
    onDecrementCounter : () => dispatch({type: 'DECREMENT'}),
    onAddCounter : () => dispatch({type: 'ADD', val: 10}),
    onSubtractCounter : () => dispatch({type: 'SUBTRACT', val: 15}),
    // dispatching 2 new actions
    // store result will update the value on current counter value. so we need to pass counter value also but as counter value is alraedy present in store. we can extract from store, no need to pass as property.
    onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
    onDeleteResult: () => dispatch({type: 'DELETE_RESULT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

