onEvent('tags.items', (event) => {
    let orePartCreation = global.oreParts.concat(global.oreBonusParts);

    global.newMaterialParts.forEach((item) => {
        if (item.type == 'base_metal' && item.tier == 0) {
            event.add(`mbm2:base_metals/tier_zero`, `#forge:ingots/${item.material}`);
            event.add(`mbm2:base_metals/dusts/tier_zero`, `#forge:dusts/${item.material}`);
            event.add(`mbm2:base_metals/plates/tier_zero`, `#forge:plates/${item.material}`);
        } else if (item.type == 'base_metal' && item.tier == 1) {
            event.add(`mbm2:base_metals/tier_one`, `#forge:ingots/${item.material}`);
            event.add(`mbm2:base_metals/dusts/tier_one`, `#forge:dusts/${item.material}`);
            event.add(`mbm2:base_metals/plates/tier_one`, `#forge:plates/${item.material}`);
        } else if (item.type == 'base_metal' && item.tier == 2) {
            event.add(`mbm2:base_metals/tier_two`, `#forge:ingots/${item.material}`);
            event.add(`mbm2:base_metals/dusts/tier_two`, `#forge:dusts/${item.material}`);
            event.add(`mbm2:base_metals/plates/tier_two`, `#forge:plates/${item.material}`);
        } else if (item.type == 'base_metal' && item.tier == 3) {
            event.add(`mbm2:base_metals/tier_three`, `#forge:ingots/${item.material}`);
            event.add(`mbm2:base_metals/dusts/tier_three`, `#forge:dusts/${item.material}`);
            event.add(`mbm2:base_metals/plates/tier_three`, `#forge:plates/${item.material}`);
        } else if (item.type == 'base_metal' && item.tier == 4) {
            event.add(`mbm2:base_metals/tier_four`, `#forge:ingots/${item.material}`);
            event.add(`mbm2:base_metals/dusts/tier_four`, `#forge:dusts/${item.material}`);
            event.add(`mbm2:base_metals/plates/tier_four`, `#forge:plates/${item.material}`);
        } else if (item.type == 'base_metal' && item.tier == 5) {
            event.add(`mbm2:base_metals/tier_five`, `#forge:ingots/${item.material}`);
            event.add(`mbm2:base_metals/dusts/tier_five`, `#forge:dusts/${item.material}`);
            event.add(`mbm2:base_metals/plates/tier_five`, `#forge:plates/${item.material}`);
        } else if (item.type == 'base_metal' && item.tier == 6) {
            event.add(`mbm2:base_metals/tier_six`, `#forge:ingots/${item.material}`);
            event.add(`mbm2:base_metals/dusts/tier_six`, `#forge:dusts/${item.material}`);
            event.add(`mbm2:base_metals/plates/tier_six`, `#forge:plates/${item.material}`);
        } else if (item.type == 'base_metal' && item.tier == 7) {
            event.add(`mbm2:base_metals/tier_seven`, `#forge:ingots/${item.material}`);
            event.add(`mbm2:base_metals/dusts/tier_seven`, `#forge:dusts/${item.material}`);
            event.add(`mbm2:base_metals/plates/tier_seven`, `#forge:plates/${item.material}`);
        } else if (item.type == 'base_metal' && item.tier == 8) {
            event.add(`mbm2:base_metals/tier_eight`, `#forge:ingots/${item.material}`);
            event.add(`mbm2:base_metals/dusts/tier_eight`, `#forge:dusts/${item.material}`);
            event.add(`mbm2:base_metals/plates/tier_eight`, `#forge:plates/${item.material}`);
        }

        item.itemParts.forEach((part) => {
            if (part.includes('custom')) {
                //custom tag needs a texture
                event.add(`forge:${part.slice(7)}s`, `kubejs:${item.material}_${part.slice(7)}`);
                event.add(
                    `forge:${part.slice(7)}s/${item.material}`,
                    `kubejs:${item.material}_${part.slice(7)}`
                );
            } else if (part.includes('model')) {
                //model tag needs a model
                event.add(`forge:${part.slice(6)}s`, `kubejs:${item.material}_${part.slice(6)}`);
                event.add(
                    `forge:${part.slice(6)}s/${item.material}`,
                    `kubejs:${item.material}_${part.slice(6)}`
                );
            } else if (part == 'gem') {
                event.add(`forge:gems`, `kubejs:${item.material}`);
                event.add(`forge:gems/${item.material}`, `kubejs:${item.material}`);
            } else {
                event.add(`forge:${part}s`, `kubejs:${item.material}_${part}`);
                event.add(`forge:${part}s/${item.material}`, `kubejs:${item.material}_${part}`);
            }
        });

        item.blockParts.forEach((part) => {
            event.add(`forge:${part}s`, `kubejs:${item.material}_${part}`);
            event.add(`forge:${part}s/${item.material}`, `kubejs:${item.material}_${part}`);
        });

        if (item.ore) {
            if (
                item.type == 'base_metal' ||
                item.type == 'compound_ore' ||
                item.type == 'rare_metal'
            ) {
                if (item.raw_ore) {
                    event.add(`forge:raw_materials`, `kubejs:raw_${item.material}`);
                    event.add(
                        `forge:raw_materials/${item.material}`,
                        `kubejs:raw_${item.material}`
                    );

                    if (item.type == 'compound_ore') {
                        event.add(`forge:ores/compound/raw`, `kubejs:raw_${item.material}`);
                    }

                    event.add(`forge:storage_blocks`, `kubejs:raw_${item.material}_block`);
                    event.add(
                        `forge:storage_blocks/raw_${item.material}`,
                        `kubejs:raw_${item.material}_block`
                    );
                }

                if (item.type == 'compound_ore') {
                    event.add(
                        `forge:fine_dusts/${item.material}`,
                        `kubejs:fine_dust_${item.material}`
                    );

                    global.compoundOreParts.forEach((part) => {
                        //compound ores don't get refined
                        //if (part.name != 'fine_dust') {
                        event.add(
                            `forge:ores/compound/${part.name}`,
                            `kubejs:${part.name}_${item.material}`
                        );
                        //}
                        if (
                            part.name !=
                            'raw' /* && !(part.grade == null && item.type == 'compound_ore')*/
                        ) {
                            event.add(
                                `forge:ores/${part.name}`,
                                `kubejs:${part.name}_${item.material}`
                            );
                            event.add(
                                `forge:ores/${part.name}/${item.material}`,
                                `kubejs:${part.name}_${item.material}`
                            );
                        } else {
                            event.add(
                                `forge:ores/${part.name}`,
                                `#forge:raw_materials/${item.material}`
                            );
                            event.add(
                                `forge:ores/${part.name}/${item.material}`,
                                `#forge:raw_materials/${item.material}`
                            );
                        }
                    });
                } else {
                    orePartCreation.forEach((part) => {
                        // all other ores get every part
                        if (
                            part.name !=
                            'raw' /* && !(part.grade == null && item.type == 'compound_ore')*/
                        ) {
                            event.add(
                                `forge:ores/${part.name}`,
                                `kubejs:${part.name}_${item.material}`
                            );
                            event.add(
                                `forge:ores/${part.name}/${item.material}`,
                                `kubejs:${part.name}_${item.material}`
                            );
                        } else {
                            event.add(
                                `forge:ores/${part.name}`,
                                `#forge:raw_materials/${item.material}`
                            );
                            event.add(
                                `forge:ores/${part.name}/${item.material}`,
                                `#forge:raw_materials/${item.material}`
                            );
                        }
                    });
                }
            }
            if (item.type != 'gem' && item.type != 'element') {
                event.add(`forge:poor_ores`, `kubejs:poor_${item.material}_ore`);
                event.add(`forge:poor_ores/${item.material}`, `kubejs:poor_${item.material}_ore`);

                global.stoneTypes.forEach((type) => {
                    event.add(
                        `forge:poor_ores`,
                        `kubejs:poor_${type.material}_${item.material}_ore`
                    );
                    event.add(
                        `forge:poor_ores/${item.material}`,
                        `kubejs:poor_${type.material}_${item.material}_ore`
                    );
                });
            }
            event.add(`forge:ores`, `kubejs:${item.material}_ore`);
            event.add(`forge:ores/${item.material}`, `kubejs:${item.material}_ore`);
            console.log('adding tags for ' + item.material + `#forge:ores`);
            global.stoneTypes.forEach((type) => {
                event.add(`forge:ores`, `kubejs:${type.material}_${item.material}_ore`);
                event.add(
                    `forge:ores/${item.material}`,
                    `kubejs:${type.material}_${item.material}_ore`
                );
            });
        }
    });
    //Planets
    global.planetTypes.forEach((planet) => {
        event.add(`forge:planets`, `kubejs:planet_${planet}`);
    });

    //Trades
    global.droneTrades.forEach((trade) => {
        let itemName = trade.name.split(':')[1];
        event.add(`forge:trades`, `kubejs:trade_${itemName}`);
    });

    //Requests
    global.droneRequests.forEach((request) => {
        let itemName = request.name.split(':')[1];
        event.add(`forge:requests`, `kubejs:request_${itemName}`);
    });
    //Asteroids
    event.add(`forge:asteroids`, `kubejs:asteroid_tier_1`);
    event.add(`forge:asteroids`, `kubejs:asteroid_tier_2`);
    event.add(`forge:asteroids`, `kubejs:asteroid_tier_3`);
});

onEvent('tags.blocks', (event) => {
    global.newMaterialParts.forEach((item) => {
        if (item.ore) {
            if (item.type == 'gem' || item.type == 'element') {
                event.add(`forge:ores`, `kubejs:${item.material}_ore`);
                event.add(`forge:ores/${item.material}`, `kubejs:${item.material}_ore`);
                global.stoneTypes.forEach((type) => {
                    event.add(`forge:ores`, `kubejs:${type.material}_${item.material}_ore`);
                    event.add(
                        `forge:ores/${item.material}`,
                        `kubejs:${type.material}_${item.material}_ore`
                    );
                });
            } else {
                event.add(`forge:ores`, `kubejs:${item.material}_ore`);
                event.add(`forge:ores/${item.material}`, `kubejs:${item.material}_ore`);

                event.add(`forge:poor_ores`, `kubejs:poor_${item.material}_ore`);
                event.add(`forge:poor_ores/${item.material}`, `kubejs:poor_${item.material}_ore`);

                global.stoneTypes.forEach((type) => {
                    event.add(`forge:ores`, `kubejs:${type.material}_${item.material}_ore`);
                    event.add(
                        `forge:ores/${item.material}`,
                        `kubejs:${type.material}_${item.material}_ore`
                    );

                    event.add(
                        `forge:poor_ores`,
                        `kubejs:poor_${type.material}_${item.material}_ore`
                    );
                    event.add(
                        `forge:poor_ores/${item.material}`,
                        `kubejs:poor_${type.material}_${item.material}_ore`
                    );
                });
            }
        }
    });
});

onEvent('fluid.tags', (event) => {
    global.newMaterialParts.forEach((item) => {
        if (item.fluid != null) {
            event.add(`forge:molten_${item.material}`, [
                `kubejs:molten_${item.material}`,
                `kubejs:flowing_molten_${item.material}`
            ]);
        }
    });
    event.add(`forge:zephyrean_aerotheum`, [
        `kubejs:zephyrean_aerotheum`,
        `kubejs:flowing_zephyrean_aerotheum`
    ]);
    event.add(`forge:gelid_cryotheum`, [
        `kubejs:gelid_cryotheum`,
        `kubejs:flowing_gelid_cryotheum`
    ]);
    event.add(`forge:tectonic_petrotheum`, [
        `kubejs:tectonic_petrotheum`,
        `kubejs:flowing_tectonic_petrotheum`
    ]);
    event.add(`forge:blazing_pyrotheum`, [
        `kubejs:blazing_pyrotheum`,
        `kubejs:flowing_blazing_pyrotheum`
    ]);
    event.add(`minecraft:lava`, [`kubejs:blazing_pyrotheum`, `kubejs:flowing_blazing_pyrotheum`]);
    event.add(`forge:basic_catalyst_mixture`, [
        `kubejs:basic_catalyst_mixture`,
        `kubejs:flowing_basic_catalyst_mixture`
    ]);
    event.add(`forge:crystal_catalyst_mixture`, [
        `kubejs:crystal_catalyst_mixture`,
        `kubejs:flowing_crystal_catalyst_mixture`
    ]);
    event.add(`forge:magic_catalyst_mixture`, [
        `kubejs:magic_catalyst_mixture`,
        `kubejs:flowing_magic_catalyst_mixture`
    ]);
});
