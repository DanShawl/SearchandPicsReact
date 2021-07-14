//  Creating Custom Clients ---------------------------------------------

//  We want to put all the code that involves axios config / anthing thats related to somehow getting unsplash to accept our request

import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID U838GsixUzCWTbMeIZe395jNpycPUry1IwIG1BjpnUs',
  },
});

//  axios.create({}) is going to create an instance of the axios client with a couple defaulted properties
//  this allows us to create a customized copy of it that is customized just towards making requests to some specific url with just our headers

//  How do we do this?
//    1.  import axios from 'axios';
//    2.  axios.create({})
//    3.  put our headers inside the empty object
//    4.  set the property baseURL to the base url, cut it from axios.get
//    5.  add export default prior to axios.create
//    6.  import the ../api/unsplash.js file in App.js INSTEAD of axios
//    7.  change axios.get to unsplash.get
