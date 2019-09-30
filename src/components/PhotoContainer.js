import React from "react";
import Photo from "./Photo";
import NotFound from "./NotFound";

const PhotoContainer = props => {
  const results = props.data;
  let images;
  if (results.length > 0) {
    console.log("Results returned " + results.length + " images.");
    images = results.map(photo => (
      <Photo
        url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
        key={photo.id}
        title={photo.title}
      />
    ));
  } else {
    console.log(
      "This is part of the ELSE condition. Results has a length of " +
        results.length
    );
    images = <NotFound />;
  }

  return <ul>{images}</ul>;
};

export default PhotoContainer;
