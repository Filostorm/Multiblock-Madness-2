onEvent('recipes', event => {
	//Solar Casing
	event.shaped('kubejs:ev_casing', ['ABA','CDC','ECE'], {A: 'pneumaticcraft:solar_cell',B: 'engineersdecor:small_solar_panel',C: 'kubejs:tier_3_structural_alloy_reinforced_plating',D: 'kubejs:tier2_casing',E: 'rftoolspower:blazing_rod'}).id(`mbm2:solar_casing`)

	//Transmuted Casing
	event.shaped('kubejs:transmuted_casing', ['ABA','CDC','ABA'], {A: 'kubejs:tier_3_magical_alloy_sprocket',B: 'botania:shimmerrock',C: 'kubejs:nature_gem',D: 'kubejs:tier2_casing'}).id(`mbm2:transmuted_casing`)

// pedestal
	event.shaped('multiblocked:pedestal', ['AAA',' B ','AAA'], {A: 'botania:shimmerrock',B: 'ars_nouveau:arcane_pedestal'}).id(`mbm2:multiblocked/pedestal`)


// tier1_casing
event.shaped('kubejs:tier1_casing', [
	'RPR',
	'PCP',
	'RPR'
  ], {
	C: 'kubejs:invar_casing',
	P: '#forge:plates/steel',
	R: '#forge:rods/cobalt_brass',
  }).id(`mbm2:tier1_casing`)

// tier2_casing
event.shaped('2x kubejs:tier2_casing', [
	'PTP',
	'NCN',
	'PTP'
  ], {
	C: 'kubejs:tier1_casing',
	T: 'mekanism:alloy_reinforced',
	P: '#forge:platings/platinum',
	N: 'pneumaticcraft:pneumatic_cylinder',
  }).id(`mbm2:tier2_casing`)

	//Tier 3 Casing: suck it
	event.recipes.createMechanicalCrafting('kubejs:tier3_casing', [
		'HRRRH',
		'ROSOR',
		'RPCPR',
		'ROSOR',
		'HRRRH'
	  ], {
		H: '#forge:hull_panels/exoskeleton_composit',
		R: '#forge:rods/stainless_steel',
		S: '#forge:scaffoldings/tier_3_structural_alloy',
		P: '#forge:platings/tungsten',
		C: 'kubejs:tier2_casing',
		O: '#forge:ingots/refined_obsidian'
	  }).id('mbm2:tier3_casing')

	// Input Vault
  event.shaped('multiblocked:create_item_input', [
	'C',
	'V',
  ], {
	C: '#forge:chests/wooden',
	V: 'create:item_vault',
  }).id(`mbm2:multiblocked/create_item_input`)
  event.shapeless(`multiblocked:create_item_input`, ['multiblocked:create_item_output']).id(`mbm2:multiblocked/create_item_input_switch`)

	// Output Vault
  event.shaped('multiblocked:create_item_output', [
	'V',
	'C',
  ], {
	C: '#forge:chests/wooden',
	V: 'create:item_vault',
  }).id(`mbm2:multiblocked/create_item_output`)
  event.shapeless(`multiblocked:create_item_output`, ['multiblocked:create_item_input']).id(`mbm2:multiblocked/create_item_output_switch`)

// Create Output
event.shaped('multiblocked:create_output', [
	'C',
	'G',
  ], {
	C: 'create:cogwheel',
	G: 'create:gearbox',
  }).id(`mbm2:multiblocked/create_output`)
  event.shapeless(`multiblocked:create_output`, ['multiblocked:create_input']).id(`mbm2:multiblocked/create_output_switch`)
// Create Input
event.shaped('multiblocked:create_input', [
  'G',
  'C',
], {
  C: 'create:cogwheel',
  G: 'create:gearbox',
}).id(`mbm2:multiblocked/create_input`)
event.shapeless(`multiblocked:create_input`, ['multiblocked:create_output']).id(`mbm2:multiblocked/create_input_switch`)

// Item Input
event.shaped('multiblocked:item_input', [
	'H',
	'C',
  ], {
	C: 'kubejs:steel_casing',
	H: 'minecraft:hopper',
  }).id(`mbm2:multiblocked/item_input`)
  event.shapeless(`multiblocked:item_input`, ['multiblocked:item_output']).id(`mbm2:multiblocked/item_input_switch`)
// Big Item Input
event.shaped('multiblocked:big_item_input', [
	'H',
	'C',
  ], {
	C: 'kubejs:tier2_casing',
	H: 'multiblocked:item_input',
  }).id(`mbm2:multiblocked/big_item_input`)
  event.shapeless(`multiblocked:big_item_input`, ['multiblocked:big_item_output']).id(`mbm2:multiblocked/big_item_input_switch`)

// Item Output
event.shaped('multiblocked:item_output', [
	'C',
	'H',
  ], {
	C: 'kubejs:steel_casing',
	H: 'minecraft:hopper',
  }).id(`mbm2:multiblocked/item_output`)
  event.shapeless(`multiblocked:item_output`, ['multiblocked:item_input']).id(`mbm2:multiblocked/item_output_switch`)
// Big Item Output
event.shaped('multiblocked:big_item_output', [
	'C',
	'H',
  ], {
	C: 'kubejs:tier2_casing',
	H: 'multiblocked:item_output',
  }).id(`mbm2:multiblocked/big_item_output`)
  event.shapeless(`multiblocked:big_item_output`, ['multiblocked:big_item_input']).id(`mbm2:multiblocked/big_item_output_switch`)

// Fluid Input
event.shaped('multiblocked:fluid_input', [
	'H',
	'C',
  ], {
	C: 'kubejs:steel_casing',
	H: 'thermal:fluid_cell_frame',
  }).id(`mbm2:multiblocked/fluid_input`)
  event.shapeless(`multiblocked:fluid_input`, ['multiblocked:fluid_output']).id(`mbm2:multiblocked/fluid_input_switch`)

// Fluid output
event.shaped('multiblocked:fluid_output', [
	'C',
	'H',
  ], {
	C: 'kubejs:steel_casing',
	H: 'thermal:fluid_cell_frame',
  }).id(`mbm2:multiblocked/fluid_output`)
  event.shapeless(`multiblocked:fluid_output`, ['multiblocked:fluid_input']).id(`mbm2:multiblocked/fluid_output_switch`)
  

// Energy Input mk1
event.shaped('multiblocked:energy_input_mk1', [
	' E ',
	'PCP',
	' P '
  ], {
	C: 'kubejs:tier1_casing',
	E: 'thermal:energy_cell_frame',
	P: 'rftoolspower:power_core1'
  }).id(`mbm2:multiblocked/energy_input_mk1`)
  event.shapeless(`multiblocked:energy_input_mk1`, ['multiblocked:energy_output_mk1']).id(`mbm2:multiblocked/energy_input_mk1_switch`)
// Energy Output mk1
event.shaped('multiblocked:energy_output_mk1', [
	' P ',
	'PCP',
	' E '
  ], {
	C: 'kubejs:tier1_casing',
	E: 'thermal:energy_cell_frame',
	P: 'rftoolspower:power_core1'
  }).id(`mbm2:multiblocked/energy_output_mk1`)
  event.shapeless(`multiblocked:energy_output_mk1`, ['multiblocked:energy_input_mk1']).id(`mbm2:multiblocked/energy_output_mk1_switch`)

// Energy Input mk2
event.shaped('multiblocked:energy_input_mk2', [
	' E ',
	'PCP',
	' P '
  ], {
	C: 'kubejs:tier2_casing',
	E: 'multiblocked:energy_input_mk1',
	P: 'rftoolspower:power_core2'
  }).id(`mbm2:multiblocked/energy_input_mk2`)
  event.shapeless(`multiblocked:energy_input_mk2`, ['multiblocked:energy_output_mk2']).id(`mbm2:multiblocked/energy_input_mk2_switch`)
// Energy Output mk2
event.shaped('multiblocked:energy_output_mk2', [
	' P ',
	'PCP',
	' E '
  ], {
	C: 'kubejs:tier2_casing',
	E: 'multiblocked:energy_output_mk1',
	P: 'rftoolspower:power_core2'
  }).id(`mbm2:multiblocked/energy_output_mk2`)
  event.shapeless(`multiblocked:energy_output_mk2`, ['multiblocked:energy_input_mk2']).id(`mbm2:multiblocked/energy_output_mk2_switch`)

// Energy Input mk3
event.shaped('multiblocked:energy_input_mk3', [
	' E ',
	'PCP',
	' P '
  ], {
	C: 'kubejs:tier3_casing',
	E: 'multiblocked:energy_input_mk2',
	P: 'rftoolspower:power_core3'
  }).id(`mbm2:multiblocked/energy_input_mk3`)
  event.shapeless(`multiblocked:energy_input_mk3`, ['multiblocked:energy_output_mk3']).id(`mbm2:multiblocked/energy_input_mk3_switch`)
  
// Energy Output mk3
event.shaped('multiblocked:energy_output_mk3', [
	' P ',
	'PCP',
	' E '
  ], {
	C: 'kubejs:tier3_casing',
	E: 'multiblocked:energy_output_mk2',
	P: 'rftoolspower:power_core3'
  }).id(`mbm2:multiblocked/energy_output_mk3`)
  event.shapeless(`multiblocked:energy_output_mk3`, ['multiblocked:energy_input_mk3']).id(`mbm2:multiblocked/energy_output_mk3_switch`)

  
// Factory Fan
event.shaped('kubejs:factory_fan', [
	'PSP',
	'PCF',
	'PSP'
  ], {
	C: '#forge:scaffoldings/steel',
	F: 'create:propeller',
	S: '#forge:spools/red_alloy',
	P: '#forge:plates/steel',
  }).id(`mbm2:factory_fan`)

// High Pressure Casing
event.shaped('3x kubejs:high_pressure_casing', [
	' P ',
	'PCP',
	' P '
  ], {
	C: 'kubejs:tier1_casing',
	P: '#forge:platings/pressurized_aluminum_alloy',
  }).id(`mbm2:high_pressure_casing`)

  
	// combo_input
	event.shaped('multiblocked:combo_input', ['ABC','DEA','ABC'], {A: 'kubejs:tier_1_mechanical_alloy_gear',B: 'lazierae2:logic_unit',C: 'multiblocked:fluid_input',D: 'multiblocked:item_input',E: 'kubejs:tier2_casing'}).id("mbm2:combo_input")
	
	// big_combo_input
	event.shaped('multiblocked:big_combo_input', ['ABC','DEA','ABF'], {A: 'kubejs:tier_2_mechanical_alloy_gear',B: 'lazierae2:logic_unit',C: 'multiblocked:fluid_input',D: 'multiblocked:combo_input',E: 'kubejs:tier3_casing',F: 'multiblocked:big_item_input'}).id("mbm2:big_combo_input")

	// machine_casing_fusion_coil
	event.shaped('kubejs:machine_casing_fusion_coil', ['ABA','CDC','ABA'], {A: 'kubejs:tier_3_structural_alloy_bolt',B: '#forge:hull_panels/inconel',C: 'mekanism:ultimate_control_circuit',D: 'kubejs:tier3_casing'}).id("mbm2:machine_casing_fusion_coil")

	// machine_casing_fusion_glass
	event.shaped('kubejs:machine_casing_fusion_glass', [' A ','ABA',' A '], {A: 'thermal:enderium_glass',B: 'kubejs:machine_casing_fusion_coil'}).id("mbm2:machine_casing_fusion_glass")

	// receiver_block
	event.shaped('multiblocked:receiver_block', ['ABA','CDC','ABA'], {A: 'kubejs:stainless_steel_rod',B: 'kubejs:energy_crystal_full',C: 'kubejs:desh_gear',D: 'thermal:signalum_block'}).id("mbm2:receiver_block")

	  //space_age_casing
	  event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "AABAA",
		  "ACDCA",
		  "BDEDB",
		  "ACDCA",
		  "AABAA"
		],
		"key": {
		  "A": {
			"item": "kubejs:space_alloy_hull_panel"
		  },
		  "B": {
			"item": "kubejs:vibranium_bolt"
		  },
		  "C": {
			"item": "kubejs:tier3_casing"
		  },
		  "D": {
			"item": "kubejs:vibranium_scaffolding"
		  },
		  "E": {
			"item": "kubejs:ai_chip"
		  }
		},
		"result": Item.of('2x kubejs:space_age_casing').toResultJson()
	  }).id('mbm2:space_age_casing')

	  //Super Casing
	  event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "ABCDEAA",
		  "ABCCDBB",
		  "EDFGFCC",
		  "DCGHGCD",
		  "CCFGFDE",
		  "BBDCCBA",
		  "AAEDCBA"
		],
		"key": {
		  "A": {
			"item": "kubejs:astral_fusion_hull_panel"
		  },
		  "B": {
			"item": "kubejs:elite_iridium_alloy_hull_panel"
		  },
		  "C": {
			"item": "ae2:controller"
		  },
		  "D": {
			"item": 'kubejs:dimensional_alloy'
		  },
		  "E": {
			"item": "kubejs:lapatron_crystal_full"
		  },
		  "F": {
			"item": "kubejs:tier_4_structural_alloy_scaffolding"
		  },
		  "G": {
			"item": "kubejs:data_casing"
		  },
		  "H": {
			"item": "forbidden_arcanus:dark_matter"
		  }
		},
		"result": Item.of('2x kubejs:super_casing').toResultJson()
	  }).id('mbm2:super_casing')
})

