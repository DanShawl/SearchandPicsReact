import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <ImageCard
        key={image.id}
        image={image}
        // style={{ width: '50vh' }}
      />
    );
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;

// **********************************************************************

//  Mapping Lists and Rendering Lists of Components --------------------
//    So we've passed the image results (an array) from the App to the component ImageList through props
//    Then we need to map over the array to get just the urls for each image
//    then, return a some jsx w/ images src set to {image.urls.regular}

//  PRIOR TO DESTRUCTURING
// const ImageList = (props) => {
//   const images = props.images.map((image) => {
//     return (
//       <img key={image.id} src={image.urls.regular} alt={image.description} />
//     );
//   });
//   return <div>{images}</div>;
// };

//  WITH DESTRUCTURING
// const ImageList = (props) => {
//   const images = props.images.map(({ description, id, urls }) => {
//     return (
//       <img
//         key={id}
//         src={urls.regular}
//         alt={description}
//         // style={{ width: '50vh' }}
//       />
//     );
//   });
//   return <div className="image-list">{images}</div>;
// };
