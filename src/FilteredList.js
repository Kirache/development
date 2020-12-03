//contains filtering/sorting/aggregator methods
import './filteredlist.css';
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import DisplayList from './DisplayList.js';

export default class FilteredList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
			weapon: "All",
			element: "All",
			star: "All",
			whaleSort: "Descending"
        };
    }

	onSelectFilterElement = event => {
		this.setState({
			element: event
		})
	};

	matchesFilterStar = item => {
		if(this.state.star === "All") {
			return true
		} else if (this.state.star === item.star) {
			return true
		} else {
			return false
		}
	}

	onSelectFilterStar = event => {
		this.setState({
			star: event
		})
	};

	matchesFilterElement = item => {
		if(this.state.element === "All") {
			return true
		} else if (this.state.element === item.element) {
			return true
		} else {
			return false
		}
	}

	onSelectFilterWeapon = event => {
		this.setState({
			weapon: event
		})
	};

	matchesFilterWeapon = item => {
		if(this.state.weapon === "All") {
			return true
		} else if (this.state.weapon === item.weapon) {
			return true
		} else {
			return false
		}
	}

	onSelectSortWhale = event => {
		this.setState({
			whaleSort: event
		})
	}

	chooseSort = (a,b) => {
		if(this.state.whaleSort === "Descending") {
			return b.whalelevel - a.whalelevel
		}
		else {
			return a.whalelevel - b.whalelevel
		}
	}

	addItem = item => {

	}

    render() {
        return (
            <div className="filtered-list">
				<Navbar className="navbar-class">
				<Nav className="nav-class">
					Rarity :
					<Nav.Item className="nav-item reset">
						<Nav.Link eventKey="All" onSelect={this.onSelectFilterStar}>Reset</Nav.Link>
					</Nav.Item>
					<Nav.Item className="nav-item">
						<Nav.Link eventKey="5" onSelect={this.onSelectFilterStar}>5*</Nav.Link>
					</Nav.Item>
					<Nav.Item className="nav-item">
						<Nav.Link eventKey="4" onSelect={this.onSelectFilterStar}>4*</Nav.Link>
					</Nav.Item>
				</Nav>
				<Nav className="nav-class">
					Element :
					<Nav.Item className="nav-item reset">
						<Nav.Link eventKey="All" onSelect={this.onSelectFilterElement}>Reset</Nav.Link>
					</Nav.Item>
					<Nav.Item className="nav-item">
						<Nav.Link eventKey="Pyro" onSelect={this.onSelectFilterElement}>Pyro</Nav.Link>
					</Nav.Item>
					<Nav.Item className="nav-item">
						<Nav.Link eventKey="Hydro" onSelect={this.onSelectFilterElement}>Hydro</Nav.Link>
					</Nav.Item>
					<Nav.Item className="nav-item">
						<Nav.Link eventKey="Anemo" onSelect={this.onSelectFilterElement}>Anemo</Nav.Link>
					</Nav.Item>
					<Nav.Item className="nav-item">
						<Nav.Link eventKey="Electro" onSelect={this.onSelectFilterElement}>Electro</Nav.Link>
					</Nav.Item>
					<Nav.Item className="nav-item">
						<Nav.Link eventKey="Dendro" onSelect={this.onSelectFilterElement}>Dendro</Nav.Link>
					</Nav.Item>
					<Nav.Item className="nav-item">
						<Nav.Link eventKey="Cryo" onSelect={this.onSelectFilterElement}>Cryo</Nav.Link>
					</Nav.Item>
					<Nav.Item className="nav-item">
						<Nav.Link eventKey="Geo" onSelect={this.onSelectFilterElement}>Geo</Nav.Link>
					</Nav.Item>
				</Nav>
				<Nav className="nav-class">
					Weapon :
					<Nav.Item className="nav-item reset">
						<Nav.Link eventKey="All" onSelect={this.onSelectFilterWeapon}>Reset</Nav.Link>
					</Nav.Item>
					<Nav.Item className="nav-item">
						<Nav.Link eventKey="Sword" onSelect={this.onSelectFilterWeapon}>Sword</Nav.Link>
					</Nav.Item>
					<Nav.Item className="nav-item">
						<Nav.Link eventKey="Claymore" onSelect={this.onSelectFilterWeapon}>Claymore</Nav.Link>
					</Nav.Item>
					<Nav.Item className="nav-item">
						<Nav.Link eventKey="Polearm" onSelect={this.onSelectFilterWeapon}>Polearm</Nav.Link>
					</Nav.Item>
					<Nav.Item className="nav-item">
						<Nav.Link eventKey="Bow" onSelect={this.onSelectFilterWeapon}>Bow</Nav.Link>
					</Nav.Item>
					<Nav.Item className="nav-item">
						<Nav.Link eventKey="Catalyst" onSelect={this.onSelectFilterWeapon}>Catalyst</Nav.Link>
					</Nav.Item>
				</Nav>
				<Nav className="nav-class">
					Sort :
					<Nav.Item className="nav-item active">
						<Nav.Link eventKey="Descending" onSelect={this.onSelectSortWhale}>Descending Whale Level</Nav.Link>
					</Nav.Item>
					<Nav.Item className="nav-item">
						<Nav.Link eventKey="Ascending" onSelect={this.onSelectSortWhale}>Ascending Whale Level</Nav.Link>
					</Nav.Item>
				</Nav>
				</Navbar>
				<DisplayList addToList={this.props.addToList} list={this.props.list.filter(this.matchesFilterElement)
					.filter(this.matchesFilterWeapon)
					.filter(this.matchesFilterStar)
					.sort(this.chooseSort)}/>
            </div>
        );
    }
}
