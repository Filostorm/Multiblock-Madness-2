//onEvent('worldgen.remove', event => {
//	event.removeOres(ores => {
//	  ores.blocks = [
//		'beyond_earth:the_end_iron_ore',
//		'beyond_earth:the_end_desh_ore',
//		'beyond_earth:the_end_cheese_ore',
//	]
//	})
//});


onEvent('worldgen.add', event => {

	
	const endSurfaceChance = 0.5

	// use the anchors helper from the event (NOTE: this requires newer versions of KubeJS)
	// if you are using an older version of KubeJS, you can use the methods in the ore properties class
	const {anchors} = event


////////////////////////////////////////////	the_end	////////////////////////////////
	// Base Titanium Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:the_end_titanium_ore'
	
		global.stoneTypes.forEach((type) => {
			if (type.material != 'bedrock') {
				ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_titanium_ore`)
			}
		})
		    

		ore.count([1, 2])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(15),
						anchors.absolute(65)
				)
		ore.size = 25
		ore.noSurface = endSurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = "minecraft:the_end"
	})
	
	// Inserted Runite
	event.addOre((ore) => {
		ore.id = 'kubejs:nether_rune'
			global.stoneTypes.forEach((type) => {
				if (type.material != 'bedrock' && type.material != 'deepslate') {
					ore.addTarget(`kubejs:${type.material}_titanium_ore`, `kubejs:${type.material}_rune_ore`)
				}
			})
		ore.count(200)
				.squared()
				.uniformHeight(
						anchors.aboveBottom(15),
						anchors.absolute(65)
				)
		ore.size = 10
		ore.noSurface = endSurfaceChance
		ore.worldgenLayer = "underground_decoration"
		ore.chance = 0
		ore.biomes = "minecraft:the_end"
	})

	// The End Certus Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:the_end_certus_ore'
	 
		global.stoneTypes.forEach((type) => {
			if (type.material != 'bedrock') {
			ore.addTarget(`#forge:${type.material}`, `excavated_variants:${type.material}_certus_quartz_ore`)
			}
		})

		ore.count([1, 2])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(15),
						anchors.absolute(65)
				)
		ore.size = 20
		ore.noSurface = endSurfaceChance
		ore.worldgenLayer = "underground_ores"
		  ore.chance = 0
		  ore.biomes = "minecraft:the_end"
	})

	// The End Uranium Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:the_end_uranium_ore'
	 
		global.stoneTypes.forEach((type) => {
			if (type.material != 'bedrock') {
			ore.addTarget(`#forge:${type.material}`, `excavated_variants:${type.material}_uranium_ore`)
			}
		})
		ore.count([1, 2])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(15),
						anchors.absolute(65)
				)
		ore.size = 20
		ore.noSurface = endSurfaceChance
		ore.worldgenLayer = "underground_ores"
		  ore.chance = 0
		  ore.biomes = "minecraft:the_end"
	})
	/*
	// Inserted Thorium
	event.addOre((ore) => {
		ore.id = 'kubejs:nether_thorium'
			global.stoneTypes.forEach((type) => {
				if (type.material != 'bedrock' && type.material != 'deepslate') {
					ore.addTarget(`excavated_variants:${type.material}_uranium_ore`, `kubejs:${type.material}_thorium_ore`)
				}
			})
		ore.count(100)
				.squared()
				.uniformHeight(
						anchors.aboveBottom(15),
						anchors.absolute(65)
				)
		ore.size = 10
		ore.noSurface = 0
		ore.worldgenLayer = "underground_decoration"
		ore.chance = 0
		ore.biomes = "minecraft:the_end"
	})*/
	
	// The End Magnesium Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:nether_magnesium_ore'
	 
		global.stoneTypes.forEach((type) => {
			if (type.material != 'deepslate' && type.material != 'bedrock') {
			ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_magnesium_ore`)
			}
		})

		ore.count([1, 4])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(15),
						anchors.absolute(65)
				)
		ore.size = 20
		ore.noSurface = endSurfaceChance
		ore.worldgenLayer = "underground_ores"
		  ore.chance = 0
		  ore.biomes = "minecraft:the_end"
	})
	/*
	// Inserted Lead
	event.addOre((ore) => {
		ore.id = 'kubejs:nether_lead'
			global.stoneTypes.forEach((type) => {
				if (type.material != 'bedrock' && type.material != 'deepslate') {
					ore.addTarget(`excavated_variants:${type.material}_uranium_ore`, `excavated_variants:${type.material}_lead_ore`)
				}
			})
		ore.count(100)
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(50)
				)
		ore.size = 10
		ore.noSurface = endSurfaceChance
		ore.worldgenLayer = "underground_decoration"
		ore.chance = 0
		ore.biomes = "minecraft:the_end"
	})*/

/*
	// Inserted the_end luminite
	event.addOre((ore) => {
		ore.id = 'kubejs:the_end_luminite'

			global.stoneTypes.forEach((type) => {
				if (type.material != 'bedrock') {
				ore.addTarget(`excavated_variants:${type.material}_iron_ore`, `kubejs:${type.material}_luminite_ore`)
				ore.addTarget(`excavated_variants:${type.material}_gold_ore`, `kubejs:${type.material}_luminite_ore`)
				ore.addTarget(`excavated_variants:${type.material}_zinc_ore`, `kubejs:${type.material}_luminite_ore`)
				ore.addTarget(`excavated_variants:${type.material}_nickel_ore`, `kubejs:${type.material}_luminite_ore`)
				ore.addTarget(`kubejs:${type.material}_aluminum_ore`, `kubejs:${type.material}_luminite_ore`)
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
		ore.biomes = "minecraft:the_end"
	})
*/
})