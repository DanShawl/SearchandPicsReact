import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.submit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            {/* <input type="text" onChange={(e) => console.log(e.target.value)} /> */}
            <h1>{this.state.term}</h1>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

// **********************************************************************

//  Creating Event Handlers ------------------------------------------
//    onChange: special prop, used for detecting text change in an input
//    onClick:  user clicks something
//    onSubmit: user submits a form

//    How to create one:
//      1.  create a callback function outside render (or on the element)
//      2.  pass the "event" object to it (aka "e")
//      3.  use event.target.value to see the passed info
//      3.  on the button/submit/input, pass to relevant prop using:
//              onClick={this.callBackFunctionName}

//    Alternate method:
//      - used when a single line is needed instead of defining a method
//      - event is often substituted as "e"
//      1.  pass an arrow function to the prop with event as an arg
//      2.  use event.target.value
//              onChange={(event) => console.log(event.target.value) }

//  Controlled vs Uncontrolled
//    - we are storing our info inside of components on state instead of the DOM
//    - we can add methods to the value inside the prop
//        {(e) => this.setState({ term: e.target.value.toUpperCase() })}
//    Flow of controlled:
//      1.  User types in input
//      2.  Callback gets invoked (the arrow func on the input element)
//      3.  We call setState with the new value
//      4.  component rerenders due to setState getting called
//      5.  Input is told what its value is from setState

//  Handling Form Submittal ---------------------------------------------
//    Forms default to reload the page when hitting enter on an input
//    We can prevent this by:
//      1.  creating an event handler onSubmit as a prop of the form
//      2.  Creating a callback func on the prop to trigger on form submission
//      3.  Writing the callback function outside of the render method
//      4.  using event.preventDefault() inside the callback
//
//          onFormSubmit(event) {event.preventDefault();}
//          render() {<form onSubmit={this.onFormSubmit}></form>}

//  Understanding 'this' in JS -----------------------------------------
//    What is 'this' used for in a class?
//      Instance of SearchBar has state, render, and onFormSubmit
//      'this' is a reference back to the class itself
//       -  "gives me a reference back to the instance of SearchBar"
//       -  we can use this to get access to state, render, onFormSubmit
//       -  ex: this.state will give me access to the state object that belongs to this particular instance of SearchBar
//    How is the value of 'this' determined in a function/method on a class?
//        1.  We look at where we call the method
//        2.  find the func/method name, look to the var left of the '.'
//        3.  This is what 'this' is going to be equal to
//            EX: this.sound will be equal to car.sound

//  Solving Context Issues: "TypeError: Cannot read property '' of underfined"---------------------------------------------------------------

//    Option 1: (older)
//    1.  Define a constructor in our class (super not needed)
//    2.  bind 'this' to the method "this.drive=this.drive.bind(this)"
//    3.  This is "overriding" the originial function

//    Option 2: (easiest)
//    Turn our function thats currently not working into an arrow function
//    More often than not, a normal function will break 'this' keyword
//    This will 'this' always equal to our instance of our class

//    Option 3:
//    Turn our onSubmit callback value into an arrow function
//    Must pass our event object through it
//    We can use () this time because it will only trigger when the func is called
//    We need to still have our normal function onFormSubmit
//      onSubmit={(event) => this.onFormSubmit(event)}

// class Car {
//   setDriveSound(sound) {
//     this.sound = sound;
//   }

//   drive() {
//     return console.log(this.sound);
//   }
// }

// const car = new Car();
// car.setDriveSound('vroom');
// car.drive();
