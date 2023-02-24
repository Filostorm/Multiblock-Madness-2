onEvent('recipes', event => {
	
	var crushingRecipes = {
		'#forge:coal_coke':'immersiveengineering:dust_coke'
	}
	for (var recipe in crushingRecipes) {
		event.recipes.mekanismCrushing(crushingRecipes[recipe], recipe).id(`mbm2:mekanism/crushing/${recipe.slice(7)}`)
		event.recipes.createMilling(crushingRecipes[recipe], recipe).id(`mbm2:create/crushing/${recipe.slice(7)}`)
		event.recipes.immersiveengineeringCrusher(crushingRecipes[recipe], recipe).id(`mbm2:immersiveengineering/crushing/${recipe.slice(7)}`)
	}
	event.remove({id: 'immersiveengineering:crusher/coke'})
	
});
