onEvent('worldgen.remove', event => {
	event.removeOres(ores => {
	  ores.blocks = [
		'beyond_earth:moon_iron_ore',
		'beyond_earth:moon_desh_ore',
		'beyond_earth:moon_cheese_ore',
	]
	})
});


onEvent('worldgen.add', event => {

	console.log('moon')

	const moonSurfaceChance = 0

	// use the anchors helper from the event (NOTE: this requires newer versions of KubeJS)
	// if you are using an older version of KubeJS, you can use the methods in the ore properties class
	const {anchors} = event

	

////////////////////////////////////////////	moon	////////////////////////////////
	// Base Iron Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:moon_iron_ore'
	
		global.stoneTypes.forEach((type) => {
			if (Item.of(`excavated_variants:${type.material}_iron_ore`) != null) {
				ore.addTarget(`#forge:${type.material}`, `excavated_variants:${type.material}_iron_ore`)}
		})
		    

		ore.count([1, 6])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(25),
						anchors.absolute(100)
				)
		ore.size = 25
		ore.noSurface = moonSurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = "beyond_earth:moon_desert"
	})


	// Base Platinum Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:moon_platinum_ore'
	
		global.stoneTypes.forEach((type) => {
			if (type.material != 'bedrock') {
				ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_platinum_ore`)
			}
		})
		    

		ore.count([1, 4])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(5),
						anchors.absolute(100)
				)
		ore.size = 25
		ore.noSurface = moonSurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = "beyond_earth:moon_desert"
	})

	// Inserted Runite
	event.addOre((ore) => {
		ore.id = 'kubejs:moon_rune'
			global.stoneTypes.forEach((type) => {
				if (type.material != 'bedrock' && type.material != 'deepslate') {
					ore.addTarget(`kubejs:${type.material}_platinum_ore`, `kubejs:${type.material}_rune_ore`)
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
		ore.biomes = "beyond_earth:moon_desert"
	})

	// Base Osmium Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:moon_osmium_ore'
	
		global.stoneTypes.forEach((type) => {
			if (Item.of(`excavated_variants:moon_stone_osmium_ore`) != null) {
				ore.addTarget(`#forge:${type.material}`, `excavated_variants:moon_stone_osmium_ore`)
			}
		})
		    

		ore.count([1, 4])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(5),
						anchors.absolute(100)
				)
		ore.size = 25
		ore.noSurface = moonSurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = "beyond_earth:moon_desert"
	})
	
	// Inserted Aluminum
	event.addOre((ore) => {
		ore.id = 'kubejs:moon_aluminum'
			//global.stoneTypes.forEach((type) => {
			//	if (type.material != 'bedrock' && type.material != 'deepslate') {
				ore.addTarget(`excavated_variants:moon_stone_osmium_ore`, `kubejs:moon_stone_aluminum_ore`)
			//	}
			//})
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
		ore.biomes = "beyond_earth:moon_desert"
	})

	// Moon Certus Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:moon_certus_ore'
	 
		global.stoneTypes.forEach((type) => {
			if (Item.of(`excavated_variants:${type.material}_certus_quartz_ore`) != null) {
			ore.addTarget(`#forge:${type.material}`, `excavated_variants:${type.material}_certus_quartz_ore`)
			}
		})

		ore.count([1, 2])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(25),
						anchors.absolute(100)
				)
		ore.size = 20
		ore.noSurface = 0
		ore.worldgenLayer = "underground_ores"
		  ore.chance = 0
		  ore.biomes = "beyond_earth:moon_desert"
	})

	// Moon Desh Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:moon_desh_ore'
	 
			ore.addTarget(`#forge:moon_stone`, `beyond_earth:moon_desh_ore`)

		ore.count([1, 4])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(75)
				)
		ore.size = 20
		ore.noSurface = 0
		ore.worldgenLayer = "underground_ores"
		  ore.chance = 0
		  ore.biomes = "beyond_earth:moon_desert"
	})
	
	// Inserted Cheese
	event.addOre((ore) => {
		ore.id = 'kubejs:moon_cheese'

		ore.addTarget(`beyond_earth:moon_desh_ore`, `beyond_earth:moon_cheese_ore`)

		ore.count(100)
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(75)
				)
		ore.size = 10
		ore.noSurface = 0
		ore.worldgenLayer = "underground_decoration"
		ore.chance = 0
		ore.biomes = "beyond_earth:moon_desert"
	})

	// Moon uranium Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:moon_uranium_ore'
	 
		global.stoneTypes.forEach((type) => {
			if (Item.of(`excavated_variants:${type.material}_uranium_ore`) != null) {
			ore.addTarget(`#forge:${type.material}`, `excavated_variants:${type.material}_uranium_ore`)
			}
		})
		ore.count([1, 2])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(50)
				)
		ore.size = 20
		ore.noSurface = 0
		ore.worldgenLayer = "underground_ores"
		  ore.chance = 0
		  ore.biomes = "beyond_earth:moon_desert"
	})
	
	// Inserted Cadmium
	event.addOre((ore) => {
		ore.id = 'kubejs:moon_cadmium'
		//	global.stoneTypes.forEach((type) => {
			//	if (Item.of(`kubejs:${type.material}_cadmium_ore`) != null) {
					ore.addTarget(`excavated_variants:moon_stone_uranium_ore`, `kubejs:moon_stone_cadmium_ore`)
		//		}
		//	})
		ore.count(200)
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(50)
				)
		ore.size = 10
		ore.noSurface = 0
		ore.worldgenLayer = "underground_decoration"
		ore.chance = 0
		ore.biomes = "beyond_earth:moon_desert"
	})

/*
	// Inserted moon luminite
	event.addOre((ore) => {
		ore.id = 'kubejs:moon_luminite'

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
		ore.biomes = "beyond_earth:moon_desert"
	})
*/
})