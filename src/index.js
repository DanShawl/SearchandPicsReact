import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
}

//  REVIEW *************************************************************

//  SearchBar
//      Event Handlers: onSubmit, onChange, etc
//      this: the value of this inside callbacks
//        - Anytime we have a callback function, use arrow syntax
//      Props only communicates from parent to child
//      To communicate child to parent we:
//        - pass a callback to the child
//        - the child will call the callback with a parameter

//  ImageList
//      Render Images/Lists
//        - Using .map() for pretty much all lists
//        - Make sure we define a key for list items on the root element
//            -> ideally using a consistent, unchanging key

//  ImageCard
//      Refs
//        - Create a ref inside the constructor
//        - Wire it to an element inside the render by:
//            -> passing it as a ref property
//            -> then we can take control of it and handle the DOM node
