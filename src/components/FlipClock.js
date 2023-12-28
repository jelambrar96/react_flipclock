import React, {Component} from 'react'
import FlipCard from './FlipCard';

import "./FlipClock.scss"

class FlipClock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "hours": 0,
            "hours_pre": 0,
            "minutes": 0,
            "minutes_pre": 0,
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateTime(),
            1000
        );
    }

    // componentDidMount() {
    //     this.updateTime();
    // }

    componentWillUnmount() {
        clearInterval(this.timerID);
        // this.updateTime();
    }

    updateTime() {
        // const { type, count_to } = this.props;
        let units = [];

        const time_now = new Date();

        units.hours = time_now.getHours();
        units.minutes = time_now.getMinutes();
        // units.minutes = time_now.getSeconds();

        if (this.state["hours"] === units["hours"] && this.state["minutes"] === units["minutes"]) {
            return;
        }

        this.setState({
            "hours": units["hours"],
            "hours_pre": this.state["hours"] || 0,
            "minutes": units["minutes"],
            "minutes_pre": this.state["minutes"] || 0,
        })
    }


    render() {
        return	(
            <div className={'FlipClock'}>
                <FlipCard 
                    digit = {this.state["hours"]} 
                    pre_digit = {this.state["hours_pre"]} 
                    __shuffle = {this.state["hours_shuf"]} 
                    key = {'fcu-0'}
                />
                <div className='divider' key={'fcu-div-1'}>{'\u00A0'}</div>
                <FlipCard 
                    digit = {this.state["minutes"]} 
                    pre_digit = {this.state["minutes_pre"]} 
                    __shuffle = {this.state["minutes_shuf"]} 
                    key = {'fcu-1'}
                />
            </div>
        )
    }

}

export default FlipClock; 