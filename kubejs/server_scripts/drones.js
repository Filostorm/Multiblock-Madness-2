let tier1DroneAttritionInput = 0.01

let tier1DroneAttritionOutput = 1 - tier1DroneAttritionInput

onEvent('recipes', event => {


	//Asteroid Data Chip
	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "AABCD",
		  "AEFGC",
		  "BHHHB",
		  "GIFEA",
		  "JGBAA"
		],
		"key": {
		  "A": {
			"item": "forbidden_arcanus:silver_dragon_scale"
		  },
		  "B": {
			"item": "kubejs:crystaltine_ring"
		  },
		  "C": {
			"item": "projectred_core:pointer"
		  },
		  "D": {
			"item": "botania:tiny_planet"
		  },
		  "E": {
			"item": "rftoolsbase:infused_diamond"
		  },
		  "F": {
			"item": "projectred_core:energized_silicon_chip"
		  },
		  "G": {
			"item": "projectred_core:conductive_plate"
		  },
		  "H": {
			"item": "projectred_core:bundled_plate"
		  },
		  "I": {
			"item": "projectred_core:cathode"
		  },
		  "J": {
			"item": "kubejs:blank_location_data_chip"
		  }
		},
		"result": {
		  "item": 'kubejs:asteroid_location_data_chip'
		}
	  }).id("mbm2:asteroid_location_data_chip")

	  //Planet Data Chip
	  event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "ABCDD",
		  "BEFGD",
		  "CHHHC",
		  "DGFIJ",
		  "DDCJK"
		],
		"key": {
		  "A": {
			"item": "kubejs:asteroid_chunk_tier_1"
		  },
		  "B": {
			"item": "projectred_core:pointer"
		  },
		  "C": {
			"item": "kubejs:dimensional_alloy"
		  },
		  "D": {
			"item": 'forbidden_arcanus:golden_dragon_scale'
		  },
		  "E": {
			"item": "projectred_core:anode"
		  },
		  "F": {
			"item": "projectred_core:silicon_chip"
		  },
		  "G": {
			"item": "rftoolsbase:infused_enderpearl"
		  },
		  "H": {
			"item": "projectred_core:bundled_plate"
		  },
		  "I": {
			"item": "projectred_core:cathode"
		  },
		  "J": {
			"item": "projectred_core:conductive_plate"
		  },
		  "K": {
			"item": "kubejs:blank_location_data_chip"
		  }
		},
		"result": {
		  "item": 'kubejs:planet_location_data_chip'
		}
	  }).id("mbm2:planet_location_data_chip")

	  //Blank Request Chip
	  event.shaped('kubejs:empty_request_chip', ['ABA','CDC','EFE'], {
		A: 'botania:rune_earth',
		B: Item.of('gag:hearthstone'),
		C: 'laserio:logic_chip',
		D: 'kubejs:blank_location_data_chip',
		E: 'kubejs:dimensional_alloy',
		F: 'thermal:device_collector'
	}).id("mbm2:empty_request_chip")


	global.dronesTypes.forEach(type => {
		//Drone Railgunning
		event.recipes.multiblocked.multiblock("railgun")
		.inputItem(`kubejs:${type}_drone`)
		.inputItem('kubejs:tracking_chip')
		.outputItem(`kubejs:${type}_drone_active`)
		.inputFE(10000000) //10m, need the top tier energy input hatch for this
		.duration(50)
	});


	//Scout Drone exploreeeee
	event.recipes.multiblocked.multiblock("data_receiver")
	.setChance(tier1DroneAttritionInput)
	.inputItem('kubejs:scout_drone_active')
	.setChance(1)
	.setPerTick(true)
	.inputFE(4000*16)
	.outputFluid(Fluid.of('kubejs:raw_data', 10))
	.duration(1200)





	  //Refined Data
	event.recipes.multiblocked.multiblock("super_computational_matrix")
		.inputFluid(Fluid.of('kubejs:raw_data', 10000))
		//.inputFluid(Fluid.of('kubejs:gelid_cryotheum', 1000))
		.inputFluid(Fluid.of('kubejs:high_capacity_coolant', 1000))
		.inputItem('4x kubejs:ai_chip')
		.outputFluid(Fluid.of('kubejs:refined_data', 100))
		.outputFluid(Fluid.of('kubejs:heated_coolant', 500))
		.setPerTick(true)
		.inputItem('kubejs:energy_orb_full')
		.outputItem('kubejs:energy_orb_empty')
		//.inputFE(4000*64)
		.duration(800)
	  
		//Baby's first Asteroid
	event.custom({
		"type":"mekanism:reaction",
		"itemInput":{
			"ingredient":{"item":'kubejs:asteroid_location_data_chip'}
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
		}).id("mbm2:asteroid_tier_1_location")

	  //Asteroids w/ Raw Data
	event.recipes.multiblocked.multiblock("data_processing_unit")
		.inputFluid(Fluid.of('kubejs:raw_data', 1000))
		.inputItem('kubejs:asteroid_location_data_chip')
		.setChance(0.60)
		.outputItem('kubejs:asteroid_tier_1')
		.setChance(0.40)
		.outputItem('kubejs:asteroid_tier_2')
		.setChance(1)
		.setPerTick(true)
		.inputFE(4000*32)
		.duration(400)
	//Asteroids w/ Refined Data
	  event.recipes.multiblocked.multiblock("data_processing_unit")
		.inputFluid(Fluid.of('kubejs:refined_data', 100))
		.inputItem('kubejs:asteroid_location_data_chip')
		.setChance(0.30)
		.outputItem('kubejs:asteroid_tier_1')
		.setChance(0.50)
		.outputItem('kubejs:asteroid_tier_2')
		.setChance(0.20)
		.outputItem('kubejs:asteroid_tier_3')
		.setChance(1)
		.setPerTick(true)
		.inputFE(4000*32)
		.duration(200)
		//Planets w/ Raw Data
	  event.recipes.multiblocked.multiblock("data_processing_unit")
		  .inputFluid(Fluid.of('kubejs:raw_data', 1000))
		  .inputItem('kubejs:planet_location_data_chip')
		  .setChance(0.5)
		  .outputItem('kubejs:planet_green')
		  .setChance(0.25)
		  .outputItem('kubejs:planet_blue')
		  .setChance(1)
		  .setPerTick(true)
		  .inputFE(4000*32)
		  .duration(400)

	  //Planets w/ Refined Data
		event.recipes.multiblocked.multiblock("data_processing_unit")
		  .inputFluid(Fluid.of('kubejs:refined_data', 100))
		  .inputItem('kubejs:planet_location_data_chip')
		  .setChance(0.60)
		  .outputItem('kubejs:planet_green')
		  .setChance(0.30)
		  .outputItem('kubejs:planet_blue')
		  .setChance(0.20)
		  .outputItem('kubejs:planet_red')
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
		.setChance(tier1DroneAttritionOutput)
		.outputItem('kubejs:harvester_drone')
		.setChance(1)
		.outputItem('64x kubejs:asteroid_chunk_tier_1')
		.outputItem('64x beyond_earth:moon_stone')
		.setChance(0.75)
		.outputItem('64x thermal:oil_red_sand')
		//.setChance(0.50)
		//.outputItem('64x beyond_earth:moon_sand')
		.setChance(0.25)
		.outputItem('32x beyond_earth:moon_cheese_ore')
		.setChance(0.25)
		.outputItem('32x rftoolsbase:dimensionalshard')
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
		.setChance(0.50)
		.outputItem('32x rftoolsbase:dimensionalshard')
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
		.setChance(0.75)
		.outputItem('32x rftoolsbase:dimensionalshard')
		.setChance(0.50)
		.outputItem('64x beyond_earth:venus_sand')
		//.setChance(0.25)
		//.outputItem('32X thermal:oil_red_sand')
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
		.inputItem('kubejs:energy_orb_full')
		.outputItem('kubejs:energy_orb_empty')
		//.inputFE(4000*32)
		.duration(500)

		//Blueprint Recycling
		event.recipes.mekanismCrushing('30x kubejs:blueprint_fragment', 'kubejs:ripped_blueprint').id(`mbm2:mekanism/crushing/blueprint_fragment`)
		event.recipes.immersiveengineeringCrusher('25x kubejs:blueprint_fragment', 'kubejs:ripped_blueprint').id(`mbm2:immersiveengineering/crushing/blueprint_fragment`)

		let asteroidComponents = [
			{
				'tier': 1,
				'chunk': ['platinum','iridium', 'vibranium'],
				'dust': ['molybdenum','niobium', 'scandium'],
				'fluid': 'chemlib:helium_fluid',
			},
			{
				'tier': 2,
				'chunk': ['iridium','vibranium', 'palladium'],
				'dust': ['ruthenium','rhodium', 'plutonium'],
				'fluid': 'chemlib:argon_fluid',
			},
			{
				'tier': 3,
				'chunk': ['vibranium','uru', 'draconium'],
				'dust': ['vanadium','polonium', 'niobium'],
				'fluid': 'chemlib:krypton_fluid',
			},
		]


		asteroidComponents.forEach(asteroid => {
			//Dust
			event.recipes.multiblocked.multiblock("powder_mill")
				.inputItem(`kubejs:asteroid_chunk_tier_${asteroid.tier}`)
				.setPerTick(true)
				.inputFE(2000*(10**asteroid.tier))
				.duration(200)
				.setChance(0.02)
				.outputItem(`kubejs:asteroid_dust_tier_${asteroid.tier}`)

			event.recipes.multiblocked.multiblock('sorter_mk2')
				.inputItem(`8x kubejs:asteroid_chunk_tier_${asteroid.tier}`)
				.outputItem(`3x #forge:ores/chunk/${asteroid.chunk[0]}`)
				.outputItem(`3x #forge:ores/chunk/${asteroid.chunk[1]}`)
				.outputItem(`2x #forge:ores/chunk/${asteroid.chunk[2]}`)
				.setPerTick(true)
				.inputFE(500*256)
				.duration(200)
			event.recipes.thermal.centrifuge([
				Item.of(`#forge:dusts/${asteroid.dust[0]}`).withChance(0.50),
				Item.of(`#forge:dusts/${asteroid.dust[1]}`).withChance(0.30),
				Item.of(`#forge:dusts/${asteroid.dust[2]}`).withChance(0.20),
				Fluid.of(asteroid.fluid, 250)
			], `kubejs:asteroid_dust_tier_${asteroid.tier}`).id(`mbm2:centrifuge/asteroid_tier_${asteroid.tier}_dust`)
		});


		/////////////////////////TRADES///////////////////////////
		global.droneTrades.forEach(item => {
			let itemName = item.name.split(':')[1]
			
			global.planetTypes.forEach(type => {
				let itemList = []
				global.droneTrades.forEach(trade => {
					if(trade.planet.includes(type)) {
						itemList.push(`kubejs:trade_${trade.name.split(':')[1]}`)
					}
					return itemList
				})
				//Trade Finding
				event.recipes.multiblocked.multiblock("data_receiver")
				.setChance(0.00)
				.inputItem(`kubejs:planet_${type}`)
				.setChance(tier1DroneAttritionInput)
				.inputItem('kubejs:trade_drone_active')
				.setChance(0.5/itemList.length)
				.outputItems(itemList)
				.setPerTick(true)
				.setChance(1)
				.inputFE(4000*16)
				.duration(1200)
			});

			//Loading Cargo Drones
			event.recipes.multiblocked.multiblock("drone_bay")
			.inputItem(`kubejs:cargo_drone`)
			.inputItem(`kubejs:trade_${itemName}`)
			.inputItem(Item.of(item.name, item.amount))
			.outputItem(`kubejs:cargo_drone_${itemName}`)
			.setPerTick(true)
			.inputFE(100000)
			.duration(400)
			
			//Launching Cargo Drones
			event.recipes.multiblocked.multiblock("railgun")
			.inputItem(`kubejs:cargo_drone_${itemName}`)
			.inputItem('kubejs:tracking_chip')
			.outputItem(`kubejs:cargo_drone_${itemName}_active`)
			.inputFE(10000000) //10m, need the top tier energy input hatch for this
			.duration(50)

			item.planet.forEach(planet => {
				//Trading
				event.recipes.multiblocked.multiblock("drone_bay")
				.inputItem(`kubejs:cargo_drone_${itemName}_active`)
				.setChance(0.00)
				.inputItem(`kubejs:planet_${planet}`)
				.setChance(tier1DroneAttritionOutput)
				.outputItem(`kubejs:cargo_drone`)
				.setChance(1)
				.outputItem(Item.of(`kubejs:galactic_standard_currency`, item.pay))
				.setPerTick(true)
				.inputFE(100000)
				.duration(2000)
			})
		});
		/////////////////////////REQUESTS///////////////////////////
		global.droneRequests.forEach(item => {
			let itemName = item.name.split(':')[1]

			//Setting Requests
		  event.recipes.multiblocked.multiblock("data_processing_unit")
			  .inputFluid(Fluid.of('kubejs:raw_data', 100))
			  .inputItem(item.input)
			  .inputItem('kubejs:empty_request_chip')
			  .outputItem(`kubejs:request_${itemName}`)
			  .setPerTick(true)
			  .inputFE(4000*32)
			  .duration(400)


			////Loading Cargo Drones
			//event.recipes.multiblocked.multiblock("drone_bay")
			//.inputItem(`kubejs:cargo_drone_empty`)
			//.inputItem(`kubejs:request_${itemName}`)
			//.inputItem(Item.of(`kubejs:galactic_standard_currency`, item.cost))
			//.outputItem(`kubejs:cargo_drone_${itemName}`)
			//.setPerTick(true)
			//.inputFE(100000)
			//.duration(100)
			//
			////Launching Cargo Drones
			//event.recipes.multiblocked.multiblock("railgun")
			//.inputItem(`kubejs:cargo_drone_${itemName}`)
			//.inputItem('kubejs:tracking_chip')
			//.outputItem(`kubejs:cargo_drone_${itemName}_active`)
			//.inputFE(10000000) //10m, need the top tier energy input hatch for this
			//.duration(50)

			item.planet.forEach(planet => {

				//Posting Requests
				event.recipes.multiblocked.multiblock("trade_center")
				.inputItem(`kubejs:request_${itemName}`)
				.inputItem(Item.of(`kubejs:galactic_standard_currency`, item.cost))
				.setChance(0.00)
				.inputItem(`kubejs:planet_${planet}`)
				.setChance(1)
				.outputItem(Item.of(item.name, item.amount))
				.setPerTick(true)
				.inputFE(1000000)
				.duration(2000)


				////Trading
				//event.recipes.multiblocked.multiblock("drone_bay")
				//.inputItem(`kubejs:cargo_drone_${itemName}_active`)
				//.setChance(0.00)
				//.inputItem(`kubejs:planet_${planet}`)
				//.setChance(tier1DroneAttritionOutput)
				//.outputItem(`kubejs:cargo_drone_empty`)
				//.setChance(1)
				//.outputItem(Item.of(item.name, item.amount))
				//.setPerTick(true)
				//.inputFE(100000)
				//.duration(2000)
			})
		})

	////////////////////RECIPES////////////////////////////////////////////////////
	/////////////////////////////////////RECIPES///////////////////////////////////
	/////////////////////////////////////////////////////////RECIPES///////////////
	
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

	  //Scout Drone
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

});