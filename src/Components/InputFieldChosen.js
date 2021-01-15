import React, { Component } from 'react'
import Select from "react-select"

const API_KEY='61c694c140169de86fea';

export default class InputFieldChosen extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       currencies:[],
       selected:''
    }
  }
  


  componentDidMount() {
    fetch(`https://free.currconv.com/api/v7/currencies?apiKey=${API_KEY}`, {
      method: 'GET',
  })
      .then(response => response.json())
      .then((json)=>{
        console.log(json)
          var resultArray=Object.keys(json.results).map((key) => {return({value:json.results[key].id, label:`${json.results[key].id} | ${json.results[key].currencyName}`})} );
          this.setState({currencies:resultArray})
      })
      .catch(error => {
          console.error(error)})
  }
  render() {
    return (
      <div className='chosen-field'>
      <h6>{this.props.text}</h6>
      <Select options={this.state.currencies} onChange={(e)=>{
        this.setState({selected:e.value})
        this.props.setCurrencie(e.value);
      }}/>
      </div>
    )
  }
}