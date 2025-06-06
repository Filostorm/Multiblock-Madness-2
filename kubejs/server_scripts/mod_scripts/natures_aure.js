onEvent('tags.blocks', (event) => {
    event.add(`minecraft:mineable/pickaxe`, `naturesaura:gold_brick`);
    event.add(`minecraft:mineable/pickaxe`, 'naturesaura:nature_altar');
    event.add(`minecraft:mineable/pickaxe`, 'naturesaura:gold_nether_brick');
});
onEvent('tags.items', (event) => {
    event.add(`forge:ingots`, `naturesaura:tainted_gold`);
    event.add(`forge:ingots/tainted_gold`, `naturesaura:tainted_gold`);
    event.add(`forge:storage_blocks`, 'naturesaura:tainted_gold_block');
    event.add(`forge:storage_blocks/tainted_gold`, 'naturesaura:tainted_gold_block');
    event.add(`forge:ingots`, `naturesaura:infused_iron`);
    event.add(`forge:ingots/infused_mithril`, `naturesaura:infused_iron`);
    event.add(`forge:storage_blocks`, 'naturesaura:infused_iron_block');
    event.add(`forge:storage_blocks/infused_mithril`, 'naturesaura:infused_iron_block');
    event.add(`forge:ingots`, `naturesaura:sky_ingot`);
    event.add(`forge:ingots/sky_metal`, `naturesaura:sky_ingot`);
    event.remove(`forge:rods/wooden`, 'naturesaura:ancient_stick');

    event.add(`mbm2:naturesaura/crimson_altar`, 'minecraft:warped_planks');
    event.add(`mbm2:naturesaura/crimson_altar`, 'minecraft:crimson_planks');

    event.add(`mbm2:naturesaura/brilliant_fiber`, 'naturesaura:gold_fiber');
    event.add('mbm2:infused_stone', 'naturesaura:infused_stone');
    event.add('mbm2:gold_powder', 'naturesaura:gold_powder');
    event.add('mbm2:gold_leaf', 'naturesaura:gold_leaf');
});

onEvent('recipes', (event) => {
    //event.remove({id: 'naturesaura:gold_fiber'})
    event
        .shaped('4x naturesaura:gold_fiber', ['GEG', 'ELE', 'GEG'], {
            G: 'minecraft:grass',
            L: '#minecraft:leaves',
            E: '#forge:ingots/electrum'
        })
        .id('naturesaura:gold_fiber');
    event
        .shaped('naturesaura:gold_fiber', ['GEG', 'ELE', 'GEG'], {
            G: 'minecraft:grass',
            L: '#minecraft:leaves',
            E: 'naturesaura:gold_powder'
        })
        .id('mbm2:gold_fiber');

    //gold Powder
    event.remove({ id: 'naturesaura:gold_powder' });
    event.custom({
        type: 'elementalcraft:grinding',
        element_amount: 800,
        input: {
            item: 'naturesaura:gold_leaf'
        },
        luck_ration: 5,
        output: {
            item: 'naturesaura:gold_powder',
            count: 2
        }
    });
    event.recipes
        .immersiveengineeringCrusher('naturesaura:gold_powder', 'naturesaura:gold_leaf')
        .id(`mbm2:immersiveengineering/crushing/gold_powder`);

    //Wood Stand
    event.remove({ id: 'naturesaura:wood_stand' });
    global.createApplying(
        event,
        'naturesaura:wood_stand',
        Ingredient.of('#forge:ingots/auric_gold'),
        Ingredient.of('#forge:stripped_logs'),
        `mbm2:applying/wood_stand`
    );

    // [| Ancient Wood Scaffolding |] //
    event
        .shaped('3x kubejs:ancient_wood_scaffolding', ['AAA', ' C ', 'C C'], {
            A: 'naturesaura:ancient_planks',
            C: 'naturesaura:ancient_stick'
        })
        .id('mbm2:ancient_wood_scaffolding');

    //Gold Bricks from powder
    event
        .shapeless(`naturesaura:gold_brick`, [
            'minecraft:stone_bricks',
            'naturesaura:gold_powder',
            'naturesaura:gold_powder',
            'naturesaura:gold_powder',
            'naturesaura:gold_powder'
        ])
        .id(`mbm2:naturesaura/gold_brick_with_powder`);

    //Nature Altar
    global.naturesauraTreeRitual(
        event,
        'naturesaura:nature_altar',
        [
            Item.of('naturesaura:token_joy').toJson(),
            Item.of('#forge:ingots/tier_1_magical_alloy').toJson(),
            Item.of('#forge:ingots/tier_1_magical_alloy').toJson(),
            Item.of('#forge:ingots/tier_1_magical_alloy').toJson(),
            Item.of('forbidden_arcanus:arcane_crystal_dust').toJson(),
            Item.of('elementalcraft:whiterock').toJson(),
            Item.of('elementalcraft:whiterock').toJson(),
            Item.of('elementalcraft:whiterock').toJson()
        ],
        'oak_sapling',
        500,
        'naturesaura:tree_ritual/nature_altar'
    );

    //Infused Mithril
    //event.remove({id: 'naturesaura:altar/infused_iron'})
    global.naturesauraAltar(
        event,
        'naturesaura:infused_iron',
        'kubejs:mithril_ingot',
        'normal',
        'overworld',
        15000,
        80,
        'naturesaura:altar/infused_iron'
    );
    //event.remove({id: 'naturesaura:altar/infused_iron_block'})
    global.naturesauraAltar(
        event,
        'naturesaura:infused_iron_block',
        'kubejs:mithril_storage_block',
        'normal',
        'overworld',
        135000,
        700,
        'naturesaura:altar/infused_iron_block'
    );

    //Tainted Gold
    //event.remove({id: 'naturesaura:altar/tainted_gold'})
    global.naturesauraAltar(
        event,
        'naturesaura:tainted_gold',
        'kubejs:auric_gold_ingot',
        'normal',
        'nether',
        15000,
        80,
        'naturesaura:altar/tainted_gold'
    );
    //event.remove({id: 'naturesaura:altar/tainted_gold_block'})
    global.naturesauraAltar(
        event,
        'naturesaura:tainted_gold_block',
        'kubejs:auric_gold_storage_block',
        'normal',
        'nether',
        135000,
        700,
        'naturesaura:altar/tainted_gold_block'
    );

    event
        .custom({
            type: 'naturesaura:offering',
            input: Ingredient.of('#forge:leather').toJson(),
            start_item: {
                item: 'naturesaura:calling_spirit'
            },
            output: Item.of('minecraft:phantom_membrane').toResultJson()
        })
        .id(`mbm2:phantom_membrane`);

    //Gold Leaf Growth
    global.naturesauraAltar(
        event,
        'naturesaura:gold_leaf',
        'naturesaura:golden_leaves',
        'naturesaura:conversion_catalyst',
        'overworld',
        4000,
        200,
        'mbm2:altar/automated_goldleaf'
    );

    //Nature Gem
    global.naturesauraAltar(
        event,
        'kubejs:nature_gem',
        'ars_nouveau:source_gem',
        'naturesaura:conversion_catalyst',
        'overworld',
        4000,
        200,
        'mbm2:altar/nature_gem'
    );

    //Overgrown Light Engineering block
    global.naturesauraTreeRitual(
        event,
        'kubejs:overgrown_light_engineering_block',
        [
            Item.of('immersiveengineering:light_engineering').toJson(),
            Item.of('#elementalcraft:gems/fine_earth').toJson(),
            Item.of('ars_nouveau:ritual_overgrowth').toJson(),
            Item.of('#forge:ingots/infused_mithril').toJson(),
            Item.of('kubejs:tier_1_structural_alloy_bolt').toJson(),
            Item.of('kubejs:tier_1_structural_alloy_bolt').toJson(),
            Item.of('kubejs:tier_1_structural_alloy_bolt').toJson(),
            Item.of('naturesaura:gold_brick').toJson()
        ],
        'oak_sapling',
        500,
        'mbm2:tree_ritual/overgrown_engineering'
    );

    //infused_stone
    event.replaceInput(
        { id: 'naturesaura:altar/infused_stone' },
        'minecraft:stone',
        'elementalcraft:whiterock'
    );
    //Dimensional Rails
    event.remove({ output: 'naturesaura:dimension_rail_nether' });
    event
        .shaped('naturesaura:dimension_rail_nether', ['ABA', 'CDC', 'AEA'], {
            A: '#forge:bolts/tainted_gold',
            B: 'naturesaura:token_terror',
            C: '#forge:plates/tainted_gold',
            D: 'minecraft:rail',
            E: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}')
        })
        .id('mbm2:naturesaura_rail_nether');
    event.remove({ output: 'naturesaura:dimension_rail_end' });
    event
        .shaped('naturesaura:dimension_rail_end', ['ABA', 'CDC', 'AEA'], {
            A: '#forge:bolts/sky_metal',
            B: 'naturesaura:token_rage',
            C: '#forge:plates/sky_metal',
            D: 'minecraft:rail',
            E: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}')
        })
        .id('mbm2:naturesaura_rail_end');
    event.remove({ output: 'naturesaura:dimension_rail_overworld' });
    event
        .shaped('naturesaura:dimension_rail_overworld', ['ABA', 'CDC', 'AEA'], {
            A: '#forge:bolts/infused_mithril',
            B: 'naturesaura:token_euphoria',
            C: '#forge:plates/infused_mithril',
            D: 'minecraft:rail',
            E: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}')
        })
        .id('mbm2:naturesaura_rail_overworld');
});
