onEvent('recipes', event => {
	
  // Damascus Steel
  event.recipes.createCutting('kubejs:steel_scraps', ['#forge:ingots/steel']).processingTime(200),

  //Swap scraps for stacked iron/steel plating
  event.recipes.createSequencedAssembly([ // start the recipe
  'kubejs:damascus_steel_ingot', // have this item be an output
  ], 'kubejs:steel_scraps', [ // input.
  event.recipes.createFilling('kubejs:partially_folded_damascus_steel', ['kubejs:partially_folded_damascus_steel', Fluid.of('lava', 50)]),
  event.recipes.createPressing('kubejs:partially_folded_damascus_steel', ['kubejs:partially_folded_damascus_steel']),
  event.recipes.createCutting('kubejs:partially_folded_damascus_steel', ['kubejs:partially_folded_damascus_steel']).processingTime(50),
//  event.recipes.createCutting('kubejs:partially_folded_damascus_steel', 'kubejs:partially_folded_damascus_steel').processingTime(50)
  ]).transitionalItem('kubejs:partially_folded_damascus_steel').loops(20).id(`mbm2:damascus_steel_ingot`)


  

// Mixer
event.shaped('4x kubejs:industrial_alloy_ingot', [
	'AIQ',
	'IBI',
	'QIA'
  ], {
	B: 'immersiveengineering:herbicide_bucket',
	A: 'thermal:cured_rubber', //'mna:bone_ash',
	Q: 'immersiveengineering:concrete_leaded', //'botania:quartz_dark',
	I: '#forge:ingots/steel',
  }).id(`mbm2:industrial_alloy_ingot`)

});
