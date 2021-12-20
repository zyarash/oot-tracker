import React, { Component } from "react";


import { EquipmentItems, SelectItems } from "./Items";


import equipment from "./equipment.png";
import selectItem from "./select-item.png";
import questStatus from "./quest-status.png";
import map from "./map.png";


class Equipment extends Component {
    constructor(props) {
        super(props);
        this.state = { items: EquipmentItems };
    }

    render() {
        return (
            <div id="equipment" className="img-wrap">
                <img src={equipment} />
                <div id="equipment-contain">
                    <div id="projectiles">
                        { this.state.items["bullet-bag"] }
                        { this.state.items["quiver"] }
                    </div>
                    { this.state.items["bomb-bag"] }
                    { this.state.items["bracer"] }
                    { this.state.items["scale"] }

                    <div className="spacer"/>
                    <div className="spacer"/>
                    <div className="spacer"/>
                    <div className="spacer"/>
                    
                    { this.state.items["kokiri-sword"] }
                    { this.state.items["deku-shield"] }
                    { this.state.items["kokiri-tunic"] }
                    { this.state.items["kokiri-boots"] }

                    { this.state.items["master-sword"] }
                    { this.state.items["hylian-shield"] }
                    { this.state.items["goron-tunic"] }
                    { this.state.items["iron-boots"] }

                    { this.state.items["biggorons-sword"] }
                    { this.state.items["mirror-shield"] }
                    { this.state.items["zora-tunic"] }
                    { this.state.items["hover-boots"] }
                </div>
            </div>
        )
    }
}


class SelectItem extends Component {
    constructor(props) {
        super(props);
        this.state = { items: SelectItems };
    }
    render() {
        return( 
            <div id="select-item" className="img-wrap">
                <img src={selectItem} />
                <div id="select-item-contain">
                    { this.state.items["deku-stick"] }
                    { this.state.items["fairy-slingshot"] }
                    { this.state.items["boomerang"] }
                    { this.state.items["bottle-1"] }

                    { this.state.items["deku-nut"] }
                    { this.state.items["ocarina"] }
                    { this.state.items["lense-of-truth"] }
                    { this.state.items["bottle-2"] }

                    { this.state.items["bombs"] }
                    { this.state.items["bombchu"] }
                    { this.state.items["magic-beans"] }
                    { this.state.items["bottle-3"] }

                    { this.state.items["fairy-bow"] }
                    { this.state.items["hookshot"] }
                    { this.state.items["megaton-hammer"] }
                    { this.state.items["bottle-4"] }

                    { this.state.items["fire-arrows"] }
                    { this.state.items["ice-arrows"] }
                    { this.state.items["light-arrows"] }
                    { this.state.items["trading-sequence"] }

                    { this.state.items["dins-fire"] }
                    { this.state.items["farores-wind"] }
                    { this.state.items["nayrus-love"] }
                    { this.state.items["happy-mask"] }
                </div>
            </div>
        )
    }
}


class QuestStatus extends Component {
    render() {
        return(
            <div id="quest-status" className="img-wrap">
                <img src={questStatus} />
            </div>
        )
    }
}


class Map extends Component {
    render() {
        return (
            <div id="map" className="img-wrap">
                <img src={map} />
            </div>
        )
    }
}


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {ur: "mom"};
    }

    render() {
        console.log("a");
        return (
            <div id="contain">
                <div id="menu">
                    <Equipment />
                    <SelectItem />
                    <QuestStatus />
                </div>
                <Map />
            </div>
        )
    }
}

export default Game;
