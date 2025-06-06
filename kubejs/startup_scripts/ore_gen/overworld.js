onEvent('worldgen.remove', (event) => {
    event.removeOres((ores) => {
        ores.blocks = [
            'minecraft:coal_ore',
            'minecraft:iron_ore',
            'minecraft:gold_ore',
            'minecraft:nether_gold_ore',
            'minecraft:copper_ore',
            'minecraft:nether_quartz_ore',
            'minecraft:lapis_ore',
            'minecraft:emerald_ore',
            'minecraft:diamond_ore',
            'minecraft:redstone_ore'
        ];
    });
    event.removeFeatureById('top_layer_modification', ['beyond_earth:oil_well']);
});

onEvent('tags.blocks', (event) => {
    event.add(`forge:darkstone`, 'forbidden_arcanus:darkstone');
    event.add(`forge:smooth_basalt`, 'minecraft:smooth_basalt');
    event.add(`forge:tuff`, 'minecraft:tuff');
    event.add(`forge:end_stone`, 'minecraft:end_stone');

    event.add(`forge:moon_stone`, 'beyond_earth:moon_stone');
    event.add(`forge:mars_stone`, 'beyond_earth:mars_stone');
    event.add(`forge:venus_stone`, 'beyond_earth:venus_stone');
    event.add(`forge:glacio_stone`, 'beyond_earth:glacio_stone');
});

onEvent('tags.items', (event) => {
    event.add(`forge:darkstone`, 'forbidden_arcanus:darkstone');
    event.add(`forge:smooth_basalt`, 'minecraft:smooth_basalt');
    event.add(`forge:tuff`, 'minecraft:tuff');
    event.add(`forge:end_stone`, 'minecraft:end_stone');

    event.add(`forge:moon_stone`, 'beyond_earth:moon_stone');
    event.add(`forge:mars_stone`, 'beyond_earth:mars_stone');
    event.add(`forge:venus_stone`, 'beyond_earth:venus_stone');
    event.add(`forge:glacio_stone`, 'beyond_earth:glacio_stone');
});

onEvent('worldgen.add', (event) => {
    // use the anchors helper from the event (NOTE: this requires newer versions of KubeJS)
    // if you are using an older version of KubeJS, you can use the methods in the ore properties class
    const { anchors } = event;

    console.log('overworld');
    global.newMaterialParts.forEach((item) => {
        //Poor Ores
        if (item.tier <= 1 && item.ore && item.type != 'gem') {
            event.addOre((ore) => {
                ore.id = `kubejs:poor_${item.material}_ore`; // (optional, but recommended) custom id for the feature

                ore.addTarget('minecraft:stone', `kubejs:poor_${item.material}_ore`);
                global.stoneTypes.forEach((type) => {
                    ore.addTarget(
                        `#forge:${type.material}`,
                        `kubejs:poor_${type.material}_${item.material}_ore`
                    );
                });
                ore.count([8, 16]) // generate between 15 and 50 veins (chosen at random), you could use a single number here for a fixed amount of blocks
                    .squared() // randomly spreads the ores out across the chunk, instead of generating them in a column
                    .uniformHeight(
                        // triangleHeight, generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
                        anchors.aboveBottom(48), // the lower bound should be 32 blocks above the bottom of the world, so in this case, Y = -32 since minY = -64
                        anchors.absolute(256) // the upper bound, meanwhile is set to be just exactly at Y = 96
                    ); // in total, the ore can be found between Y levels -32 and 96, and will be most likely at Y = (96 + -32) / 2 = 32

                // more, optional parameters (default values are shown here)
                ore.size = 6; // max. vein size
                ore.noSurface = 0; // chance to discard if the ore would be exposed to air
                ore.worldgenLayer = 'underground_ores'; // what generation step the ores should be generated in (see below)
                ore.chance = 0; // if != 0 and count is unset, the ore has a 1/n chance to generate per chunk
                ore.biomes = {
                    not: ['^nether', '^the_end', /^beyond_earth:.*/]
                };
            });
        }
    });

    // Base Coal Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:coal_ore';

        ore.addTarget('stone', 'coal_ore');
        ore.addTarget('deepslate', 'deepslate_coal_ore');
        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_coal_ore`) != null) {
                ore.addTarget(
                    `#forge:${type.material}`,
                    `excavated_variants:${type.material}_coal_ore`
                );
            }
        });

        ore.count([8, 12]).squared().uniformHeight(anchors.aboveBottom(0), anchors.absolute(256));
        ore.size = 20;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
        ore.biomes = {
            not: ['^nether', '^the_end', /^beyond_earth:.*/]
        };
    });
    // Base Iron Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:iron_ore';

        ore.addTarget('stone', 'minecraft:iron_ore');
        ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_iron_ore');
        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_iron_ore`) != null) {
                ore.addTarget(
                    `#forge:${type.material}`,
                    `excavated_variants:${type.material}_iron_ore`
                );
            }
        });

        ore.count([5, 10]).squared().uniformHeight(anchors.aboveBottom(0), anchors.absolute(150));
        ore.size = 25;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
        ore.biomes = {
            not: ['^nether', '^the_end', /^beyond_earth:.*/]
        };
    });

    // Base Copper Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:copper_ore';

        ore.addTarget('stone', 'minecraft:copper_ore');
        ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_copper_ore');
        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_copper_ore`) != null) {
                ore.addTarget(
                    `#forge:${type.material}`,
                    `excavated_variants:${type.material}_copper_ore`
                );
            }
        });

        ore.count([8, 12]).squared().uniformHeight(anchors.aboveBottom(49), anchors.absolute(256));
        ore.size = 25;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
        ore.biomes = {
            not: ['^nether', '^the_end', /^beyond_earth:.*/]
        };
    });

    // Base Tin Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:tin_ore';

        ore.addTarget('stone', 'thermal:tin_ore');
        ore.addTarget('minecraft:deepslate', 'thermal:deepslate_tin_ore');
        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_tin_ore`) != null) {
                ore.addTarget(
                    `#forge:${type.material}`,
                    `excavated_variants:${type.material}_tin_ore`
                );
            }
        });

        ore.count([6, 10]).squared().uniformHeight(anchors.aboveBottom(64), anchors.absolute(256));
        ore.size = 25;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
        ore.biomes = {
            not: ['^nether', '^the_end', /^beyond_earth:.*/]
        };
    });

    // Base Redstone Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:redstone_ore';

        ore.addTarget('stone', 'minecraft:redstone_ore');
        ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_redstone_ore');
        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_redstone_ore`) != null) {
                ore.addTarget(
                    `#forge:${type.material}`,
                    `excavated_variants:${type.material}_redstone_ore`
                );
            }
        });

        ore.count([2, 6]).squared().uniformHeight(anchors.aboveBottom(0), anchors.absolute(20));
        ore.size = 20;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
        ore.biomes = {
            not: ['^nether', '^the_end', /^beyond_earth:.*/]
        };
    });

    // Base Silver Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:silver_ore';

        ore.addTarget('stone', 'thermal:silver_ore');
        ore.addTarget('minecraft:deepslate', 'thermal:deepslate_silver_ore');
        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_silver_ore`) != null) {
                ore.addTarget(
                    `#forge:${type.material}`,
                    `excavated_variants:${type.material}_silver_ore`
                );
            }
        });

        ore.count([1, 2]).squared().uniformHeight(anchors.aboveBottom(16), anchors.absolute(80));
        ore.size = 25;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
        ore.biomes = {
            not: ['^nether', '^the_end', /^beyond_earth:.*/]
        };
    });

    // Base lead Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:lead_ore';

        ore.addTarget('stone', 'thermal:lead_ore');
        ore.addTarget('minecraft:deepslate', 'thermal:deepslate_lead_ore');
        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_lead_ore`) != null) {
                ore.addTarget(
                    `#forge:${type.material}`,
                    `excavated_variants:${type.material}_lead_ore`
                );
            }
        });

        ore.count([1, 2]).squared().uniformHeight(anchors.aboveBottom(16), anchors.absolute(80));
        ore.size = 25;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
        ore.biomes = {
            not: ['^nether', '^the_end', /^beyond_earth:.*/]
        };
    });

    // Base Lapis Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:lapis_ore';

        ore.addTarget('stone', 'minecraft:lapis_ore');
        ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_lapis_ore');
        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_lapis_ore`) != null) {
                ore.addTarget(
                    `#forge:${type.material}`,
                    `excavated_variants:${type.material}_lapis_ore`
                );
            }
        });

        ore.count([1, 3]).squared().uniformHeight(anchors.aboveBottom(4), anchors.absolute(20));
        ore.size = 20;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
        ore.biomes = {
            not: ['^nether', '^the_end', /^beyond_earth:.*/]
        };
    });

    // Base Arcanite Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:arcanite_ore';

        ore.addTarget('stone', 'kubejs:arcanite_ore');
        ore.addTarget('minecraft:deepslate', 'kubejs:deepslate_arcanite_ore');
        global.stoneTypes.forEach((type) => {
            if (type.material != 'deepslate' && type.material != 'bedrock') {
                ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_arcanite_ore`);
            }
        });

        ore.count([2, 6]).squared().uniformHeight(anchors.aboveBottom(32), anchors.absolute(100));
        ore.size = 20;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
        ore.biomes = {
            not: ['^nether', '^the_end', /^beyond_earth:.*/]
        };
    });

    // Base Zinc Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:nether_zinc_ore';

        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_zinc_ore`) != null) {
                ore.addTarget(
                    `#forge:${type.material}`,
                    `excavated_variants:${type.material}_zinc_ore`
                );
            }
        });

        ore.count([1, 5]).squared().uniformHeight(anchors.aboveBottom(0), anchors.absolute(200));
        ore.size = 25;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
        ore.biomes = {
            not: ['^nether', '^the_end', /^beyond_earth:.*/]
        };
    });

    // Inserted Fire Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:fire_ore';

        //Add to Redstone
        ore.addTarget('minecraft:redstone_ore', 'kubejs:fire_ore');
        ore.addTarget('minecraft:deepslate_redstone_ore', 'kubejs:deepslate_fire_ore');
        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_redstone_ore`) != null) {
                ore.addTarget(
                    `excavated_variants:${type.material}_redstone_ore`,
                    `kubejs:${type.material}_fire_ore`
                );
            }
        });

        //Add to Coal
        ore.addTarget('minecraft:coal_ore', 'kubejs:fire_ore');
        ore.addTarget('minecraft:deepslate_coal_ore', 'kubejs:deepslate_fire_ore');

        ore.count(300).squared().uniformHeight(anchors.aboveBottom(10), anchors.absolute(100));
        ore.size = 15;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_decoration';
        ore.chance = 0;
    });

    // Inserted Water Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:water_ore';

        //Add to Lapis
        ore.addTarget('minecraft:lapis_ore', 'kubejs:water_ore');
        ore.addTarget('minecraft:deepslate_lapis_ore', 'kubejs:deepslate_water_ore');
        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_lapis_ore`) != null) {
                ore.addTarget(
                    `excavated_variants:${type.material}_lapis_ore`,
                    `kubejs:${type.material}_water_ore`
                );
            }
        });

        //Add to Copper
        ore.addTarget('minecraft:copper_ore', 'kubejs:water_ore');
        ore.addTarget('minecraft:deepslate_copper_ore', 'kubejs:deepslate_water_ore');
        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_copper_ore`) != null) {
                ore.addTarget(
                    `excavated_variants:${type.material}_copper_ore`,
                    `kubejs:${type.material}_water_ore`
                );
            }
        });

        ore.count(200).squared().uniformHeight(anchors.aboveBottom(4), anchors.absolute(60));
        ore.size = 15;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_decoration';
        ore.chance = 0;
    });

    // Inserted Air Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:air_ore';

        //Add to Gold
        ore.addTarget('minecraft:gold_ore', 'kubejs:air_ore');
        ore.addTarget('minecraft:deepslate_gold_ore', 'kubejs:deepslate_air_ore');
        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_gold_ore`) != null) {
                ore.addTarget(
                    `excavated_variants:${type.material}_gold_ore`,
                    `kubejs:${type.material}_air_ore`
                );
            }
        });
        //Add to Tin
        ore.addTarget('thermal:tin_ore', 'kubejs:air_ore');
        ore.addTarget('thermal:deepslate_tin_ore', 'kubejs:deepslate_air_ore');
        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_tin_ore`) != null) {
                ore.addTarget(
                    `excavated_variants:${type.material}_tin_ore`,
                    `kubejs:${type.material}_air_ore`
                );
            }
        });

        ore.count(200).squared().uniformHeight(anchors.aboveBottom(60), anchors.absolute(120));
        ore.size = 15;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_decoration';
        ore.chance = 0;
    });

    // Inserted Earth Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:earth_ore';

        //Add to Iron
        ore.addTarget('minecraft:iron_ore', 'kubejs:earth_ore');
        ore.addTarget('minecraft:deepslate_iron_ore', 'kubejs:deepslate_earth_ore');
        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_iron_ore`) != null) {
                ore.addTarget(
                    `excavated_variants:${type.material}_iron_ore`,
                    `kubejs:${type.material}_earth_ore`
                );
            }
        });
        //Add to Zinc
        ore.addTarget('create:zinc_ore', 'kubejs:earth_ore');
        ore.addTarget('create:deepslate_zinc_ore', 'kubejs:deepslate_earth_ore');
        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_zinc_ore`) != null) {
                ore.addTarget(
                    `excavated_variants:${type.material}_zinc_ore`,
                    `kubejs:${type.material}_earth_ore`
                );
            }
        });

        ore.count(200).squared().uniformHeight(anchors.aboveBottom(0), anchors.absolute(20));
        ore.size = 15;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_decoration';
        ore.chance = 0;
    });

    // Inserted Apatite Veins to Tin Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:apatite_ore';

        ore.addTarget('thermal:tin_ore', 'thermal:apatite_ore');
        ore.addTarget('thermal:deepslate_tin_ore', 'thermal:deepslate_apatite_ore');

        ore.count(200).squared().uniformHeight(anchors.aboveBottom(32), anchors.absolute(256));
        ore.size = 15;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_decoration';
        ore.chance = 0;
    });

    // Inserted Fluorite to Tin Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:fluorite_ore';

        ore.addTarget('thermal:tin_ore', 'mekanism:fluorite_ore');
        ore.addTarget('thermal:deepslate_tin_ore', 'mekanism:deepslate_fluorite_ore');
        global.stoneTypes.forEach((type) => {
            if (
                Item.of(`excavated_variants:${type.material}_tin_ore`) != null &&
                Item.of(`excavated_variants:${type.material}_fluorite_ore`) != null
            ) {
                ore.addTarget(
                    `excavated_variants:${type.material}_tin_ore`,
                    `excavated_variants:${type.material}_fluorite_ore`
                );
            }
        });

        ore.count(200).squared().uniformHeight(anchors.aboveBottom(32), anchors.absolute(256));
        ore.size = 15;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_decoration';
        ore.chance = 0;
    }); /*
	// Inserted Vinteum to Lapis Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:vinteum_ore'

		ore.addTarget('minecraft:lapis_ore', 'mna:vinteum_ore')
		ore.addTarget('minecraft:deepslate_lapis_ore', 'mna:deepslate_vinteum_ore')
		global.stoneTypes.forEach((type) => {
			if (Item.of(`excavated_variants:${type.material}_lapis_ore`) != null && Item.of(`excavated_variants:${type.material}_vinteum_ore`) != null ) {
				ore.addTarget(`excavated_variants:${type.material}_lapis_ore`, `excavated_variants:${type.material}_vinteum_ore`)
			}
		})

		ore.count(200)
				.squared()
				.uniformHeight(
						anchors.aboveBottom(4),
						anchors.absolute(20)
				)
		ore.size = 15
		ore.noSurface = 0
		ore.worldgenLayer = "underground_decoration"
		  ore.chance = 0
	})*/
    // Inserted Sapphire to Lapis Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:sapphire_ore';

        ore.addTarget('minecraft:lapis_ore', 'thermal:sapphire_ore');
        ore.addTarget('minecraft:deepslate_lapis_ore', 'thermal:deepslate_sapphire_ore');
        global.stoneTypes.forEach((type) => {
            if (
                Item.of(`excavated_variants:${type.material}_lapis_ore`) != null &&
                Item.of(`excavated_variants:${type.material}_sapphire_ore`) != null
            ) {
                ore.addTarget(
                    `excavated_variants:${type.material}_lapis_ore`,
                    `excavated_variants:${type.material}_sapphire_ore`
                );
            }
        });

        ore.count(200).squared().uniformHeight(anchors.aboveBottom(4), anchors.absolute(20));
        ore.size = 15;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_decoration';
        ore.chance = 0;
    });
    // Inserted Niter to Lapis Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:niter_ore';

        ore.addTarget('minecraft:lapis_ore', 'thermal:sapphire_ore');
        ore.addTarget('minecraft:deepslate_lapis_ore', 'thermal:deepslate_niter_ore');
        global.stoneTypes.forEach((type) => {
            if (
                Item.of(`excavated_variants:${type.material}_lapis_ore`) != null &&
                Item.of(`excavated_variants:${type.material}_niter_ore`) != null
            ) {
                ore.addTarget(
                    `excavated_variants:${type.material}_lapis_ore`,
                    `excavated_variants:${type.material}_niter_ore`
                );
            }
        });

        ore.count(200).squared().uniformHeight(anchors.aboveBottom(4), anchors.absolute(10));
        ore.size = 15;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_decoration';
        ore.chance = 0;
    });

    // Inserted Arcane Crystal to Arcanite Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:arcane_crystal_ore';

        ore.addTarget('kubejs:arcanite_ore', 'forbidden_arcanus:arcane_crystal_ore');
        ore.addTarget(
            'kubejs:deepslate_arcanite_ore',
            'forbidden_arcanus:deepslate_arcane_crystal_ore'
        );
        global.stoneTypes.forEach((type) => {
            if (
                Item.of(`excavated_variants:${type.material}_arcanite_ore`) != null &&
                Item.of(`excavated_variants:${type.material}_arcane_crystal_ore`) != null
            ) {
                ore.addTarget(
                    `excavated_variants:${type.material}_arcanite_ore`,
                    `excavated_variants:${type.material}_arcane_crystal_ore`
                );
            }
        });

        ore.count(200).squared().uniformHeight(anchors.aboveBottom(32), anchors.absolute(100));
        ore.size = 15;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_decoration';
        ore.chance = 0;
    });

    // Inserted Inert Crystal to Arcanite Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:inert_crystal_ore';

        ore.addTarget('kubejs:arcanite_ore', 'elementalcraft:inert_crystal_ore');
        ore.addTarget(
            'kubejs:deepslate_arcanite_ore',
            'elementalcraft:deepslate_inert_crystal_ore'
        );
        global.stoneTypes.forEach((type) => {
            if (
                Item.of(`excavated_variants:${type.material}_arcanite_ore`) != null &&
                Item.of(`excavated_variants:${type.material}_inert_crystal_ore`) != null
            ) {
                ore.addTarget(
                    `excavated_variants:${type.material}_arcanite_ore`,
                    `excavated_variants:${type.material}_inert_crystal_ore`
                );
            }
        });

        ore.count(300).squared().uniformHeight(anchors.aboveBottom(32), anchors.absolute(100));
        ore.size = 15;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_decoration';
        ore.chance = 0;
    });
    /*
	// Inserted Soulstone to Arcanite Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:soulstone_ore'

		ore.addTarget('kubejs:arcanite_ore', 'malum:soulstone_ore')
		ore.addTarget('kubejs:deepslate_arcanite_ore', 'malum:deepslate_soulstone_ore')
		global.stoneTypes.forEach((type) => {
			if (Item.of(`excavated_variants:${type.material}_arcanite_ore`) != null) {
				ore.addTarget(`excavated_variants:${type.material}_arcanite_ore`, `excavated_variants:${type.material}_soulstone_ore`)
			}
		})

		ore.count(200)
				.squared()
				.uniformHeight(
						anchors.aboveBottom(60),
						anchors.absolute(40)
				)
		ore.size = 15
		ore.noSurface = 0
		ore.worldgenLayer = "underground_decoration"
		  ore.chance = 0
	})
*/
    // Inserted Nickel Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:nickel_ore';

        ore.addTarget('minecraft:iron_ore', 'thermal:nickel_ore');
        ore.addTarget('minecraft:deepslate_iron_ore', 'thermal:deepslate_nickel_ore');
        global.stoneTypes.forEach((type) => {
            if (
                Item.of(`excavated_variants:${type.material}_iron_ore`) != null &&
                Item.of(`excavated_variants:${type.material}_nickel_ore`) != null
            ) {
                ore.addTarget(
                    `excavated_variants:${type.material}_iron_ore`,
                    `excavated_variants:${type.material}_nickel_ore`
                );
            }
        });

        ore.count(200).squared().uniformHeight(anchors.aboveBottom(0), anchors.absolute(256));
        ore.size = 10;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_decoration';
        ore.chance = 0;
    });

    // Inserted Gold Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:gold_ore';

        //Add to Iron
        ore.addTarget('minecraft:iron_ore', 'minecraft:gold_ore');
        ore.addTarget('minecraft:deepslate_iron_ore', 'minecraft:deepslate_gold_ore');
        global.stoneTypes.forEach((type) => {
            if (
                Item.of(`excavated_variants:${type.material}_iron_ore`) != null &&
                Item.of(`excavated_variants:${type.material}_gold_ore`) != null
            ) {
                ore.addTarget(
                    `excavated_variants:${type.material}_iron_ore`,
                    `excavated_variants:${type.material}_gold_ore`
                );
            }
        });
        //Add to copper
        ore.addTarget('minecraft:copper_ore', 'minecraft:gold_ore');
        ore.addTarget('minecraft:deepslate_copper_ore', 'minecraft:deepslate_gold_ore');
        global.stoneTypes.forEach((type) => {
            if (
                Item.of(`excavated_variants:${type.material}_copper_ore`) != null &&
                Item.of(`excavated_variants:${type.material}_gold_ore`) != null
            ) {
                ore.addTarget(
                    `excavated_variants:${type.material}_copper_ore`,
                    `excavated_variants:${type.material}_gold_ore`
                );
            }
        });

        ore.count(200).squared().uniformHeight(anchors.aboveBottom(0), anchors.absolute(256));
        ore.size = 15;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_decoration';
        ore.chance = 0;
    });

    // Inserted Cinnabar Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:cinnabar_ore';

        ore.addTarget('minecraft:redstone_ore', 'thermal:cinnabar_ore');
        ore.addTarget('minecraft:deepslate_redstone_ore', 'thermal:deepslate_cinnabar_ore');
        global.stoneTypes.forEach((type) => {
            if (
                Item.of(`excavated_variants:${type.material}_redstone_ore`) != null &&
                Item.of(`excavated_variants:${type.material}_cinnabar_ore`) != null
            ) {
                ore.addTarget(
                    `excavated_variants:${type.material}_redstone_ore`,
                    `excavated_variants:${type.material}_cinnabar_ore`
                );
            }
        });

        ore.count(400).squared().uniformHeight(anchors.aboveBottom(0), anchors.absolute(100));
        ore.size = 10;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_decoration';
        ore.chance = 0;
    });

    // Inserted Ruby Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:ruby_ore';

        //Add to Redstone
        ore.addTarget('minecraft:redstone_ore', 'thermal:ruby_ore');
        ore.addTarget('minecraft:deepslate_redstone_ore', 'thermal:deepslate_ruby_ore');
        global.stoneTypes.forEach((type) => {
            if (
                Item.of(`excavated_variants:${type.material}_redstone_ore`) != null &&
                Item.of(`excavated_variants:${type.material}_ruby_ore`) != null
            ) {
                ore.addTarget(
                    `excavated_variants:${type.material}_redstone_ore`,
                    `excavated_variants:${type.material}_ruby_ore`
                );
            }
        });

        ore.count(400).squared().uniformHeight(anchors.aboveBottom(0), anchors.absolute(100));
        ore.size = 10;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_decoration';
        ore.chance = 0;
    });

    // Inserted Lead to Silver Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:lead_ore';

        ore.addTarget('thermal:silver_ore', 'thermal:lead_ore');
        ore.addTarget('thermal:deepslate_silver_ore', 'thermal:deepslate_lead_ore');
        global.stoneTypes.forEach((type) => {
            if (
                Item.of(`excavated_variants:${type.material}_silver_ore`) != null &&
                Item.of(`excavated_variants:${type.material}_lead_ore`) != null
            ) {
                ore.addTarget(
                    `excavated_variants:${type.material}_silver_ore`,
                    `excavated_variants:${type.material}_lead_ore`
                );
            }
        });

        ore.count(200).squared().uniformHeight(anchors.aboveBottom(16), anchors.absolute(80));
        ore.size = 15;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_decoration';
        ore.chance = 0;
    });

    // Inserted Silver to Lead Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:silver_ore';

        ore.addTarget('thermal:silver_ore', 'thermal:silver_ore');
        ore.addTarget('thermal:deepslate_silver_ore', 'thermal:deepslate_silver_ore');
        global.stoneTypes.forEach((type) => {
            if (
                Item.of(`excavated_variants:${type.material}_lead_ore`) != null &&
                Item.of(`excavated_variants:${type.material}_silver_ore`) != null
            ) {
                ore.addTarget(
                    `excavated_variants:${type.material}_lead_ore`,
                    `excavated_variants:${type.material}_silver_ore`
                );
            }
        });

        ore.count(200).squared().uniformHeight(anchors.aboveBottom(16), anchors.absolute(80));
        ore.size = 15;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_decoration';
        ore.chance = 0;
    });

    // Inserted Diamond to Coal Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:diamond_ore';

        //		ore.addTarget('coal_ore', 'diamond_ore')
        ore.addTarget('deepslate_coal_ore', 'deepslate_diamond_ore');
        global.stoneTypes.forEach((type) => {
            if (
                Item.of(`excavated_variants:${type.material}_coal_ore`) != null &&
                Item.of(`excavated_variants:${type.material}_diamond_ore`) != null
            ) {
                ore.addTarget(
                    `excavated_variants:${type.material}_coal_ore`,
                    `excavated_variants:${type.material}_diamond_ore`
                );
            }
        });

        ore.count(200).squared().uniformHeight(anchors.aboveBottom(0), anchors.absolute(-10));
        ore.size = 10;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_decoration';
        ore.chance = 0;
    });
});
