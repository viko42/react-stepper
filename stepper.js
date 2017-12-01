import React, { Component } from 'react';

import './stepper.css'

class Stepper extends Component {
	constructor(props) {
		super(props);

		this.generate = this.generate.bind(this);
	}
	generate() {
		let bubbleMax	= this.props.steppers.length, i = 0;
		let render		= [];

		while (bubbleMax > i) {
			render.push(
				<div key={i} className={"step " + (this.props.actual >= i ? 'active-step ' : ' ') + (this.props.actual > i ? 'done-step' : ' ')}>
					<div className="bubble">{this.props.actual > i ? <i className="fa fa-check"></i> : <span>{i+1}</span>}</div>
					<div className="title">{this.props.steppers[i]}</div>
					<div className="bar-left"></div>
					{(i + 1) === bubbleMax ? '' : <div className="bar-right"></div>}
				</div>
			)
			i++;
		}
		return render;
	}
    render() {
        return (
            <div className="stepper">
				{this.generate()}
			</div>
        )
    }
}

export default Stepper
