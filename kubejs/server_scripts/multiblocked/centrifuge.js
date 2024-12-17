var fluidCentrifugeRecipes = [
	{
	  input: Fluid.of('kubejs:molten_slag', 200),
	  output1: Fluid.of('tconstruct:molten_clay', 50),
	  output2: Fluid.of('tconstruct:seared_stone', 50),
	  output3: Fluid.of('tconstruct:scorched_stone', 50),
	  output4: Fluid.of('kubejs:molten_rich_slag', 50),
	  duration: 400
	},
	{
	  input: Fluid.of('kubejs:liquid_air', 200),
	  output2: Fluid.of('chemlib:nitrogen_fluid', 120),
	  output1: Fluid.of('mekanism:oxygen', 50),
	  output3: Fluid.of('chemlib:carbon_dioxide_fluid', 20),
	  output4: Fluid.of('kubejs:noble_gasses', 10),
	  duration: 400
	},
	{
	  input: Fluid.of('kubejs:liquid_nether_air', 200),
	  output1: Fluid.of('mekanism:sulfur_trioxide', 100),
	  output2: Fluid.of('tconstruct:blazing_blood', 60),
	  output3: Fluid.of('chemlib:neon_fluid', 20),
	  output4: Fluid.of('chemlib:helium_fluid', 20),
	  duration: 400
	},
	{
	  input: Fluid.of('kubejs:liquid_ender_air', 200),
	  output1: Fluid.of('kubejs:liquid_shadows', 120),
	  output2: Fluid.of('chemlib:argon_fluid', 20),
	  output3: Fluid.of('chemlib:xenon_fluid', 20),
	  output4: Fluid.of('chemlib:methane_fluid', 20),
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
			event.recipes.multiblocked.multiblock("centrifuge")
				.inputFluid(r.input*2)
				.outputFluid(r.output1*2)
				.outputFluid(r.output2*2)
				.outputFluid(r.output3*2)
				.outputFluid(r.output4*2)
				.inputFE(10000)
				.duration(r.duration/2)
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