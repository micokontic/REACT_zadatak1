import React from 'react'

function InputAmount({text,setAmount}) {
    return (
        <div className='input-field'>
            <h6>{text}</h6>
            <input type='text' placeholder='1' onInput={(e)=>{setAmount(e.target.value)}}></input>
        </div>
    )
}

export default InputAmount
