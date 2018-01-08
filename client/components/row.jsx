import React from 'react';
import Square from './square.jsx';
const Row (props) => (
  <div>
    //  create a row of the tic tac to board
    <span>
      <Square />
      <Square />
      <Square />
    </span>
  </div>
)
export default Row;
