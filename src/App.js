import React, { Component } from 'react'
import InputFieldChosen from './Components/InputFieldChosen'
import InputAmount from './Components/InputAmount'
import Result from './Components/Result'
import ConvertButton from './Components/ConvertButton'


const API_KEY='61c694c140169de86fea';

export default class App extends Component {

constructor(props) {
  super(props)

  this.state = {
     'currencie1':'',
     'currencie2':'',
     'amount':1,
     'result':1,
     'renderResult':false,
     'ration':1
  }
}

setCurrencie1=(currencieId)=>{
this.setState({
  'currencie1':currencieId
})
if(this.state.renderResult){
  this.convert()
}
}

setCurrencie2=(currencieId)=>{
  this.setState({
    'currencie2':currencieId
  })
  if(this.state.renderResult){
    this.convert()
  }
  }

setAmount=(input)=>{
  if (input===''){
    this.setState({
      amount:1
    }) 
  }else{
    this.setState({
      amount:input
    })
  }
  
  if(this.state.renderResult){
    this.convert()
  }
}

convert=()=>{
var q1=`${this.state.currencie1}_${this.state.currencie2}`;

fetch(`https://free.currconv.com/api/v7/convert?apiKey=${API_KEY}&q=${q1}`, {
      method: 'GET',
  })
      .then(response => response.json())
      .then((json)=>{
        this.setState({
            result:json.results[q1].val*this.state.amount,
            renderResult:true,
            ratio:json.results[q1].val
        })
      })
      .catch(error => {
          console.error(error)})

}

  render() {
    return (
      <>
      <div className="App">
        <div className="app-container">
          <InputAmount setAmount={this.setAmount} text='AMOUNT'/>
          <InputFieldChosen setCurrencie={this.setCurrencie1} text='FROM'/>
          <ConvertButton convert={this.convert}/>
          <InputFieldChosen setCurrencie={this.setCurrencie2} text='TO'/>      
        </div>
        {this.state.renderResult?<Result state={this.state}/>:''}
      </div>
      </>
    )
  }
}
