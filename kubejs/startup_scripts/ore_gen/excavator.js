

onEvent('recipes', event => {



	//event.remove({type: 'immersiveengineering:mineral_mix'})
	let mineralVeins = [
		'ancient_debris',
		'auricupride',
		'beryl',
		'bituminous_coal',
		'cassiterite',
		'chalcopyrite',
		'cinnabar',
		//'cooled_lava_tube',
		'cooperite',
		'galena',
		//'igneous_rock',
		'laterite',
		'mephitic_quarzite',
		//'nether_silt',
		'pentlandite',
		//'silt',
		'uraninite',
		'wolframite',
		]
		mineralVeins.forEach((vein) => {
			event.remove({id: `immersiveengineering:mineral/${vein}`})
		})
		event.remove({id: `createaddition:compat/immersiveengineering/sphalerite`})
		
	
	
		global.newMaterialParts.forEach((item) => {
			if (item.type == 'compound_ore') {
				event.custom({
					"type":"immersiveengineering:mineral_mix",
					"ores":[
						{"chance":0.75,"output":{"item":`kubejs:crushed_${item.material}`}},
						{"chance":0.25,"output":{"item":`kubejs:crushed_${item.byproducts[1]}`}}
					],
					"spoils":[
						{"chance":0.5,"output":{"item":"minecraft:cobblestone"}},
						{"chance":0.3,"output":{"item":"minecraft:gravel"}},
						{"chance":0.2,"output":{"item":"minecraft:cobbled_deepslate"}}
					],
					"dimensions":["minecraft:overworld"],
					"weight":8,"fail_chance":0.05,}).id(`mbm2:mineral/${item.material}`)
				}
			})
			event.forEachRecipe({ type: 'immersiveengineering:mineral_mix' }, recipe => {
				console.log(recipe)
			})
		
})