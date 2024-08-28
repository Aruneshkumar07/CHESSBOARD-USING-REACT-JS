import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import Chessboard from './chessboard';

function Result(){
  return(
    <div>
      <Chessboard/>
    </div>
  )
}
ReactDOM.render(<Result/>,document.getElementById("root"));