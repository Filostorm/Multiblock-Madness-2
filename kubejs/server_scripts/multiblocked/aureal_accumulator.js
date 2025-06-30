onEvent('recipes', event => {
    event.recipes.multiblocked.multiblock("aureal_accumulator")
		.outputFluid(Fluid.of('kubejs:concentrated_aureal', 10))
		.duration(100)
})