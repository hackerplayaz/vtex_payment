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
  axios.post('ttps://factura.com/api/v1/clients/create', {

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
