onEvent('recipes', (event) => {
    let colors = [
        'white',
        'orange',
        'magenta',
        'light_blue',
        'yellow',
        'lime',
        'pink',
        'gray',
        'light_gray',
        'purple',
        'blue',
        'cyan',
        'brown',
        'green',
        'red',
        'black'
    ];

    // Red Alloy Wire
    event.remove({ id: `projectred_transmission:red_alloy_wire` });
    event
        .shaped('3x projectred_transmission:red_alloy_wire', ['R', 'R', 'R'], {
            R: '#forge:ingots/red_alloy'
        })
        .id(`mbm2:red_alloy_wire`);

    //Insulated Wire
    colors.forEach((color) => {
        event.remove({ id: `projectred_transmission:${color}_insulated_wire` });
        event
            .shaped(`projectred_transmission:${color}_insulated_wire`, ['WC'], {
                C: 'projectred_transmission:red_alloy_wire',
                W: `#forge:wool/${color}`
            })
            .id(`mbm2:${color}_insulated_wire`);
    });
    //Electrotine
    global.createCharging(
        event,
        Item.of('minecraft:redstone').toJson(),
        Item.of('projectred_core:electrotine_dust').toJson(),
        2000,
        'mbm2:electrotine_dust'
    );
    event.remove({ output: 'projectred_core:electrotine_ingot' });
    event.recipes
        .createMixing(
            ['projectred_core:electrotine_ingot'],
            [
                '4x projectred_core:electrotine_dust',
                '4x powah:dielectric_paste',
                '#forge:ingots/tier_1_electrical_alloy'
            ]
        )
        .heated()
        .id('mbm2:mixing/electrotine_ingot');

    // Red Alloy Wire
    event.remove({ output: `projectred_core:silicon` });
    event
        .shaped('2x projectred_core:silicon', ['S', 'B'], {
            S: 'cb_microblock:diamond_saw',
            B: 'projectred_core:boule'
        })
        .id(`mbm2:crafting/silicon`);

    event.recipes
        .createCutting('4x projectred_core:silicon', 'projectred_core:boule')
        .id('mbm2:cutting/silicon');
    event.recipes
        .mekanismSawing(`8x projectred_core:silicon`, `projectred_core:boule`)
        .id(`mbm2:mek_sawmill/silicon`);

    //Dimensional Stuff
    event.replaceInput(
        { output: 'rftoolsbase:infused_diamond' },
        '#forge:gems/diamond',
        'botania:mana_diamond'
    );
    event.replaceInput(
        { output: 'rftoolsbase:infused_enderpearl' },
        'ender_pearl',
        'botania:mana_pearl'
    );
    event.recipes
        .mekanismMetallurgicInfusing(
            'rftoolsbase:infused_diamond',
            Item.of('botania:mana_diamond'),
            { infuse_type: 'kubejs:dimensional', amount: 100 }
        )
        .id(`mbm2:infused_diamond`);
    event.recipes
        .mekanismMetallurgicInfusing(
            'rftoolsbase:infused_enderpearl',
            Item.of('botania:mana_pearl'),
            { infuse_type: 'kubejs:dimensional', amount: 100 }
        )
        .id(`mbm2:infused_enderpearl`);
});
