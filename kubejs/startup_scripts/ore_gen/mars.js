onEvent('worldgen.remove', (event) => {
    event.removeOres((ores) => {
        ores.blocks = [
            'beyond_earth:mars_iron_ore',
            'beyond_earth:mars_diamond_ore',
            'beyond_earth:mars_ostrum_ore'
        ];
    });
});

onEvent('worldgen.add', (event) => {
    const marsSurfaceChance = 0;

    // use the anchors helper from the event (NOTE: this requires newer versions of KubeJS)
    // if you are using an older version of KubeJS, you can use the methods in the ore properties class
    const { anchors } = event;

    console.log('mars');

    ////////////////////////////////////////////	mars	////////////////////////////////

    // Base tungsten Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:mars_tungsten_ore';

        global.stoneTypes.forEach((type) => {
            ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_tungsten_ore`);
        });

        ore.count([1, 6]).squared().uniformHeight(anchors.aboveBottom(0), anchors.absolute(100));
        ore.size = 20;
        ore.noSurface = marsSurfaceChance;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
        ore.biomes = ['beyond_earth:mars_ice_spikes', 'beyond_earth:mars'];
    });

    // Base orichalcum Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:mars_orichalcum_ore';

        global.stoneTypes.forEach((type) => {
            ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_orichalcum_ore`);
        });

        ore.count([1, 6]).squared().uniformHeight(anchors.aboveBottom(0), anchors.absolute(100));
        ore.size = 20;
        ore.noSurface = marsSurfaceChance;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
        ore.biomes = ['beyond_earth:mars_ice_spikes', 'beyond_earth:mars'];
    });

    // Base ostrum Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:mars_ostrum_ore';

        ore.addTarget('beyond_earth:mars_stone', 'beyond_earth:mars_ostrum_ore');

        ore.count([1, 6]).squared().uniformHeight(anchors.aboveBottom(0), anchors.absolute(100));
        ore.size = 20;
        ore.noSurface = marsSurfaceChance;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
        ore.biomes = ['beyond_earth:mars_ice_spikes', 'beyond_earth:mars'];
    });

    // Base titanium Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:mars_titanium_ore';

        global.stoneTypes.forEach((type) => {
            ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_titanium_ore`);
        });

        ore.count([1, 6]).squared().uniformHeight(anchors.aboveBottom(0), anchors.absolute(100));
        ore.size = 20;
        ore.noSurface = marsSurfaceChance;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
        ore.biomes = ['beyond_earth:mars_ice_spikes', 'beyond_earth:mars'];
    });
});
