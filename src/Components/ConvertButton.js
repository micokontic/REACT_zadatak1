import React from 'react'

function ConvertButton({convert}) {
    return (
        <div>
            <h6 style={{color:'transparent'}}>CONVERT BUTTON</h6>
            <div><a className="convert-button waves-effect waves-light btn-large" onClick={()=>{convert()}}>CONVERT</a></div>
        </div>
    )
}

export default ConvertButton
