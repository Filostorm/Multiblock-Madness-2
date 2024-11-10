/*

onEvent('tags.items', event => {
	event.add(`forge:ingots`, `naturesaura:tainted_gold`)
	 event.remove(`create:crushed_ores/${item}`, `kubejs:crushed_${item}`)
 });
 */
onEvent('recipes', event => {

	//Dyson Panel
	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "ABCBA",
		  "ADDDA",
		  "AEFEA",
		  "ADDDA",
		  "ABCBA"
		],
		"key": {
		  "A": {
			"item": "kubejs:aerospace_alloy_sheet"
		  },
		  "B": {
			"item": "mekanism:alloy_reinforced"
		  },
		  "C": {
			"item": "kubejs:tier_4_mechanical_alloy_interlocking_component"
		  },
		  "D": {
			"item": "pneumaticcraft:solar_cell"
		  },
		  "E": {
			"item": "mekanism:ultimate_control_circuit"
		  },
		  "F": {
			"item": "solarflux:photovoltaic_cell_6"
		  }
		},
		"result": {
		  "item": 'kubejs:solar_panel'
		}
	  }).id('mbm2:dyson_panel')

	  event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "AABAA",
		  "ACBCA",
		  "BBDBB",
		  "ACBCA",
		  "AABAA"
		],
		"key": {
		  "A": {
			"item": "solarflux:photovoltaic_cell_6"
		  },
		  "B": {
			"item": "kubejs:tier_4_structural_alloy_rod"
		  },
		  "C": {
			"item": "kubejs:solar_panel"
		  },
		  "D": {
			"item": "kubejs:tier_4_structural_alloy_frame_box"
		  }
		},
		"result": Item.of('4x kubejs:solar_bar').toResultJson()
	  }).id('mbm2:dyson_support')


	global.compactCrafting(event, 'kubejs:standard_dyson_panel', 1, 'solarflux:sp_8',
	7, [
	  {
		  type: 'compactcrafting:mixed',
		  pattern: [
			  ['P', 'P', 'P', 'S', 'P' ,'P', 'P'],
			  ['P', 'P', 'P', 'S', 'P' ,'P', 'P'],
			  ['P', 'P', 'P', 'S', 'P' ,'P', 'P'],
			  ['S', 'S', 'S', 'S', 'S' ,'S', 'S'],
			  ['P', 'P', 'P', 'S', 'P' ,'P', 'P'],
			  ['P', 'P', 'P', 'S', 'P' ,'P', 'P'],
			  ['P', 'P', 'P', 'S', 'P' ,'P', 'P'],
		  ]
	  },
	  ], {
	  'P': {
		type: 'compactcrafting:block',
		block: 'kubejs:solar_panel'
	  },
	  'S': {
		type: 'compactcrafting:block',
		block: 'kubejs:solar_bar'
	  },
	},  'mbm2:compacting/standard_dyson_panel')

	//Chip Combnonation 8
	event.shaped('kubejs:solar_chip_red', [
		'AAA',
		'A A',
		'AAA'
  	], {
		A: 'kubejs:solar_chip_blue'
  	}).id('mbm2:dyson_chip_8')

	//Chip Combnonation 64
	event.shaped('kubejs:solar_chip_green', [
		'AAA',
		'A A',
		'AAA'
  	], {
		A: 'kubejs:solar_chip_red'
  	}).id('mbm2:dyson_chip_64')
	
	//Chip Combnonation 512
	event.shaped('kubejs:solar_chip_purple', [
		'AAA',
		'A A',
		'AAA'
  	], {
		A: 'kubejs:solar_chip_green'
  	}).id('mbm2:dyson_chip_512')


		////Solar Railgunning W/battery
		//event.recipes.multiblocked.multiblock("railgun")
		//.inputItem('kubejs:standard_dyson_panel')
		//.inputItem('mekanism:ultimate_control_circuit')
		//.inputItem('16x kubejs:large_battery_full')
		//.outputItem('kubejs:solar_chip_blue')
		//.outputItem('16x kubejs:large_battery_empty')
		//.duration(800)

		//Solar Railgunning
		event.recipes.multiblocked.multiblock("railgun")
		.inputItem('kubejs:standard_dyson_panel')
		.inputItem('kubejs:tracking_chip')
		.outputItem('kubejs:solar_chip_blue')
		.inputFE(10000000) //10m, need the top tier energy input hatch for this
		//.setPerTick(true)
		//.inputFE(4096*16)
		.duration(100)

		//Solar Railgunning W/crystal
		event.recipes.multiblocked.multiblock("railgun")
		.inputItem('kubejs:standard_dyson_panel')
		.inputItem('kubejs:tracking_chip')
		.inputItem('8x kubejs:energy_crystal_full')
		.outputItem('kubejs:solar_chip_blue')
		.outputItem('8x kubejs:energy_crystal_empty')
		.duration(100)

		//Solar Railgunning W/orb
		event.recipes.multiblocked.multiblock("railgun")
		.inputItem('kubejs:standard_dyson_panel')
		.inputItem('kubejs:tracking_chip')
		.inputItem('kubejs:energy_orb_full')
		.outputItem('kubejs:solar_chip_blue')
		.outputItem('kubejs:energy_orb_empty')
		.duration(20)


		//Drone Railgunning
		event.recipes.multiblocked.multiblock("railgun")
		.inputItem('kubejs:scout_drone')
		.inputItem('kubejs:tracking_chip')
		.outputItem('kubejs:scout_drone_active')
		.inputFE(10000000) //10m, need the top tier energy input hatch for this
		.duration(100)

		//Harvester Drone Railgunning
		event.recipes.multiblocked.multiblock("railgun")
		.inputItem('kubejs:harvester_drone')
		.inputItem('kubejs:tracking_chip')
		.outputItem('kubejs:harvester_drone_active')
		.inputFE(10000000) //10m, need the top tier energy input hatch for this
		.duration(100)


		//Data Receiver
		event.recipes.multiblocked.multiblock("data_receiver")
		.setChance(0.01)
		.inputItem('kubejs:scout_drone_active')
		.setChance(1)
		.setPerTick(true)
		.inputFE(4000*16)
		.outputFluid(Fluid.of('kubejs:raw_data', 10))
		.duration(1200)



		//Single Dyson Panel
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_blue')
		.setChance(1)
		.inputItem('kubejs:energy_crystal_empty')
		.outputItem('kubejs:energy_crystal_full')
		.duration(global.batteryStorage[2]/100000) //100,000/t
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_blue')
		.setChance(1)
		.inputItem('kubejs:energy_orb_empty')
		.outputItem('kubejs:energy_orb_full')
		.duration(global.batteryStorage[3]/100000)

		//8 Dyson Panel
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_red')
		.setChance(1)
		.inputItem('8x kubejs:energy_crystal_empty')
		.outputItem('8x kubejs:energy_crystal_full')
		.duration((global.batteryStorage[2]*8)/(100000*8))
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_red')
		.setChance(1)
		.inputItem('kubejs:energy_orb_empty')
		.outputItem('kubejs:energy_orb_full')
		.duration(global.batteryStorage[3]/(100000*8))

		//64 Dyson Panel
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_green')
		.setChance(1)
		.inputItem('8x kubejs:energy_orb_empty')
		.outputItem('8x kubejs:energy_orb_full')
		.duration((global.batteryStorage[3]*8)/(100000*64))
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_green')
		.setChance(1)
		.inputItem('kubejs:lapatron_crystal_empty')
		.outputItem('kubejs:lapatron_crystal_full')
		.duration(global.batteryStorage[4]/(100000*64))

		//512 Dyson Panel
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_purple')
		.setChance(1)
		.inputItem('8x kubejs:lapatron_crystal_empty')
		.outputItem('8x kubejs:lapatron_crystal_full')
		.duration((global.batteryStorage[4]*8)/(100000*512))
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_purple')
		.setChance(1)
		.inputItem('kubejs:lapatron_orb_empty')
		.outputItem('kubejs:lapatron_orb_full')
		.duration(global.batteryStorage[5]/(100000*512))
		

		//Worldshaper, this recipe will probably get changed many times
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "         ",
			  "AAAABBB  ",
			  "CCCCDEEFF",
			  "AAAAGEEHH",
			  "CCCCDEEFF",
			  "AAAABBBII",
			  "      IJI",
			  "       II",
			  "         "
			],
			"key": {
			  "A": {
				"item": "kubejs:uru_hull_panel"
			  },
			  "B": {
				"item": "kubejs:tier_4_magical_alloy_plate"
			  },
			  "C": {
				"item": "kubejs:draconium_rod"
			  },
			  "D": {
				"item": "kubejs:lapatron_orb_full"
			  },
			  "E": {
				"item": "kubejs:tier_4_magical_alloy_sprocket"
			  },
			  "F": {
				"item": "kubejs:uru_reinforced_plating"
			  },
			  "G": {
				"item": "kubejs:world_shaper_blueprint"
			  },
			  "H": {
				"item": "kubejs:uru_bolt"
			  },
			  "I": {
				"item": "kubejs:vibranium_plating"
			  },
			  "J": {
				"item": "kubejs:vibranium_interlocking_component"
			  }
			},
			"result": {
			  "item": 'create:handheld_worldshaper'
			}
		  }).id('mbm2:worldshaper')

		  //Harvester Drone
		  event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "  ABA  ",
			  "CDDEDDC",
			  "DDFGFDD",
			  "AHIJIHA",
			  "DDKLKDD",
			  " DMMMD ",
			  "  N N  "
			],
			"key": {
			  "A": {
				"item": "kubejs:tier_4_mechanical_alloy_robot_arm"
			  },
			  "B": {
				"item": "kubejs:aerospace_alloy_rocket_nose_cone"
			  },
			  "C": {
				"item": "mekanism:laser"
			  },
			  "D": {
				"item": "kubejs:vibranium_hull_panel"
			  },
			  "E": {
				"item": "extendedcrafting:crystaltine_catalyst"
			  },
			  "F": {
				"item": "kubejs:ai_chip"
			  },
			  "G": {
				"item": "botania:astrolabe"
			  },
			  "H": {
				"item": "kubejs:energy_orb_full"
			  },
			  "I": {
				"item": "kubejs:tier_4_structural_alloy_component"
			  },
			  "J": {
				"type": "forge:nbt",
				"item": "pneumaticcraft:drone",
				"count": 1,
				"nbt": "{\"pneumaticcraft:air\":120000}"
			  },
			  "K": {
				"item": "mekanism:qio_drive_time_dilating"
			  },
			  "L": {
				"item": "kubejs:tier_4_mechanical_alloy_interlocking_component"
			  },
			  "M": {
				"item": "kubejs:adamantine_alloy_rocket_fin"
			  },
			  "N": {
				"item": "beyond_earth:calorite_engine"
			  }
			},
			"result": {
			  "item": 'kubejs:harvester_drone'
			}
		  }).id('mbm2:harvester_drone')

		  event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "   A   ",
			  "  BCB  ",
			  " BDEDB ",
			  " BFGFB ",
			  " BHIHB ",
			  " JJJJJ ",
			  "  K K  "
			],
			"key": {
			  "A": {
				"item": "kubejs:adamantine_alloy_rocket_nose_cone"
			  },
			  "B": {
				"item": "kubejs:vibranium_hull_panel"
			  },
			  "C": {
				"type": "forge:nbt",
				"item": "industrialforegoing:range_addon11",
				"count": 1,
				"nbt": "{TitaniumAugment:{Range:11.0f}}"
			  },
			  "D": {
				"item": "forbidden_arcanus:golden_dragon_scale"
			  },
			  "E": {
				"item": "extendedcrafting:crystaltine_catalyst"
			  },
			  "F": {
				"item": "kubejs:ai_chip"
			  },
			  "G": {
				"type": "forge:nbt",
				"item": "pneumaticcraft:drone",
				"count": 1,
				"nbt": "{\"pneumaticcraft:air\":120000}"
			  },
			  "H": {
				"item": "kubejs:energy_orb_full"
			  },
			  "I": {
				"item": "mekanism:qio_drive_time_dilating"
			  },
			  "J": {
				"item": "kubejs:adamantine_alloy_rocket_fin"
			  },
			  "K": {
				"item": "beyond_earth:calorite_engine"
			  }
			},
			"result": {
			  "item": 'kubejs:scout_drone'
			}
		  }).id('mbm2:scout_drone')

		  //Refined Data
		event.recipes.multiblocked.multiblock("super_computational_matrix")
			.inputFluid(Fluid.of('kubejs:raw_data', 1000))
			.inputFluid(Fluid.of('kubejs:gelid_cryotheum', 1000))
			.inputItem('4x kubejs:ai_chip')
			.outputFluid(Fluid.of('kubejs:refined_data', 100))
			.setPerTick(true)
			.inputFE(4000*64)
			.duration(800)
		  
			event.custom({
				"type":"mekanism:reaction",
				"itemInput":{
					"ingredient":{"item":'kubejs:location_data_chip'}
				},
				"fluidInput":{
					"amount":1000,"fluid":"kubejs:raw_data"
				},
				"gasInput":{
					"amount":1000,"gas":"mekanism:hydrogen_chloride"
				},
				"duration":200,
				"itemOutput":{
					"item":'kubejs:asteroid_tier_1'
				}
				})



		  //Asteroids w/ Raw Data
		event.recipes.multiblocked.multiblock("data_processing_unit")
			.inputFluid(Fluid.of('kubejs:raw_data', 100))
			.inputItem('kubejs:location_data_chip')
			.setChance(0.5)
			.outputItem('kubejs:asteroid_tier_1')
			.setChance(0.05)
			.outputItem('kubejs:asteroid_tier_2')
			.setChance(1)
			.setPerTick(true)
			.inputFE(4000*32)
			.duration(400)

		//Asteroids w/ Refined Data
		  event.recipes.multiblocked.multiblock("data_processing_unit")
			.inputFluid(Fluid.of('kubejs:refined_data', 100))
			.inputItem('kubejs:location_data_chip')
			.setChance(0.60)
			.outputItem('kubejs:asteroid_tier_1')
			.setChance(0.25)
			.outputItem('kubejs:asteroid_tier_2')
			.setChance(0.15)
			.outputItem('kubejs:asteroid_tier_3')
			.setChance(1)
			.setPerTick(true)
			.inputFE(4000*32)
			.duration(200)

		//Asteroid Chunks
		//Tier 1
	event.recipes.multiblocked.multiblock("drone_bay")
		.inputItem('kubejs:harvester_drone_active')
		.setChance(0.1)
		.inputItem('kubejs:asteroid_tier_1')
		.setChance(0.99)
		.outputItem('kubejs:harvester_drone')
		.setChance(1)
		.outputItem('64x kubejs:asteroid_chunk_tier_1')
		.setChance(0.75)
		.outputItem('64x beyond_earth:moon_stone')
		.setChance(0.50)
		.outputItem('64x beyond_earth:moon_sand')
		.setChance(0.25)
		.outputItem('32x beyond_earth:moon_cheese_ore')
		.setChance(0.75)
		.outputItem('kubejs:blueprint_fragment')
		.setChance(1)
		.setPerTick(true)
		.inputFE(4000*32)
		.duration(400)

		//Tier 2
	event.recipes.multiblocked.multiblock("drone_bay")
		.inputItem('kubejs:harvester_drone_active')
		.setChance(0.1)
		.inputItem('kubejs:asteroid_tier_2')
		.setChance(0.90)
		.outputItem('kubejs:harvester_drone')
		.setChance(1)
		.outputItem('64x kubejs:asteroid_chunk_tier_2')
		.setChance(0.75)
		.outputItem('64x beyond_earth:mars_stone')
		.setChance(0.50)
		.outputItem('64x beyond_earth:mars_sand')
		//.setChance(0.25)
		//.outputItem('32x beyond_earth:mars_ice_shard_ore')
		.setChance(1)
		.outputItem('kubejs:blueprint_fragment')
		.setChance(1)
		.setPerTick(true)
		.inputFE(4000*32)
		.duration(600)

		//Tier 3
	event.recipes.multiblocked.multiblock("drone_bay")
		.inputItem('kubejs:harvester_drone_active')
		.setChance(0.1)
		.inputItem('kubejs:asteroid_tier_3')
		.setChance(0.75)
		.outputItem('kubejs:harvester_drone')
		.setChance(1)
		.outputItem('64x kubejs:asteroid_chunk_tier_3')
		.setChance(0.75)
		.outputItem('64x beyond_earth:venus_stone')
		.setChance(0.50)
		.outputItem('64x beyond_earth:venus_sand')
		//.setChance(0.25)
		//.outputItem('32x beyond_earth:moon_cheese_ore')
		.setChance(1)
		.outputItem('2x kubejs:blueprint_fragment')
		.setChance(1)
		.setPerTick(true)
		.inputFE(4000*32)
		.duration(800)

		//Blank Blueprint
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "AAAAAAAAA",
			  "AAAAAAAAA",
			  "AAAAAAAAA",
			  "AAAAAAAAA",
			  "AAAAAAAAA",
			  "AAAAAAAAA",
			  "AAAAAAAAA",
			  "AAAAAAAAA",
			  "AAAAAAAAA"
			],
			"key": {
			  "A": {
				"item": "kubejs:blueprint_fragment"
			  }
			},
			"result": {
			  "item": "kubejs:blank_cosmic_blueprint"
			}
		  }).id('mbm2:blank_cosmic_blueprint')

		//Blueprint
		event.recipes.multiblocked.multiblock("data_processing_unit")
		.inputFluid(Fluid.of('kubejs:refined_data', 100))
		.inputItem('create:extendo_grip')
		.inputItem('botania:astrolabe')
		.inputItem('rftoolspower:power_core3')
		.inputItem('kubejs:blank_cosmic_blueprint')
		.setChance(0.10)
		.outputItem('kubejs:world_shaper_blueprint')
		.setChance(0.90)
		.outputItem('7x kubejs:blueprint_fragment')
		.setChance(0.75)
		.outputItem('kubejs:ripped_blueprint')
		.setChance(1)
		.setPerTick(true)
		.inputFE(4000*32)
		.duration(500)

		//Blueprint Recycling
		event.recipes.mekanismCrushing('30x kubejs:blueprint_fragment', 'kubejs:ripped_blueprint').id(`mbm2:mekanism/crushing/blueprint_fragment`)
		event.recipes.immersiveengineeringCrusher('25x kubejs:blueprint_fragment', 'kubejs:ripped_blueprint').id(`mbm2:immersiveengineering/crushing/blueprint_fragment`)


});