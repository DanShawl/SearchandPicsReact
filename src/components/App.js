import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ margin: '1rem' }}>
        <SearchBar submit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

// **********************************************************************

//  On jsx elements like form, input, button, etc, we need to use specific prop names like onSubmit, onClick, etc
//  HOWEVER, on our own components like SearchBar, we name them whatever we want

//  Passing a prop to a child component CLASS ----------------------
//  Remember, we need to use that prop name on the child element
//      props.onSubmit
//  However, we need to use 'this' to access the props
//      this.props.onSubmit

//  Axios Vs Fetch ------------------------------------------------------
//    axios:  3rd party package
//    fetch:  function built into modern browsers

//    Fetch is a lower level function, may need to write more code
//  Downloading axios:
//    1.  end the session ^c
//    2.  npm install --save axios
//    3.  import axios from 'axios';

//  Viewing Request Results --------------------------------------------
//    1.  Look at api documentation
//          - single page of photo requests: Get /search/photos
//    2.  In axios, we do axios.get()
//          - takes two arguements ('address', {object w/ customizations})
//          - first: find location and add /search/photos
//          - second: we need to identify ourselves to access it
//              - find authorization and look how to identify
//    3.  Inside the object, we need properties 'params' and 'headers'
//          - Inside headers, we need an object with 'Authorization:' and our private key given from the api

//  Handling Requests with Async Await -----------------------------------

//  Method 1: Oromise-based syntax(harder)
//  - When we make an axios request, it returns an obj called a promise
//  - A prmise is an object that gives a us a notification when some amount of work is completed
//  - in order to get a promise, we chain on a .then() function at the end of the axios call

//    1.  attach a .then() function to the end of the axios.get function
//    2.  place a callback function inside .then()
//          - this will be called when the "job" is done
//    3.  the callback will automatically be passed the information
//    4.  Find the results you're looking for (response.data.results)

// .then((response) => {
//   console.log(response.data.results);
// });

//  Method 2: Async Await Syntax

//    1.  place 'async' before our method (onSearchSubmit)
//          - This allows us to use the async await syntax inside
//    2.  In front of axios, place 'await' and assign it to a variable
//          const response = await axios
//    2a. "Find whatever is returning/taking some time"
//          - in this case its the network request

//  Binding Callbacks ----------------------------------------------------
//    - we had three options: binding, onSearchSubmit, making it an arrow function, or wrapping the callback 'submit={this.onSearchSubmit}' in an arrow function

//  Refactoring async methods to an arrow function
//      async methodName (arg) {}
//      methodName = async (arg) => {}
