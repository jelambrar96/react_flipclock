import { Component } from "react";

import FlipClock from "./FlipClock";

import "./Canvan.scss"

class Canvan extends Component{
    

    render() {
        return (
        <div className="Canvan">
            <div className="vertical-center">
            <FlipClock type="clock"></FlipClock>
            </div>
        </div>)
    }

}

export default Canvan;