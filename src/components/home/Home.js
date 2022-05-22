import Header from "../shared/header/Header";
import "./Home.css"
import {useState} from "react";
import InputBlock from "./InputBlock";
import SubnetBlock from "./SubnetBlock"

function Home() {

    const [input, setInput] = useState([])
    const [settings, setSettings] = useState([])
    const [output, setOutput] = useState([])

    function inputBtnPressed() {
        if (input.length < 16) { // Only allow for 16 input blocks
            setInput([...input, counter])
            setCounter(counter+1)
        }
    }

    function settingBtnPressed() {
        if (settings.length < 12) { // Only allow for 12 subnet blocks
            setSettings([...settings, settingsCounter])
            setSettingsCounter(settingsCounter + 1)
        }
    }

    const [counter, setCounter] = useState(0)
    const [settingsCounter, setSettingsCounter] = useState(0)
    const [useBinaryInputs, setuseBinaryInputs] = useState(false)
    const [useBinarySubnets, setUseBinarySubnets] = useState(false)

    function binaryInputClicked() {
        setuseBinaryInputs(!useBinaryInputs)
    }
    
    function binarySubnetsClicked() {
        setUseBinarySubnets(!useBinarySubnets)
    }
    
    function InputMinusButtonClicked(itemVal) {
        setInput(input.filter(item => item !== itemVal))
    }
    
    function SubnetMinusButtonClicked(itemVal) {
        setSettings(settings.filter(item => item !== itemVal))
    }


    return (
        <div>
            <Header />
            <div className="homeWrapper">

                <div className="leftSection">
                    <h4>Click on the plus button below to add incoming packets.</h4>
                    <div className="binaryBox">
                        <label htmlFor="binaryCheckInput">Use Binary Notation</label>
                        <input type="checkbox" id="binaryCheckInput" name="binaryCheckInput" checked={useBinaryInputs} onChange={binaryInputClicked} />
                    </div>

                    {input.map( (item) =>
                        <InputBlock key={item} itemVal={item} MinusButtonClicked={InputMinusButtonClicked} />
                    )}

                    <button onClick={inputBtnPressed} className="addBtn">+</button>
                </div>

                <div className="middleSection">
                    <h4>Click on the plus button below to add router interfaces.</h4>
                    <div className="binaryBox">
                        <label htmlFor="binarySubnetsCheck">Use Binary Notation</label>
                        <input type="checkbox" id="binarySubnetsCheck" name="binarySubnetsCheck" checked={useBinarySubnets} onChange={binarySubnetsClicked} />
                    </div>

                    {settings.map( (item) =>
                        <SubnetBlock key={item} itemVal={item} MinusButtonClicked={SubnetMinusButtonClicked}/>
                    )}

                    <button onClick={settingBtnPressed} className="addBtn">+</button>
                </div>

                <div className="rightSection">
                    <div><strong>Output</strong></div>
                </div>

            </div>
        </div>
    )
}

export default Home