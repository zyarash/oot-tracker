import React, { Component } from "react";


import Game from "./Game";


import "./App.css";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {ur: "mom"};
    }

    render() {
        return (
            <div id="root">
                <Game />
            </div>
        )
    }
}

export default App;
