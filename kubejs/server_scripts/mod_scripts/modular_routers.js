onEvent('recipes', event => {
//Recipe Removal
var router_removal = [
    'modularrouters:activator_module',
    'modularrouters:breaker_module',
    'modularrouters:energy_output_module',
    'modularrouters:extruder_module_2',
    'modularrouters:fluid_module',
    'modularrouters:fluid_module_2_x4',
    'modularrouters:fluid_module_2',
    'modularrouters:placer_module',
    'modularrouters:puller_module_1',
    'modularrouters:puller_module_2_x4',
    'modularrouters:puller_module_2',
    'modularrouters:sender_module_1',
    'modularrouters:sender_module_2_x4',
    'modularrouters:sender_module_2',
    'modularrouters:sender_module_3',
    'modularrouters:range_up_augment',
    'modularrouters:range_down_augment'
]
router_removal.forEach(item => {
    event.remove({id: item})
})

//Base Components
event.remove({output: '3x modularrouters:blank_module'})
event.shaped('3x modularrouters:blank_module', [' A ','ABA','CCC'], {A: 'kubejs:osmium_plating',B: 'laserio:overclocker_card',C: 'kubejs:damascus_steel_gear'})
event.remove({output: '2x modularrouters:blank_upgrade'})
event.shaped('2x modularrouters:blank_upgrade', ['ABB',' CB','  A'], {A: 'kubejs:damascus_steel_gear',B: 'kubejs:osmium_plating',C: 'laserio:overclocker_card'})
event.remove({output: '2x modularrouters:modular_router'})
event.shaped('2x modularrouters:modular_router', ['ABA','CDC','ABA'], {A: 'modularrouters:augment_core',B: 'kubejs:tier_2_electrical_alloy_wire_coil',C: 'kubejs:tier_2_mechanical_alloy_robot_arm',D: 'laserio:laser_node'})
event.remove({output: '2x modularrouters:augment_core'})
event.shapeless('2x modularrouters:augment_core', ['modularrouters:blank_module','modularrouters:blank_upgrade','modularrouters:blank_module'])

//Modules
event.replaceInput({id: 'modularrouters:flinger_module'}, 'gunpowder', 'create:weighted_ejector')
event.replaceInput({id: 'modularrouters:detector_module'}, 'minecraft:comparator', 'laserio:card_redstone')
event.replaceInput({id: 'modularrouters:sender_module_1_alt'}, 'minecraft:piston', 'laserio:card_item')

event.shapeless(Item.of('modularrouters:puller_module_1', '{modularrouters:{Direction:"NONE",ModuleFilter:{}}}'), [Item.of('modularrouters:sender_module_1', '{modularrouters:{Direction:"NONE",ModuleFilter:{}}}')])
event.shapeless(Item.of('modularrouters:sender_module_1', '{modularrouters:{Direction:"NONE",ModuleFilter:{}}}'), [Item.of('modularrouters:puller_module_1', '{modularrouters:{Direction:"NONE",ModuleFilter:{}}}')])
event.shapeless(Item.of('modularrouters:sender_module_2', '{modularrouters:{ModuleFilter:{}}}'), [Item.of('modularrouters:sender_module_1', '{modularrouters:{Direction:"NONE",ModuleFilter:{}}}'),Item.of('industrialforegoing:range_addon7', '{TitaniumAugment:{Range:7.0f}}'),Item.of('industrialforegoing:range_addon7', '{TitaniumAugment:{Range:7.0f}}')])
event.shapeless(Item.of('modularrouters:puller_module_2', '{modularrouters:{ModuleFilter:{}}}'), [Item.of('modularrouters:sender_module_2', '{modularrouters:{ModuleFilter:{}}}')])
event.shapeless(Item.of('modularrouters:sender_module_2', '{modularrouters:{ModuleFilter:{}}}'), [Item.of('modularrouters:puller_module_2', '{modularrouters:{ModuleFilter:{}}}')])
event.shapeless(Item.of('modularrouters:sender_module_3', '{modularrouters:{ModuleFilter:{}}}'), [Item.of('modularrouters:sender_module_2', '{modularrouters:{ModuleFilter:{}}}'),'enderstorage:ender_chest'])
event.shapeless('modularrouters:range_up_augment', ['modularrouters:augment_core','thermal:area_radius_augment'])
event.remove({output: 'modularrouters:regulator_augment'})
event.shapeless('modularrouters:regulator_augment', ['modularrouters:augment_core',Item.of('laserio:filter_count', '{allowList:1b,compareNBT:0b,counts:[{Count:0,MBAmount:0,Slot:0},{Count:0,MBAmount:0,Slot:1},{Count:0,MBAmount:0,Slot:2},{Count:0,MBAmount:0,Slot:3},{Count:0,MBAmount:0,Slot:4},{Count:0,MBAmount:0,Slot:5},{Count:0,MBAmount:0,Slot:6},{Count:0,MBAmount:0,Slot:7},{Count:0,MBAmount:0,Slot:8},{Count:0,MBAmount:0,Slot:9},{Count:0,MBAmount:0,Slot:10},{Count:0,MBAmount:0,Slot:11},{Count:0,MBAmount:0,Slot:12},{Count:0,MBAmount:0,Slot:13},{Count:0,MBAmount:0,Slot:14}],inv:{Items:[],Size:15}}')])
event.remove({output: 'modularrouters:redstone_augment'})
event.shapeless('modularrouters:redstone_augment', ['modularrouters:augment_core','laserio:card_redstone'])
event.remove({output: 'modularrouters:energy_upgrade'})
event.shaped('modularrouters:energy_upgrade', [' A ','BCB',' A '], {A: 'laserio:card_energy',B: 'rftoolspower:dimensionalcell',C: 'modularrouters:blank_upgrade'})
event.shaped(Item.of('modularrouters:energy_output_module', '{modularrouters:{Direction:"NONE",ModuleFilter:{}}}'), ['ABA','BCB','ADA'], {A: 'powah:energy_cable_niotic',B: 'powah:capacitor_niotic',C: 'modularrouters:blank_module',D: 'laserio:card_energy'})
event.remove({output: '2x modularrouters:speed_upgrade'})
event.shaped('2x modularrouters:speed_upgrade', [' A ','ABA',' A '], {A: 'ae2:speed_card',B: 'modularrouters:blank_upgrade'})
event.shaped(Item.of('modularrouters:placer_module', '{modularrouters:{Direction:"NONE",ModuleFilter:{}}}'), [' A ','BCB',' D '], {A: 'naturesaura:placer',B: 'engineersdecor:factory_placer',C: 'modularrouters:blank_module',D: 'integratedtunnels:part_exporter_world_block'})
event.remove({output: 'modularrouters:bulk_item_filter'})
event.shapeless('modularrouters:bulk_item_filter', ['modularrouters:blank_module',Item.of('laserio:filter_basic', '{allowList:1b,compareNBT:0b,inv:{Items:[],Size:15}}')])
event.shaped(Item.of('modularrouters:fluid_module', '{modularrouters:{Direction:"NONE",FluidDir:0b,MaxTransfer:1000,ModuleFilter:{}}}'), [' A ','BCB',' D '], {A: 'immersiveengineering:fluid_pump',B: 'pipez:fluid_pipe',C: 'modularrouters:blank_module',D: 'laserio:card_fluid'})
event.shaped(Item.of('modularrouters:fluid_module_2', '{modularrouters:{FluidDir:0b,MaxTransfer:1000,ModuleFilter:{}}}'), ['AB ','   ','   '], {A: Item.of('modularrouters:fluid_module', '{modularrouters:{Direction:"NONE",FluidDir:0b,MaxTransfer:1000,ModuleFilter:{}}}'),B: Item.of('industrialforegoing:range_addon11', '{TitaniumAugment:{Range:11.0f}}')})
event.remove({output: 'modularrouters:fluid_upgrade'})
event.shaped('modularrouters:fluid_upgrade', [' A ','BCB',' A '], {A: 'immersiveengineering:fluid_pipe',B: 'pneumaticcraft:small_tank',C: 'modularrouters:blank_upgrade'})
event.remove({output: 'modularrouters:stack_upgrade'})
event.shapeless('modularrouters:stack_upgrade', ['modularrouters:blank_upgrade','laserio:overclocker_card','laserio:overclocker_card','laserio:overclocker_card','laserio:overclocker_card'])
event.shaped(Item.of('modularrouters:breaker_module', '{modularrouters:{Direction:"NONE",ModuleFilter:{}}}'), [' A ','BCB',' D '], {A: 'create:mechanical_drill',B: 'engineersdecor:small_block_breaker',C: 'modularrouters:blank_module',D: 'integratedtunnels:part_importer_world_block'})
event.shaped(Item.of('modularrouters:activator_module', '{modularrouters:{Direction:"NONE",ModuleFilter:{}}}'), ['ABA','CDC','AEA'], {A: 'kubejs:red_alloy_spool',B: 'create:analog_lever',C: 'minecraft:dropper',D: 'modularrouters:blank_module',E: 'integratedtunnels:part_player_simulator'})
event.remove({output: Item.of('modularrouters:extruder_module_2', '{modularrouters:{Direction:"NONE",ModuleFilter:{}}}')})
event.shapeless(Item.of('modularrouters:extruder_module_2', '{modularrouters:{Direction:"NONE",ModuleFilter:{}}}'), [Item.of('modularrouters:extruder_module_1', '{modularrouters:{Direction:"NONE",ModuleFilter:{}}}'),'modularrouters:pushing_augment','modularrouters:pushing_augment','modularrouters:pushing_augment','modularrouters:pushing_augment'])
})