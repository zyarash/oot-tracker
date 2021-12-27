import React, { Component } from "react";


class Item {
    constructor(id) {
        this._id = id;
        this.obtained = false;

        this.id = this.id.bind(this);
        this.obtained = this.obtained.bind(this);
        this.classes = this.classes.bind(this);
        this.style = this.style.bind(this);
        this.alt = this.alt.bind(this);
        this.click = this.click.bind(this);
    }

    id() {
        return this._id;
    }

    obtained() {
        return this.obtained;
    }

    classes() {
        return `item ${this.obtained ? "obtained" : ""}`;
    }

    style() {
        let img = require(`./equipment/${this.id()}.png`);
        return { background: "no-repeat url(" + img + ") center / contain" };
    }

    alt() {
        let name = this.id().split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
        let obtained = this.obtained ? "[Obtained]" : "[Unobtained]";
        return `${name} ${obtained}`;
                                                                                                    
    }

    click() {
        this.obtained = !this.obtained;
    }
}


class MultiSlotItem extends Item {
    constructor(id, values) {
        super(id);
        this.value = 0;
        this.values = values;
    }

    id() {
        return this.values[this.value];
    }

    obtained(item = null) {
        if (item === null) { return this.obtained; }
        if (!(item in this.values)) { throw Error("Item is not valid!") }
    }

    classes() {
        return `item ${this._id} ${this.obtained ? "obtained" : ""}`;
    }

    click() {
        if (this.obtained) {
            if (this.value + 1 >= this.values.length) {
                this.obtained = false;
                this.value = 0;
            }
            else {
                this.value = this.value + 1;
            }
        }
        else {
            this.obtained = !this.obtained;
        }
    }
}


class DefaultItem extends Item {
    constructor(id) {
        super(id);
        this.obtained = true;
    }

    classes() {
        return "item default-item obtained";
    }
    
    click() {
    }
}


class MapItem extends Item {
    constructor(id, x, y, reqs = "") {
        super(id);
        this.x = x;
        this.y = y;
        this.reqs = reqs;

        this.obtainable = this.obtainable.bind(this);
    }

    obtainable(equipment) {
        if (this.reqs === "") { return true; }

        console.log(eval("equipment['ocarina'].obtained"));
        let reqs = this.reqs;
        let items = reqs.match(/\[\S*]/g);
        for (const item of items) {
            let _item = item.replace(/(\[|\])/g, '');
            console.log(_item);
            reqs = reqs.replace(item, equipment[_item].obtained);
        }
        console.log(reqs);
        return eval(reqs);
    }
    
    classes(equipment) {
        return `map-item ${this.obtainable(equipment) ? "obtainable" : ""} ${this.obtained ? "obtained" : ""}`;
    }

    style() {
        return { left: `${this.x}%`, top: `${this.y}%` }
    }

    alt(equipment) {
        let name = this.id().split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
        let obtained = this.obtained ? "[Obtained]" : (this.obtainable(equipment) ? "[Obtainable // Unobtained]" : "[Unobtainable // Unobtained]");
        return `${name} ${obtained}`;
    }
}


export { Item, MultiSlotItem, DefaultItem, MapItem };
