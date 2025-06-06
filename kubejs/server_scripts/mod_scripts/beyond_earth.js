/*
T1 Moon, Desh, moon_desert
T2 Mars, Ostrum mars_rocky_plain
T3 Venus, Calorite
T3 Mercury
T4 Glacio, glacio_ice_spikes
*/

onEvent('block.loot_tables', (event) => {
    //Ore should drop the Cheese
    event.addSimpleBlock('beyond_earth:moon_cheese_ore', 'beyond_earth:cheese');
});

onEvent('tags.items', (event) => {
    let beyondMaterials = [
        'calorite',
        'ostrum',
        'desh'
        //'steel'
    ];

    beyondMaterials.forEach((item) => {
        event.add(`forge:platings`, `beyond_earth:compressed_${item}`);
        event.add(`forge:platings/${item}`, `beyond_earth:compressed_${item}`);
    });
    event.add(`forge:platings`, `beyond_earth:compressed_steel`);
    event.add(`forge:platings/compressed_steel`, `beyond_earth:compressed_steel`);
});

onEvent('recipes', (event) => {
    /*
  	event.shaped('tconstruct:smeltery_controller', [
		'AAA',
		'ABA',
		'AAA'
  	], {
		A: 'tconstruct:seared_brick',
		B: '#forge:gears/steel'
  	})
  	event.shapeless(`kubejs:carbon_covered_iron`, [`#forge:ingots/iron`, '#forge:dusts/coal_coke']).id(`kubejs:carbon_covered_iron`)
	*/
    //Fuel
    global.ieMixer(
        event,
        Fluid.of('beyond_earth:fuel', 100),
        { tag: 'forge:kerosene', amount: 100 },
        Item.of('mekanism:fluorite_gem'),
        4000,
        'mbm2:beyond_earth/fuel'
    );

    //The Workbench
    event.remove({ id: 'beyond_earth:nasa_workbench' });
    event.recipes
        .createMechanicalCrafting(
            'beyond_earth:nasa_workbench',
            ['A A A', 'RERER', 'BHUHB', 'GCMCG', ' PPP '],
            {
                A: '#forge:robot_arms/tier_2_mechanical_alloy', //'create:mechanical_arm',
                B: 'pneumaticcraft:pneumatic_cylinder',
                H: 'immersiveengineering:coil_hv',
                C: 'compressedcreativity:compressed_iron_casing',
                U: 'thermal:upgrade_augment_1',
                E: 'immersiveengineering:component_electronic_adv',
                R: '#forge:rods/pressurized_aluminum_alloy',
                P: '#forge:platings/titanium',
                M: '#forge:interlocking_components/energetic_alloy',
                G: '#forge:gears/compressed_steel'
            }
        )
        .id('mbm2:nasa_workbench');

    //ROTARS
    event.replaceInput(
        { mod: 'beyond_earth' },
        'beyond_earth:engine_fan',
        'compressedcreativity:engine_rotor'
    );

    //Aluminum
    event.replaceInput({ mod: 'beyond_earth' }, '#forge:plates/iron', '#forge:plates/aluminum');
    event.replaceInput({ mod: 'beyond_earth' }, '#forge:ingots/iron', '#forge:ingots/aluminum');

    //Temp Engine Frame recipe
    event.replaceInput(
        { id: 'beyond_earth:engine_frame' },
        '#forge:nuggets/iron',
        '#forge:rods/compressed_steel'
    );

    //Desh Engine
    event.remove({ output: 'beyond_earth:desh_engine' });
    event
        .shaped('beyond_earth:desh_engine', ['ABA', 'CDE', 'ABA'], {
            A: 'beyond_earth:desh_plate',
            B: 'elementalcraft:fireite_ingot',
            C: 'beyond_earth:steel_engine',
            D: 'compressedcreativity:engine_rotor',
            E: 'beyond_earth:engine_frame'
        })
        .id('mbm2:desh_engine');

    //fIX oXYGEN
    event.remove({ id: 'beyond_earth:oxygen_loading/from_water' });
    event
        .custom({
            type: 'beyond_earth:oxygen_loader',
            input: {
                name: 'mekanism:oxygen',
                amount: 5
            },
            oxygen: 5
        })
        .id('mbm2:beyond_earth/oxygen_converting');
    event
        .custom({
            type: 'beyond_earth:oxygen_loader',
            input: {
                name: 'kubejs:liquid_air',
                amount: 5
            },
            oxygen: 5
        })
        .id('mbm2:beyond_earth/liquid_air_converting');

    //Oxygen Loader
    event.remove({ id: 'beyond_earth:oxygen_loader' });
    event
        .shaped('beyond_earth:oxygen_loader', ['PAP', 'MCM', 'PTP'], {
            C: '#forge:casings/titanium',
            P: `#forge:plates/aluminum`,
            A: 'immersiveengineering:component_electronic_adv',
            T: 'beyond_earth:oxygen_tank',
            M: 'pneumaticcraft:flow_detector_module'
        })
        .id(`mbm2:crafting/oxygen_loader`);

    //Tier 2 Rocket
    event.remove({ id: 'beyond_earth:nasa_workbenching/tier2' });
    event
        .custom({
            type: 'beyond_earth:nasa_workbench',
            input: {
                parts: {
                    'beyond_earth:nose': [
                        {
                            item: 'kubejs:aerospace_alloy_rocket_nose_cone'
                        }
                    ],
                    'beyond_earth:body': [
                        {
                            tag: 'forge:platings/desh'
                        },
                        {
                            tag: 'forge:platings/desh'
                        },
                        {
                            tag: 'forge:platings/desh'
                        },
                        {
                            tag: 'forge:platings/desh'
                        },
                        {
                            tag: 'forge:platings/desh'
                        },
                        {
                            tag: 'forge:platings/desh'
                        }
                    ],
                    'beyond_earth:tank': [
                        {
                            tag: 'beyond_earth:tanks/desh'
                        },
                        {
                            tag: 'beyond_earth:tanks/desh'
                        }
                    ],
                    'beyond_earth:fin_left': [
                        {
                            item: 'kubejs:aerospace_alloy_rocket_fin'
                        },
                        {
                            item: 'kubejs:aerospace_alloy_rocket_fin'
                        }
                    ],
                    'beyond_earth:fin_right': [
                        {
                            item: 'kubejs:aerospace_alloy_rocket_fin'
                        },
                        {
                            item: 'kubejs:aerospace_alloy_rocket_fin'
                        }
                    ],
                    'beyond_earth:engine': [
                        {
                            tag: 'beyond_earth:engines/desh'
                        }
                    ]
                }
            },
            output: {
                item: 'beyond_earth:rocket_t2',
                count: 1
            }
        })
        .id('mbm2:tier2_rocket');

    //Tier 3 Rocket
    event.remove({ id: 'beyond_earth:nasa_workbenching/tier3' });
    event
        .custom({
            type: 'beyond_earth:nasa_workbench',
            input: {
                parts: {
                    'beyond_earth:nose': [
                        {
                            item: 'kubejs:aerospace_alloy_rocket_nose_cone'
                        }
                    ],
                    'beyond_earth:body': [
                        {
                            tag: 'forge:platings/ostrum'
                        },
                        {
                            tag: 'forge:platings/ostrum'
                        },
                        {
                            tag: 'forge:platings/ostrum'
                        },
                        {
                            tag: 'forge:platings/ostrum'
                        },
                        {
                            tag: 'forge:platings/ostrum'
                        },
                        {
                            tag: 'forge:platings/ostrum'
                        }
                    ],
                    'beyond_earth:tank': [
                        {
                            tag: 'beyond_earth:tanks/ostrum'
                        },
                        {
                            tag: 'beyond_earth:tanks/ostrum'
                        }
                    ],
                    'beyond_earth:fin_left': [
                        {
                            item: 'kubejs:aerospace_alloy_rocket_fin'
                        },
                        {
                            item: 'kubejs:aerospace_alloy_rocket_fin'
                        }
                    ],
                    'beyond_earth:fin_right': [
                        {
                            item: 'kubejs:aerospace_alloy_rocket_fin'
                        },
                        {
                            item: 'kubejs:aerospace_alloy_rocket_fin'
                        }
                    ],
                    'beyond_earth:engine': [
                        {
                            tag: 'beyond_earth:engines/ostrum'
                        }
                    ]
                }
            },
            output: {
                item: 'beyond_earth:rocket_t3',
                count: 1
            }
        })
        .id('mbm2:tier3_rocket');

    //Tier 4 Rocket
    event.remove({ id: 'beyond_earth:nasa_workbenching/tier4' });
    event
        .custom({
            type: 'beyond_earth:nasa_workbench',
            input: {
                parts: {
                    'beyond_earth:nose': [
                        {
                            item: 'kubejs:adamantine_alloy_rocket_nose_cone'
                        }
                    ],
                    'beyond_earth:body': [
                        {
                            tag: 'forge:platings/calorite'
                        },
                        {
                            tag: 'forge:platings/calorite'
                        },
                        {
                            tag: 'forge:platings/calorite'
                        },
                        {
                            tag: 'forge:platings/calorite'
                        },
                        {
                            tag: 'forge:platings/calorite'
                        },
                        {
                            tag: 'forge:platings/calorite'
                        }
                    ],
                    'beyond_earth:tank': [
                        {
                            tag: 'beyond_earth:tanks/calorite'
                        },
                        {
                            tag: 'beyond_earth:tanks/calorite'
                        }
                    ],
                    'beyond_earth:fin_left': [
                        {
                            item: 'kubejs:adamantine_alloy_rocket_fin'
                        },
                        {
                            item: 'kubejs:adamantine_alloy_rocket_fin'
                        }
                    ],
                    'beyond_earth:fin_right': [
                        {
                            item: 'kubejs:adamantine_alloy_rocket_fin'
                        },
                        {
                            item: 'kubejs:adamantine_alloy_rocket_fin'
                        }
                    ],
                    'beyond_earth:engine': [
                        {
                            tag: 'beyond_earth:engines/calorite'
                        }
                    ]
                }
            },
            output: {
                item: 'beyond_earth:rocket_t4',
                count: 1
            }
        })
        .id('mbm2:tier4_rocket');

    //Tanks
    event.remove({ output: 'beyond_earth:steel_tank' });
    event
        .shaped('beyond_earth:steel_tank', ['ABA', 'BCB', 'ABA'], {
            A: 'kubejs:aluminum_plating',
            B: 'kubejs:steel_rod',
            C: Item.of(
                'thermal:fluid_cell',
                '{BlockEntityTag:{TankInv:[{Amount:0,Capacity:32000,FluidName:"minecraft:empty",Tank:0b}]}}'
            )
        })
        .id('mbm2:steel_tank');
    event.remove({ output: 'beyond_earth:desh_tank' });
    event
        .shaped('beyond_earth:desh_tank', ['ABA', 'BCB', 'ABA'], {
            A: 'beyond_earth:compressed_desh',
            B: 'kubejs:steel_rod',
            C: 'beyond_earth:steel_tank'
        })
        .id('mbm2:desh_tank');
    event.remove({ output: 'beyond_earth:ostrum_tank' });
    event
        .shaped('beyond_earth:ostrum_tank', ['ABA', 'BCB', 'ABA'], {
            A: 'beyond_earth:compressed_ostrum',
            B: 'kubejs:steel_rod',
            C: 'beyond_earth:desh_tank'
        })
        .id('mbm2:ostrum_tank');
    event.remove({ output: 'beyond_earth:calorite_tank' });
    event
        .shaped('beyond_earth:calorite_tank', ['ABA', 'BCB', 'ABA'], {
            A: 'beyond_earth:compressed_calorite',
            B: 'kubejs:steel_rod',
            C: 'beyond_earth:ostrum_tank'
        })
        .id('mbm2:calorite_tank');

    //Launch Pads
    event.remove({ output: 'beyond_earth:rocket_launch_pad' });
    event.recipes.botania.runic_altar(
        '3x beyond_earth:rocket_launch_pad',
        [
            'botania:rune_mana',
            'engineersdecor:rebar_concrete',
            'engineersdecor:rebar_concrete',
            'engineersdecor:rebar_concrete'
        ],
        5000
    );
});
