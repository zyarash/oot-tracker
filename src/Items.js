import React, { Component } from "react";


import { Item, MultiSlotItem, DefaultItem } from "./Item";


const _EquipmentItems = [
    new MultiSlotItem("bullet-bag", ["bullet-bag-30", "bullet-bag-40", "bullet-bag-50"]),
    new MultiSlotItem("quiver", ["quiver-30", "quiver-40", "quiver-50"]),
    new MultiSlotItem("bomb-bag", ["bomb-bag-20", "bomb-bag-30", "bomb-bag-40"]),
    new MultiSlotItem("bracer", ["goron-bracelet", "silver-gauntlets", "golden-gauntlets"]),
    new MultiSlotItem("scale", ["silver-scale", "golden-scale"]),

    new Item("kokiri-sword"),
    new Item("deku-shield"),
    new DefaultItem("kokiri-tunic"),
    new DefaultItem("kokiri-boots"),

    new Item("master-sword"),
    new Item("hylian-shield"),
    new Item("goron-tunic"),
    new Item("iron-boots"),

    new Item("biggorons-sword"),
    new Item("mirror-shield"),
    new Item("zora-tunic"),
    new Item("hover-boots"),
]

const _SelectItems = [
    new DefaultItem("deku-stick"),
    new Item("fairy-slingshot"),
    new Item("boomerang"),
    new Item("bottle-1"),

    new DefaultItem("deku-nut"),
    new MultiSlotItem("ocarina", ["fairy-ocarina", "ocarina-of-time"]),
    new Item("lense-of-truth"),
    new Item("bottle-2"),

    new Item("bombs"),
    new Item("bombchu"),
    new Item("magic-beans"),
    new Item("bottle-3"),

    new Item("fairy-bow"),
    new MultiSlotItem("hookshot", ["hookshot", "longshot"]),
    new Item("megaton-hammer"),
    new Item("bottle-4"),

    new Item("fire-arrows"),
    new Item("ice-arrows"),
    new Item("light-arrows"),
    new MultiSlotItem("happy-mask", ["weird-egg"]),

    new Item("dins-fire"),
    new Item("farores-wind"),
    new Item("nayrus-love"),
    new MultiSlotItem("trading-sequence", ["pocket-egg"]),
]


function _createItems(items) {
    let m = {};
    items.map(i => m[i._id] = i);
    return m
}

const EquipmentItems = _createItems(_EquipmentItems);
const SelectItems = _createItems(_SelectItems);


export { EquipmentItems, SelectItems };
