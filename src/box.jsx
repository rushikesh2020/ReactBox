import {useState} from 'react'

export default function Box(props){
  const [state, setState] = useState(props.on)
  const toggleHandler = function(){
    setState(prevState)
  }
  const styles = {
    backgroundColor : state ? "#222222" :"none"
  }
  return(
    <div onClick={toggleHandler} style={styles} className="box"></div>
  )
}