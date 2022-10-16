onEvent('worldgen.remove', event => {
	event.removeOres(ores => {
	  ores.blocks = [ 'minecraft:coal_ore', 'minecraft:iron_ore', 'minecraft:gold_ore', 'minecraft:copper_ore', 'minecraft:quartz_ore', 'minecraft:lapis_ore', 'minecraft:emerald_ore', 'minecraft:diamond_ore', 'minecraft:redstone_ore', 'mna:vinteum_ore']
	})
});

onEvent('tags.blocks', event => {
	event.add(`forge:soapstone`, 'byg:soapstone')
	event.add(`forge:darkstone`, 'forbidden_arcanus:darkstone')
})

onEvent('tags.items', event => {	
	event.add(`forge:soapstone`, 'byg:soapstone')
	event.add(`forge:darkstone`, 'forbidden_arcanus:darkstone')	  
})

onEvent('worldgen.add', event => {
	// use the anchors helper from the event (NOTE: this requires newer versions of KubeJS)
	// if you are using an older version of KubeJS, you can use the methods in the ore properties class
	const {anchors} = event

	global.newMaterialParts.forEach((item) => {
		//Poor Ores
		if (item.tier == 1 && item.ore) {
			event.addOre((ore) => {
				ore.id = `kubejs:poor_${item.material}_ore` // (optional, but recommended) custom id for the feature
			
				ore.addTarget('minecraft:stone', `kubejs:poor_${item.material}_ore`)
				global.stoneTypes.forEach((type) => {
					ore.addTarget(`#forge:${type.material}`, `kubejs:poor_${type.material}_${item.material}_ore`)
				})

				ore.count([10, 15])                      // generate between 15 and 50 veins (chosen at random), you could use a single number here for a fixed amount of blocks
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
    		})
		}
	})

	

	// Base Coal Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:coal_ore'
	
		ore.addTarget('#minecraft:stone_ore_replaceables', 'minecraft:coal_ore')
		ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_coal_ore')

		ore.count([3, 5])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(256)
				)
		ore.size = 20
		ore.noSurface = 0
		ore.worldgenLayer = "underground_ores"
		  ore.chance = 0
	})

	// Base Iron Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:iron_ore'
	
		ore.addTarget('#minecraft:stone_ore_replaceables', 'minecraft:iron_ore')
		ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_iron_ore')
		//global.stoneTypes.forEach((type) => {
		//	if (type.material != 'deepslate') {
		//		ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_iron_ore`)
		//	}
		//})

		ore.count([3, 5])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(256)
				)
		ore.size = 30
		ore.noSurface = 0
		ore.worldgenLayer = "underground_ores"
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

		ore.count(100)
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(256)
				)
		ore.size = 20
		ore.noSurface = 0
		ore.worldgenLayer = "underground_decoration"
		  ore.chance = 0
	})

	// Inserted Gold Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:gold_ore'

		ore.addTarget('minecraft:iron_ore', 'minecraft:gold_ore')
		ore.addTarget('minecraft:deepslate_iron_ore', 'minecraft:deepslate_gold_ore')
		global.stoneTypes.forEach((type) => {
			if (type.material != 'deepslate') {
				ore.addTarget(`kubejs:${type.material}_iron_ore`, `kubejs:${type.material}_gold_ore`)
			}
		})

		ore.count(100)
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(256)
				)
		ore.size = 20
		ore.noSurface = 0
		ore.worldgenLayer = "underground_decoration"
		  ore.chance = 0
	})
})