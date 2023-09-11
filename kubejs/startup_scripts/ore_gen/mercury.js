onEvent('worldgen.remove', event => {
	event.removeOres(ores => {
	  ores.blocks = [
		'beyond_earth:mercury_iron_ore',
	]
	})
});


onEvent('worldgen.add', event => {

	
	const mercurySurfaceChance = 0

	// use the anchors helper from the event (NOTE: this requires newer versions of KubeJS)
	// if you are using an older version of KubeJS, you can use the methods in the ore properties class
	const {anchors} = event


////////////////////////////////////////////	mercury	////////////////////////////////



	// Base Iridium Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:mercury_iridium_ore'
	
		global.stoneTypes.forEach((type) => {
				ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_iridium_ore`)
		})
		    

		ore.count([1, 6])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(100)
				)
		ore.size = 20
		ore.noSurface = mercurySurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = "beyond_earth:mercury"
	})

	// Base adamantium Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:mercury_adamantium_ore'
	
		global.stoneTypes.forEach((type) => {
				ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_adamantium_ore`)
		})
		    

		ore.count([1, 6])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(100)
				)
		ore.size = 20
		ore.noSurface = mercurySurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = "beyond_earth:mercury"
	})
})