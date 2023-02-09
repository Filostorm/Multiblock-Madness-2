// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')


global.fluidsToRemove = [
	'createaddition:bioethanol',
	'createaddition:flowing_bioethanol',
	'immersiveengineering:ethanol',
	'createaddition:seed_oil',
	'createaddition:flowing_seed_oil',
	'immersiveengineering:plantoil',
	'thermal:creosote',
	'pneumaticcraft:biodiesel', //50,000 burn time
	'thermal:crude_oil',
]

var removeByName = [
	'mna:chainmail_chestplate',
	'mna:chainmail_helmet',
	'mna:chainmail_leggings',
	'mna:chainmail_boots',
	'minecraft:magma_cream',
	'quark:tweaks/crafting/utility/bent/paper',
	'mekanism:paper',
	'minecraft:sticky_piston',
	'beyond_earth:desh_plate',
	'allomancy:duralumin_ingot_from_alloying',
	'allomancy:nicrosil_ingot_from_alloying',
	'allomancy:bendalloy_ingot_from_alloying',
	'thermal:rockwool/white_rockwool_from_blasting',
	'malum:magma_cream_from_sapballs',
	'thermal:bottler_bucket',
	'minecraft:cut_sandstone',
	'immersiveengineering:crafting/stick_iron',
	'minecraft:beacon',
]

onEvent('recipes', event => {
	event.replaceOutput({}, 'mekanism:dust_sulfur', 'thermal:sulfur_dust')
	event.replaceOutput({}, 'mekanism:dust_quartz', 'thermal:quartz_dust')
	

	removeByName.forEach((item) => {
		event.remove({id: item})
	})
	
	global.removeAndHide.forEach((item) => {
		event.remove({output: item})
	})

})

onEvent('tags.items', event => {
	// Removes all tags from this entry
	global.removeAndHide.forEach((item) => {
		event.removeAllTagsFrom(item)
	})
	event.add(`forge:blocks/bronze`, 'thermal:bronze_block')
	event.add(`forge:blocks/steel`, 'immersiveengineering:storage_steel')
})


onEvent('tags.fluids', event => {
	//Makes fluids not fluidy
	event.removeAll('minecraft:water')
	event.add('minecraft:water', 'minecraft:water')
	event.add('minecraft:water', 'minecraft:flowing_water')

	global.fluidsToRemove.forEach((item) => {
		event.removeAllTagsFrom(item)
	})
})

