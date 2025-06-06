onEvent('worldgen.add', (event) => {
    console.log('nether');

    const netherSurfaceChance = 0.75;

    // use the anchors helper from the event (NOTE: this requires newer versions of KubeJS)
    // if you are using an older version of KubeJS, you can use the methods in the ore properties class
    const { anchors } = event;

    ////////////////////////////////////////////	NETHER	////////////////////////////////
    // Base Iron Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:nether_iron_ore';

        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_iron_ore`) != null) {
                ore.addTarget(
                    `#forge:${type.material}`,
                    `excavated_variants:${type.material}_iron_ore`
                );
            }
        });

        ore.count([1, 6]).squared().uniformHeight(anchors.aboveBottom(25), anchors.absolute(150));
        ore.size = 25;
        ore.noSurface = netherSurfaceChance;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
        ore.biomes = '^nether';
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

        ore.count([1, 7]).squared().uniformHeight(anchors.aboveBottom(0), anchors.absolute(200));
        ore.size = 25;
        ore.noSurface = netherSurfaceChance;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
        ore.biomes = '^nether';
    });

    // Base Nickel Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:nether_nickel_ore';

        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_nickel_ore`) != null) {
                ore.addTarget(
                    `#forge:${type.material}`,
                    `excavated_variants:${type.material}_nickel_ore`
                );
            }
        });

        ore.count([1, 10]).squared().uniformHeight(anchors.aboveBottom(32), anchors.absolute(200));
        ore.size = 15;
        ore.noSurface = netherSurfaceChance;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
        ore.biomes = '^nether';
    });

    // Base Gold Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:nether_gold_ore';

        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_gold_ore`) != null) {
                ore.addTarget(
                    `#forge:${type.material}`,
                    `excavated_variants:${type.material}_gold_ore`
                );
            }
        });

        ore.count([1, 10]).squared().uniformHeight(anchors.aboveBottom(32), anchors.absolute(200));
        ore.size = 25;
        ore.noSurface = netherSurfaceChance;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
        ore.biomes = '^nether';
    });

    // Base Silver Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:nether_silver_ore';

        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_silver_ore`) != null) {
                ore.addTarget(
                    `#forge:${type.material}`,
                    `excavated_variants:${type.material}_silver_ore`
                );
            }
        });

        ore.count([2, 10]).squared().uniformHeight(anchors.aboveBottom(32), anchors.absolute(200));
        ore.size = 25;
        ore.noSurface = netherSurfaceChance;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
        ore.biomes = '^nether';
    });

    // Base Aluminum Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:nether_aluminum_ore';

        global.stoneTypes.forEach((type) => {
            if (Item.of(`kubejs:${type.material}_aluminum_ore`) != null) {
                ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_aluminum_ore`);
            }
        });

        ore.count([1, 6]).squared().uniformHeight(anchors.aboveBottom(75), anchors.absolute(200));
        ore.size = 25;
        ore.noSurface = netherSurfaceChance;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
        ore.biomes = '^nether';
    });

    // Base Cobalt Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:nether_cobalt_ore';

        ore.addTarget('netherrack', 'tconstruct:cobalt_ore');
        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_cobalt_ore`) != null) {
                ore.addTarget(
                    `#forge:${type.material}`,
                    `excavated_variants:${type.material}_cobalt_ore`
                );
            }
        });

        ore.count([1, 6]).squared().uniformHeight(anchors.aboveBottom(5), anchors.absolute(100));
        ore.size = 25;
        ore.noSurface = netherSurfaceChance;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
        ore.biomes = '^nether';
    });

    // Base Quartz Veins
    console.log('nether_quartz_ore');
    event.addOre((ore) => {
        ore.id = 'kubejs:nether_quartz_ore';

        ore.addTarget('netherrack', 'minecraft:nether_quartz_ore');
        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_quartz_ore`) != null) {
                ore.addTarget(
                    `#forge:${type.material}`,
                    `excavated_variants:${type.material}_quartz_ore`
                );
            }
        });

        ore.count([3, 10]).squared().uniformHeight(anchors.aboveBottom(30), anchors.absolute(150));
        ore.size = 30;
        ore.noSurface = netherSurfaceChance;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
        ore.biomes = '^nether';
    });

    // Inserted Certus Quartz
    console.log('nether_certus_quartz');
    event.addOre((ore) => {
        ore.id = 'kubejs:nether_certus_quartz';

        ore.addTarget(
            `minecraft:nether_quartz_ore`,
            `excavated_variants:netherrack_certus_quartz_ore`
        );

        global.stoneTypes.forEach((type) => {
            if (
                Item.of(`excavated_variants:${type.material}_quartz_ore`) != null &&
                Item.of(`excavated_variants:${type.material}_certus_quartz_ore`) != null
            ) {
                ore.addTarget(
                    `excavated_variants:${type.material}_quartz_ore`,
                    `excavated_variants:${type.material}_certus_quartz_ore`
                );
            }
        });
        ore.count(300).squared().uniformHeight(anchors.aboveBottom(30), anchors.absolute(150));
        ore.size = 10;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_decoration';
        ore.chance = 0;
        ore.biomes = '^nether';
    });

    // Nether Redstone Veins
    console.log('nether_redstone_ore');
    event.addOre((ore) => {
        ore.id = 'kubejs:nether_redstone_ore';

        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_redstone_ore`) != null) {
                ore.addTarget(
                    `#forge:${type.material}`,
                    `excavated_variants:${type.material}_redstone_ore`
                );
            }
        });

        ore.count([1, 6]).squared().uniformHeight(anchors.aboveBottom(0), anchors.absolute(100));
        ore.size = 20;
        ore.noSurface = netherSurfaceChance;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
        ore.biomes = '^nether';
    });

    /*
	// Nether Thorium Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:nether_thorium_ore'
	 
		global.stoneTypes.forEach((type) => {
			if (type.material != 'deepslate' && type.material != 'bedrock') {
			ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_thorium_ore`)
			}
		})

		ore.count([1, 4])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(100),
						anchors.absolute(200)
				)
		ore.size = 20
		ore.noSurface = netherSurfaceChance
		ore.worldgenLayer = "underground_ores"
		  ore.chance = 0
		  ore.biomes = "^nether"
	})*/

    // Inserted Nether luminite

    //Maybe make a seperate vein??
    console.log('nether_luminite');

    event.addOre((ore) => {
        ore.id = 'kubejs:nether_luminite';

        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_gold_ore`) != null) {
                ore.addTarget(
                    `excavated_variants:${type.material}_gold_ore`,
                    `kubejs:${type.material}_luminite_ore`
                );
            }
            ore.addTarget(
                `kubejs:${type.material}_aluminum_ore`,
                `kubejs:${type.material}_luminite_ore`
            );
        });
        ore.count(400).squared().uniformHeight(anchors.aboveBottom(0), anchors.absolute(200));
        ore.size = 10;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_decoration';
        ore.chance = 0;
        ore.biomes = '^nether';
    });

    // Inserted Nether Mithril
    event.addOre((ore) => {
        ore.id = 'kubejs:nether_mithril';

        ore.addTarget(`tconstruct:cobalt_ore`, `kubejs:netherrack_mithril_ore`);
        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_cobalt_ore`) != null) {
                ore.addTarget(
                    `excavated_variants:${type.material}_cobalt_ore`,
                    `kubejs:${type.material}_mithril_ore`
                );
            }
        });
        ore.count(200).squared().uniformHeight(anchors.aboveBottom(0), anchors.absolute(100));
        ore.size = 10;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_decoration';
        ore.chance = 0;
        ore.biomes = '^nether';
    });

    // Inserted Nether Sulfur
    console.log('nether_sulfur');
    event.addOre((ore) => {
        ore.id = 'kubejs:nether_sulfur';

        global.stoneTypes.forEach((type) => {
            if (Item.of(`excavated_variants:${type.material}_sulfur_ore`) != null) {
                if (Item.of(`excavated_variants:${type.material}_iron_ore`) != null) {
                    ore.addTarget(
                        `excavated_variants:${type.material}_iron_ore`,
                        `excavated_variants:${type.material}_sulfur_ore`
                    );
                }
                if (Item.of(`excavated_variants:${type.material}_zinc_ore`) != null) {
                    ore.addTarget(
                        `excavated_variants:${type.material}_zinc_ore`,
                        `excavated_variants:${type.material}_sulfur_ore`
                    );
                }
                if (Item.of(`excavated_variants:${type.material}_nickel_ore`) != null) {
                    ore.addTarget(
                        `excavated_variants:${type.material}_nickel_ore`,
                        `excavated_variants:${type.material}_sulfur_ore`
                    );
                }
            }
        });

        ore.count(400).squared().uniformHeight(anchors.aboveBottom(0), anchors.absolute(200));
        ore.size = 10;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_decoration';
        ore.chance = 0;
        ore.biomes = '^nether';
    });
});
