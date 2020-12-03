import React from "react";
import FilteredList from './FilteredList';
import './App.css';
import Aggregator from './Aggregator.js';

//contains the product list and passes it to FilteredList component

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characterDict: {"Zhongli" : { name: "Zhongli", weapon: "Polearm", element: "Geo", star: "5", whalelevel: 10, owned: 0, order: 0, image: "./images/Zhongli.png"},
                    "Tartaglia" : { name: "Tartaglia", weapon: "Bow", element: "Hydro", star: "5", whalelevel: 10, owned: 0, order: 0, image: "./images/Tartaglia.png"},
                    "Sucrose" : { name: "Sucrose", weapon: "Catalyst", element: "Anemo", star: "4", whalelevel: 1, owned: 0, order: 0, image: "./images/Sucrose.png"},
                    "Klee" : { name: "Klee", weapon: "Catalyst", element: "Pyro", star: "5", whalelevel: 10, owned: 0, order: 0, image: "./images/Klee.png"},
                    "Venti" : { name: "Venti", weapon: "Bow", element: "Anemo", star: "5", whalelevel: 10, owned: 0, order: 0, image: "./images/Venti.png"},
                    "Diluc" : { name: "Diluc", weapon: "Claymore", element: "Pyro", star: "5", whalelevel: 50, owned: 0, order: 0, image: "./images/Diluc.png"},
                    "Qiqi" : { name: "Qiqi", weapon: "Sword", element: "Cryo", star: "5", whalelevel: 50, owned: 0, order: 0, image: "./images/Qiqi.png"},
                    "Xiao" : { name: "Xiao", weapon: "Polearm", element: "Anemo", star: "5", whalelevel: 10, owned: 0, order: 0, image: "./images/Xiao.png"},
                    "Fischl" : { name: "Fischl", weapon: "Bow", element: "Electro", star: "4", whalelevel: 1, owned: 0, order: 0, image: "./images/Fischl.png"},
                    "Ningguang" : { name: "Ningguang", weapon: "Catalyst", element: "Geo", star: "4", whalelevel: 1, owned: 0, order: 0, image: "./images/Ningguang.png"},
                    "Razor" : { name: "Razor", weapon: "Claymore", element: "Electro", star: "4", whalelevel: 1, owned: 0, order: 0, image: "./images/Razor.png"},
                    "Mona" : { name: "Mona", weapon: "Catalyst", element: "Hydro", star: "5", whalelevel: 50, owned: 0, order: 0, image: "./images/Mona.png"},
                    "Keqing" : { name: "Keqing", weapon: "Sword", element: "Electro", star: "5", whalelevel: 50, owned: 0, order: 0, image: "./images/Keqing.png"}},
            order: 0
        };
    }

    addToList = name => {
        var temp = this.state.characterDict;
        if (temp[name].owned === 0) {
            temp[name].order = this.state.order;
            this.setState({
                order: this.state.order + 1
            })
        }
        temp[name].owned += 1;
        this.setState({
            characterDict: temp
        })
    }

    remove = name => {
        var temp = this.state.characterDict;
        temp[name].owned = 0;
        this.setState({
            characterDict: temp
        })
    }

    decrease = name => {
        var temp = this.state.characterDict;
        temp[name].owned -= 1;
        this.setState({
            characterDict: temp
        })
    }

    getList = () => {
        return Object.values(this.state.characterDict)
    }

    render() {

        return (
            <div className="App">
                <div className="center">
                    <h1>Genshin Impact Whale Level Calculator</h1>
                    <div className="bottom">
                        <FilteredList list={Object.values(this.state.characterDict)} addToList={this.addToList}/>
                        <Aggregator getList={this.getList} remove={this.remove} decrease={this.decrease} addToList={this.addToList}/>
                    </div>
                </div>
            </div>
        );
    }
}
