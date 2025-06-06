onEvent('recipes', (event) => {
    //RFTools Machine Frame miniaturization
    event.remove({ id: 'rftoolsbase:machine_frame' });
    global.compactCrafting(
        event,
        'rftoolsbase:machine_frame',
        1,
        'projectred_core:silicon_chip',
        3,
        [
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['A', 'B', 'A'],
                    ['B', 'E', 'B'],
                    ['A', 'B', 'A']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['A', 'D', 'A'],
                    ['D', 'C', 'D'],
                    ['A', 'D', 'A']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['A', 'B', 'A'],
                    ['B', 'E', 'B'],
                    ['A', 'B', 'A']
                ]
            }
        ],
        {
            A: {
                type: 'compactcrafting:block',
                block: 'create:andesite_alloy_block'
            },
            B: {
                type: 'compactcrafting:block',
                block: 'immersiveengineering:steel_scaffolding_standard'
            },
            C: {
                type: 'compactcrafting:block',
                block: 'immersiveengineering:insulating_glass'
            },
            D: {
                type: 'compactcrafting:block',
                block: 'tconstruct:gold_bars'
            },
            E: {
                type: 'compactcrafting:block',
                block: 'thermal:sapphire_block'
            }
        },
        'mbm2:rftools_frame'
    );

    //New Dimensional Shard recipe
    event.remove({ id: 'rftoolsbase:dimensionalshard' });
    global.arsImbuement(
        event,
        'kubejs:dimensional_mote',
        1,
        'botania:quartz_mana',
        1500,
        [
            { item: { item: 'naturesaura:dimension_rail_overworld' } },
            { item: { item: 'naturesaura:dimension_rail_nether' } },
            { item: { item: 'naturesaura:dimension_rail_end' } }
        ],
        'mbm2:dimensional_mote'
    );
    global.arsEnchantment(
        event,
        Item.of('rftoolsbase:dimensionalshard'),
        Item.of('kubejs:dimensional_mote'),
        [
            Item.of('#forge:ingots/infused_mithril'),
            Item.of('#forge:ingots/sky_metal'),
            Item.of('minecraft:shroomlight'),
            Item.of('minecraft:glow_berries'),
            Item.of('minecraft:chorus_flower'),
            Item.of('#forge:ingots/tainted_gold')
        ],
        200,
        'mbm2:rftools_dimensional_shard',
        false
    );
});
