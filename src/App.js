
import { useState } from 'react';
import './App.css';

function App() {
const [selval,setselval] = useState("")
const [img,setimg] = useState("")

const val = function(e){
  setselval(e.target.value)
}
const click= function(){
  fetch(`https://dog.ceo/api/breed/${selval}/images`)
  .then(function(res){
    return res.json()
  })
  .then(function(json){
    setimg(json.message[Math.floor(Math.random() * json.message.length)])
  })
}
console.log(selval)

  return (
    <div className="App">
      <select onClick={val}>
        <option>akita</option>
        <option>beagle</option>
        <option>dalmatian</option>
        <option>husky</option>
        <option>labrador</option>
        <option>pug</option>
        
        
      </select>
      <button onClick={click}>Select</button>
      <div>
      <img src={img} className="nkar"></img>
      </div>
    </div>
  );
}

export default App;
