onEvent('worldgen.remove', event => {
	event.removeOres(ores => {
	  ores.blocks = [ 'minecraft:coal_ore', 'minecraft:iron_ore', 'minecraft:gold_ore', 'minecraft:copper_ore', 'minecraft:quartz_ore', 'minecraft:lapis_ore', 'minecraft:emerald_ore', 'minecraft:diamond_ore', 'minecraft:redstone_ore', 'mna:vinteum_ore']
	})
	event.removeFeatureById('top_layer_modification', ['beyond_earth:oil_well'])
	
});

onEvent('tags.blocks', event => {
	event.add(`forge:darkstone`, 'forbidden_arcanus:darkstone')
	event.add(`forge:smooth_basalt`, 'minecraft:smooth_basalt')
	event.add(`forge:tuff`, 'minecraft:tuff')
})

onEvent('tags.items', event => {
	event.add(`forge:darkstone`, 'forbidden_arcanus:darkstone')	  
	event.add(`forge:smooth_basalt`, 'minecraft:smooth_basalt')
	event.add(`forge:tuff`, 'minecraft:tuff')
})

onEvent('worldgen.add', event => {

	
	const netherSurfaceChance = 0.75



	// use the anchors helper from the event (NOTE: this requires newer versions of KubeJS)
	// if you are using an older version of KubeJS, you can use the methods in the ore properties class
	const {anchors} = event

	global.newMaterialParts.forEach((item) => {
		//Poor Ores
		if (item.tier == 1 && item.ore && item.type != 'gem') {
			event.addOre((ore) => {
				ore.id = `kubejs:poor_${item.material}_ore` // (optional, but recommended) custom id for the feature
			
				ore.addTarget('minecraft:stone', `kubejs:poor_${item.material}_ore`)
				global.stoneTypes.forEach((type) => {
					ore.addTarget(`#forge:${type.material}`, `kubejs:poor_${type.material}_${item.material}_ore`)
				})
				ore.count([12, 20])                      // generate between 15 and 50 veins (chosen at random), you could use a single number here for a fixed amount of blocks
						.squared()                       // randomly spreads the ores out across the chunk, instead of generating them in a column
						.uniformHeight(				 // triangleHeight, generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
								anchors.aboveBottom(48), // the lower bound should be 32 blocks above the bottom of the world, so in this case, Y = -32 since minY = -64
								anchors.absolute(256)	 // the upper bound, meanwhile is set to be just exactly at Y = 96
						)								 // in total, the ore can be found between Y levels -32 and 96, and will be most likely at Y = (96 + -32) / 2 = 32
			
    		    // more, optional parameters (default values are shown here)
    		    ore.size = 6                            // max. vein size
    		    ore.noSurface = 0                     // chance to discard if the ore would be exposed to air
    		    ore.worldgenLayer = "underground_ores"  // what generation step the ores should be generated in (see below)
    		  	ore.chance = 0							// if != 0 and count is unset, the ore has a 1/n chance to generate per chunk
				ore.biomes = {
				  not: "^nether"
				}
    		})
		}
	})

	

	// Base Coal Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:coal_ore'
	
		ore.addTarget('#minecraft:stone_ore_replaceables', 'minecraft:coal_ore')
		ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_coal_ore')
		global.stoneTypes.forEach((type) => {
			if (type.material != 'deepslate') {
				ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_coal_ore`)
			}
		})

		ore.count([6, 10])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(256)
				)
		ore.size = 20
		ore.noSurface = 0
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = {
			not: "^nether"
		}
	})
	

	// Base Copper Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:copper_ore'
	
		ore.addTarget('stone', 'minecraft:copper_ore')
		ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_copper_ore')
		global.stoneTypes.forEach((type) => {
			if (type.material != 'deepslate') {
				ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_copper_ore`)
			}
		})

		ore.count([6, 10])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(256)
				)
		ore.size = 25
		ore.noSurface = 0
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = {
			not: "^nether"
		  }
	})

	// Base Tin Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:tin_ore'
	
		ore.addTarget('stone', 'thermal:tin_ore')
		ore.addTarget('minecraft:deepslate', 'thermal:deepslate_tin_ore')
		global.stoneTypes.forEach((type) => {
			if (type.material != 'deepslate') {
				ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_tin_ore`)
			}
		})

		ore.count([6, 10])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(32),
						anchors.absolute(256)
				)
		ore.size = 25
		ore.noSurface = 0
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = {
			not: "^nether"
		  }
	})
	
	// Inserted Apatite Veins to Tin Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:apatite_ore'

		ore.addTarget('thermal:tin_ore', 'thermal:apatite_ore')
		ore.addTarget('thermal:deepslate_tin_ore', 'thermal:deepslate_apatite_ore')

		ore.count(200)
				.squared()
				.uniformHeight(
						anchors.aboveBottom(32),
						anchors.absolute(256)
				)
		ore.size = 15
		ore.noSurface = 0
		ore.worldgenLayer = "underground_decoration"
		  ore.chance = 0
	})
	// Inserted Fluorite to Tin Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:fluorite_ore'

		ore.addTarget('thermal:tin_ore', 'mekanism:fluorite_ore')
		ore.addTarget('thermal:deepslate_tin_ore', 'mekanism:deepslate_fluorite_ore')

		ore.count(200)
				.squared()
				.uniformHeight(
						anchors.aboveBottom(32),
						anchors.absolute(256)
				)
		ore.size = 15
		ore.noSurface = 0
		ore.worldgenLayer = "underground_decoration"
		  ore.chance = 0
	})

	// Inserted Nickel Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:nickel_ore'

		ore.addTarget('minecraft:iron_ore', 'thermal:nickel_ore')
		ore.addTarget('minecraft:deepslate_iron_ore', 'thermal:deepslate_nickel_ore')
		global.stoneTypes.forEach((type) => {
			if (type.material != 'deepslate') {
				ore.addTarget(`kubejs:${type.material}_iron_ore`, `kubejs:${type.material}_nickel_ore`)
			}
		})

		ore.count(200)
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(256)
				)
		ore.size = 10
		ore.noSurface = 0
		ore.worldgenLayer = "underground_decoration"
		  ore.chance = 0
	})

	// Inserted Gold Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:gold_ore'

		//Add to Iron
		ore.addTarget('minecraft:iron_ore', 'minecraft:gold_ore')
		ore.addTarget('minecraft:deepslate_iron_ore', 'minecraft:deepslate_gold_ore')
		global.stoneTypes.forEach((type) => {
			if (type.material != 'deepslate') {
				ore.addTarget(`kubejs:${type.material}_iron_ore`, `kubejs:${type.material}_gold_ore`)
			}
		})
		//Add to copper
		ore.addTarget('minecraft:copper_ore', 'minecraft:gold_ore')
		ore.addTarget('minecraft:deepslate_copper_ore', 'minecraft:deepslate_gold_ore')
		global.stoneTypes.forEach((type) => {
			if (type.material != 'deepslate') {
				ore.addTarget(`kubejs:${type.material}_copper_ore`, `kubejs:${type.material}_gold_ore`)
			}
		})

		ore.count(200)
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(256)
				)
		ore.size = 15
		ore.noSurface = 0
		ore.worldgenLayer = "underground_decoration"
		  ore.chance = 0
	})
	
	// Base Redstone Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:redstone_ore'
	
		ore.addTarget('stone', 'minecraft:redstone_ore')
		ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_redstone_ore')
		global.stoneTypes.forEach((type) => {
			if (type.material != 'deepslate') {
				ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_redstone_ore`)
			}
		})

		ore.count([3, 7])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(20)
				)
		ore.size = 20
		ore.noSurface = 0
		ore.worldgenLayer = "underground_ores"
		  ore.chance = 0
	})

	// Inserted Cinnabar Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:cinnabar_ore'

		ore.addTarget('minecraft:redstone_ore', 'thermal:cinnabar_ore')
		ore.addTarget('minecraft:deepslate_redstone_ore', 'thermal:deepslate_cinnabar_ore')

		ore.count(200)
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(20)
				)
		ore.size = 10
		ore.noSurface = 0
		ore.worldgenLayer = "underground_decoration"
		ore.chance = 0
	})

	// Inserted Ruby Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:ruby_ore'

		//Add to Iron
		ore.addTarget('minecraft:redstone_ore', 'thermal:ruby_ore')
		ore.addTarget('minecraft:deepslate_redstone_ore', 'thermal:deepslate_ruby_ore')

		ore.count(200)
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(20)
				)
		ore.size = 10
		ore.noSurface = 0
		ore.worldgenLayer = "underground_decoration"
		  ore.chance = 0
	})


	// Base Iron Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:nether_iron_ore'
	
		global.stoneTypes.forEach((type) => {
				ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_iron_ore`)
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
				ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_zinc_ore`)
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
				ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_nickel_ore`)
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
				ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_gold_ore`)
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
				ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_silver_ore`)
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
			if (type.material != 'netherrack') {
				ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_cobalt_ore`)
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

	


	// Inserted Dense Ore
	event.addOre((ore) => {
		ore.id = 'kubejs:dense_ores'

		global.newMaterialParts.forEach((item) => {
			global.stoneTypes.forEach((type) => {
				if (item.ore) {
					ore.addTarget(`kubejs:${type.material}_${item.material}_ore`, `kubejs:rich_${type.material}_${item.material}_ore`)
				}
			})
		})

		ore.count(200)
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(256)
				)
		ore.size = 10
		ore.noSurface = 0
		ore.worldgenLayer = "underground_decoration"
		  ore.chance = 0
	})
	

	// Inserted Nether Sulfur
	event.addOre((ore) => {
		ore.id = 'kubejs:nether_sulfur'

		global.newMaterialParts.forEach((item) => {
			global.stoneTypes.forEach((type) => {
				if (item.ore) {
					ore.addTarget(`kubejs:${type.material}_${item.material}_ore`, `kubejs:${type.material}_sulfur_ore`)
				}
			})
		})

		ore.count(200)
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