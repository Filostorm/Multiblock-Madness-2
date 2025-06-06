onEvent('tags.items', (event) => {
    event.add('mbm2:laserio/card', 'laserio:card_item');
    event.add('mbm2:laserio/card', 'laserio:card_fluid');
    event.add('mbm2:laserio/card', 'laserio:card_energy');
    event.add('mbm2:laserio/card', 'laserio:card_redstone');
    event.add('mbm2:laserio/filter', 'laserio:filter_basic');
    event.add('mbm2:laserio/filter', 'laserio:filter_count');
    event.add('mbm2:laserio/filter', 'laserio:filter_tag');
    event.add('mbm2:laserio/filter', 'laserio:filter_mod');
});
onEvent('recipes', (event) => {
    //Laserio Logic Chip
    event.remove({ id: 'laserio:logic_chip_raw' });
    event
        .shaped('4x laserio:logic_chip_raw', ['ABA', 'CDC', 'ABA'], {
            A: 'pneumaticcraft:capacitor',
            B: 'pneumaticcraft:transistor',
            C: 'pneumaticcraft:logistics_core',
            D: 'immersiveengineering:circuit_board'
        })
        .id('mbm2:laserio_chip_raw');

    //Laserio Laser Connector
    event.remove({ id: 'laserio:laser_connector' });
    event
        .shaped('laserio:laser_connector', [' A ', 'BCB', 'DDD'], {
            A: '#forge:glass',
            B: 'extendedcrafting:redstone_ingot',
            C: 'laserio:logic_chip',
            D: 'kubejs:magnesium_plating'
        })
        .id('mbm2:laserio_connector');

    //Laserio Laser Node
    event.remove({ id: 'laserio:laser_node' });
    event
        .shaped('laserio:laser_node', ['ABA', 'BCB', 'ABA'], {
            A: 'kubejs:magnesium_plating',
            B: 'industrialforegoing:laser_lens14',
            C: 'laserio:laser_connector'
        })
        .id('mbm2:laserio_node');

    //Laserio Card Overclocker
    event.remove({ id: 'laserio:overclocker_card' });
    event
        .shaped('laserio:overclocker_card', [' A ', 'BCB', 'AAA'], {
            A: 'elementalcraft:swift_alloy_ingot',
            B: 'kubejs:red_alloy_wire',
            C: 'laserio:logic_chip'
        })
        .id('mbm2:laserio_card_overclocker');

    //Laserio Node Overclocker
    event.remove({ id: 'laserio:overclocker_node' });
    event
        .shaped('laserio:overclocker_node', [' A ', 'BCB', 'AAA'], {
            A: '#forge:ingots/cadmium',
            B: 'kubejs:red_alloy_wire',
            C: 'laserio:logic_chip'
        })
        .id('mbm2:laserio_node_overclocker');

    //Laserio Filter
    event.remove({
        output: Item.of(
            'laserio:filter_basic',
            4,
            '{allowList:1b,compareNBT:0b,inv:{Items:[],Size:15}}'
        )
    });
    event
        .shaped(
            Item.of(
                'laserio:filter_basic',
                4,
                '{allowList:1b,compareNBT:0b,inv:{Items:[],Size:15}}'
            ),
            ['ABA', 'BCB', 'ABA'],
            {
                A: 'thermal:item_filter_augment',
                B: 'thermal:white_rockwool',
                C: 'laserio:logic_chip'
            }
        )
        .id('mbm2:laserio_filter_basic');

    //Laserio Cards
    event.remove({ output: 'laserio:card_fluid' });
    event
        .shaped('laserio:card_fluid', ['ABA', 'ACA', 'DED'], {
            A: 'pipez:fluid_pipe',
            B: 'pipez:improved_upgrade',
            C: 'laserio:logic_chip',
            D: 'thermal:servo_attachment',
            E: 'kubejs:tier_1_electrical_alloy_wire_coil'
        })
        .id('mbm2:laserio_card_fluid');
    event.remove({ output: 'laserio:card_energy' });
    event
        .shaped('laserio:card_energy', [' A ', 'ABA', 'CDC'], {
            A: 'powah:energy_cable_blazing',
            B: 'laserio:logic_chip',
            C: 'thermal:energy_limiter_attachment',
            D: 'kubejs:tier_1_electrical_alloy_wire_coil'
        })
        .id('mbm2:laserio_card_energy');
    event.remove({ output: 'laserio:card_item' });
    event
        .shaped('laserio:card_item', ['ABA', 'ACA', 'DED'], {
            A: 'pipez:item_pipe',
            B: 'pipez:improved_upgrade',
            C: 'laserio:logic_chip',
            D: 'thermal:servo_attachment',
            E: 'kubejs:tier_1_electrical_alloy_wire_coil'
        })
        .id('mbm2:laserio_card_item');
    event.remove({ output: 'laserio:card_redstone' });
    event
        .shaped('laserio:card_redstone', [' A ', 'ABA', 'CDC'], {
            A: 'kubejs:red_alloy_spool',
            B: 'laserio:logic_chip',
            C: 'thermal:rs_control_augment',
            D: 'kubejs:tier_1_electrical_alloy_wire_coil'
        })
        .id('mbm2:laserio_card_redstone');
});
