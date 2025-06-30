onEvent('worldgen.remove', event => {
	event.removeOres(ores => {
	  ores.blocks = [
		'mythicbotany:elementium_ore',
		'mythicbotany:gold_ore',
		'mythicbotany:dragonstone_ore'
	]
	})
});


onEvent('worldgen.add', event => {

	console.log('Alfheim')
	
	const alfheimSurfaceChance = 0

	// use the anchors helper from the event (NOTE: this requires newer versions of KubeJS)
	// if you are using an older version of KubeJS, you can use the methods in the ore properties class
	const {anchors} = event


////////////////////////////////////////////	Alfheim	////////////////////////////////
	// Base Elementium Veins
	event.addOre((ore) => {
		ore.id = 'kubejs:alfheim_elementium_ore'
	
		ore.addTarget('botania:livingrock', 'mythicbotany:elementium_ore')
		    
		ore.count([7, 16])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(4),
						anchors.absolute(100)
				)
		ore.size = 15
		ore.noSurface = alfheimSurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = ['mythicbotany:alfheim_hills', 'mythicbotany:alfheim_lakes', 'mythicbotany:alfheim_plains', 'mythicbotany:dreamwood_forest', 'mythicbotany:golden_fields']
	})

	//adding dragonstone to elementium veins
	event.addOre((ore) => {
		ore.id = 'kubejs:alfheim_dragonstone_ore'
	
		ore.addTarget('mythicbotany:elementium_ore', 'mythicbotany:dragonstone_ore')
		    
		ore.count([80, 150])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(0),
						anchors.absolute(-10)
				)
		ore.size = 10
		ore.noSurface = alfheimSurfaceChance
		ore.worldgenLayer = "underground_decoration"
		ore.chance = 0
		ore.biomes = ['mythicbotany:alfheim_hills', 'mythicbotany:alfheim_lakes', 'mythicbotany:alfheim_plains', 'mythicbotany:dreamwood_forest', 'mythicbotany:golden_fields']
	})

	//gold in elementium near surface
	event.addOre((ore) => {
		ore.id = 'kubejs:alfheim_gold_ore'
	
		ore.addTarget('mythicbotany:elementium_ore', 'mythicbotany:gold_ore')
		    
		ore.count([100, 200])
				.squared()
				.uniformHeight(
						anchors.aboveBottom(75),
						anchors.absolute(100)
				)
		ore.size = 8
		ore.noSurface = alfheimSurfaceChance
		ore.worldgenLayer = "underground_decoration"
		ore.chance = 0
		ore.biomes = ['mythicbotany:alfheim_hills', 'mythicbotany:alfheim_lakes', 'mythicbotany:alfheim_plains', 'mythicbotany:dreamwood_forest', 'mythicbotany:golden_fields']
	})

	//mithril
	event.addOre((ore) => {
		ore.id = 'kubejs:alfheim_mithril_ore'

		ore.addTarget('botania:livingrock', 'kubejs:livingrock_mithril_ore')

		ore.count([8, 10])
				.squared()
				.uniformHeight(
					anchors.aboveBottom(10),
					anchors.absolute(60)
				)
		ore.size =15
		ore.noSurface = alfheimSurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = ['mythicbotany:alfheim_hills', 'mythicbotany:alfheim_lakes', 'mythicbotany:alfheim_plains', 'mythicbotany:dreamwood_forest', 'mythicbotany:golden_fields']
	})

	//orichalcum
	event.addOre((ore) => {
		ore.id = 'kubejs:alfheim_orichalcum_ore'

		ore.addTarget('kubejs:livingrock_mithril_ore', 'kubejs:livingrock_orichalcum_ore')

		ore.count(125)
				.squared()
				.uniformHeight(
					anchors.aboveBottom(10),
					anchors.absolute(60)
				)
		ore.size = 7
		ore.noSurface = alfheimSurfaceChance
		ore.worldgenLayer = "underground_decoration"
		ore.chance = 0
		ore.biomes = ['mythicbotany:alfheim_hills', 'mythicbotany:alfheim_lakes', 'mythicbotany:alfheim_plains', 'mythicbotany:dreamwood_forest', 'mythicbotany:golden_fields']
	})

	//aetherium
	event.addOre((ore) => {
		ore.id = 'kubejs:alfheim_aetherium_ore'

		ore.addTarget('botania:livingrock', 'kubejs:livingrock_aetherium_ore')

		ore.count([8, 10])
				.squared()
				.uniformHeight(
					anchors.aboveBottom(94),
					anchors.absolute(120)
				)
		ore.size = 15
		ore.noSurface = alfheimSurfaceChance
		ore.worldgenLayer = "underground_ores"
		ore.chance = 0
		ore.biomes = ['mythicbotany:alfheim_hills', 'mythicbotany:alfheim_lakes', 'mythicbotany:alfheim_plains', 'mythicbotany:dreamwood_forest', 'mythicbotany:golden_fields']
	})
})