onEvent('tags.items', (event) => {
    let corundums = [
        'quark:white_corundum_cluster',
        'quark:black_corundum_cluster',
        'quark:red_corundum_cluster',
        'quark:violet_corundum_cluster',
        'quark:orange_corundum_cluster',
        'quark:indigo_corundum_cluster',
        'quark:yellow_corundum_cluster',
        'quark:blue_corundum_cluster',
        'quark:green_corundum_cluster'
    ];

    corundums.forEach((crystalolor) => {
        event.add('mbm2:corundum_cluster', `${crystalolor}`);
    });
});
onEvent('recipes', (event) => {
    //Corundum and Quark rune changes
    //First Corundum if not found
    event
        .custom({
            type: 'immersiveengineering:crusher',
            secondaries: [
                {
                    chance: 0.5,
                    output: {
                        item: 'quark:white_corundum_cluster',
                        count: 2
                    }
                },
                {
                    chance: 0.25,
                    output: {
                        item: 'quark:white_corundum_cluster',
                        count: 1
                    }
                }
            ],
            result: {
                base_ingredient: {
                    item: 'quark:white_corundum_cluster'
                }
            },
            input: {
                item: 'quark:white_corundum'
            },
            energy: 6000
        })
        .id('mbm2:crushing/ie_corundum_from_block');
    event.recipes
        .mekanismCrushing('4x quark:white_corundum_cluster', 'quark:white_corundum')
        .id(`mbm2:mekanism/crushing/corundum_from_block`);
    event.recipes
        .createMilling(
            [
                '2x quark:white_corundum_cluster',
                Item.of('quark:white_corundum_cluster').withChance(0.5),
                Item.of('quark:white_corundum_cluster').withChance(0.25)
            ],
            ['quark:white_corundum']
        )
        .id(`mbm2:create/crushing/corundum_from_block`);

    //White Corundum Block
    event
        .custom({
            type: 'thermal:crystallizer',
            ingredients: [
                {
                    fluid: 'minecraft:water',
                    amount: 2000
                },
                {
                    item: 'elementalcraft:inertcrystal_block',
                    count: 1
                },
                {
                    item: 'kubejs:catalyst_gem',
                    count: 1
                }
            ],
            result: [
                {
                    item: 'quark:white_corundum',
                    count: 1
                }
            ]
        })
        .id(`mbm2:crystallizer/white_corundum_block`);
    //White Corundum Cluster
    event
        .custom({
            type: 'thermal:crystallizer',
            ingredients: [
                {
                    fluid: 'minecraft:water',
                    amount: 2000
                },
                {
                    tag: 'mbm2:corundum_cluster',
                    count: 1
                },
                {
                    tag: 'forge:gems/niter',
                    count: 1
                }
            ],
            result: [
                {
                    item: 'quark:white_corundum_cluster',
                    count: 1
                }
            ]
        })
        .id(`mbm2:crystallizer/white_corundum_cluster`);
    //Black Corundum Cluster
    event
        .custom({
            type: 'thermal:crystallizer',
            ingredients: [
                {
                    fluid: 'minecraft:water',
                    amount: 2000
                },
                {
                    tag: 'mbm2:corundum_cluster',
                    count: 1
                },
                {
                    tag: 'mbm2:coal',
                    count: 1
                }
            ],
            result: [
                {
                    item: 'quark:black_corundum_cluster',
                    count: 1
                }
            ]
        })
        .id(`mbm2:crystallizer/black_corundum_cluster`);
    //Red Corundum Cluster
    event
        .custom({
            type: 'thermal:crystallizer',
            ingredients: [
                {
                    fluid: 'minecraft:water',
                    amount: 2000
                },
                {
                    tag: 'mbm2:corundum_cluster',
                    count: 1
                },
                {
                    tag: 'forge:gems/ruby',
                    count: 1
                }
            ],
            result: [
                {
                    item: 'quark:red_corundum_cluster',
                    count: 1
                }
            ]
        })
        .id(`mbm2:crystallizer/red_corundum_cluster`);
    //Violet Corundum Cluster
    event
        .custom({
            type: 'thermal:crystallizer',
            ingredients: [
                {
                    fluid: 'minecraft:water',
                    amount: 2000
                },
                {
                    tag: 'mbm2:corundum_cluster',
                    count: 1
                },
                {
                    tag: 'forge:gems/source',
                    count: 1
                }
            ],
            result: [
                {
                    item: 'quark:violet_corundum_cluster',
                    count: 1
                }
            ]
        })
        .id(`mbm2:crystallizer/violet_corundum_cluster`);
    //Orange Corundum Cluster
    event
        .custom({
            type: 'thermal:crystallizer',
            ingredients: [
                {
                    fluid: 'minecraft:water',
                    amount: 2000
                },
                {
                    tag: 'mbm2:corundum_cluster',
                    count: 1
                },
                {
                    item: 'botania:quartz_blaze',
                    count: 1
                }
            ],
            result: [
                {
                    item: 'quark:orange_corundum_cluster',
                    count: 1
                }
            ]
        })
        .id(`mbm2:crystallizer/orange_corundum_cluster`);
    //Indigo Corundum Cluster
    event
        .custom({
            type: 'thermal:crystallizer',
            ingredients: [
                {
                    fluid: 'minecraft:water',
                    amount: 2000
                },
                {
                    tag: 'mbm2:corundum_cluster',
                    count: 1
                },
                {
                    tag: 'forge:gems/sapphire',
                    count: 1
                }
            ],
            result: [
                {
                    item: 'quark:indigo_corundum_cluster',
                    count: 1
                }
            ]
        })
        .id(`mbm2:crystallizer/indigo_corundum_cluster`);
    //Yellow Corundum Cluster
    event
        .custom({
            type: 'thermal:crystallizer',
            ingredients: [
                {
                    fluid: 'minecraft:water',
                    amount: 2000
                },
                {
                    tag: 'mbm2:corundum_cluster',
                    count: 1
                },
                {
                    tag: 'forge:gems/sulfur',
                    count: 1
                }
            ],
            result: [
                {
                    item: 'quark:yellow_corundum_cluster',
                    count: 1
                }
            ]
        })
        .id(`mbm2:crystallizer/yellow_corundum_cluster`);
    //Blue Corundum Cluster
    event
        .custom({
            type: 'thermal:crystallizer',
            ingredients: [
                {
                    fluid: 'minecraft:water',
                    amount: 2000
                },
                {
                    tag: 'mbm2:corundum_cluster',
                    count: 1
                },
                {
                    tag: 'forge:gems/diamond',
                    count: 1
                }
            ],
            result: [
                {
                    item: 'quark:blue_corundum_cluster',
                    count: 1
                }
            ]
        })
        .id(`mbm2:crystallizer/blue_corundum_cluster`);
    //Green Corundum Cluster
    event
        .custom({
            type: 'thermal:crystallizer',
            ingredients: [
                {
                    fluid: 'minecraft:water',
                    amount: 2000
                },
                {
                    tag: 'mbm2:corundum_cluster',
                    count: 1
                },
                {
                    tag: 'forge:gems/emerald',
                    count: 1
                }
            ],
            result: [
                {
                    item: 'quark:green_corundum_cluster',
                    count: 1
                }
            ]
        })
        .id(`mbm2:crystallizer/green_corundum_cluster`);
    //Runes Rework
    let stone_replace = [
        'white',
        'orange',
        'magenta',
        'yellow',
        'blue',
        'black',
        'red',
        'light_blue'
    ];
    stone_replace.forEach((item) => {
        event.replaceInput(
            { id: `quark:tools/crafting/runes/${item}_rune_from_corundum` },
            '#forge:stone',
            'quark:blank_rune'
        );
    });
    event.replaceInput(
        { id: 'quark:tools/crafting/runes/rainbow_rune' },
        '#forge:stone',
        'quark:blank_rune'
    );
    event.remove({ id: 'quark:tools/crafting/runes/lime_rune_from_corundum' });
    event
        .shaped('quark:green_rune', ['AAA', 'ABA', 'AAA'], {
            A: 'quark:green_corundum',
            B: 'quark:blank_rune'
        })
        .id('mbm2:quark/runes/green');
    event
        .shaped('quark:lime_rune', ['AAA', 'ABC', 'CCC'], {
            A: 'quark:green_corundum',
            B: 'quark:blank_rune',
            C: 'quark:white_corundum'
        })
        .id('mbm2:quark/runes/lime');
    event
        .shapeless('2x quark:lime_rune', ['quark:green_rune', 'quark:white_rune'])
        .id('mbm2:quark/runes/lime_alt');
    event
        .shaped('quark:purple_rune', ['AAA', 'ABC', 'CCC'], {
            A: 'quark:red_corundum',
            B: 'quark:blank_rune',
            C: 'quark:indigo_corundum'
        })
        .id('mbm2:quark/runes/purple');
    event
        .shapeless('2x quark:purple_rune', ['quark:blue_rune', 'quark:red_rune'])
        .id('mbm2:quark/runes/purple_alt');
    event
        .shaped('quark:pink_rune', ['AAA', 'ABC', 'CCC'], {
            A: 'quark:red_corundum',
            B: 'quark:blank_rune',
            C: 'quark:white_corundum'
        })
        .id('mbm2:quark/runes/pink');
    event
        .shapeless('2x quark:pink_rune', ['quark:white_rune', 'quark:red_rune'])
        .id('mbm2:quark/runes/pink_alt');
    event
        .shaped('quark:cyan_rune', ['AAA', 'ABC', 'CCC'], {
            A: 'quark:green_corundum',
            B: 'quark:blank_rune',
            C: 'quark:indigo_corundum'
        })
        .id('mbm2:quark/runes/cyan');
    event
        .shapeless('2x quark:cyan_rune', ['quark:green_rune', 'quark:blue_rune'])
        .id('mbm2:quark/runes/cyan_alt');
    event
        .shaped('quark:gray_rune', ['AAA', 'ABC', 'CCC'], {
            A: 'quark:black_corundum',
            B: 'quark:blank_rune',
            C: 'quark:white_corundum'
        })
        .id('mbm2:quark/runes/gray');
    event
        .shapeless('2x quark:gray_rune', ['quark:black_rune', 'quark:white_rune'])
        .id('mbm2:quark/runes/gray_alt');
    event
        .shaped('quark:light_gray_rune', ['AAB', 'BCB', 'BBB'], {
            A: 'quark:black_corundum',
            B: 'quark:white_corundum',
            C: 'quark:blank_rune'
        })
        .id('mbm2:quark/runes/light_gray');
    event
        .shapeless('3x quark:light_gray_rune', [
            'quark:black_rune',
            'quark:white_rune',
            'quark:white_rune'
        ])
        .id('mbm2:quark/runes/light_gray_alt');
    event
        .shaped('quark:brown_rune', ['AAA', 'ABC', 'CCC'], {
            A: 'quark:orange_corundum',
            B: 'quark:blank_rune',
            C: 'quark:black_corundum'
        })
        .id('mbm2:quark/runes/brown');
    event
        .shapeless('2x quark:brown_rune', ['quark:orange_rune', 'quark:black_rune'])
        .id('mbm2:quark/runes/brown_alt');
    let color_remove = [
        'white',
        'orange',
        'magenta',
        'light_blue',
        'yellow',
        'lime',
        'pink',
        'gray',
        'light_gray',
        'cyan',
        'purple',
        'blue',
        'brown',
        'green',
        'red',
        'black'
    ];
    color_remove.forEach((item) => {
        event.remove({ id: `quark:tools/crafting/runes/${item}_rune` });
    });

    //Blank Rune recipe
    event.recipes.botania
        .mana_infusion('quark:blank_rune', 'elementalcraft:minor_rune_slate', 10000)
        .id('mbm2:botania/mana_infusion/quark_rune');

    //Quark Saplings now craftable
    event
        .shapeless('quark:red_blossom_sapling', ['ars_nouveau:fire_essence', '#forge:sapling'])
        .id('mbm2:quark/sapling/fiery');
    event
        .shapeless('quark:blue_blossom_sapling', ['ars_nouveau:water_essence', '#forge:sapling'])
        .id('mbm2:quark/sapling/frosty');
    event
        .shapeless('quark:yellow_blossom_sapling', ['ars_nouveau:air_essence', '#forge:sapling'])
        .id('mbm2:quark/sapling/sunny');
    event
        .shapeless('quark:pink_blossom_sapling', ['ars_nouveau:earth_essence', '#forge:sapling'])
        .id('mbm2:quark/sapling/sweet');
    event
        .shapeless('quark:orange_blossom_sapling', [
            'ars_nouveau:manipulation_essence',
            '#forge:sapling'
        ])
        .id('mbm2:quark/sapling/warm');
    event
        .shapeless('quark:lavender_blossom_sapling', [
            'ars_nouveau:abjuration_essence',
            '#forge:sapling'
        ])
        .id('mbm2:quark/sapling/serene');
});
