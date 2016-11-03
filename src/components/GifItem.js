import React from 'react';

const GifItem = ({gif, onGifSelect}) => {
  return (
    <div className="gif-item" onClick={() => onGifSelect(gif)}>
      <img src={gif.images.downsized.url} role="presentation" />
    </div>
  )
};

export default GifItem
