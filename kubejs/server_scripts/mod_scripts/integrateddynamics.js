onEvent('recipes', event => {
	
event.remove({id:/integrateddynamics:squeezer\/ore.*/})
event.remove({id:/integrateddynamics:mechanical_squeezer\/ore.*/})

//part_interface_item
event.remove({output: 'integratedtunnels:part_interface_item'})
event.shaped('2x integratedtunnels:part_interface_item', ['ABA','ACA','ABA'], {A: 'kubejs:crystalized_alloy_plating',B: 'integrateddynamics:cable',C: 'ae2:interface'}).id(`mbm2:crafting/part_interface_item`)

//part_interface_fluid
event.remove({output: 'integratedtunnels:part_interface_fluid'})
event.shaped('integratedtunnels:part_interface_fluid', [' A ','ABA',' A '], {A: 'pipez:fluid_pipe',B: 'integratedtunnels:part_interface_item'}).id(`mbm2:crafting/part_interface_fluid`)

//part_interface_energy
event.remove({output: 'integratedtunnels:part_interface_energy'})
event.shaped('integratedtunnels:part_interface_energy', [' A ','ABA',' A '], {A: 'pipez:energy_pipe',B: 'integratedtunnels:part_interface_item'}).id(`mbm2:crafting/part_interface_energy`)

//cable
event.remove({output: 'integrateddynamics:cable'})
event.shaped('3x integrateddynamics:cable', ['AAA','BCB','AAA'], {A: 'kubejs:illuminated_menril_plate',B: 'ae2:fluix_glass_cable',C: 'immersiveengineering:electron_tube'}).id(`mbm2:crafting/cable`)


});