import Header from "../shared/header/Header";
import "./Home.css"
import {useState} from "react";
// import InputBlock from "./InputBlock";

function Home() {

    const [input, setInput] = useState([])
    const [settings, setSettings] = useState([])
    const [output, setOutput] = useState([])

    function inputBtnPressed() {
        if (counter < 16) { // Only allow for 16 input blocks
            setInput([...input, counter])
            setCounter(counter+1)
        }
    }

    function settingBtnPressed() {
        if (settingsCounter < 16) {
            setSettings([...settings, settingsCounter])
            setSettingsCounter(settingsCounter + 1)
        }
    }

    const [counter, setCounter] = useState(0)
    const [settingsCounter, setSettingsCounter] = useState(0)
    const defaultInterfaces = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']
    const [useCidr, setUseCidr] = useState(true)

    function cidrClicked() {
        setUseCidr(!useCidr)
        document.getElementById('cidrCheck').input.checked = useCidr.toString();
    }


    return (
        <div>
            <Header />
            <div className="homeWrapper">

                <div className="leftSection">
                    <h4>Click on the plus button below to add incoming packets.</h4>
                    {input.map( (item) =>

                        <div className="inputWrapper" key={input.indexOf(item)}>
                            <div className="ip">Destination IP address:</div>
                            <input className="ipInput" placeholder="192.168.0.1" />
                        </div>

                    )}

                    <button onClick={inputBtnPressed} className="addBtn">+</button>
                </div>

                <div className="middleSection">
                    <h4>Click on the plus button below to add router interfaces.</h4>
                    <div className="cidrBox">
                        <label htmlFor="cidrCheck">Use CIDR Notation</label>
                        <input type="checkbox" id="cidrCheck" name="cidrCheck" checked={useCidr} onChange={cidrClicked} />
                    </div>

                    {settings.map( (item) =>
                        <div className="inputWrapper"  key={settings.indexOf(item)}>
                            <div className="name">Interface name:</div>
                            <input className="nameInput" placeholder={defaultInterfaces[item]} />
                            <div className="subnet">Subnet mask:</div>
                            <select name="csubnet" className="subnetInput">
                                    <option value="32">255.255.255.255 /32</option>
                                    <option value="31">255.255.255.254 /31</option>
                                    <option value="30">255.255.255.252 /30</option>
                                    <option value="29">255.255.255.248 /29</option>
                                    <option value="28">255.255.255.240 /28</option>
                                    <option value="27">255.255.255.224 /27</option>
                                    <option value="26">255.255.255.192 /26</option>
                                    <option value="25">255.255.255.128 /25</option>
                                    <option value="24">255.255.255.0 /24</option>
                                    <option value="23">255.255.254.0 /23</option>
                                    <option value="22">255.255.252.0 /22</option>
                                    <option value="21">255.255.248.0 /21</option>
                                    <option value="20">255.255.240.0 /20</option>
                                    <option value="19">255.255.224.0 /19</option>
                                    <option value="18">255.255.192.0 /18</option>
                                    <option value="17">255.255.128.0 /17</option>
                                    <option value="16">255.255.0.0 /16</option>
                                    <option value="15">255.254.0.0 /15</option>
                                    <option value="14">255.252.0.0 /14</option>
                                    <option value="13">255.248.0.0 /13</option>
                                    <option value="12">255.240.0.0 /12</option>
                                    <option value="11">255.224.0.0 /11</option>
                                    <option value="10">255.192.0.0 /10</option>
                                    <option value="9">255.128.0.0 /9</option>
                                    <option value="8">255.0.0.0 /8</option>
                                    <option value="7">254.0.0.0 /7</option>
                                    <option value="6">252.0.0.0 /6</option>
                                    <option value="5">248.0.0.0 /5</option>
                                    <option value="4">240.0.0.0 /4</option>
                                    <option value="3">224.0.0.0 /3</option>
                                    <option value="2">192.0.0.0 /2</option>
                                    <option value="1">128.0.0.0 /1</option>
                                </select>
                        </div>

                    )}

                    <button onClick={settingBtnPressed} className="addBtn">+</button>
                </div>

                <div className="rightSection">
                    output
                </div>

            </div>
        </div>
    )
}

export default Home