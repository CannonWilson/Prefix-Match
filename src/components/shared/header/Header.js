import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import "./Header.css"

function Header() {

    const location = useLocation().pathname

    useEffect( () => {
        if (location === "/") {
            document.getElementById("calcElem").className = "active"
            document.getElementById("aboutElem").className = "inactive"
            document.getElementById("apiElem").className = "inactive"
            // Need to clean this up to make more accurate!!
            // Bar doesn't move as screen is resized
            document.getElementById("bar").style.marginLeft = `${document.getElementById("calcElem").getBoundingClientRect().x}px`
        }
        else if (location === "/about") {
            document.getElementById("calcElem").className = "inactive"
            document.getElementById("aboutElem").className = "active"
            document.getElementById("apiElem").className = "inactive"
            document.getElementById("bar").style.marginLeft = `${document.getElementById("aboutElem").getBoundingClientRect().x}px`
        }
        else if (location === "/api") {
            document.getElementById("calcElem").className = "inactive"
            document.getElementById("aboutElem").className = "inactive"
            document.getElementById("apiElem").className = "active"
            document.getElementById("bar").style.marginLeft = `${document.getElementById("apiElem").getBoundingClientRect().x}px`
        }

    }, [location])

    return (
        <div>
        <header>
            <div className="leftHeader">
                <a><span className="prefix">prefix</span><span className="match">match</span></a>
            </div>
            <div className="rightHeader">
                <a id="calcElem" href="/" >Calculator</a>
                <a id="aboutElem" href="/about" >About</a>
                <a id="apiElem" href="/api" >Api</a>
            </div>
        </header>
        <div id="bar" />
        </div>
    )
}

export default Header