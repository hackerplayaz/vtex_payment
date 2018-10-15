import React,{Component} from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      list : []
    }
  }

componentDidMount(){
 console.log(this.state.list);
}
//function to send all the info about the client
sendInfo = () => {
  axios({
    method : 'post',
    url:'http://devfactura.in/api/v1/clients/create',
    data : {
      "nombre": "Abimael",
      "apellidos": "Hernandez Tapia",
      "email": "htapia.abi14@gmail.com",
      "razons": "Abimael Hernandez",
      "rfc": "HETA921202EF8",
      "calle": "Av. Juarez",
      "numero_exterior": "12",
      "codpos": "44640",
      "colonia": "Centro",
      "estado": "Jalisco",
      "ciudad": "Guadalajara",
      "delegacion": ""
    },
    //this are the headers to allow the user to be created
    headers: {
      'Content-Type': 'application/json',
      'F-API-KEY': 'JDJ5JDEwJFJvbEFwQjdXNTZXMlJWbUl4MmNlYi5ueG5RNURhZVkvSFladGpZSU5HNk5BM1VVLzBQSkJt',
      'F-SECRET-KEY': 'JDJ5JDEwJE5tZzN0R3JjVWxPZFJFRVd6SzZBYXV5U0VCcTZ3dGhtd3huOVNjbmFXcmZsVzRBUXBwdkZD'
    }
  })
  .then(res => {
   console.log('hello there here are results',res);
   this.setState({list: res})
   console.log('THIS IS YOUR ACTUAL STATE',this.state.list);
  })
  .catch(error => {
    console.log('ooop dude theres an error some where', error);
  })
}



  render(){
    return (
      <div className="allInputs">
        <div><button  className="actionButton" onClick={this.sendInfo}> send </button></div>
      </div>
    )
  }
}
