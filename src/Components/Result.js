import React from 'react'

function Result({state}) {
    return (
        <div className='result-box'>
          <h3>{state.amount} {state.currencie1} = {state.result.toFixed(5)} {state.currencie2} </h3>
          <h5>1 {state.currencie1} = {state.ratio.toFixed(5)} {state.currencie2}</h5>
          <h5>1 {state.currencie2} = {(1/state.ratio).toFixed(5)} {state.currencie1}</h5>
        </div>
        
    )
}

export default Result
