//maps each product from App.js to an HTML element or Component for render
import React from "react";
import './displaylist.css'

export default class DisplayList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

	test = () => {
		console.log("Test");
	}

    render() {
        return (
            <div className="display-list">
				{this.props.list.map(item =>
					<div className="item">
						<img src={item.image} alt={item.name}></img>
						<div className="details">
							<div>{item.star}* {item.name}</div>
							<div className={item.element}> {item.element}</div>
							<div> {item.weapon}</div>
							<div>+{item.whalelevel} Whale Level</div>
						</div>
						<button onClick={() => this.props.addToList(item.name)}>+</button>
					</div>)}
            </div>
        );
    }
}
