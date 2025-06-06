onEvent('worldgen.add', (event) => {
    console.log('anywhere');
    const { anchors } = event;

    // Base Uru Veins
    event.addOre((ore) => {
        ore.id = 'kubejs:uru_ore';

        ore.addTarget('bedrock', 'kubejs:bedrock_uru_ore');

        ore.count([1, 4]).squared().uniformHeight(anchors.aboveBottom(2), anchors.absolute(-59));
        ore.size = 3;
        ore.noSurface = 0;
        ore.worldgenLayer = 'underground_ores';
        ore.chance = 0;
    });
});
