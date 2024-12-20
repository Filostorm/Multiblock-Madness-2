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
		event.shaped('kubejs:energy_orb_empty', ['ABA','BCB','ABA'], {A: 'extendedcrafting:elite_catalyst',B: 'kubejs:energy_crystal_empty',C: 'elementalcraft:purecrystal'}).id('mbm2:energy_orb_empty')

		//lapatron_crystal_empty
		event.shaped('kubejs:lapatron_crystal_empty', ['ABA','BCB','ABA'], {A: 'extendedcrafting:ultimate_catalyst',B: 'kubejs:energy_orb_empty',C: 'forbidden_arcanus:dark_nether_star_block'}).id('mbm2:lapatron_crystal_empty')

		//lapatron_orb_empty
		event.shaped('kubejs:lapatron_orb_empty', ['ABA','BCB','ABA'], {A: 'extendedcrafting:crystaltine_catalyst',B: 'kubejs:lapatron_crystal_empty',C: 'ae2additions:cell_component_1kkk_1th'}).id('mbm2:lapatron_orb_empty')

		//blank AI chip
		event.shaped('kubejs:ai_chip', ['ABA','BCB','ABA'], {A: 'kubejs:reinforced_hdpe_sheet',B: 'kubejs:tier_3_electrical_alloy_wire',C: 'pneumaticcraft:unassembled_pcb'}).id('mbm2:blank_ai_chip')
		
		//ai_chip
		event.shaped('kubejs:ai_chip', ['ABA','BCB','ABA'], {A: 'hostilenetworks:empty_prediction',B: 'laserio:logic_chip',C: 'kubejs:blank_ai_chip'}).id('mbm2:ai_chip')
		
	  //Reflector
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
				"AAAAA",
				"BBBBB",
				"CDEDC",
				"CCCCC"
			],
			"key": {
			  "A": {
				"item": "thermal:obsidian_glass"
			  },
			  "B": {
				"item": "solarflux:mirror"
			  },
			  "C": {
				"item": "kubejs:ev_casing"
			  },
			  "D": {
				"item": "kubejs:tier_3_electrical_alloy_dual_coil"
			  },
			  "E": {
				"item": "mekanism:ultimate_control_circuit"
			  }
			},
			"result": {
			  "item": 'kubejs:reflector'
			}
		  }).id('mbm2:reflector')

		//Data + Casing
		global.mekanismInfusionConversion(event, Ingredient.of('#ae2:interface'), 'kubejs:data', 25, 'mbm2:infuse/data_from_interface')
		event.recipes.mekanismMetallurgicInfusing('kubejs:data_casing', Item.of('kubejs:space_age_casing'), {infuse_type: 'kubejs:data', amount: 100}).id(`mbm2:data_casing`);

		//Dimensional + Wafer
		global.mekanismInfusionConversion(event, Item.of('rftoolsbase:dimensionalshard'), 'kubejs:dimensional', 50, 'mbm2:infuse/dimensionalshard')
		global.mekanismInfusionConversion(event, Item.of('kubejs:enriched_dimensional_shard'), 'kubejs:dimensional', 100, 'mbm2:infuse/enriched_dimensionalshard')
		event.recipes.mekanismEnriching('kubejs:enriched_dimensional_shard', 'rftoolsbase:dimensionalshard')
		event.recipes.mekanismMetallurgicInfusing('kubejs:raw_dimensional_wafer', Item.of('kubejs:iridium_infused_wafer'), {infuse_type: 'kubejs:dimensional', amount: 100}).id(`mbm2:raw_dimensional_wafer`);

		//iridium_infused_wafer
		event.shaped('kubejs:iridium_infused_wafer', ['AAA','ABA','AAA'], {A: 'chemlib:iridium',B: 'projectred_core:electrotine_silicon'}).id('mbm2:iridium_infused_wafer')

		//dimensional_alloy
		event.recipes.mekanismMetallurgicInfusing('kubejs:dimensional_alloy', Item.of('mekanism:alloy_atomic'), {infuse_type: 'kubejs:dimensional', amount: 50}).id(`mbm2:dimensional_alloy`);
		
		//sentient_processor
		event.custom({
			"type": "lazierae2:etcher",
			"output": {
			  "item": "kubejs:sentient_processor"
			},
			"input": [
			  {
				"item": 'kubejs:ai_chip'
			  },
			  {
				"tag": "forge:dusts/redstone"
			  },
			  {
				"item": 'kubejs:raw_dimensional_wafer'
			  }
			],
			"process_time": 120,
			"energy_cost": 25000
		  }).id('mbm2:sentient_processor')

		  //Reinforced Sheet
		  event.custom({
			"type": "alchemistry:combiner",
			"group": "alchemistry:combiner",
			"input": [
				{
				  "ingredient": {
					"item": 'chemlib:tungsten'
				  },
				  "count": 32
				},
				{
				  "ingredient": {
					"item": 'chemlib:silicon'
				  },
				  "count": 16
				},
				{
				  "ingredient": {
					"item": 'chemlib:carbon'
				  },
				  "count": 16
				},
			  {
				"ingredient": {
				  "item": 'mekanism:hdpe_sheet'
				},
				"count": 1
			  }
			],
			"result": {
			  "item": "kubejs:reinforced_hdpe_sheet"
			}
		  }).id('mbm2:reinforced_hdpe_sheet')

		  //Tracking Chip
		  event.custom({
			"input": [
			  {
				"item": 'kubejs:reinforced_hdpe_sheet'
			  },
			  {
				"item": 'mekanism:ultimate_control_circuit'
			  },
			  {
				"item": 'kubejs:reinforced_hdpe_sheet'
			  },
			  {
				"item": 'ae2additions:cell_component_1kk'
			  },
			  {
				"item": 'ae2additions:cell_component_1kk'
			  },
			  {
				"item": 'kubejs:reinforced_hdpe_sheet'
			  },
			  {
				"item": 'mekanism:ultimate_control_circuit'
			  },
			  {
				"item": 'kubejs:reinforced_hdpe_sheet'
			  }
			],
			"inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:1000}",
			"processingTime": 300,
			"output": {
			  "item": 'kubejs:tracking_chip',
			  "count": 1
			},
			"type": "industrialforegoing:dissolution_chamber"
		  }).id('mbm2:tracking_chip')

		  //Tracking Chip
		  event.custom({
			"input": [
			  {
				"item": 'kubejs:reinforced_hdpe_sheet'
			  },
			  {
				"item": 'kubejs:sentient_processor'
			  },
			  {
				"item": 'kubejs:reinforced_hdpe_sheet'
			  },
			  {
				"item": 'kubejs:dimensional_alloy'
			  },
			  {
				"item": 'kubejs:dimensional_alloy'
			  },
			  {
				"item": 'kubejs:reinforced_hdpe_sheet'
			  },
			  {
				"item": 'kubejs:sentient_processor'
			  },
			  {
				"item": 'kubejs:reinforced_hdpe_sheet'
			  }
			],
			"inputFluid": "{FluidName:\"kubejs:raw_data\",Amount:1000}",
			"processingTime": 300,
			"output": {
			  "item": 'kubejs:blank_location_data_chip',
			  "count": 1
			},
			"type": "industrialforegoing:dissolution_chamber"
		  }).id('mbm2:blank_location_data_chip')
		  
		  //Magic Widget
		  event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "ABBBA",
			  "BCDCB",
			  "B E B",
			  "BCFCB",
			  "ABBBA"
			],
			"key": {
			  "A": {
				"item": "botania:thorn_chakram"
			  },
			  "B": {
				"item": "botania:glimmering_dreamwood_log"
			  },
			  "C": {
				"item": "kubejs:tier_4_magical_alloy_ring"
			  },
			  "D": {
				"item": "botania:corporea_crystal_cube"
			  },
			  "E": {
				"item": "ars_nouveau:archmage_robes"
			  },
			  "F": {
				"item": "ars_nouveau:arcane_pedestal"
			  }
			},
			"result": {
			  "item": 'kubejs:magic_widget'
			}
		  }).id('mbm2:magic_widget')
});