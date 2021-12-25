import React, { Component } from "react";


import { Item, MultiSlotItem, DefaultItem, MapItem, } from "./Item";


const _Items = [
    // EQUIPMENT ITEMS
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

    // SELECT SCREEN ITEMS
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

    new Item("light-medallion"),
    new Item("shadow-medallion"),
    new Item("forest-medallion"),
    new Item("spirit-medallion"),
    new Item("fire-medallion"),
    new Item("water-medallion"),

    new Item("kokiri-emerald"),
    new Item("gorons-ruby"),
    new Item("zora-sapphire"),
]


const _MapItems = [
    new MapItem("kokiri-sword-chest", 74, 60, []),
    new MapItem("saria-on-the-bridge", 72.5, 55, []),
    new MapItem("midos-house", 76, 56, []),
    new MapItem("kokiri-song-of-storms-grotto", 75, 53, ["fire-arrows"]),
]


function _createItems(items) {
    let m = {};
    items.map(i => m[i._id] = i);
    return m
}

const Items = _createItems(_Items);
const MapItems = _createItems(_MapItems);


export { Items, MapItems };
