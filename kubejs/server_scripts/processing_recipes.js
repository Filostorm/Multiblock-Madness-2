onEvent('recipes', event => {
	
	var crushingRecipes = {
		'#forge:coal_coke':'immersiveengineering:dust_coke',
		'#minecraft:planks':'thermal:sawdust',
		'#minecraft:logs':'4x thermal:sawdust'
	}
	for (var recipe in crushingRecipes) {
		event.recipes.mekanismCrushing(crushingRecipes[recipe], recipe).id(`mbm2:mekanism/crushing/${recipe.split(':')[1]}`)
		event.recipes.createMilling(crushingRecipes[recipe], recipe).id(`mbm2:create/crushing/${recipe.split(':')[1]}`)
		event.recipes.immersiveengineeringCrusher(crushingRecipes[recipe], recipe).id(`mbm2:immersiveengineering/crushing/${recipe.split(':')[1]}`)
	}
	event.remove({id: 'immersiveengineering:crusher/coke'})
	
});
