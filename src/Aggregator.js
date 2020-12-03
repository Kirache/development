//maps each product from App.js to an HTML element or Component for render
import React from "react";
import './aggregator.css';

export default class Aggregator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
			list: []
        };
    }

	ownsFilter = item => {
		if(item.owned > 0) {
			return true
		} else {
			return false
		}
	}

	owns = item => item.owned > 0;

	orderSorter = (a,b) => {
		return a.order - b.order
	}

	showList = () => {
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

	reducer = (accumulator, item) => {
		return accumulator + item.whalelevel*item.owned
	}

	total = () => {
		return this.props.getList().reduce(this.reducer, 0)
	}

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
