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

	// Sludge Sifter
  event.shaped('mbm2:sludge_sifter', [
	'ABA',
	'CDC',
	'EFE'
  ], {
	A: 'create:cogwheel',
	B: 'createsifter:andesite_mesh',
	C: '#forge:glass/colorless',
	D: 'create:copper_casing',
	E: '#forge:plates/drenched_arcanite',
	F: 'thermal:gold_gear'
  }).id(`mbm2:multiblocked/sludge_sifter`)

	// Sorter Mk1
  event.shaped('mbm2:sorter_mk1', [
	'QWQ',
	'RLR',
	'QWQ'
  ], {
	W: '#forge:wires/zinc',
	R: '#forge:rods/brass',
	Q: 'create:polished_rose_quartz',
	L: 'minecraft:redstone_lamp',
  }).id(`mbm2:multiblocked/sorter_mk1`)

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

  
// Air Collector Mk1
event.shaped('mbm2:air_collector_mk1', [
	'CPC',
	'OHO',
	'CGC'
  ], {
	C: '#forge:components/compressed_steel',
	O: 'thermal:obsidian_glass',
	P: 'immersiveengineering:component_electronic_adv',
	H: 'kubejs:high_pressure_casing',
	G: '#forge:gears/hepatizon',
  }).id(`mbm2:air_collector_mk1`)
  
  
// Blast Furnace
event.shaped('mbm2:ebf', [
	'PAP',
	'TCG',
	'PTP'
  ], {
	C: 'kubejs:tier1_casing',
	T: 'powah:thermoelectric_plate',
	G: 'thermal:obsidian_glass',
	A: 'immersiveengineering:component_electronic_adv',
	P: '#forge:platings/titanium',
  }).id(`mbm2:ebf`)
  
// Flotation
event.shaped('mbm2:flotation', [
	'PAP',
	'ECW',
	'PTP'
  ], {
	C: 'kubejs:tier1_casing',
	T: '#forge:interlocking_components/titanite',
	E: '#elementalcraft:gems/fine_earth',
	W: '#elementalcraft:gems/fine_water',
	A: 'pneumaticcraft:printed_circuit_board',
	P: '#forge:plates/drenched_arcanite',
  }).id(`mbm2:flotation`)
  
// Mixer
event.shaped('mbm2:mixer_mk1', [
	'PMP',
	'GCA',
	'PIP'
  ], {
	C: 'kubejs:tier1_casing',
	I: '#forge:interlocking_components/hepatizon',
	M: 'create:mechanical_mixer',
	P: '#forge:plates/aluminum',
	A: 'immersiveengineering:component_electronic',
	G: '#forge:gears/swift_alloy',
  }).id(`mbm2:mixer_mk1`)


// sorter_mk2
event.shaped('mbm2:sorter_mk2', [
	'PTP',
	'MCA',
	'PGP'
  ], {
	C: 'kubejs:tier1_casing',
	T: 'pneumaticcraft:printed_circuit_board',
	M: '#forge:robot_arms/tier_2_mechanical_alloy',
	A: 'create:mechanical_arm',
	P: '#forge:platings/osmium',
	G: '#forge:gears/osmium',
  }).id(`mbm2:sorter_mk2`)


// leaching_vat
event.shaped('mbm2:leaching_vat', [
	'PBP',
	'TCA',
	'PGP'
  ], {
	C: 'kubejs:tier3_casing',
	B: 'pneumaticcraft:printed_circuit_board',
	P: '#forge:platings/chemically_inert_alloy',
	G: '#forge:gears/stainless_steel',
	T: 'pneumaticcraft:large_tank',
	A: '#mekanism:alloys/atomic',
  }).id(`mbm2:leaching_vat`)


// Deposition Chamber
event.shaped('mbm2:deposition_chamber', ['ABA','CDC','AEA'], {A: 'mekanism:hdpe_sheet',B: 'mekanism:advanced_control_circuit',C: '#forge:gears/stainless_steel',D: 'kubejs:tier2_casing',E: 'industrialforegoing:pink_slime_ingot'}).id("mbm2:deposition_chamber")

// cast_press
event.shaped('mbm2:cast_press', ['ABA','CDC','AEA'], {A: 'kubejs:steel_plate',B: 'immersiveengineering:component_electronic_adv',C: 'tconstruct:scorched_bricks',D: 'kubejs:tier1_casing',E: 'kubejs:titanium_gear'}).id("mbm2:cast_press")

// casting_machine
event.shaped('mbm2:casting_machine', ['ABA','CDC','EEE'], {A: 'industrialforegoing:pink_slime_ingot',B: 'immersiveengineering:component_electronic_adv',C: 'kubejs:industrial_alloy_component',D: 'kubejs:tier2_casing',E: 'kubejs:osmium_gear'}).id("mbm2:casting_machine")

// fluid_centrifuge_mk1
event.shaped('mbm2:fluid_centrifuge_mk1', ['ABA','CDC','EFE'], {A: 'kubejs:tier_1_mechanical_alloy_gear',B: 'immersiveengineering:component_electronic',C: 'thermal:obsidian_glass',D: 'create:railway_casing',E: 'kubejs:tier_1_mechanical_alloy_rod',F: 'thermal:fluid_cell_frame'}).id("mbm2:fluid_centrifuge_mk1")
 
// mana_compressor
event.shaped('mbm2:mana_compressor', ['AAA','BCB','DED'], {A: 'kubejs:platinum_plating',B: 'botania:rune_mana',C: 'kubejs:high_pressure_casing',D: 'pneumaticcraft:advanced_pressure_tube',E: 'kubejs:tier_1_mechanical_alloy_interlocking_component'}).id("mbm2:mana_compressor")

// chemical_reactor
event.shaped('mbm2:chemical_reactor', ['ABA','CDC','ECE'], {A: 'thermal:obsidian_glass',B: 'pneumaticcraft:printed_circuit_board',C: 'kubejs:white_alloy_plate',D: 'kubejs:tier1_casing',E: 'powah:capacitor_niotic'}).id("mbm2:chemical_reactor")

// heater
event.shaped('mbm2:heater', ['AAA','BCB','DED'], {A: 'beyond_earth:compressed_desh',B: 'kubejs:tier_2_electrical_alloy_wire_coil',C: 'mekanism:resistive_heater',D: 'kubejs:plastic_scaffolding',E: 'kubejs:tier1_casing'}).id("mbm2:heater")

// vaccum_chamber
event.shaped('mbm2:vaccum_chamber', ['ABA','CDC','EFE'], {A: 'pneumaticcraft:vacuum_pump',B: 'pneumaticcraft:printed_circuit_board',C: 'kubejs:exoskeleton_composit_reinforced_plating',D: 'kubejs:high_pressure_casing',E: 'kubejs:desh_coil',F: 'kubejs:stainless_steel_gear'}).id("mbm2:vaccum_chamber")

// sintering_oven
event.shaped('mbm2:sintering_oven', ['ABA','CDC','EFE'], {A: 'kubejs:tier_2_structural_alloy_bolt',B: 'immersiveengineering:component_electronic_adv',C: 'immersiveengineering:blastbrick_reinforced',D: 'pneumaticcraft:advanced_air_compressor',E: 'kubejs:compressed_steel_component',F: 'kubejs:tier2_casing'}).id("mbm2:sintering_oven")

// mechanical_crafter
event.shaped('mbm2:mechanical_crafter', ['ABA','CDC','AEA'], {A: 'kubejs:tier_2_structural_alloy_plating',B: 'pneumaticcraft:printed_circuit_board',C: 'kubejs:tier_2_mechanical_alloy_robot_arm',D: 'mekanism:formulaic_assemblicator',E: 'kubejs:tier2_casing'}).id("mbm2:mechanical_crafter")

// energy_converter
event.shaped('mbm2:energy_converter', ['ABA','CDC','AEA'], {A: 'kubejs:tier_1_electrical_alloy_wire_coil',B: 'pneumaticcraft:printed_circuit_board',C: 'immersiveengineering:coil_hv',D: 'thermal:charge_bench',E: 'kubejs:tier2_casing'}).id("mbm2:energy_converter")

	// combo_input
	event.shaped('multiblocked:combo_input', ['ABC','DEA','ABC'], {A: 'kubejs:tier_1_mechanical_alloy_gear',B: 'lazierae2:logic_unit',C: 'multiblocked:fluid_input',D: 'multiblocked:item_input',E: 'kubejs:tier2_casing'}).id("mbm2:combo_input")
	
	// big_combo_input
	event.shaped('multiblocked:big_combo_input', ['ABC','DEA','ABF'], {A: 'kubejs:tier_2_mechanical_alloy_gear',B: 'lazierae2:logic_unit',C: 'multiblocked:fluid_input',D: 'multiblocked:combo_input',E: 'kubejs:tier3_casing',F: 'multiblocked:big_item_input'}).id("mbm2:big_combo_input")

	// machine_casing_fusion_coil
	event.shaped('kubejs:machine_casing_fusion_coil', ['ABA','CDC','ABA'], {A: 'kubejs:tier_3_structural_alloy_bolt',B: '#forge:hull_panels/inconel',C: 'mekanism:ultimate_control_circuit',D: 'kubejs:tier3_casing'}).id("mbm2:machine_casing_fusion_coil")

	// machine_casing_fusion_glass
	event.shaped('kubejs:machine_casing_fusion_glass', [' A ','ABA',' A '], {A: 'thermal:enderium_glass',B: 'kubejs:machine_casing_fusion_coil'}).id("mbm2:machine_casing_fusion_glass")

	// fusion_reactor
	event.shaped('mbm2:fusion_reactor', ['ABA','CDC','EAE'], {A: 'kubejs:ai_chip',B: 'mekanism:ultimate_tier_installer',C: 'alchemistry:fusion_core',D: 'kubejs:machine_casing_fusion_glass',E: '#forge:reinforced_platings/adamantine_alloy'}).id("mbm2:fusion_reactor")

	// receiver_block
	event.shaped('multiblocked:receiver_block', ['ABA','CDC','ABA'], {A: 'kubejs:stainless_steel_rod',B: 'kubejs:energy_crystal_full',C: 'kubejs:desh_gear',D: 'thermal:signalum_block'}).id("mbm2:receiver_block")

	//crystal_chamber
	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "ABCBA",
		  "ADEDA",
		  "CFGFC",
		  "AHIJA",
		  "AACAA"
		],
		"key": {
		  "A": {
			"item": "kubejs:tier_3_structural_alloy_reinforced_plating"
		  },
		  "B": {
			"item": "kubejs:tier_3_mechanical_alloy_robot_arm"
		  },
		  "C": {
			"item": "ae2:singularity"
		  },
		  "D": {
			"item": "kubejs:ai_chip"
		  },
		  "E": {
			"item": "kubejs:energy_orb_full"
		  },
		  "F": {
			"item": "kubejs:tier_3_electrical_alloy_dual_coil"
		  },
		  "G": {
			"item": "kubejs:tier3_casing"
		  },
		  "H": {
			"item": "mekanism:chemical_crystallizer"
		  },
		  "I": {
			"item": "ae2things:crystal_growth"
		  },
		  "J": {
			"item": "alchemistry:atomizer"
		  }
		},
		"result": {
		  "item": 'mbm2:crystal_chamber'
		}
	  }).id("mbm2:crystal_chamber")

	  //Railgun
	  event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "AAAAAAA",
		  "ABBBBBA",
		  "ABCDCBA",
		  "AEFGFEA",
		  "AEHIHEA",
		  "AEEEEEA",
		  "AAAAAAA"
		],
		"key": {
		  "A": {
			"item": "kubejs:tier_3_structural_alloy_hull_panel"
		  },
		  "B": {
			"item": "kubejs:titanite_scaffolding"
		  },
		  "C": {
			"item": "mythicbotany:asgard_rune"
		  },
		  "D": {
			"item": "kubejs:sky_metal_gear"
		  },
		  "E": {
			"item": "beyond_earth:rocket_launch_pad"
		  },
		  "F": {
			"item": "kubejs:ai_chip"
		  },
		  "G": {
			"item": "kubejs:tier3_casing"
		  },
		  "H": {
			"item": "beyond_earth:calorite_engine"
		  },
		  "I": {
			"item": "kubejs:terrasteel_gear"
		  }
		},
		"result": {
		  "item": 'mbm2:railgun'
		}
	  }).id("mbm2:raingun")

	  //Drone Bay
	  event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "ABCBA",
		  "BDEDB",
		  "DFGFD",
		  "HIJIH",
		  "HHIHH"
		],
		"key": {
		  "A": {
			"item": "minecraft:beacon"
		  },
		  "B": {
			"item": "kubejs:tier_3_mechanical_alloy_robot_arm"
		  },
		  "C": {
			"item": "travel_anchors:travel_anchor"
		  },
		  "D": {
			"item": "kubejs:crystaltine_reinforced_plating"
		  },
		  "E": {
			"item": "pneumaticcraft:vacuum_pump"
		  },
		  "F": {
			"item": "thermal:upgrade_augment_3"
		  },
		  "G": {
			"item": "kubejs:ai_chip"
		  },
		  "H": {
			"item": "beyond_earth:rocket_launch_pad"
		  },
		  "I": {
			"item": "kubejs:tier3_casing"
		  },
		  "J": {
			"item": "rftoolspower:power_core3"
		  }
		},
		"result": {
		  "item": 'mbm2:drone_bay'
		}
	  }).id('mbm2:drone_bay')

	  //energy_receiver -- maybe change out the hull panel material type?
	  event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "AABAA",
		  "ACDCA",
		  "ECFCE",
		  "GCDCG",
		  "GGHGG"
		],
		"key": {
		  "A": {
			"item": "botania:shimmerrock"
		  },
		  "B": {
			"item": "botania:spark_upgrade_recessive"
		  },
		  "C": {
			"item": "powah:reactor_nitro"
		  },
		  "D": {
			"item": "powah:energy_hopper_nitro"
		  },
		  "E": {
			"item": "forbidden_arcanus:golden_dragon_scale"
		  },
		  "F": {
			"item": "kubejs:tier3_casing"
		  },
		  "G": {
			"item": "kubejs:enderium_hull_panel"
		  },
		  "H": {
			"item": "rftoolspower:power_core3"
		  }
		},
		"result": {
		  "item": 'mbm2:energy_receiver'
		}
	  }).id('mbm2:energy_receiver')

	  //data_receiver
	  event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "AABAA",
		  "CDEDC",
		  "FGHGF",
		  "CDIDC",
		  "CCCCC"
		],
		"key": {
		  "A": {
			"item": "botania:detector_light_relay"
		  },
		  "B": {
			"item": "pneumaticcraft:universal_sensor"
		  },
		  "C": {
			"item": "kubejs:inconel_hull_panel"
		  },
		  "D": {
			"item": "kubejs:ai_chip"
		  },
		  "E": {
			"item": "solarflux:photovoltaic_cell_6"
		  },
		  "F": {
			"item": "extendedcrafting:crystaltine_catalyst"
		  },
		  "G": {
			"item": "ars_nouveau:glyph_sense_magic"
		  },
		  "H": {
			"item": "kubejs:tier3_casing"
		  },
		  "I": {
			"item": "aeinfinitybooster:infinity_card"
		  }
		},
		"result": {
		  "item": 'mbm2:data_receiver'
		}
	  }).id('mbm2:data_receiver')

	  //data_processing_unit
	  event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "AABAA",
		  "ACDCA",
		  "EDFDE",
		  "ACDCA",
		  "AAGAA"
		],
		"key": {
		  "A": {
			"item": "kubejs:lunar_alloy_plating"
		  },
		  "B": {
			"item": "pneumaticcraft:programmable_controller"
		  },
		  "C": {
			"item": "kubejs:blueprint_fragment"
		  },
		  "D": {
			"item": "kubejs:data_casing"
		  },
		  "E": {
			"item": "kubejs:energy_orb_full"
		  },
		  "F": {
			"item": "ae2:controller"
		  },
		  "G": {
			"item": "rftoolspower:cell3"
		  }
		},
		"result": {
		  "item": 'mbm2:data_processing_unit'
		}
	  }).id('mbm2:data_processing_unit')




	  //Elemental Stabilizer
	  event.shaped('mbm2:elemental_stabilizer', ['ABA','CDE','AFA'], {A: 'kubejs:rune_ingot',B: 'botania:dirt_rod',C: 'botania:water_rod',D: 'kubejs:transmuted_casing',E: 'botania:tornado_rod',F: 'botania:fire_rod'})
})

