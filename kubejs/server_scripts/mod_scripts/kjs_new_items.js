onEvent('recipes', event => {
	
	//Small Battery
	event.shaped('kubejs:small_battery_empty', [
		'TBT',
		'LCL',
		'LCL'
	  ], {
		T: '#forge:plates/tin',
		L: '#forge:plates/lead',
		B: 'kubejs:reactive_blend',
		C: 'powah:capacitor_hardened'
	  }).id("mbm2:small_battery")

	// Large Battery 
	event.shaped('kubejs:large_battery_empty', ['AAA','BCB','BDB'], {A: 'kubejs:stainless_steel_plate',B: '#forge:platings/advanced_battery_alloy', C: 'kubejs:small_battery_empty',D: 'kubejs:tier_1_electrical_alloy_wire_coil'}).id("mbm2:large_battery")

		//energy_crystal_empty
		event.shaped('kubejs:energy_crystal_empty', [' A ','BCB',' D '], {A: 'kubejs:large_battery_full',B: 'extendedcrafting:basic_catalyst',C: 'botania:mana_diamond',D: 'immersiveengineering:redstone_acid_bucket'}).id('mbm2:energy_crystal_empty')

		//energy_orb_empty
		event.shaped('kubejs:energy_orb_empty', ['ABA','BCB','ABA'], {A: 'extendedcrafting:advanced_catalyst',B: 'kubejs:energy_crystal_empty',C: 'elementalcraft:purecrystal'}).id('mbm2:energy_orb_empty')

		//lapatron_crystal_empty
		event.shaped('kubejs:lapatron_crystal_empty', ['ABA','BCB','ABA'], {A: 'extendedcrafting:elite_catalyst',B: 'kubejs:energy_orb_empty',C: 'forbidden_arcanus:dark_nether_star_block'}).id('mbm2:lapatron_crystal_empty')

		//lapatron_orb_empty
		event.shaped('kubejs:lapatron_orb_empty', ['ABA','BCB','ABA'], {A: 'extendedcrafting:ultimate_catalyst',B: 'kubejs:lapatron_crystal_empty',C: 'ae2additions:cell_component_1kk'}).id('mbm2:lapatron_orb_empty')

		//ai_chip
		event.shaped('kubejs:ai_chip', ['ABA','BCB','ABA'], {A: 'hostilenetworks:empty_prediction',B: 'laserio:logic_chip',C: 'pneumaticcraft:unassembled_pcb'}).id('mbm2:ai_chip')
		
});