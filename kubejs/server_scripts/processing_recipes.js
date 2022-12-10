onEvent('recipes', event => {
	
	var crushingRecipes = {
		'#forge:coal_coke':'immersiveengineering:dust_coke'
	}
	for (var recipe in crushingRecipes) {
		event.recipes.mekanismCrushing(crushingRecipes[recipe], recipe)
		event.recipes.thermal.pulverizer(crushingRecipes[recipe], recipe)
		event.recipes.createMilling(crushingRecipes[recipe], recipe)
		event.recipes.immersiveengineeringCrusher(crushingRecipes[recipe], recipe)
	}
	event.remove({id: 'immersiveengineering:kjs_1au0vcjqt7wg7xro7gvwmvwnc'})
	
});
