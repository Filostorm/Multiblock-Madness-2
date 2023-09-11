onEvent('worldgen.remove', event => {
	event.removeOres(ores => {
	  ores.blocks = [
		'beyond_earth:glacio_iron_ore',
		'beyond_earth:glacio_copper_ore',
		'beyond_earth:glacio_coal_ore',
		'beyond_earth:glacio_lapis_ore',
	]
	})
});


onEvent('worldgen.add', event => {

	
	const glacioSurfaceChance = 0

	// use the anchors helper from the event (NOTE: this requires newer versions of KubeJS)
	// if you are using an older version of KubeJS, you can use the methods in the ore properties class
	const {anchors} = event


////////////////////////////////////////////	glacio	////////////////////////////////
	// Base Draconium Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:glacio_draconium_ore'
	
		global.stoneTypes.forEach((type) => {
				ore.addTarget(`#forge:${type.material}`, `kubejs:${type.material}_draconium_ore`)
		})
		    

		ore.count([1, 3])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(100)
				)
		ore.size = 20
		ore.noSurface = glacioSurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = "beyond_earth:glacio_ice_spikes"
	})



})