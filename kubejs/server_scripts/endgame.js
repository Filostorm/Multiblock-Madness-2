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

		let dysonPanelOutput = 100000 //100,000/t

		//Single Dyson Panel
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_blue')
		.setChance(1)
		.inputItem('kubejs:energy_crystal_empty')
		.outputItem('kubejs:energy_crystal_full')
		.duration(global.batteryStorage[2]/dysonPanelOutput)
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_blue')
		.setChance(1)
		.inputItem('kubejs:energy_orb_empty')
		.outputItem('kubejs:energy_orb_full')
		.duration(global.batteryStorage[3]/dysonPanelOutput)

		//8 Dyson Panel
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_red')
		.setChance(1)
		.inputItem('8x kubejs:energy_crystal_empty')
		.outputItem('8x kubejs:energy_crystal_full')
		.duration((global.batteryStorage[2]*8)/(dysonPanelOutput*8))
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_red')
		.setChance(1)
		.inputItem('kubejs:energy_orb_empty')
		.outputItem('kubejs:energy_orb_full')
		.duration(global.batteryStorage[3]/(dysonPanelOutput*8))

		//64 Dyson Panel
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_green')
		.setChance(1)
		.inputItem('64x kubejs:energy_crystal_empty')
		.outputItem('64x kubejs:energy_crystal_full')
		.duration((global.batteryStorage[2]*64)/(dysonPanelOutput*64))
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_green')
		.setChance(1)
		.inputItem('8x kubejs:energy_orb_empty')
		.outputItem('8x kubejs:energy_orb_full')
		.duration((global.batteryStorage[3]*8)/(dysonPanelOutput*64))
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_green')
		.setChance(1)
		.inputItem('kubejs:lapatron_crystal_empty')
		.outputItem('kubejs:lapatron_crystal_full')
		.duration(global.batteryStorage[4]/(dysonPanelOutput*64))

		//512 Dyson Panel
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_purple')
		.setChance(1)
		.inputItem('64x kubejs:energy_orb_empty')
		.outputItem('64x kubejs:energy_orb_full')
		.duration((global.batteryStorage[3]*64)/(dysonPanelOutput*512))
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_purple')
		.setChance(1)
		.inputItem('8x kubejs:lapatron_crystal_empty')
		.outputItem('8x kubejs:lapatron_crystal_full')
		.duration((global.batteryStorage[4]*8)/(dysonPanelOutput*512))
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_purple')
		.setChance(1)
		.inputItem('kubejs:lapatron_orb_empty')
		.outputItem('kubejs:lapatron_orb_full')
		.duration(global.batteryStorage[5]/(dysonPanelOutput*512))
		

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

	  //Advanced AI Chip
	  event.recipes.multiblocked.multiblock("super_computational_matrix")
	  .inputFluid(Fluid.of('kubejs:refined_data', 1000))
	  .inputFluid(Fluid.of('kubejs:high_capacity_coolant', 1000))
	  .inputFluid(Fluid.of('kubejs:molten_elite_iridium_alloy', 900))
	  .inputItem('kubejs:ai_chip')
	  .inputItem('2x kubejs:mind_shard')
	  .inputItem('kubejs:quantum_processor')
	  .inputItem('2x kubejs:sentient_processor')
	  .setChance(.1)
	  .outputItem('kubejs:advanced_ai_chip')
	  .setChance(.9)
	  .outputItem('kubejs:hostile_ai_chip')
	  .setChance(1)
	  .outputFluid(Fluid.of('kubejs:heated_coolant', 500))
	  .setPerTick(true)
	  .inputItem('kubejs:energy_orb_full')
	  .outputItem('kubejs:energy_orb_empty')
	  //.inputFE(4000*64)
	  .duration(400)

	  //Bad Ai
	  event.recipes.createCrushing([
		Item.of('kubejs:raw_dimensional_wafer').withChance(0.5),
		Item.of('kubejs:sentient_processor').withChance(0.5),
		  Item.of('kubejs:quantum_processor').withChance(0.25),
		  Item.of('kubejs:mind_shard').withChance(0.75),
		], 'kubejs:hostile_ai_chip').id(`mbm2:crushing/hostile_ai_chip`)
});