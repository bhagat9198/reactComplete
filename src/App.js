import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    person : [
      {name:'Max', age:'29'},
      {name:'Bob', age:'19'},
      {name:'Mark', age:'15'},
    ],
    something: 'hello'
  }
 
  // 1.
  // switchNameHandler = () => {
  //   // console.log(this.state.something);
  //   this.setState(
  //     {
  //       person : [
  //         {name:'Alex', age:'29'},
  //         {name:'Bob', age:'19'},
  //         {name:'Mark', age:'55'},
  //       ]
  //     }
  //   );
  // }


  // 2.
  switchNameHandler = (newName) => {
    this.setState(
      {
        person : [
          {name: newName, age:'29'},
          {name:'Bob', age:'19'},
          {name:'Mark', age:'55'},
        ]
      }
    );
  }
  

  render() {
    return (
      <div className="App">
        <h1>Hello world of React!!!</h1>
        <Person  
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age}
        />
        <Person 
          name={this.state.person[2].name} 
          age={this.state.person[2].age}
          // // 1.
          // // we want 'switchNameHandler' function to executed even when a sperate paragraph is clicked.
          // // thus, passing one more extra property
          // click={this.switchNameHandler}> My Hobbies : Soccer, Cricket 
          // // and this is imporant property where we can pass methods also as props. this way we can change the state from different componnent indrectly.
            // // in our case, Person.js will change the state when user clicks on the paragraph. but state state is happening in App.js


          // 2. passing the value to switchhandler. there are 2 ways to do that:
          // we cant directly call the function, else it will be exeuted before even user clicks.
          // click={this.switchNameHandler('Alex')}> My Hobbies : Soccer, Cricket
          // 1method: using 'Bind method' 
            // bind(this, arg1, arg2, ..., angN);
            // this is most common way of passing the values 
          // click={this.switchNameHandler.bind(this, 'Alex')}> My Hobbies : Soccer, Cricket

          // 2method: using arrow function
            // this method is not much follow : this is because it can be inefficent, react can re-render certain things many things too often. thus, dont use as much as possible
          click={() => this.switchNameHandler('Alex')}> My Hobbies : Soccer, Cricket  

        </Person>
        <button  onClick={this.switchNameHandler.bind(this, 'Dark')}>Switch Names</button>
      </div>

    );
  }
}
export default App;


