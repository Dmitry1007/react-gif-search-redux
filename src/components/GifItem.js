import React from 'react';

const GifItem = (image) => {
  return (
    <li>
      <img role="presentation" src={image.gif.url} />
    </li>
  )
};

export default GifItem
