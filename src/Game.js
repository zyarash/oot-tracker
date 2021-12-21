import React, { Component } from "react";


import { EquipmentItems, SelectItems } from "./Items";


import "./Items.css";


class ItemSelectBase extends Component {
    constructor(props) {
        super(props);

        this.renderItem = this.renderItem.bind(this);
        this.img = this.img.bind(this);
        this.style = this.style.bind(this);
        this.items = this.items.bind(this);
        this.click = this.click.bind(this);

        this.state = { items: this.props.items }
    }

    renderItem(id) {
        let item = this.state.items[id];
        return (
                <div id={item.id()}
                    className={item.classes()}
                    style={item.style()}
                    title={item.alt()}
                    onClick={() => this.click(id)}
                />
        )
    }

    img() {
        return require(`./${this.props.id}.png`);
    }

    style() {
        return { background: "no-repeat url(" + this.img() + ") 100% / contain" };
    }

    click(id) {
        this.state.items[id].click();
        this.setState({ items: this.state.items });
    }

    items() {
        throw "Not Implemented!!!";
    }

    render() {
        return(
            <div id={this.props.id} style={this.style()} className="img-wrap">
                <img src={this.img()} />
                { this.items() }
            </div>
        )
    }
}


class Equipment extends ItemSelectBase {
    items() {
        return (
            <div id="equipment-contain">
                <div id="projectiles">
                    { this.renderItem("bullet-bag") }
                    { this.renderItem("quiver") }
                </div>
                { this.renderItem("bomb-bag") }
                { this.renderItem("bracer") }
                { this.renderItem("scale") }

                <div className="spacer"/>
                <div className="spacer"/>
                <div className="spacer"/>
                <div className="spacer"/>

                { this.renderItem("kokiri-sword") }
                { this.renderItem("deku-shield") }
                { this.renderItem("kokiri-tunic") }
                { this.renderItem("kokiri-boots") }

                { this.renderItem("master-sword") }
                { this.renderItem("hylian-shield") }
                { this.renderItem("goron-tunic") }
                { this.renderItem("iron-boots") }

                { this.renderItem("biggorons-sword") }
                { this.renderItem("mirror-shield") }
                { this.renderItem("zora-tunic") }
                { this.renderItem("hover-boots") }
            </div>
        )
    }
}


class SelectItem extends ItemSelectBase {
    items() {
        return( 
            <div id="select-item-contain">
                { this.renderItem("deku-stick") }
                { this.renderItem("fairy-slingshot") }
                { this.renderItem("boomerang") }
                { this.renderItem("bottle-1") }

                { this.renderItem("deku-nut") }
                { this.renderItem("ocarina") }
                { this.renderItem("lense-of-truth") }
                { this.renderItem("bottle-2") }

                { this.renderItem("bombs") }
                { this.renderItem("bombchu") }
                { this.renderItem("magic-beans") }
                { this.renderItem("bottle-3") }

                { this.renderItem("fairy-bow") }
                { this.renderItem("hookshot") }
                { this.renderItem("megaton-hammer") }
                { this.renderItem("bottle-4") }

                { this.renderItem("fire-arrows") }
                { this.renderItem("ice-arrows") }
                { this.renderItem("light-arrows") }
                { this.renderItem("trading-sequence") }

                { this.renderItem("dins-fire") }
                { this.renderItem("farores-wind") }
                { this.renderItem("nayrus-love") }
                { this.renderItem("happy-mask") }
            </div>
        )
    }
}


class QuestStatus extends ItemSelectBase {
    items() {
        return(<div/>)
    }
}


class Map extends Component {
    render() {
        return (
            <div id="map" className="img-wrap">
                <img src={require("./map.png")} />
            </div>
        )
    }
}


class Game extends Component {
    render() {
        return (
            <div id="contain">
                <div id="menu">
                    <Equipment id="equipment" items={EquipmentItems} />
                    <SelectItem id="select-item" items={SelectItems} />
                    <QuestStatus id="quest-status" items={EquipmentItems} />
                </div>
                <Map />
            </div>
        )
    }
}

export default Game;
