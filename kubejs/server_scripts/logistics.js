onEvent('recipes', event => {





	//Pipez Item Pipe
	event.remove({output: 'pipez:item_pipe'})
  	event.shaped('4x pipez:item_pipe', [
		'PPP',
		'BSB',
		'PPP'
  	], {
		P: '#forge:plates/invar',
		B: 'immersiveengineering:conveyor_basic',
		S: 'thermal:servo_attachment'
  	}).id('mbm2:pipez/item_pipe')

	//Pipez Fluid Pipe
	event.remove({output: 'pipez:fluid_pipe'})
  	event.shaped('4x pipez:fluid_pipe', [
		'PPP',
		'BSB',
		'PPP'
  	], {
		P: '#forge:plates/duralumin',
		B: 'thermal:fluid_duct',
		S: 'thermal:servo_attachment'
  	}).id('mbm2:pipez/fluid_pipe')

	//Pipez Energy Pipe
	event.remove({output: 'pipez:energy_pipe'})
  	event.shaped('4x pipez:energy_pipe', [
		'PPP',
		'BSB',
		'PPP'
  	], {
		P: '#forge:plates/reinforced_electrum',
		B: '#forge:wire_coils/tier_1_electrical_alloy',
		S: 'thermal:servo_attachment'
  	}).id('mbm2:pipez/energy_pipe')

	//Pipez Gas Pipe
	event.remove({output: 'pipez:gas_pipe'})
  	event.shaped('4x pipez:gas_pipe', [
		'PPP',
		'BSB',
		'PPP'
  	], {
		P: '#forge:plates/chemically_inert_alloy',
		B: 'mekanism:alloy_infused',
		S: 'mekanism:basic_chemical_tank'
  	}).id('mbm2:pipez/gas_pipe')

	//basic_upgrade
	  event.remove({output: 'pipez:basic_upgrade'})
	  event.shaped('pipez:basic_upgrade', [' AB','ACA','BA '], {A: 'thermal:iron_plate',B: 'kubejs:energetic_blend',C: 'kubejs:red_alloy_gear'}).id('mbm2:pipez/basic_upgrade')

	//improved_upgrade
	  event.remove({output: 'pipez:improved_upgrade'})
	  event.shaped('pipez:improved_upgrade', [' AB','ACA','BA '], {A: 'kubejs:tier_1_mechanical_alloy_gear',B: 'create:precision_mechanism',C: 'pipez:basic_upgrade'}).id('mbm2:pipez/improved_upgrade')

	//advanced_upgrade
	  event.remove({output: 'pipez:advanced_upgrade'})
	  event.shaped('pipez:advanced_upgrade', [' AB','ACA','BA '], {A: 'kubejs:industrial_alloy_component',B: 'thermal:diamond_gear',C: 'pipez:improved_upgrade'}).id('mbm2:pipez/advanced_upgrade')

	//ultimate_upgrade
	  event.remove({output: 'pipez:ultimate_upgrade'})
	  event.shaped('pipez:ultimate_upgrade', [' AB','ACA','BA '], {A: 'kubejs:nethersteel_ingot',B: 'pneumaticcraft:pneumatic_cylinder',C: 'pipez:advanced_upgrade'}).id('mbm2:pipez/ultimate_upgrade')

	//basic_logistical_transporter
	  event.remove({output: '4x mekanism:basic_logistical_transporter'})
	  event.shaped('4x mekanism:basic_logistical_transporter', ['AAA','BCB','AAA'], {A: 'kubejs:steel_plate',B: 'pipez:item_pipe',C: 'mekanism:basic_control_circuit'}).id('mbm2:mekanism/basic_logistical_transporter')

	//basic_mechanical_pipe
	  event.remove({output: '4x mekanism:basic_mechanical_pipe'})
	  event.shaped('4x mekanism:basic_mechanical_pipe', ['AAA','BCB','AAA'], {A: 'kubejs:steel_plate',B: 'pipez:fluid_pipe',C: 'mekanism:basic_control_circuit'}).id('mbm2:mekanism/basic_mechanical_pipe')

	//basic_universal_cable
	  event.remove({output: '4x mekanism:basic_universal_cable'})
	  event.shaped('4x mekanism:basic_universal_cable', ['AAA','BCB','AAA'], {A: 'kubejs:steel_plate',B: 'pipez:energy_pipe',C: 'mekanism:basic_control_circuit'}).id('mbm2:mekanism/basic_universal_cable')

	//basic_pressurized_tube
	  event.remove({output: '4x mekanism:basic_pressurized_tube'})
	  event.shaped('4x mekanism:basic_pressurized_tube', ['AAA','BCB','AAA'], {A: 'kubejs:steel_plate',B: 'pipez:gas_pipe',C: 'mekanism:basic_control_circuit'}).id('mbm2:mekanism/basic_pressurized_tube')

	  //fluid_duct
	  event.remove({output: '2x thermal:fluid_duct'})
	  event.shaped('2x thermal:fluid_duct', ['ABA','   ','ABA'], {A: 'thermal:bronze_plate',B: 'thermal:lead_plate'}).id('mbm2:thermal/fluid_duct')

	  //fluid_duct_windowed
	  event.remove({output: '4x thermal:fluid_duct_windowed'})
	  event.shaped('4x thermal:fluid_duct_windowed', [' A ','ABA',' A '], {A: 'thermal:fluid_duct',B: 'thermal:obsidian_glass'}).id('mbm2:thermal/fluid_duct_windowed')


	//Temp recipes
	let tiers =  [
		'basic',
		'improved',
		'advanced',
		'elite',
		'ultimate',
	]
	let types =  [
		'item',
		'fluid',
		'energy',
	]
	
	types.forEach(type => {
		tiers.forEach((tier, index) => {
			if(Item.of(`refinedpipes:${tier}_${type}_pipe`) != null){
				event.remove({output: `refinedpipes:${tier}_${type}_pipe`})
				event.shapeless(`${(index+1)*2}x pipez:${type}_pipe`, [`refinedpipes:${tier}_${type}_pipe`]).id(`mbm2:temp/${tier}_${type}_pipe`)
			}
		});
	});



	
  //Entangled Block
	event.remove({output: 'entangled:block'})
  	event.shaped('entangled:block', ['ABA','CDC','ABA'], {A: 'kubejs:titanium_plated_obsidian',B: 'mekanism:teleportation_core',C: 'kubejs:enderium_hull_panel',D: 'enderstorage:ender_chest'})
  

});