var basicItems = [
    'unfired_clay_brick',
    'blank_rune',
    'silver_coil',
    'shifting_cube',
    'source_ingot',
    'source_nugget',
    'source_tube',
    'source_pearl',
    'blazing_redstone',
    'carbon_covered_iron',
    'sandy_brick',
    'sturdy_brick',
    //'unfired_coke_oven_brick',
    'coke_oven_brick',
    'steel_scraps',
    't1_blank_board',
    't1_circuit_board',
    't1_circuit',
    't2_blank_board',
    't2_circuit_board',
    't2_circuit',
    't3_blank_board',
    't3_circuit_board',
    't3_circuit',
    't4_blank_board',
    't4_circuit_board',
    't4_circuit',
    'energetic_blend',
    'glass_shard',
    //'water_filter',
    'quicksilver',
    'shaped_quartz',
    'blast_brick',
    'tough_brick',
    'captured_soul',
    'spirited_brick',
    'heated_brick',
    'reactive_blend',
    'deep_learner_base',
    'polymer_clay',
    'luminite_canister',
    'mesh',
    'zinc_mesh',
    'carbon_mesh',
    'activated_carbon_mesh',
    'standard_dyson_panel',
    'hull_panel_sand_cast',
    'unfinished_basic_control_circuit',
    'unfinished_advanced_control_circuit',
    'unfinished_elite_control_circuit',
    'unfinished_ultimate_control_circuit',
    'unfinished_logic_unit',
    'titanium_plated_obsidian',
    'bolt_mold',
    'ingot_mold',
    'resonating_dust',
    'charged_coil',
    'nature_gem',
    'chimerite_gem',
    'living_metal_seed',
    'metal_seed',
    'shaped_fluix_crystal',
    'dimensional_mote',
    'nether_shard',
    'nether_shard_west',
    'nether_shard_east',
    'nether_shard_south',
    'elemental_core',
    'asteroid_tier_1',
    'asteroid_chunk_tier_1',
    'asteroid_dust_tier_1',
    'asteroid_tier_2',
    'asteroid_chunk_tier_2',
    'asteroid_dust_tier_2',
    'asteroid_tier_3',
    'asteroid_chunk_tier_3',
    'asteroid_dust_tier_3',
    'blueprint_fragment',
    'asteroid_location_data_chip',
    'planet_location_data_chip',
    'blank_location_data_chip',
    'tracking_chip',
    'ripped_blueprint',
    'tech_widget',
    'magic_widget',
    'hypercoil',
    'mind_shard',
    'empty_request_chip',
    'raw_dimensional_wafer',
    'iridium_infused_wafer',
    'mechanical_component',
    'advanced_mechanical_component',
    'blaze_core',
    'amethyst_gate',
    'empty_cannister',
    'luminite_cannister',
    'mana_cannister',
    'aura_cannister',
    'source_cannister',
    'arcstone',
    'plasma_orb',
    'enriched_dimensional_shard'
];

global.transitionalItems = ['circuit_board', 'light_bulb', 'component_iron', 'component_steel'];
global.transitionalItemsTexture = [
    'basic_capacitor',
    'component_electronic_adv',
    'component_electronic',
    'electron_tube',
    'titanium_plated_obsidian',
    'printed_calculation_processor',
    'calculation_processor',
    'printed_logic_processor',
    'logic_processor',
    'printed_engineering_processor',
    'engineering_processor',
    'printed_silicon'
];

global.batteryItems = [
    'small_battery',
    'large_battery',
    'energy_crystal',
    'energy_orb',
    'lapatron_crystal',
    'lapatron_orb'
];
global.batteryStorage = [
    10000, //10k
    100000, //100k
    1000000, //1m
    100000000, //100m
    10000000000, //100b
    1000000000000 //1T
];

var nameUpperWSpace = (name) => {
    if (name.includes('_')) {
        let partOne = name.split('_')[0];
        let partTwo = name.split('_')[1];
        let partThree = name.split('_')[2];
        if (partThree != null) {
            // we got a three word name
            let fullName =
                partOne.charAt(0).toUpperCase() +
                partOne.slice(1) +
                ' ' +
                partTwo.charAt(0).toUpperCase() +
                partTwo.slice(1) +
                ' ' +
                partThree.charAt(0).toUpperCase() +
                partThree.slice(1);
            return fullName;
        } else {
            // we got a two word name
            let fullName =
                partOne.charAt(0).toUpperCase() +
                partOne.slice(1) +
                ' ' +
                partTwo.charAt(0).toUpperCase() +
                partTwo.slice(1);
            return fullName;
        }
    } else {
        let fullName = name.charAt(0).toUpperCase() + name.slice(1);
        return fullName;
    }
};

onEvent('item.registry', (event) => {
    basicItems.forEach((item) => {
        event.create(item);
    });
    global.batteryItems.forEach((item) => {
        event
            .create(`${item}_empty`)
            .displayName(nameUpperWSpace(item) + ' (Empty)')
            .texture(`kubejs:item/battery/${item}_empty`);
        event
            .create(`${item}_full`)
            .displayName(nameUpperWSpace(item) + ' (Full)')
            .texture(`kubejs:item/battery/${item}_full`); //.unstackable()
    });
    global.transitionalItems.forEach((item) => {
        event
            .create(`incomplete_${item}`, 'create:sequenced_assembly')
            .texture('kubejs:item/package');
    });
    global.transitionalItemsTexture.forEach((item) => {
        event
            .create(`incomplete_${item}`, 'create:sequenced_assembly')
            .texture(`kubejs:item/incomplete_${item}`);
    });
    event.create(`blank_mold`, 'create:sequenced_assembly');
    event.create(`partially_folded_damascus_steel`, 'create:sequenced_assembly');

    event.create('charcoal_chunk').burnTime(200);
    event.create('coal_chunk').burnTime(200);

    event.create(`pure_thermogenic_blend`).color(0, 0xf06330).texture(`kubejs:item/ore/pure`);
    event.create(`crushed_thermogenic_blend`).color(0, 0xf06330).texture(`kubejs:item/ore/crushed`);
    event
        .create(`fine_thermogenic_blend_dust`)
        .color(0, 0xf06330)
        .texture(`kubejs:item/ore/fine_dust`);
    event
        .create(`thermogenic_blend_chunk`)
        .color(0, 0xf06330)
        .texture(`kubejs:item/ore/chunk`)
        .parentModel(`kubejs:item/ore/chunk`);
    event
        .create(`thermogenic_blend_crystal`)
        .color(0, 0xf06330)
        .texture(`kubejs:item/ore/crystal`)
        .parentModel(`kubejs:item/ore/crystal`);

    event.create(`pure_thermolytic_blend`).color(0, 0x42f5da).texture(`kubejs:item/ore/pure`);
    event.create(`crushed_thermolytic_blend`).color(0, 0x42f5da).texture(`kubejs:item/ore/crushed`);
    event
        .create(`fine_thermolytic_blend_dust`)
        .color(0, 0x42f5da)
        .texture(`kubejs:item/ore/fine_dust`);
    event
        .create(`thermolytic_blend_chunk`)
        .color(0, 0x42f5da)
        .texture(`kubejs:item/ore/chunk`)
        .parentModel(`kubejs:item/ore/chunk`);
    event
        .create(`thermolytic_blend_crystal`)
        .color(0, 0x42f5da)
        .texture(`kubejs:item/ore/crystal`)
        .parentModel(`kubejs:item/ore/crystal`);

    event
        .create(`solar_chip_blue`)
        .displayName('Dyson Tracking Chip (1)')
        .texture(`kubejs:item/solar_chip_blue`);
    event
        .create(`solar_chip_red`)
        .displayName('Dyson Tracking Chip (8)')
        .texture(`kubejs:item/solar_chip_red`);
    event
        .create(`solar_chip_green`)
        .displayName('Dyson Tracking Chip (64)')
        .texture(`kubejs:item/solar_chip_green`);
    event
        .create(`solar_chip_purple`)
        .displayName('Dyson Tracking Chip (512)')
        .texture(`kubejs:item/solar_chip_purple`);

    event.create(`catalyst_basic`).displayName('Basic Ore Catalyst');
    event.create(`catalyst_gem`).displayName('Crystal Ore Catalyst');
    event.create(`catalyst_magic`).displayName('Magic Ore Catalyst');
    event.create(`catalyst_empty`).displayName('Empty Catalyst Housing');

    event.create(`water_filter`).unstackable();

    event.create('bottled_magic').glow(true);
    event.create('gavel_polish').unstackable().maxDamage(4);

    event.create('assembly_rune').displayName('Rune of Assembly').rarity('rare');

    event.create('galactic_standard_currency').displayName('§3Galactic Standard Currency');

    event.create('dimensional_alloy').displayName('§bDimensional Alloy');
    event.create('extra_dimensional_alloy').displayName('§dExtra Dimensional Alloy');

    event.create('sentient_processor').displayName('§bSentient Processor');

    event.create('reinforced_hdpe_sheet').displayName('§7Reinforced HDPE Sheet');

    event.create('quantum_processor').rarity('epic').displayName('§5Quantum Processor');

    event.create('blank_ai_chip').displayName('Blank AI Chip');
    event.create('ai_chip').displayName('§eAI Chip');
    event.create('hostile_ai_chip').displayName('§cHostile AI Chip');
    event.create('advanced_ai_chip').displayName('§bAdvanced AI Chip');

    event.create('blank_cosmic_blueprint').glow(true).rarity('epic');
    event.create('world_shaper_blueprint').glow(true).rarity('epic');
    event.create('scarab_of_hours').glow(true).rarity('epic');
    event.create('elemental_star').glow(true).rarity('epic');

    global.dronesTypes = [
        'harvester',
        'scout',
        'fighter',
        //'cargo',
        'trade'
    ];
    global.dronesTypes.forEach((type) => {
        event.create(`${type}_drone`);
        event
            .create(`${type}_drone_active`)
            .displayName(nameUpperWSpace(type) + ' Drone §a[Active]');
    });
    event.create('cargo_drone').displayName('Cargo Drone §b[Empty]');

    global.planetTypes = ['green', 'red', 'blue'];
    global.planetTypes.forEach((type) => {
        event.create(`planet_${type}`).displayName(nameUpperWSpace(type) + ' Planet');
    });

    global.droneTrades = [
        //{
        //  'name': 'kubejs:tech_widget',
        //  'amount': 1,
        //  'pay': 10,
        //  'planet': ['green','blue'],
        //},
        {
            name: 'kubejs:magic_widget',
            amount: 1,
            pay: 75,
            planet: ['blue']
        },
        {
            name: 'naturesaura:token_grief',
            amount: 1,
            pay: 50,
            planet: ['blue']
        },
        {
            name: 'botania:gaia_ingot',
            amount: 1,
            pay: 50,
            planet: ['green']
        },
        {
            name: 'botania:terraform_rod',
            amount: 1,
            pay: 50,
            planet: ['red']
        },
        {
            name: 'botania:overgrowth_seed',
            amount: 1,
            pay: 100,
            planet: ['red']
        },
        {
            name: 'elementalcraft:pure_element_holder',
            amount: 1,
            pay: 100,
            planet: ['blue']
        },
        {
            name: 'kubejs:assembly_rune',
            amount: 2,
            pay: 50,
            planet: ['green']
        },
        {
            name: 'kubejs:nature_gem',
            amount: 10,
            pay: 100,
            planet: ['red']
        },
        {
            name: 'artifacts:bunny_hoppers',
            amount: 1,
            pay: 50,
            planet: ['red']
        },
        {
            name: 'ars_nouveau:amethyst_golem_charm',
            path: 'items/',
            amount: 1,
            pay: 50,
            planet: ['green']
        }
    ];

    global.droneTrades.forEach((item) => {
        let modName = item.name.split(':')[0];
        let itemName = item.name.split(':')[1];
        if (item.path != null) {
            event
                .create(`trade_${itemName}`)
                .displayName(nameUpperWSpace(itemName) + ' Trade')
                .texture(`${modName}:${item.path}${itemName}`)
                .parentModel(`kubejs:item/trade`);
        } else {
            event
                .create(`trade_${itemName}`)
                .displayName(nameUpperWSpace(itemName) + ' Trade')
                .texture(`${modName}:item/${itemName}`)
                .parentModel(`kubejs:item/trade`);
        }

        event
            .create(`cargo_drone_${itemName}`)
            .displayName('Cargo Drone §6[' + nameUpperWSpace(itemName) + ']')
            .texture(`kubejs:item/cargo_drone_full`);
        event
            .create(`cargo_drone_${itemName}_active`)
            .displayName('Cargo Drone §e[' + nameUpperWSpace(itemName) + ']')
            .texture(`kubejs:item/cargo_drone_full_active`);
    });

    global.droneRequests = [
        {
            name: 'kubejs:mind_shard',
            input: 'kubejs:sentient_processor',
            amount: 4,
            cost: 600,
            planet: ['green']
        },
        {
            name: 'kubejs:extra_dimensional_alloy',
            input: 'kubejs:dimensional_alloy',
            amount: 4,
            cost: 200,
            planet: ['blue']
        },
        {
            name: 'kubejs:hypercoil',
            input: 'kubejs:vibranium_dual_coil',
            amount: 1,
            cost: 1000,
            planet: ['green']
        },
        {
            name: 'kubejs:quantum_processor',
            input: 'mekanism:ultimate_control_circuit',
            amount: 1,
            cost: 500,
            planet: ['red']
        },
        {
            name: 'kubejs:empty_cannister',
            input: 'ae2:portable_fluid_cell_4k',
            amount: 1,
            cost: 100,
            planet: ['blue']
        },
        {
            name: 'kubejs:scarab_of_hours',
            input: 'reliquary:chelicerae',
            amount: 1,
            cost: 10000,
            planet: ['red']
        }
    ];
    global.droneRequests.forEach((item) => {
        let modName = item.name.split(':')[0];
        let itemName = item.name.split(':')[1];
        event
            .create(`request_${itemName}`)
            .displayName(nameUpperWSpace(itemName) + ' Request')
            .texture(`${modName}:item/${itemName}`)
            .parentModel(`kubejs:item/request`);
        //event.create(`cargo_drone_${itemName}`).displayName('Cargo Drone §3[' + nameUpperWSpace(itemName)+']').texture(`kubejs:item/cargo_drone_empty`)
        //event.create(`cargo_drone_${itemName}_active`).displayName('Cargo Drone §b[' + nameUpperWSpace(itemName)+']').texture(`kubejs:item/cargo_drone_active`)
    });
});
