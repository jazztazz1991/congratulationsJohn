// src/components/Canvas.js
import React from 'react';
import PropTypes from 'prop-types';

import '../css/style.css';
const Canvas = ({ draw, height, width, handleClick }) => {

  const canvas = React.useRef();

  React.useEffect(() => {
    const context = canvas.current.getContext('2d');
    draw(context);
  });
  return (
    <canvas ref={canvas} id="canvas" onClick={handleClick} height={height ? height : '250px'} width={width} />
  );
};
Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
export default Canvas;