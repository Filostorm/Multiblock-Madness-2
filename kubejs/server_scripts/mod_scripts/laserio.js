
onEvent('recipes', event => {

    //Laserio Logic Chip
    event.remove({id: 'laserio:logic_chip_raw'})
    event.shaped('4x laserio:logic_chip_raw', ['ABA','CDC','ABA'], {A: 'pneumaticcraft:capacitor',B: 'pneumaticcraft:transistor',C: 'pneumaticcraft:logistics_core',D: 'immersiveengineering:circuit_board'}).id("mbm2:laserio_chip_raw")
    
    //Laserio Laser Connector
    event.remove({id: 'laserio:laser_connector'})
    event.shaped('laserio:laser_connector', [' A ','BCB','DDD'], {A: '#forge:glass',B: 'extendedcrafting:redstone_ingot',C: 'laserio:logic_chip',D: 'kubejs:magnesium_plating'}).id("mbm2:laserio_connector")

    //Laserio Laser Node
    event.remove({id: 'laserio:laser_node'})
    event.shaped('laserio:laser_node', ['ABA','BCB','ABA'], {A: 'kubejs:magnesium_plating',B: 'industrialforegoing:laser_lens14',C: 'laserio:laser_connector'}).id("mbm2:laserio_node")

    //Laserio Card Overclocker
    event.remove({id: 'laserio:overclocker_card'})
    event.shaped('laserio:overclocker_card', [' A ','BCB','AAA'], {A: 'elementalcraft:swift_alloy_ingot',B: 'kubejs:red_alloy_wire',C: 'laserio:logic_chip'}).id("mbm2:laserio_card_overclocker")

    //laserio Node Overclocker
    event.remove({id: 'laserio:overclocker_node'})
    event.shaped('laserio:overclocker_node', [' A ','BCB','AAA'], {A: 'allomancy:cadmium_ingot',B: 'kubejs:red_alloy_wire',C: 'laserio:logic_chip'})
});