// import './InputBlock.css'
//import {useEffect} from "react";

// function InputBlock() {

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

//     return (
//         <div className="inputWrapper">
//             <div className="name">Packet name:</div>
//             <input className="nameInput" value={props.name} />
//             <div className="ip">IP address:</div>
//             <input className="ipInput" />
//             <div className="subnet">Subnet mask:</div>
//
//             <select name="csubnet" className="subnetInput">
//                 <option value="32">255.255.255.255 /32</option>
//                 <option value="31">255.255.255.254 /31</option>
//                 <option value="30">255.255.255.252 /30</option>
//                 <option value="29">255.255.255.248 /29</option>
//                 <option value="28">255.255.255.240 /28</option>
//                 <option value="27">255.255.255.224 /27</option>
//                 <option value="26">255.255.255.192 /26</option>
//                 <option value="25">255.255.255.128 /25</option>
//                 <option value="24">255.255.255.0 /24</option>
//                 <option value="23">255.255.254.0 /23</option>
//                 <option value="22">255.255.252.0 /22</option>
//                 <option value="21">255.255.248.0 /21</option>
//                 <option value="20">255.255.240.0 /20</option>
//                 <option value="19">255.255.224.0 /19</option>
//                 <option value="18">255.255.192.0 /18</option>
//                 <option value="17">255.255.128.0 /17</option>
//                 <option value="16">255.255.0.0 /16</option>
//                 <option value="15">255.254.0.0 /15</option>
//                 <option value="14">255.252.0.0 /14</option>
//                 <option value="13">255.248.0.0 /13</option>
//                 <option value="12">255.240.0.0 /12</option>
//                 <option value="11">255.224.0.0 /11</option>
//                 <option value="10">255.192.0.0 /10</option>
//                 <option value="9">255.128.0.0 /9</option>
//                 <option value="8">255.0.0.0 /8</option>
//                 <option value="7">254.0.0.0 /7</option>
//                 <option value="6">252.0.0.0 /6</option>
//                 <option value="5">248.0.0.0 /5</option>
//                 <option value="4">240.0.0.0 /4</option>
//                 <option value="3">224.0.0.0 /3</option>
//                 <option value="2">192.0.0.0 /2</option>
//                 <option value="1">128.0.0.0 /1</option>
//             </select>
//
//         </div>
//     )
// }

// export default InputBlock