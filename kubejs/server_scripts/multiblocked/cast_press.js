
  onEvent('recipes', event => {

	let castParts = [
		'plate',
		'gear',
		'rod',
		'wire'
	]

	castParts.forEach(part => {
		event.recipes.multiblocked.multiblock("cast_press")
			.setChance(0.0)
			.inputItem(Ingredient.of(`#forge:${part}s`))
			.setChance(1)
			.inputFluid(Fluid.of('kubejs:hot_air', 100))
			.inputItem(['4x #forge:sand', '4x #tconstruct:casts/sand'])
			.outputItem(`4x tconstruct:${part}_sand_cast`)
			.setPerTick(true)
			.inputFE(256)
			.duration(40)

		event.recipes.multiblocked.multiblock("cast_press")
			.setChance(0.0)
			.inputItem(Ingredient.of(`#forge:${part}s`))
			.setChance(1)
			.inputItem('#forge:sand', '#tconstruct:casts/sand')
			.outputItem(`tconstruct:${part}_sand_cast`)
			.setPerTick(true)
			.inputFE(256)
			.duration(40)
		});
  })