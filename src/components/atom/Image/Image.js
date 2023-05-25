import React from 'react';

const Image = ({ alt, src, height, width }) => {
  return <img src={src} alt={alt} style={{ height: height, width: width }} />;
};

export default Image;
