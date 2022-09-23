// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

var removeByName = [
	'mna:chainmail_chestplate',
	'mna:chainmail_helmet',
	'mna:chainmail_leggings',
	'mna:chainmail_boots',
	'immersiveengineering:smelting/gold_ingot_from_dust_from_blasting',
	'thermal:smelting/gold_ingot_from_dust_blasting',
	'alchemistry:gold_ingot_from_blasting_gold_dust',
	'immersiveengineering:smelting/gold_ingot_from_dust',
	'alchemistry:gold_ingot_from_smelting_gold_dust',
	'thermal:smelting/gold_ingot_from_dust_smelting',

	
	'geolosys:crafting/nuggets/copper_nugget_to_copper_ingot',
	'immersiveengineering:crafting/nugget_copper_to_copper_ingot',
	'tconstruct:common/materials/copper_ingot_from_nuggets',
	'thermal:storage/copper_ingot_from_nuggets',
	'alchemistry:copper_ingot_from_blasting_copper_dust',
	'thermal:smelting/copper_ingot_from_dust_blasting',
	'immersiveengineering:smelting/copper_ingot_from_dust_from_blasting',
	'alchemistry:copper_ingot_from_smelting_copper_dust',
	'immersiveengineering:smelting/copper_ingot_from_dust',
	'thermal:smelting/copper_ingot_from_dust_smelting',
	
	'alchemistry:iron_ingot_from_blasting_iron_dust',
	'thermal:smelting/iron_ingot_from_dust_blasting',
	'immersiveengineering:smelting/iron_ingot_from_dust_from_blasting',
	'alchemistry:iron_ingot_from_smelting_iron_dust',
	'immersiveengineering:smelting/iron_ingot_from_dust',
	'thermal:smelting/iron_ingot_from_dust_smelting',
]

onEvent('recipes', event => {
	event.replaceOutput({}, 'mekanism:dust_sulfur', 'thermal:sulfur_dust')

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
	event.add('forge:ingots/vinteum', 'mna:vinteum_ingot')
})
/*
var addItemsJEI = ['thermal:ruby', 'thermal:ruby_dust', 'thermal:ruby_block', 'thermal:ruby_ore', 'thermal:deepslate_ruby_ore']

onEvent('jei.add.items', event => {
	addItemsJEI.forEach((item) => {
	event.add(Item.of(item))
	})
  })*/