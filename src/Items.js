import React, { Component } from "react";


import { Item, MultiSlotItem, DefaultItem } from "./Item";


import "./Items.css";


const EquipmentItems = {
    "bullet-bag": <MultiSlotItem id="bullet-bag" values={["bullet-bag-30", "bullet-bag-40", "bullet-bag-50"]}/>,
    "quiver": <MultiSlotItem id="quiver" values={["quiver-30", "quiver-40", "quiver-50"]}/>,
    "bomb-bag": <MultiSlotItem id="bomb-bag" values={["bomb-bag-20", "bomb-bag-30", "bomb-bag-40"]}/>,
    "bracer": <MultiSlotItem id="bracer" values={["goron-bracelet", "silver-gauntlets", "golden-gauntlets"]}/>,
    "scale": <MultiSlotItem id="scale" values={["silver-scale", "golden-scale"]}/>,

    "kokiri-sword": <Item id="kokiri-sword"/>,
    "master-sword": <Item id="master-sword"/>,
    "biggorons-sword": <Item id="biggorons-sword"/>,

    "deku-shield": <Item id="deku-shield"/>,
    "hylian-shield": <Item id="hylian-shield"/>,
    "mirror-shield": <Item id="mirror-shield"/>,

    "kokiri-tunic": <DefaultItem id="kokiri-tunic"/>,
    "goron-tunic": <Item id="goron-tunic"/>,
    "zora-tunic": <Item id="zora-tunic"/>,

    "kokiri-boots": <DefaultItem id="kokiri-boots"/>,
    "iron-boots": <Item id="iron-boots"/>,
    "hover-boots": <Item id="hover-boots"/>,
}


const SelectItems = {
    "deku-stick": <DefaultItem id="deku-stick" />,
    "fairy-slingshot": <MultiSlotItem id="fairy-slingshot" values={["fairy-slingshot-30", "fairy-slingshot-40", "fairy-slingshot-50"]} />,
    "boomerang": <Item id="boomerang"/>,
    "bottle-1": <Item id="bottle-1"/>,

    "deku-nut": <DefaultItem id="deku-nut" />,
    "ocarina": <MultiSlotItem id="ocarina" values={["fairy-ocarina", "ocarina-of-time"]}/>,
    "lense-of-truth": <DefaultItem id="lense-of-truth" />,
    "bottle-2": <Item id="bottle-2"/>,

    "bombs": <MultiSlotItem id="bombs" values={["bombs-20", "bombs-30", "bombs-40"]}/>,
    "bombchu": <Item id="bombchu"/>,
    "magic-beans": <Item id="magic-beans"/>,
    "bottle-3": <Item id="bottle-3"/>,

    "fairy-bow": <MultiSlotItem id="fairy-bow" values={["fairy-bow-30", "fairy-bow-40", "fairy-bow-50"]} />,
    "hookshot": <MultiSlotItem id="hookshot" values={["hookshot", "longshot"]}/>,
    "megaton-hammer": <Item id="megaton-hammer"/>,
    "bottle-4": <Item id="bottle-4"/>,

    "fire-arrows": <Item id="fire-arrows"/>,
    "ice-arrows": <Item id="ice-arrows"/>,
    "light-arrows": <Item id="light-arrows"/>,
    "trading-sequence": <MultiSlotItem id="trading-sequence" values={["a", "b"]}/>,

    "dins-fire": <Item id="dins-fire"/>,
    "farores-wind": <Item id="farores-wind"/>,
    "nayrus-love": <Item id="nayru-love"/>,
    "happy-mask": <MultiSlotItem id="happy-mask" values={["a", "b"]}/>,
}


export { EquipmentItems, SelectItems };
