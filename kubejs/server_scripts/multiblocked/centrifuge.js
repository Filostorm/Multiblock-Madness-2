var fluidCentrifugeRecipes = [
	{
	  input: Fluid.of('kubejs:molten_slag', 200),
	  output1: Fluid.of('tconstruct:molten_clay', 50),
	  output2: Fluid.of('tconstruct:seared_stone', 50),
	  output3: Fluid.of('tconstruct:scorched_stone', 50),
	  output4: Fluid.of('kubejs:molten_rich_slag', 50),
	  duration: 400
	}
  ]
  
  onEvent('recipes', event => {
	fluidCentrifugeRecipes.forEach((r) => {
		
		if (r.output4 != null) {
			event.recipes.multiblocked.multiblock("fluid_centrifuge_mk1")
			  .inputFluid(r.input)
			  .outputFluid(r.output1)
			  .outputFluid(r.output2)
			  .outputFluid(r.output3)
			  .outputFluid(r.output4)
			  .inputStress(512)
			  .duration(r.duration)
		} else if (r.output3 != null) {
			event.recipes.multiblocked.multiblock("fluid_centrifuge_mk1")
			  .inputFluid(r.input)
			  .outputFluid(r.output1)
			  .outputFluid(r.output2)
			  .outputFluid(r.output3)
			  .inputStress(512)
			  .duration(r.duration)
		} else if (r.output2 != null) {
			event.recipes.multiblocked.multiblock("fluid_centrifuge_mk1")
			  .inputFluid(r.input)
			  .outputFluid(r.output1)
			  .outputFluid(r.output2)
			  .inputStress(512)
			  .duration(r.duration)
		} else {
			event.recipes.multiblocked.multiblock("fluid_centrifuge_mk1")
			  .inputFluid(r.input)
			  .outputFluid(r.output1)
			  .inputStress(512)
			  .duration(r.duration)
			}
	})
  })