import React from "react";
import { Component } from "react";

import "./FlipCard.scss"

// ----------------------------------------------------------------------------

class AnimatedCard extends Component {
    render() {
        const { position, digit, animation } = this.props;
        // console.log('AnimatedCard', position, digit, animation);
        return(
            <div className={`flipCard ${position} ${animation}`}>
                <span>{digit||0}</span>
            </div>
        );
    }
}

// ----------------------------------------------------------------------------

class StaticCard extends Component {
    render() {
        const { position, digit } = this.props;
        // console.log('StaticCard', position, digit);
        return(
            <div className={position}>
                <span>{digit||0}</span>
            </div>
        );
    }
}

// ----------------------------------------------------------------------------

class FlipCard extends Component {

    constructor(props) {
        super(props); 
        this.state = { 
            shuffle: true
        };
    } 

    componentWillReceiveProps(nextProps) {
        const { digit, pre_digit } = nextProps;
        if(digit !== this.props.digit && digit !== pre_digit) 
            this.setState( {
                shuffle : !this.state.shuffle,
            });
    }

    render() {
        const { shuffle } = this.state;

        const { digit, pre_digit } = this.props;
        const totalLength = 2;
        let label_now = String(digit).padStart(totalLength, '0');
        let label_before = String(pre_digit).padStart(totalLength, '0');

        console.log("FlipCard/render: this is label value");
        console.log(label_now);

        return (
            <div className={'flipUnitContainer'}>
            <StaticCard 
                position={'upperCard'} 
                digit={label_now} 
                />

            <StaticCard 
                position={'lowerCard'} 
                digit={label_before} 
                />

            <AnimatedCard 
                position={'first'}
                digit={shuffle ? label_before : label_now}
                animation={shuffle ? 'fold' : 'unfold'}
                />

            <AnimatedCard 
                position={'second'}
                digit={!shuffle ? label_before : label_now}
                animation={!shuffle ? 'fold' : 'unfold'}
                />

            </div>
        )
    }
}


export default FlipCard;