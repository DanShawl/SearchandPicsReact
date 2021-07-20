import React from 'react';

//  1.  Let the ImageCard render itself and its image
//  2.  Reach into the DOM and figure out the right height of the image
//  3.  Set the image height on state to get the component to rerender
//  4.  When rerendering, assign a 'grid-row-end' to make sure the image takes up the appropriate space

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }
  //  we are adding setSpans because we are using grid-row-end property
  //  this property takes in a span value to determine height

  //  passing a callback to an event listener means we'll need to bind it
  //  So, make set spans an arrow function

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    this.setState({ spans });
    // this.setState({ spans: spans })
    //  if we have the same key and property, we can shorten it
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;

//  Accessing the DOM with React Refs -----------------------------------
//    - gives access to a single DOM element
//    - we create refs in the constructor, assign them to instance variables, then pass to a particular JSX element as props

//    1.  Create the constructor method
//    2.  Assign to instance variable inside constructor
//          this.imageRef = React.createRef();
//    3.  Pass to JSX element as a prop
//          <img ref={this.imageRef} />

//  Ref itself is an object and will contain a property 'current'
//  The 'current' property references a DOM element, in this case the img
//  Inside this current property, we have a list of properties including clientHeight

//  Why would height be 0 for these?
//    We are console logging them before they have a chance to load
