
// import React, {Component} from 'react';
// import './App.css';
// import Person from './Person/Person';

// class App extends Component {
  
//   state = {
//     person : [
//       {name:'Max', age:'29'},
//       {name:'Bob', age:'19'},
//       {name:'Mark', age:'15'},
//     ],
//     something: 'hello'
//   }

//   switchNameHandler = () => {
//     console.log(this.state.something);
//     this.setState(
//       {
//         person : [
//           {name:'Alex', age:'29'},
//           {name:'Bob', age:'19'},
//           {name:'Mark', age:'55'},
//         ]
//       }
//     );
//   }
  

//   render() {
//     return (
//       <div className="App">
//         <h1>Hello world of React!!!</h1>
//         <Person  name={this.state.person[0].name} age={this.state.person[0].age}/>
//         <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
//         <Person name={this.state.person[2].name} age={this.state.person[2].age}> My Hobbies : Soccer, Cricket </Person>
//         <button  onClick={this.switchNameHandler}>Switch Names</button>
//       </div>

//     );
//   }
// }
// export default App;



// proior to 16.8v, class based components was only way to create 'state' in app. but after 16.8, we can crete states in functions also with help of react hooks.
// we will use class based components only to create states.
  // why?
  // in past, it was only way to craete states. thus many projects till use old approach
  // react hooks are not much used.

// all the hooks starts with 'use'
// 'useState' is most imp hook.
import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {

  //////////////////////////////////////////////////////////////////
  // useState helps us to manage state inside functional componenets 
  // useState will returns an array with exactly two elements.
    // thus storing those two array elemenets
    // 1array: it will contain the data of current state
    // 2array: it will be a function, which alllows us to update the current state. thus it will update the current state and reder the DOM on state change 
  // const stateArr =  useState(
  //   // within this method, passing our data
  //   {
  //     person : [
  //       {name:'Max', age:'29'},
  //       {name:'Bob', age:'19'},
  //       {name:'Mark', age:'15'},
  //     ],
  //     something: 'hello'
  //   }
  // );
  // console.log(stateArr);
  /////////////////////////////////////////////////////////////////////////

  // thus using es6 feature 'destructuring', giving names to both 2 arrays which useState() will give

  // const [personsState, setPersonState] = useState({
  //   person : [
  //     {name:'Max', age:'29'},
  //     {name:'Bob', age:'19'},
  //     {name:'Mark', age:'15'},
  //   ],
  //   something: 'hello'
  // });
  // console.log(personsState);
  

  // // adding event handler, a function within a function
  // const switchNameHandler = () => {
  //   console.log(personsState.something);
  //   setPersonState(
  //     {
  //       person : [
  //         {name:'Alex', age:'29'},
  //         {name:'Bob', age:'19'},
  //         {name:'Mark', age:'55'},
  //       ]
  //     }
  //   );
  // }
  /////////////////////////////////////////////////////////////////////

  // const [personsState, setPersonState] = useState({
  //   person : [
  //     {name:'Max', age:'29'},
  //     {name:'Bob', age:'19'},
  //     {name:'Mark', age:'15'},
  //   ],
  //   something: 'hello'
  // });
  // console.log(personsState);
  
  // const switchNameHandler = () => {
  //   // here this 'hook' will not merege with old state, it will simply replaces the old state. this means that properties which are specified here will be left out.
  //     // in our case, 'something' property will be left out, as we are not specifiying here
  //   setPersonState(
  //     {
  //       person : [
  //         {name:'Alex', age:'29'},
  //         {name:'Bob', age:'19'},
  //         {name:'Mark', age:'55'},
  //       ],
  //       // thus adding oother state property
  //       // 1method: manually adding
  //       // something: personsState.something

  //       // 2nd method: perffered one. 
  //         // use useState() multiple times, ie that number of times u want to add new property
  //     }
  //   );
  // }

  ///////////////////////////////////////////////////////////////////////

  const [personsState, setPersonState] = useState({
    person : [
      {name:'Max', age:'29'},
      {name:'Bob', age:'19'},
      {name:'Mark', age:'15'},
    ],
  });
  const [somethingState, setSomethingState] = useState({
    something: 'hello'
  })
  const [otherState, setOtherState] = useState('just adding single string');
  console.log(personsState);
  console.log(somethingState);
  console.log(otherState);
  
  const switchNameHandler = () => {
    setPersonState(
      {
        person : [
          {name:'Alex', age:'29'},
          {name:'Bob', age:'19'},
          {name:'Mark', age:'55'},
        ],
      }
    );
  }

  

  return (
    <div className="App">
      <h1>Hello world of React!!!</h1>
      <Person  
        name={personsState.person[0].name} 
        age={personsState.person[0].age}/>
      <Person 
        name={personsState.person[1].name} 
        age={personsState.person[1].age}/>
      <Person 
        name={personsState.person[2].name} 
        age={personsState.person[2].age}> 
          My Hobbies : Soccer, Cricket 
      </Person>
      <button  onClick={switchNameHandler}>Switch Names</button>
    </div>
  );





}

export default App;
