

onEvent('tags.items', event => {
		event.add(`forge:storage_blocks`, 'extendedcrafting:redstone_ingot_block')
		event.add(`forge:storage_blocks/red_alloy`, 'extendedcrafting:redstone_ingot_block')

		event.add(`forge:ingots`, 'extendedcrafting:redstone_ingot')
		event.add(`forge:ingots/red_alloy`, 'extendedcrafting:redstone_ingot')

		event.add(`forge:nuggets`, 'extendedcrafting:redstone_nugget')
		event.add(`forge:nuggets/red_alloy`, 'extendedcrafting:redstone_nugget')
  });

onEvent('recipes', event => {
	event.remove({id: 'extendedcrafting:redstone_ingot'})
	event.remove({id: 'extendedcrafting:ender_ingot'})
	
});
