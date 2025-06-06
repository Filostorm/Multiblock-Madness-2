onEvent('recipes', (event) => {
    let veinsToRemove = [
        'createoreexcavation:drilling/gold',
        'createoreexcavation:drilling/quartz',
        'createoreexcavation:drilling/emerald',
        'createoreexcavation:drilling/hardened_diamond',
        'createoreexcavation:drilling/iron',
        'createoreexcavation:drilling/zinc',
        'createoreexcavation:drilling/glowstone',
        'createoreexcavation:drilling/coal',
        'createoreexcavation:drilling/diamond',
        'createoreexcavation:drilling/redstone',
        'createoreexcavation:drilling/copper'
    ];

    veinsToRemove.forEach((item) => {
        event.remove({ id: item });
    });

    //Drilling recipes (Items)
    //Spawning weight the bigger the number the higher chance to spawn.
    //See server config for empty chunk weight.
    //Arguments: output item(s), ore vein name in Text Component, spawning weight, extraction time in ticks at 32 RPM.

    global.newMaterialParts.forEach((item) => {
        if (item.type == 'compound_ore') {
            const materialNameUpper =
                item.material.charAt(0).toUpperCase() + item.material.slice(1);
            const veinName = materialNameUpper + ' Vein';

            //.charAt(0).toUpperCase()
            event.recipes.createoreexcavation
                .drilling(
                    [
                        Item.of(`#forge:raw_materials/${item.material}`),
                        Item.of(`#forge:ores/grit/${item.material}`).withChance(0.1)
                    ],
                    `{"text": "${veinName}"}`,
                    75,
                    200
                )
                .id(`mbm2:drilling/${item.material}_vein`);
        }
    });
    //Coal vein with 5% chance for diamond and require a diamond drill and lava for drilling
    //Always finite 5x-8x base
    //event.recipes.createoreexcavation.drilling([Item.of('minecraft:coal'), Item.of('minecraft:diamond').withChance(0.05)], '{"text": "My coal vein"}', 2, 1000).drill('createoreexcavation:diamond_drill').fluid('minecraft:lava').alwaysFinite().veinSize(5, 8).id("my_vein2");

    //Iron vein only in overworld and a stress requirement of 512 xRPM (default is 256 xRPM)
    //With a finite vein size between 3x-8.5x base (if finite veins are enabled)
    //event.recipes.createoreexcavation.drilling('minecraft:raw_iron', '{"text": "My iron vein"}', 10, 100).veinSize(3, 8.5).biomeWhitelist('forge:is_overworld').stress(512).id("my_vein3");
    //biomeBlacklist is also available

    //Fluid extractor recipes (Fluids)
    //event.recipes.createoreexcavation.extracting(Fluid.of('minecraft:water', 400), '{"text": "Water well"}', 10, 100).alwaysInfinite().id("test");
    //The biome, stress and drill settings are the same as the drilling recipe

    //Set base value in config for finite veins
});
