
  onEvent('recipes', event => {

	event.recipes.multiblocked.multiblock("ebf")
		.inputFluid(Fluid.of('mekanism:oxygen', 100))
		.inputItem(Ingredient.of('#forge:ingots/iron'))
		.inputItem(Ingredient.of('#minecraft:coals'))
		.outputItem(Item.of('#forge:ingots/steel'))
		//.outputFluid(Fluid.of('mekanism:sulfuric_acid', 1000))
		.setPerTick(true)
		.inputFE(1024)
		.duration(200)
  })