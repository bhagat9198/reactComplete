// Mozilla

// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

// const module = {
//   x: 42,
//   getX: function() {
//     return this.x;
//   }
// };

// const unboundGetX = module.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope
// // expected output: undefined

// const boundGetX = unboundGetX.bind(module);
// console.log(boundGetX());
// // expected output: 42


// source:
// https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/

// Default Binding

// function display(){
// console.log(this); // 'this' will point to the global object
// }

// display(); 

// This is a plain function call. The value of this inside the display() method in this case is the window — or the global — object in non-strict mode. In strict mode, the this value is undefined.


// Implicit binding

// var obj = {
//   name: 'Bob',
//   display: function(){
//     console.log(this.name); // 'this' points to obj
//   }
// };

// obj.display(); // Bob 

// When we call a function in this manner — preceded by a context object — the this value inside display() is set to obj.




// REACT

// class Foo extends React.Component{
//   constructor( props ){
//     super( props );
//   }
    
//   handleClick(event){
//     console.log(this); // 'this' is undefined
//   }
    
//   render(){
//     return (
//       <button type="button" onClick={this.handleClick}>
//         Click Me
//       </button>
//     );
//   }
// }

// If you run this code, click on the “Click Me” button and check your console. You will see undefined printed to the console as the value of this from inside the event handler method. The handleClick() method seems to have lost its context (component instance) or this value.

//      ^^
//      ||
// above react code written in JS


// class Foo {
//   constructor(name){
//     this.name = name
//   }
  
//   display(){
//     console.log(this.name);
//   }
// }

// var foo = new Foo('Alex');
// foo.display(); // Alex

// // The assignment operation below simulates loss of context 
// // similar to passing the handler as a callback in the actual 
// // React Component
// var display = foo.display(); 
// display(); // TypeError: this is undefined

// As we observed in the React Component example, the this value was undefined as the context was lost after passing the handler as a callback — synonymous with an assignment operation. This is what we observe here in this non-React JavaScript snippet as well.

// NOTE:
// The bodies of class declarations and class expressions are executed in strict mode, that is the constructor, static and prototype methods. Getter and setter functions are executed in strict mode.

// So, to prevent the error, we need to bind the this value like this:

// class Foo {
//   constructor(name){
//     this.name = name
//     this.display = this.display.bind(this);
//   }
  
//   display(){
//     console.log(this.name);
//   }
// }

// var foo = new Foo('Alex');
// foo.display(); // Alex

// var display = foo.display;
// display(); // Alex

// OR

// class Foo {
//   constructor(name){
//     this.name = name;
//   }
//   display(){
//     console.log(this.name);
//   }
// }

// var foo = new Foo('Alex');
// foo.display = foo.display.bind(foo);
// foo.display(); // Alex

// var display = foo.display;
// display(); // Alex


