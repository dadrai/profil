import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React, {UseState} from 'react';
/*
function App() {
  // let a = 1;
  // let b=9;
  // let c=a+b;
  // console.log(c);

const [value,setValue]=useState();
console.log({value});
  return <>
 
<input name='viv' type={'text'} onChange={setValue}/>

<p >
    Привет, {value ? value.target.value : ' '}
  </p>

  </>;
}  */

function Welcome(props) {

  const [value, setValue] = useState();
  return <>
      <br/> {props.name} {value ? value.target.value : ''}
      <input type={'text'} onChange={setValue} />
  </>;
}
function App() {
  return (
      <div>
          <Welcome name="Full name:" /> <br/>
          <Welcome name="Number:" /><br />
          <Welcome name="Email:" /><br />
          <Welcome name="Birthday:" /><br />
          <Welcome name="Biography:" /><br />
      </div>
  );

}
export default Welcome; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




