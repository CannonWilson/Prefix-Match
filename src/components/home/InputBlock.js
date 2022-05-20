import './InputBlock.css'
//import {useEffect} from "react";

function InputBlock(props) {

    // Use this function in order to only update local storage after the user hasn't typed for a bit
    // useEffect( () => {
    //     //let typingTimer
    //     //let doneTypingInterval = 2000
    //     const nameInputs = Array.from(document.getElementsByClassName('nameInput'))
    //     const ipInputs = Array.from(document.getElementsByClassName('ipInput'))
    //     const subnetInputs = Array.from(document.getElementsByClassName('subnetInput'))
    //     nameInputs.forEach( (inp) => addListener(inp) )
    //     ipInputs.forEach( (inp) => addListener(inp) )
    //     subnetInputs.forEach( (inp) => addListener(inp) )
    //
    //     function addListener(elem) {
    //         elem.addEventListener('keyup', (event) => {
    //             // clearTimeout(typingTimer)
    //             // if (elem.value) {
    //             //     typingTimer = setTimeout(doneTyping, doneTypingInterval)
    //             // }
    //             sessionStorage.setItem(event.target.value, 'howdy')
    //         })
    //     }
    // } )
    //
    // function doneTyping () {
    //     console.log('done typing')
    //
    // }
    
    return (
        <div style={{marginTop: "20px"}}>
            <button className="minusButton" onClick={() => {props.MinusButtonClicked(props.itemVal); console.log('deleting counterVal', props.itemVal)}}> - </button>
            <div className="inputWrapper">
                <div className="ip">Destination IP address:</div>
                <input className="ipInput" placeholder="192.168.0.1" />
            </div>
        </div>
    )
}

export default InputBlock