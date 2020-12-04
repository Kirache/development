// Displays "Owned" characters section and computes Whale Level
// Maps owned characters stored in App.js to an HTML element for render
// Allows change in amount and removal of characters from owned section
import React from "react";
import './aggregator.css';

export default class Aggregator extends React.Component {
    constructor(props) {
        super(props);
    }

    // Filtering function for if user owns at least one of the item.
    // Returns true if owned, else false
	ownsFilter = item => {
		if(item.owned > 0) {
			return true
		} else {
			return false
		}
	}

    // Sorting function for determining which item was added first
    // Used for displaying items in Owned section in correct order
	orderSorter = (a,b) => {
		return a.order - b.order
	}

    // Maps owned characters stored in App.js to an HTML div for render
	showList = () => {
        // Filter and sort to get list of owned characters in order they were added
		const list = this.props.getList().filter(this.ownsFilter).sort(this.orderSorter);

		if (list.length > 0){
			return list.map(item =>
				<div className="agg-item">
					<div className="agg-details">
						<img src={item.image} alt={item.name}></img>
						<div className="detail-name">{item.star}* {item.name}</div>
						<div> +{item.whalelevel} Whale Level</div>
					</div>
					<div className="amount">
						<button className="change-amount" onClick={() => this.props.decrease(item.name)}>-</button>
						<div className="center">{item.owned} Owned</div>
						<button className="change-amount" onClick={() => this.props.addToList(item.name)}>+</button>
					</div>
					<button className="remove" onClick={() => this.props.remove(item.name)}>Remove</button>
				</div>)

		}
		else {
			return
		}
	}

    // Accumulating function for total whale level of owned characters
	reducer = (accumulator, item) => {
		return accumulator + item.whalelevel*item.owned
	}

    // Returns total whale level of owned characters
	total = () => {
		return this.props.getList().reduce(this.reducer, 0)
	}

    // Render HTML "Owned" characters section with Total Whale Level
    render() {
        return (
            <div className="agg">
				<h1>Owned</h1>
				<p>Total Whale Level : {this.total()}</p>
				<div className="list">{this.showList()}</div>
            </div>
        );
    }
}
