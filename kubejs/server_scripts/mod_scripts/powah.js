onEvent('recipes', event => {
	/*
  event.shaped('tconstruct:smeltery_controller', [
	'AAA',
	'ABA',
	'AAA'
  ], {
	A: 'tconstruct:seared_brick',
	B: '#forge:gears/steel'
  })*/


  //Basic Capacitor
  event.remove({id: 'powah:crafting/capacitor_basic'})
  event.recipes.createSequencedAssembly([ // start the recipe
'powah:capacitor_basic', // have this item be an output
  ], '#forge:ingots/iron', [ // input.
  // the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
  event.recipes.createDeploying('kubejs:incomplete_basic_capacitor', ['kubejs:incomplete_basic_capacitor', 'powah:dielectric_paste']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
  event.recipes.createDeploying('kubejs:incomplete_basic_capacitor', ['kubejs:incomplete_basic_capacitor', '#forge:dusts/redstone']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
  event.recipes.createDeploying('kubejs:incomplete_basic_capacitor', ['kubejs:incomplete_basic_capacitor', '#forge:dusts/redstone']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
//  event.recipes.createCutting('kubejs:incomplete_basic_capacitor', 'kubejs:incomplete_basic_capacitor').processingTime(50) // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
  ]).transitionalItem('kubejs:incomplete_basic_capacitor').loops(2) // set the transitional item and the loops (amount of repetitions)

//Paste
  event.remove({output: 'powah:dielectric_paste'})
	event.recipes.createMixing('8x powah:dielectric_paste', ['#minecraft:coals','#forge:clay', Fluid.of('minecraft:lava', 250)]).id(`kubejs:mixing/dielectric_paste`)
	event.recipes.createMixing('16x powah:dielectric_paste', ['#minecraft:coals','#forge:clay']).superheated().id(`kubejs:mixing/dielectric_paste_heated`)

});