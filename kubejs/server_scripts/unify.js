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
	'createbigcannons:molten_steel',
	'createbigcannons:molten_bronze',
	'chemlib:sulfuric_acid_fluid',
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
	'tconstruct:common/flint',
	'thermal:smelting/netherite_ingot_from_dust_blasting',
	'tconstruct:common/materials/netherite_ingot_from_nuggets',
	'minecraft:netherite_ingot',
]

onEvent('recipes', event => {
	event.replaceOutput({}, 'mekanism:dust_sulfur', 'thermal:sulfur_dust')
	event.replaceOutput({}, 'mekanism:dust_quartz', 'thermal:quartz_dust')
	event.replaceOutput({}, 'mekanism:dust_gold', 'thermal:gold_dust')
	event.replaceOutput({}, 'mekanism:dust_netherite', 'thermal:netherite_dust')
	event.replaceOutput({}, 'ae2:ender_dust', 'thermal:ender_pearl_dust')
	//Diamond
	event.replaceOutput({}, 'createaddition:diamond_grit', 'thermal:diamond_dust')
	event.replaceOutput({}, 'mekanism:dust_diamond', 'thermal:diamond_dust')
	//Sawdust
	event.replaceOutput({}, 'mekanism:sawdust', 'thermal:sawdust')
	event.replaceOutput({}, 'immersiveengineering:dust_wood', 'thermal:sawdust')
	

	removeByName.forEach((item) => {
		event.remove({id: item})
	})
	
	global.removeAndHide.forEach((item) => {
		event.remove({output: item})
	})


	//Steel block crafting
	event.shaped(`#forge:storage_blocks/steel`, [
		'III',
		'III',
		'III'
	  ], {
		I: `#forge:ingots/steel`,
	  }).id('mbm2:crafting/steel_block')


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

