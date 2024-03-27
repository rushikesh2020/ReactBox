import React from 'react';
import boxData from './data.js';
import Box from './Box.jsx';

export default function App(props) {
  const [boxes, setBoxes] = React.useState(boxData);

  // const styles = {
  //   backgroundColor : props.darkMode? "#222222" : "#cccccc"
  // }

  function toggleHandle(id) {
    // method 1
    // let newBoxes = boxes.map(box => {
    //     return box.id === id ? { ...box, on: !box.on } : box;
    // });
    // setBoxes(prevBoxes=> newBoxes)

    //method 2
    setBoxes(prevBoxes=>{
      let newBoxes = prevBoxes.map(box=>{
        return box.id === id ? {...box, on:!box.on} : box;
      })
      return newBoxes
    })
  }

  const squareBoxes = boxes.map(box =>(
    <Box 
      id = {box.id} 
      key={box.id}
      on = {box.on}
      toggle = {toggleHandle} 
    />
  ));

  return <main>{squareBoxes}</main>;
}
