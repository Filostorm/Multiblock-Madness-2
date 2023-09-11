onEvent('worldgen.remove', event => {
	event.removeOres(ores => {
	  ores.blocks = [
		'beyond_earth:venus_gold_ore',
		'beyond_earth:venus_coal_ore',
		'beyond_earth:venus_diamond_ore',
		'beyond_earth:venus_calorite_ore',
	]
	})
});


onEvent('worldgen.add', event => {

	const venusSurfaceChance = 0

	// use the anchors helper from the event (NOTE: this requires newer versions of KubeJS)
	// if you are using an older version of KubeJS, you can use the methods in the ore properties class
	const {anchors} = event


////////////////////////////////////////////	venus	////////////////////////////////

	// Base calorite Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:mars_calorite_ore'
	
		ore.addTarget('beyond_earth:mars_stone', 'beyond_earth:mars_calorite_ore')

		ore.count([1, 6])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(100)
				)
		ore.size = 20
		ore.noSurface = marsSurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = ["beyond_earth:mars_ice_spikes", "beyond_earth:mars"]
	})

	// Base palladium Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:venus_palladium_ore'
	
		global.stoneTypes.forEach((type) => {
				ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_palladium_ore`)
		})
		    

		ore.count([1, 6])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(100)
				)
		ore.size = 20
		ore.noSurface = venusSurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = ["beyond_earth:infernal_venus_barrens", "beyond_earth:venus_desert", "beyond_earth:venus"]
	})

	// Base diamond Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:venus_diamond_ore'
	
		global.stoneTypes.forEach((type) => {
				ore.addTarget(`#forge:${type.material}`, `excavated_variants:${type.material}_diamond_ore`)
		})
		    

		ore.count([1, 6])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(100)
				)
		ore.size = 20
		ore.noSurface = venusSurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = ["beyond_earth:infernal_venus_barrens", "beyond_earth:venus_desert", "beyond_earth:venus"]
	})
	

	// Base uranium Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:venus_uranium_ore'
	
		global.stoneTypes.forEach((type) => {
				ore.addTarget(`#forge:${type.material}`, `excavated_variants:${type.material}_uranium_ore`)
		})
		    

		ore.count([1, 6])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(100)
				)
		ore.size = 20
		ore.noSurface = venusSurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = ["beyond_earth:infernal_venus_barrens", "beyond_earth:venus_desert", "beyond_earth:venus"]
	})
	

	// Base platinum Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:venus_platinum_ore'
	
		global.stoneTypes.forEach((type) => {
				ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_platinum_ore`)
		})
		    

		ore.count([1, 6])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(100)
				)
		ore.size = 20
		ore.noSurface = venusSurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = ["beyond_earth:infernal_venus_barrens", "beyond_earth:venus_desert", "beyond_earth:venus"]
	})
})