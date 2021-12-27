import React, { Component } from "react";


import { Items, MapItems } from "./Items";


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
        return require(`./backgrounds/${this.props.id}.png`);
    }

    style() {
        return { background: "no-repeat url(" + this.img() + ") 100% / contain" };
    }

    click(id) {
        this.state.items[id].click();
        this.setState({ items: this.state.items });
        this.props.update();
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
            <div id="select-contain">
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
        return(
            <div id="quest-contain">
                <div id="quest-contain-left">
                    <div id="quest-contain-left-top">
                        { this.renderItem("magic-meter") }
                        { this.renderItem("wallet") }
                        { this.renderItem("golden-skulltula") }
                    </div>
                    <div id="quest-contain-left-mid">
                        { this.renderItem("zeldas-lullaby") }
                        { this.renderItem("eponas-song") }
                        { this.renderItem("sarias-song") }
                        { this.renderItem("sun-song") }
                        { this.renderItem("song-of-time") }
                        { this.renderItem("song-of-storms") }

                        { this.renderItem("minuet-of-forest") }
                        { this.renderItem("bolero-of-fire") }
                        { this.renderItem("serenade-of-water") }
                        { this.renderItem("nocturne-of-shadow") }
                        { this.renderItem("requiem-of-spirit") }
                        { this.renderItem("prelude-of-light") }

                    </div>
                    <div id="quest-contain-left-bot"/>
                </div>
                <div id="quest-contain-right">
                    <div id="medallions">
                        <div className="spacer"/>
                        { this.renderItem("light-medallion") }
                        <div className="spacer"/>

                        { this.renderItem("shadow-medallion") }
                        <div className="spacer"/>
                        { this.renderItem("forest-medallion") }

                        <div className="spacer"/>
                        <div className="spacer"/>
                        <div className="spacer"/>

                        { this.renderItem("spirit-medallion") }
                        <div className="spacer"/>
                        { this.renderItem("fire-medallion") }

                        <div className="spacer"/>
                        { this.renderItem("water-medallion") }
                        <div className="spacer"/>
                    </div>
                    <div id="stones">
                        { this.renderItem("kokiri-emerald") }
                        { this.renderItem("gorons-ruby") }
                        { this.renderItem("zora-sapphire") }
                    </div>
                </div>
            </div>
        )
    }
}


class Map extends ItemSelectBase {
    items() {
        return ([
            this.renderItem("kokiri-sword-chest"),
            this.renderItem("saria-on-the-bridge"), 
            this.renderItem("midos-house"),
            this.renderItem("kokiri-song-of-storms-grotto"),


        ])
    }

    renderItem(id) {
        let item = this.state.items[id];
        return (
                <div id={item.id()}
                    key={item.id()}
                    className={item.classes(this.props.equipment)}
                    style={item.style()}
                    title={item.alt(this.props.equipment)}
                    onClick={() => this.click(id)}
                />
        )
    }

    render() {
        return(
            <div id={this.props.id}>
                <div id="map-contain">
                    { this.items() }
                    <img src={this.img()} />
                </div>
            </div>
        )
    }
}


class Game extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        this.state = {
            items: Items,
            mapItems: MapItems,
        };
    }

    click() {
        this.setState({ items: this.state.items, mapItems: this.state.mapItems });
    }

    render() {
        return (
            <div id="contain">
                <div id="menu">
                    <Equipment id="equipment" items={this.state.items} update={() => this.click()}/>
                    <SelectItem id="select-item" items={this.state.items} update={() => this.click()}/>
                    <QuestStatus id="quest-status" items={this.state.items} update={() => this.click()}/>
                </div>
                <Map id="map" items={this.state.mapItems} equipment={this.state.items} update={() => this.click()}/>
            </div>
        )
    }
}

export default Game;
