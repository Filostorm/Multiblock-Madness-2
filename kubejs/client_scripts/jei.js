// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {			
	global.removeAndHide.forEach((item) => {
		event.hide(item)
	})

	global.transitionalItems.forEach((item) => {
		event.hide(`kubejs:incomplete_${item}`)
	})

	global.newMaterialParts.forEach((item) => {
		global.stoneTypes.forEach((type) => {
			if (item.ore) {
				event.hide(`kubejs:poor_${type.material}_${item.material}_ore`)
				event.hide(`kubejs:${type.material}_${item.material}_ore`)
				event.hide(`kubejs:rich_${type.material}_${item.material}_ore`)
				event.hide(`kubejs:${item.material}_ore_sample`)
				}
		})
	})

	event.hide(Item.of('ae2:facade').ignoreNBT())
})

onEvent('jei.add.items', event => {
	var addItems = [
		'thermal:ruby',
		'thermal:ruby_block',
		'thermal:ruby_ore',
		'thermal:ruby_dust',
		'thermal:ruby_gear',
		'thermal:sapphire',
		'thermal:sapphire_block',
		'thermal:sapphire_ore',
		'thermal:sapphire_dust',
		'thermal:sapphire_gear',
		'minecraft:structure_block',
	]

	addItems.forEach((item) => {
		event.add(Item.of(item))
	})
})
/*
onEvent('jei.remove.categories', event => {
	console.log(event.getCategoryIds()) //log a list of all category ids to logs/kubejs/client.txt
})*/