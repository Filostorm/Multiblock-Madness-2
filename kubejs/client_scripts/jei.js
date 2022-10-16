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
	event.add(Item.of('thermal:ruby'))
	event.add(Item.of('thermal:ruby_block'))
	event.add(Item.of('thermal:ruby_ore'))
	event.add(Item.of('thermal:ruby_dust'))
	event.add(Item.of('thermal:ruby_gear'))
  })
  
  onEvent('jei.add.items', event => {
	event.add(Item.of('thermal:sapphire'))
	event.add(Item.of('thermal:sapphire_block'))
	event.add(Item.of('thermal:sapphire_ore'))
	event.add(Item.of('thermal:sapphire_dust'))
	event.add(Item.of('thermal:sapphire_gear'))
  })
/*
onEvent('jei.remove.categories', event => {
	console.log(event.getCategoryIds()) //log a list of all category ids to logs/kubejs/client.txt
})*/