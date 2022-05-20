import {useLocation, Link} from "react-router-dom";
import {useEffect} from "react";
import "./Header.css"

function Header() {

    const location = useLocation().pathname

    return (
        <div>
        <header>
            <div className="leftHeader">
                <Link to="/"><span className="prefix">prefix</span><span className="match">match</span></Link>
            </div>
            <div className="rightHeader">
                <div className="calcWrapper">
                    <Link className={location === "/" ? "active" : "inactive"} to="/" >Calculator</Link>
                    <div className={location === "/" ? "activeBox box" : "box"}/>
                </div>
                <div className="aboutWrapper">
                    <Link className={location === "/about" ? "active" : "inactive"} to="/about" >About</Link>
                    <div className={location === "/about" ? "activeBox box" : "box"} />
                </div>
                <div className="apiWrapper">
                    <Link className={location === "/api" ? "active" : "inactive"} to="/api" >Api</Link>
                    <div className={location === "/api" ? "activeBox box" : "box"} />
                </div>
            </div>
        </header>
        </div>
    )
}

export default Header