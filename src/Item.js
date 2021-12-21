import React, { Component } from "react";


class Item {
    constructor(id) {
        this._id = id;
        this.obtained = false;

        this.id = this.id.bind(this);
        this.classes = this.classes.bind(this);
        this.style = this.style.bind(this);
        this.alt = this.alt.bind(this);
        this.click = this.click.bind(this);
    }

    id() {
        return this._id;
    }

    classes() {
        return `item ${this.obtained ? "obtained" : ""}`;
    }

    style() {
        let img = require(`./equipment/${this.id()}.png`);
        return { background: "no-repeat url(" + img + ") 100% / contain" };
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


export { Item, MultiSlotItem, DefaultItem };
