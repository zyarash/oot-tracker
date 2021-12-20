import React, { Component } from "react";


class Item extends Component {
    constructor(props) { 
        super(props);

        this.id = this.id.bind(this);
        this.classes = this.classes.bind(this);
        this.click = this.click.bind(this);
        this.alt = this.alt.bind(this);

        this.state = { obtained: false };
    }

    id() {
        return this.props.id;
    }

    classes() {
        return `item ${this.state.obtained ? "obtained" : ""}`;
    }

    click() {
        this.setState({ obtained: !this.state.obtained });
    }

    alt() {
        let name = this.id().split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
        let obtained = this.state.obtained ? "[Obtained]" : "[Unobtained]";
        return `${name} ${obtained}`;

    }

    render() {
        return (
            <div 
                id={this.id()}
                className={this.classes()}
                onClick={() => this.click()}
                title={this.alt()}
            />
        )
    }
}


class MultiSlotItem extends Item {
    constructor(props) { 
        super(props);
                                                                                                                               
        this.state = { obtained: false, value: 0, values: this.props.values };
    }

    id() {
        return this.state.values[this.state.value];
    }

    classes() {
        return `item ${this.props.id} ${this.state.obtained ? "obtained" : ""}`;
    }
                                                                                                                               
    click() {
        if (this.state.obtained) {
            if (this.state.value + 1 >= this.state.values.length) {
                this.setState({ obtained: false, value: 0 });
            }
            else {
                this.setState({ value: this.state.value + 1 });
            }
        }
        else {
            this.setState({ obtained: !this.state.obtained });
        }
    }
}


class DefaultItem extends Item {
    constructor(props) { 
        super(props);
        this.state = { obtained: true };
    }

    classes() {
        return "item default-item obtained";
    }

    click() {
    }
}

export { Item, MultiSlotItem, DefaultItem };
