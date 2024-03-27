import { useState } from 'react';


export default function Box(props) {
  // const [state, setState] = useState(props.on);

  // const toggleHandler = function () {
  //   setState(prevState => !prevState);
  // };

  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent"
  };
  return (
    <div onClick={()=>props.toggle(props.id)} style={styles} className="box"></div>
  );
}
