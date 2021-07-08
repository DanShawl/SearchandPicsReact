import React from 'react';

//  We need a class because we know we'll use state

class SearchBar extends React.Component {
  state = { term: '' };

  // we want a function to check if the input changes
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* every time we type, we will update the term property with setState */}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />

            {/* <input type="text" onChange={(e) => console.log(e.target.value)} /> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

//  Creating Event Handlers ------------------------------------------
//    onChange: special prop, used for detecting text change in an input
//    onClick:  user clicks something
//    onSubmit: user submits a form

//    How to create one:
//      1.  create a callback function outside render
//      2.  pass the "event" object to it
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
