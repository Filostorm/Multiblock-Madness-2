onEvent('recipes', event => {

/// Alt Belt Recipe using Rubber
	event.shaped('2x create:belt_connector', [
	'AAA',
	'AAA'
  ], {
	A: 'thermal:cured_rubber'
  }).id(`kubejs:crafting/rubber/belt_connector`)
  
/// Alt Funnel Recipe using Rubber
  event.shaped('2x create:andesite_funnel', [
	'B',
	'C'
	  ], {
	B: 'create:andesite_alloy',
	C: 'thermal:cured_rubber'
	  }).id(`kubejs:crafting/rubber/andesite_funnel`)

/// Alt Brass Funnel Recipe using Rubber
  event.shaped('2x create:brass_funnel', [
	'B',
	'C',
	'D'
	  ], {
	B: 'create:electron_tube',
	C: 'create:brass_ingot',
	D: 'thermal:cured_rubber'
	  }).id(`kubejs:crafting/rubber/brass_funnel`)
// [| rubber/andesite_tunnel |] //
event.shaped('create:andesite_tunnel', [
	'AA',
	'CC',
  ], {
	A: 'create:andesite_alloy',
C: 'thermal:cured_rubber'
  }).id(`kubejs:crafting/rubber/andesite_tunnel`)

// [| rubber/brass_tunnel |] //
event.shaped('create:brass_tunnel', [
	'A ',
	'CC',
	'DD'
  ], {
	A: 'create:electron_tube',
C: 'create:brass_ingot',
D: 'thermal:cured_rubber'
  }).id(`kubejs:crafting/rubber/brass_tunnel`)

// [| rubber/spout |] //
event.shaped('create:spout', [
	'B',
	'C',
  ], {
B: 'create:copper_casing',
C: 'thermal:cured_rubber'
  }).id(`kubejs:crafting/rubber/spout`)



	//Basic Alloy Compat
	event.recipes.createMixing('4x thermal:bronze_ingot', ['3x #forge:ingots/copper','#forge:ingots/tin']).heated().id(`kubejs:mixing/bronze_ingot`)
	event.recipes.createMixing('2x thermal:electrum_ingot', ['#forge:ingots/gold','#forge:ingots/silver']).heated().id(`kubejs:mixing/electrum_ingot`)
	event.recipes.createMixing('3x thermal:invar_ingot', ['2x #forge:ingots/iron','#forge:ingots/nickel']).heated().id(`kubejs:mixing/invar_ingot`)
	event.recipes.createMixing('2x thermal:constantan_ingot', ['#forge:ingots/copper','#forge:ingots/nickel']).heated().id(`kubejs:mixing/constantan_ingot`)
  
	
  //Basic Capacitor
  event.recipes.createSequencedAssembly([ // start the recipe
  'create:precision_mechanism', // have this item be an output
  ], '#forge:plates/brass', [ // input.
  event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:andesite_alloy']),
  event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:gears/brass']),
  event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
  event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
//  event.recipes.createCutting('create:incomplete_precision_mechanism', 'create:incomplete_precision_mechanism').processingTime(50)
  ]).transitionalItem('create:incomplete_precision_mechanism').loops(1)

//Windmill
  event.remove({id: 'create:crafting/kinetics/windmill_bearing'})
  event.shaped('create:windmill_bearing', [
	'B',
	'C',
	'D'
  ], {
	B: 'immersiveengineering:slab_treated_wood_packaged',
	C: '#forge:stone',
	D: 'create:shaft'
  }).id('kubejs:crafting/windmill_bearing')

//Sail
event.remove({id: 'create:crafting/kinetics/white_sailfrom_conversion'})
event.remove({id: 'create:crafting/kinetics/white_sail'})
event.shaped('2x create:sail_frame', [
  'BA',
  'AB'
], {
  A: 'create:andesite_alloy',
  B: 'immersiveengineering:stick_treated'
}).id('kubejs:crafting/sail')

//Treated Slabs for the Factory
event.recipes.createCutting('2x immersiveengineering:slab_treated_wood_horizontal', 'immersiveengineering:treated_wood_horizontal').id('kubejs:cutting/treated_slabs')


// [| create:andesite_alloy |] //
event.remove({id: 'create:crafting/materials/andesite_alloy'})
event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
event.shaped('create:andesite_alloy', [
	'AB',
	'BA'
  ], {
	A: 'minecraft:iron_nugget',
	B: '#forge:stone'
  }).id("kubejs:andesite_alloy")

event.shaped('2x create:andesite_alloy', [
	'AB',
	'BA'
  ], {
	A: 'minecraft:iron_nugget',
	B: 'mna:decoration/arcane_stone',
  }).id("kubejs:andesite_alloy_x2")
});