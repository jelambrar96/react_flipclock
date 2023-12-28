import React from "react";
import { Component } from "react";

import FlipCard from "./FlipCard";

class FlipCardHour extends FlipCard {

    constructor(props) {
        super(props); 
        this.state = { value: 0, mode24: false };
    } 

    render() {
        let label_number = value % 12 == 0 ? 12 : value % 12;
        let label_ampm = value < 12 ? "AM" : "PM";
        console.log("FlipCardHour/render: this is label value");
        console.log(label_number);
        console.log(label_ampm);
        return (<div>{label_number} - {label_ampm}</div>);
    }
}


export default FlipCardHour;