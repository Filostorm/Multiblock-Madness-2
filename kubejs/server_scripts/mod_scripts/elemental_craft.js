onEvent('tags.items', (event) => {
    event.add(`elementalcraft:basic_infused`, 'elementalcraft:drenched_iron_ingot');
    event.add(`elementalcraft:basic_infused`, 'elementalcraft:air_silk');
    event.add(`elementalcraft:basic_infused`, 'elementalcraft:whiterock');
    event.add(`elementalcraft:basic_infused`, 'elementalcraft:burnt_glass');

    event.add(`forge:ingots/drenched_arcanite`, 'elementalcraft:drenched_iron_ingot');
    event.add(`forge:storage_blocks/drenched_arcanite`, 'elementalcraft:drenched_iron_block');
});

onEvent('recipes', (event) => {
    //Nether Wart
    global.elementalcraftInfusion(
        event,
        Ingredient.of('#forge:mushrooms'),
        Item.of('minecraft:nether_wart'),
        'fire',
        1000,
        'mbm2:infusion/nether_wart'
    );

    event.replaceInput({ mod: 'elementalcraft' }, '#forge:ingots/iron', '#forge:ingots/arcanite');
    event.replaceInput({ mod: 'elementalcraft' }, '#forge:nuggets/iron', '#forge:nuggets/arcanite');

    event.replaceInput(
        { id: 'elementalcraft:pureinfusion/purerock' },
        'minecraft:obsidian',
        'beyond_earth:mars_stone'
    );

    //Container Upgrade
    //event.remove({id: 'druidcraftrg:beam'})
    event
        .shaped('elementalcraft:container', ['DCD', 'PGP', 'RRR'], {
            R: 'elementalcraft:whiterock',
            G: 'elementalcraft:burnt_glass',
            P: 'elementalcraft:elementpipe',
            D: 'elementalcraft:drenched_iron_ingot',
            C: 'elementalcraft:small_container'
        })
        .modifyResult((inventory, itemstack) => {
            let item = inventory.find(Item.of('elementalcraft:small_container').ignoreNBT());
            if (item.nbt == null) return itemstack;
            let nbt = item.nbt;
            nbt.BlockEntityTag.element_storage.element_capacity = 100000;
            return itemstack.withNBT(nbt);
        })
        .id('mbm2:elementalcraft/container');

    let elements = ['fire', 'earth', 'air', 'water'];
    elements.forEach((element) => {
        event
            .shaped(`4x elementalcraft:${element}_shard`, [' S ', 'SCS', ' S '], {
                C: `elementalcraft:${element}crystal`,
                S: '#quark:shards'
            })
            .replaceIngredient(4, 'elementalcraft:inert_crystal')
            .id(`mbm2:${element}_shard_transfer`);
    });

    //Element Binder
    event.remove({ output: 'elementalcraft:binder' });
    event
        .shaped('elementalcraft:binder', ['ABA', 'CDC', 'DCD'], {
            A: 'tconstruct:seared_bricks',
            B: 'elementalcraft:contained_crystal',
            C: 'elementalcraft:drenched_iron_ingot',
            D: 'elementalcraft:whiterock'
        })
        .id('mbm2:elementalcraft/binder');
    //Air Mill
    event.remove({ output: 'elementalcraft:air_mill' });
    event
        .shaped('elementalcraft:air_mill', ['ABA', 'BCB', 'DED'], {
            A: 'kubejs:source_tube',
            B: 'kubejs:tier_1_magical_alloy_ingot',
            C: 'minecraft:grindstone',
            D: 'elementalcraft:whiterock',
            E: 'elementalcraft:aircrystal'
        })
        .id('mbm2:elementalcraft/air_mill');

    event.replaceInput(
        { output: 'elementalcraft:instrument_retriever' },
        'elementalcraft:swift_alloy_ingot',
        ['#forge:ingots/auric_gold', '#forge:ingots/swift_alloy']
    );
    event.replaceInput({ output: 'elementalcraft:sorter' }, 'elementalcraft:swift_alloy_ingot', [
        '#forge:ingots/auric_gold',
        '#forge:ingots/swift_alloy'
    ]);
});
