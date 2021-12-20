import React, { Component } from "react";


import { EquipmentItems } from "./Items";


import equipment from "./equipment.png";
import selectItem from "./select_item.png";
import questStatus from "./quest_status.png";
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
                    
                    { EquipmentItems["kokiri-sword"] }
                    { EquipmentItems["deku-shield"] }
                    { EquipmentItems["kokiri-tunic"] }
                    { EquipmentItems["kokiri-boots"] }

                    { EquipmentItems["master-sword"] }
                    { EquipmentItems["hylian-shield"] }
                    { EquipmentItems["goron-tunic"] }
                    { EquipmentItems["iron-boots"] }

                    { EquipmentItems["biggorons-sword"] }
                    { EquipmentItems["mirror-shield"] }
                    { EquipmentItems["zora-tunic"] }
                    { EquipmentItems["hover-boots"] }
                </div>
            </div>
        )
    }
}


class SelectItem extends Component {
    render() {
        return( 
            <div id="select-item" className="img-wrap">
                <img src={selectItem} />
                <div id="select-item-contain"/>
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
