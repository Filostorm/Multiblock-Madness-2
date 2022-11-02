onEvent('recipes', event => {
	event.recipes.multiblocked.multiblock('baka')
		.inputItem('minecraft:iron_ore')
		.outputItem(Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 5))
		.duration(100)

	event.recipes.multiblocked.multiblock('baka')
		.inputItem('minecraft:raw_iron')
		.outputItems('minecraft:iron_ingot', '3x minecraft:iron_nugget')
		.duration(100)

	event.recipes.multiblocked.multiblock('baka')
		.inputItem('minecraft:raw_gold')
		.outputItems('minecraft:gold_ingot', '3x minecraft:gold_nugget')
		.duration(100)

	event.recipes.multiblocked.multiblock('baka')
		.inputItem('minecraft:raw_copper')
		.outputItems('2x minecraft:copper_ingot', '3x #forge:nuggets/copper')
		.duration(100)
})