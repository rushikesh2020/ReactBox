import React from 'react';
import boxData from './data.js';
import Box from './box.jsx';

export default function App(props) {
  const [boxes, setBoxes] = React.useState(boxData);

  // const styles = {
  //   backgroundColor : props.darkMode? "#222222" : "#cccccc"
  // }

  const squareBoxes = boxes.map((box) => {
    return <Box on={box.on} key={box.id} />;
  });

  return <main>{squareBoxes}</main>;
}
