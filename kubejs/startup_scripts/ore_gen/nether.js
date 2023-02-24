
onEvent('worldgen.add', event => {

	
	const netherSurfaceChance = 0.75

	// use the anchors helper from the event (NOTE: this requires newer versions of KubeJS)
	// if you are using an older version of KubeJS, you can use the methods in the ore properties class
	const {anchors} = event


////////////////////////////////////////////	NETHER	////////////////////////////////
	// Base Iron Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:nether_iron_ore'
	
		global.stoneTypes.forEach((type) => {
				ore.addTarget(`#forge:${type.material}`, `excavated_variants:${type.material}_iron_ore`)
		})
		    

		ore.count([1, 6])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(25),
						anchors.absolute(150)
				)
		ore.size = 25
		ore.noSurface = netherSurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = "^nether"
	})
	
	// Base Zinc Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:nether_zinc_ore'
	
		global.stoneTypes.forEach((type) => {
				ore.addTarget(`#forge:${type.material}`, `excavated_variants:${type.material}_zinc_ore`)
		})
		    

		ore.count([1, 5])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(200)
				)
		ore.size = 25
		ore.noSurface = netherSurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = "^nether"
	})

	// Base Nickel Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:nether_nickel_ore'
	
		global.stoneTypes.forEach((type) => {
				ore.addTarget(`#forge:${type.material}`, `excavated_variants:${type.material}_nickel_ore`)
		})
		    

		ore.count([1, 5])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(32),
						anchors.absolute(200)
				)
		ore.size = 15
		ore.noSurface = netherSurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = "^nether"
	})

	// Base Gold Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:nether_gold_ore'
	
		global.stoneTypes.forEach((type) => {
				ore.addTarget(`#forge:${type.material}`, `excavated_variants:${type.material}_gold_ore`)
		})
		    

		ore.count([1, 5])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(32),
						anchors.absolute(200)
				)
		ore.size = 25
		ore.noSurface = netherSurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = "^nether"
	})

	// Base Silver Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:nether_silver_ore'
	
		global.stoneTypes.forEach((type) => {
				ore.addTarget(`#forge:${type.material}`, `excavated_variants:${type.material}_silver_ore`)
		})
		    

		ore.count([1, 5])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(32),
						anchors.absolute(200)
				)
		ore.size = 25
		ore.noSurface = netherSurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = "^nether"
	})

	// Base Aluminum Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:nether_aluminum_ore'
	
		global.stoneTypes.forEach((type) => {
				ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_aluminum_ore`)
		})
		    

		ore.count([1, 4])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(75),
						anchors.absolute(200)
				)
		ore.size = 25
		ore.noSurface = netherSurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = "^nether"
	})

	// Base Cobalt Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:nether_cobalt_ore'
	
		ore.addTarget('netherrack', 'tconstruct:cobalt_ore')
		global.stoneTypes.forEach((type) => {
			if (type.material != 'netherrack' && type.material != 'bedrock') {
				ore.addTarget(`#forge:${type.material}`, `excavated_variants:${type.material}_cobalt_ore`)
			}
		})
		    

		ore.count([1, 4])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(5),
						anchors.absolute(100)
				)
		ore.size = 25
		ore.noSurface = netherSurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = "^nether"
	})

	

	// Base Quartz Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:nether_quartz_ore'
	
		ore.addTarget('netherrack', 'minecraft:quartz_ore')
		global.stoneTypes.forEach((type) => {
			if (type.material != 'netherrack' && type.material != 'bedrock') {
				ore.addTarget(`#forge:${type.material}`, `excavated_variants:${type.material}_quartz_ore`)
			}
		})
		    

		ore.count([3, 8])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(30),
						anchors.absolute(150)
				)
		ore.size = 30
		ore.noSurface = netherSurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = "^nether"
	})

	// Inserted Certus Quartz
	event.addOre((ore) => {
		ore.id = 'kubejs:nether_certus_quartz'

		ore.addTarget(`minecraft:nether_quartz_ore`, `excavated_variants:netherrack_certus_quartz_ore`)
		
			global.stoneTypes.forEach((type) => {
				if (type.material != 'deepslate' && type.material != 'bedrock' && type.material != 'netherrack') {
				ore.addTarget(`excavated_variants:${type.material}_quartz_ore`, `excavated_variants:${type.material}_certus_quartz_ore`)
				
				}
			})
		ore.count(300)
				.squared()
				.uniformHeight(
						anchors.aboveBottom(30),
						anchors.absolute(150)
				)
		ore.size = 10
		ore.noSurface = 0
		ore.worldgenLayer = "underground_decoration"
		ore.chance = 0
		ore.biomes = "^nether"
	})

	// Base Blazing Quartz Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:nether_blazing_quartz_ore'
	
		ore.addTarget('netherrack', 'malum:blazing_quartz_ore')
		global.stoneTypes.forEach((type) => {
			if (type.material != 'netherrack' && type.material != 'bedrock') {
				ore.addTarget(`#forge:${type.material}`, `excavated_variants:${type.material}_blazing_quartz_ore`)
			}
		})
		    

		ore.count([1, 4])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(5),
						anchors.absolute(75)
				)
		ore.size = 25
		ore.noSurface = netherSurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = "^nether"
	})


	//// Inserted Dense Ore
	//event.addOre((ore) => {
	//	ore.id = 'kubejs:dense_ores'
//
	//	global.newMaterialParts.forEach((item) => {
	//		global.stoneTypes.forEach((type) => {
	//			if (item.ore) {
	//				ore.addTarget(`excavated_variants:${type.material}_${item.material}_ore`, `kubejs:rich_${type.material}_${item.material}_ore`)
	//			}
	//		})
	//	})
//
	//	ore.count(200)
	//			.squared()
	//			.uniformHeight(
	//					anchors.aboveBottom(0),
	//					anchors.absolute(256)
	//			)
	//	ore.size = 10
	//	ore.noSurface = 0
	//	ore.worldgenLayer = "underground_decoration"
	//	  ore.chance = 0
	//})
	
	// Nether Redstone Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:nether_redstone_ore'
	 
		global.stoneTypes.forEach((type) => {
			if (type.material != 'deepslate' && type.material != 'bedrock') {
			ore.addTarget(`#forge:${type.material}`, `excavated_variants:${type.material}_redstone_ore`)
			}
		})

		ore.count([1, 4])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(100)
				)
		ore.size = 20
		ore.noSurface = netherSurfaceChance
		ore.worldgenLayer = "underground_ores"
		  ore.chance = 0
		  ore.biomes = "^nether"
	})
	
	
	// Nether Thorium Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:nether_thorium_ore'
	 
		global.stoneTypes.forEach((type) => {
			if (type.material != 'deepslate' && type.material != 'bedrock') {
			ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_thorium_ore`)
			}
		})

		ore.count([1, 4])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(100),
						anchors.absolute(200)
				)
		ore.size = 20
		ore.noSurface = netherSurfaceChance
		ore.worldgenLayer = "underground_ores"
		  ore.chance = 0
		  ore.biomes = "^nether"
	})


	// Inserted Nether Lumite
	event.addOre((ore) => {
		ore.id = 'kubejs:nether_lumite'

		ore.addTarget(`malum:blazing_quartz_ore`, `kubejs:netherrack_lumite_ore`)
			global.stoneTypes.forEach((type) => {
				if (type.material != 'deepslate' && type.material != 'bedrock' && type.material != 'netherrack') {
				ore.addTarget(`excavated_variants:${type.material}_gold_ore`, `kubejs:${type.material}_lumite_ore`)
				ore.addTarget(`kubejs:${type.material}_aluminum_ore`, `kubejs:${type.material}_lumite_ore`)
				//ore.addTarget(`excavated_variants:${type.material}_blazing_quartz_ore`, `kubejs:${type.material}_lumite_ore`)
				}
			})
		ore.count(400)
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(200)
				)
		ore.size = 10
		ore.noSurface = 0
		ore.worldgenLayer = "underground_decoration"
		ore.chance = 0
		ore.biomes = "^nether"
	})

	// Inserted Nether Mithril
	event.addOre((ore) => {
		ore.id = 'kubejs:nether_mithril'

		ore.addTarget(`tconstruct:cobalt_ore`, `kubejs:netherrack_mithril_ore`)
			global.stoneTypes.forEach((type) => {
				if (type.material != 'deepslate' && type.material != 'bedrock' && type.material != 'netherrack') {
				ore.addTarget(`excavated_variants:${type.material}_cobalt_ore`, `kubejs:${type.material}_mithril_ore`)
				}
			})
		ore.count(200)
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(100)
				)
		ore.size = 10
		ore.noSurface = 0
		ore.worldgenLayer = "underground_decoration"
		ore.chance = 0
		ore.biomes = "^nether"
	})

	// Inserted Nether Sulfur
	event.addOre((ore) => {
		ore.id = 'kubejs:nether_sulfur'

		global.stoneTypes.forEach((type) => {
			if (type.material != 'deepslate' && type.material != 'bedrock') {
			ore.addTarget(`excavated_variants:${type.material}_iron_ore`, `excavated_variants:${type.material}_sulfur_ore`)
			ore.addTarget(`excavated_variants:${type.material}_zinc_ore`, `excavated_variants:${type.material}_sulfur_ore`)
			ore.addTarget(`excavated_variants:${type.material}_nickel_ore`, `excavated_variants:${type.material}_sulfur_ore`)
			}
		})

		ore.count(400)
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(200)
				)
		ore.size = 10
		ore.noSurface = 0
		ore.worldgenLayer = "underground_decoration"
		ore.chance = 0
		ore.biomes = "^nether"
	})
})