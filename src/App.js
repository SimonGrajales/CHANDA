import './App.css';
import'./App.js';
import {useState} from "react";
import Axios from "axios";



function App() {
  const [id,setId] = useState(""); 
  const [nombre,setNombre] = useState("");
  const [ corte,setCorte] = useState("");

  const add = ()=>{
    Axios.post ("http://localhost:3001/create",{
      id:id,
      nombre:nombre,
      corte:corte
    }).then(()=>{
      alert("Cliente registrado");
    })
  }



  return (
    <div className="App">
      <div class="datos">
        <label>id</label><br></br>
        <input  onChange={(event)=>{
          setId(event.target.value);
        }}  type="text"></input>

        <label>Nombre</label><br></br>
        <input onChange={(event)=>{
          setNombre(event.target.value);
        }}  type="text"></input>

        <label>Corte</label><br></br>
        <input onChange={(event)=>{
          setCorte(event.target.value);
        }}
          type="text"></input>
        <button onClick={add}>Registrarse</button>
      </div>
    </div>
  );
}

export default App;
