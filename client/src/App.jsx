import React,{Component} from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      list : [1,2,3,4,5,6,7,8,9]
    }
  }

componentDidMount(){
 console.log(this.state.list);
}

sendInfo = () => {
  axios.post('https://factura.com/api/v1/clients/create', {
    "nombre": "Abimael",
    "apellidos": "Hernandez Tapia",
    "email": "htapia.abi14@gmail.com",
    "razons": "Abimael Hernandez",
    "rfc": "XAXX010101000",
    "calle": "Av. Juarez",
    "numero_exterior": 1234,
    "numero_interior": "",
    "codpos": 44640,
    "colonia": "Centro",
    "estado": "Jalisco",
    "ciudad": "Guadalajara",
    "delegacion": ""
  })
  .then(res => {
   console.log('hello there here are results',res);
  })
  .catch(error => {
    console.log('ooop dude theres an error some where', error);
  })
}

  render(){
    return (
      <div className="allInputs">
        <input className="input"/><br/>
        <input className="input"/><br/>
        <input className="input"/><br/>
        <input className="input"/><br/>
        <input className="input"/><br/>
        <input className="input"/><br/>
        <input className="input"/><br/>
        <input className="input"/><br/>
        <input className="input"/>
        <div><button  className="actionButton" onClick={this.sendInfo}> send </button></div>
      </div>
    )
  }
}
