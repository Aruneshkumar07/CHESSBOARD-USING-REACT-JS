import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessBishop, faChessKing, faChessKnight, faChessPawn, faChessQueen, faChessRook } from '@fortawesome/free-solid-svg-icons';

function ChessBoard(){
  return(
    <div className='chess'>
      <table>
        <tr>
          <td className='white'> <FontAwesomeIcon icon={faChessRook} /></td>
          <td className='black'><FontAwesomeIcon icon={faChessKnight} /></td>
          <td className='white'><FontAwesomeIcon icon={faChessBishop} /></td>
          <td className='black'><FontAwesomeIcon icon={faChessQueen} /></td>
          <td className='white'><FontAwesomeIcon icon={faChessKing} /></td>
          <td className='black'><FontAwesomeIcon icon={faChessBishop} /></td>
          <td className='white'><FontAwesomeIcon icon={faChessKnight} /></td>
          <td className='black'><FontAwesomeIcon icon={faChessRook} /></td>
        </tr>
        <tr>
          <td className='black'><FontAwesomeIcon icon={faChessPawn} /></td>
          <td className='white'><FontAwesomeIcon icon={faChessPawn} /></td>
          <td className='black'><FontAwesomeIcon icon={faChessPawn} /></td>
          <td className='white'><FontAwesomeIcon icon={faChessPawn} /></td>
          <td className='black'><FontAwesomeIcon icon={faChessPawn} /></td>
          <td className='white'><FontAwesomeIcon icon={faChessPawn} /></td>
          <td className='black'><FontAwesomeIcon icon={faChessPawn} /></td>
          <td className='white'><FontAwesomeIcon icon={faChessPawn} /></td>
        </tr>
        <tr>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
        </tr>
        <tr>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
        </tr>
        <tr>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
        </tr>
        <tr>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
        </tr>
        <tr id='second'>
        <td className='white'>  <FontAwesomeIcon id='second' icon={faChessPawn} /></td>
          <td className='black'><FontAwesomeIcon id='second' icon={faChessPawn} /></td>
          <td className='white'><FontAwesomeIcon id='second' icon={faChessPawn} /></td>
          <td className='black'><FontAwesomeIcon id='second' icon={faChessPawn} /></td>
          <td className='white'><FontAwesomeIcon id='second' icon={faChessPawn} /></td>
          <td className='black'><FontAwesomeIcon id='second' icon={faChessPawn} /></td>
          <td className='white'><FontAwesomeIcon id='second' icon={faChessPawn} /></td>
          <td className='black'><FontAwesomeIcon id='second' icon={faChessPawn} /></td>
        </tr>
        <tr id='second'>
        <td className='black'>  <FontAwesomeIcon id='second' icon={faChessRook} /></td>
          <td className='white'><FontAwesomeIcon id='second' icon={faChessKnight} /></td>
          <td className='black'><FontAwesomeIcon id='second' icon={faChessBishop} /></td>
          <td className='white'><FontAwesomeIcon id='second' icon={faChessQueen} /></td>
          <td className='black'><FontAwesomeIcon id='second' icon={faChessKing} /></td>
          <td className='white'><FontAwesomeIcon id='second' icon={faChessBishop} /></td>
          <td className='black'><FontAwesomeIcon id='second' icon={faChessKnight} /></td>
          <td className='white'><FontAwesomeIcon id='second' icon={faChessRook} /></td>
        </tr>
      </table>
    </div>
  )
}

export default ChessBoard;