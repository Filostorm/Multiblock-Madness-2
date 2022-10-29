

onEvent('tags.items', event => {
		event.add('#forge:slimeballs', 'createaddition:biomass_pellet')
});
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
event.shaped('2x create:andesite_tunnel', [
	'AA',
	'CC',
  ], {
	A: 'create:andesite_alloy',
C: 'thermal:cured_rubber'
  }).id(`kubejs:crafting/rubber/andesite_tunnel`)

// [| rubber/brass_tunnel |] //
event.shaped('2x create:brass_tunnel', [
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
	B: 'immersiveengineering:slab_treated_wood_horizontal',
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
event.remove({id: 'create:mixing/andesite_alloy'})
event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})
event.shaped('create:andesite_alloy', [
	'AB',
	'BA'
  ], {
	A: 'minecraft:iron_nugget',
	B: '#forge:stone'
  }).id("kubejs:andesite_alloy")
  event.recipes.createMixing([`create:andesite_alloy`], ['#forge:stone', 'minecraft:iron_nugget']).id('kubejs:mixing/andesite_alloy')

event.shaped('2x create:andesite_alloy', [
	'AB',
	'BA'
  ], {
	A: 'minecraft:iron_nugget',
	B: 'mna:decoration/arcane_stone',
  }).id("kubejs:andesite_alloy_x2")
  event.recipes.createMixing([`2x create:andesite_alloy`], ['mna:decoration/arcane_stone', 'minecraft:iron_nugget']).id(`kubejs:mixing/andesite_alloy_x2`)


/// Hose Pully w/o kelp
event.shaped('create:hose_pulley', [
	'B',
	'D',
	'C'
	  ], {
	B: 'create:copper_casing',
	C: 'minecraft:chain',
	D: 'kubejs:copper_mechanical_component'
	  }).id(`kubejs:crafting/hose_pulley`)

	  //Brass Upgrades
	event.shapeless('2x create:brass_funnel', ['#forge:ingots/brass', 'create:electron_tube', 'create:andesite_funnel'])
	event.shapeless('2x create:brass_tunnel', ['#forge:ingots/brass', '#forge:ingots/brass', 'create:electron_tube', 'create:andesite_tunnel'])

	event.remove({id: 'create:item_application/brass_casing_from_wood'})
	event.remove({id: 'create:item_application/brass_casing_from_log'})
	event.remove({id: 'create:item_application/brass_casing_from_wood_using_deployer'})
	event.remove({id: 'create:item_application/brass_casing_from_log_using_deployer'})
	
	global.createApplying(event, 'create:brass_casing', 'forge:ingots/brass', 'forge:treated_wood', `kubejs:applying/brass_casing`)
	//event.recipes.createDeploying('create:brass_casing', ['#forge:treated_wood', '#forge:ingots/brass'])
	
	//Gib Saplings
	event.recipes.createCrushing([
		Item.of('minecraft:jungle_sapling').withChance(0.01),
		Item.of('minecraft:dark_oak_sapling').withChance(0.01),
		Item.of('ars_nouveau:blue_archwood_sapling').withChance(0.01),
		Item.of('hexerei:mahogany_sapling').withChance(0.01),
		Item.of('hexerei:willow_sapling').withChance(0.01),
		Item.of('forbidden_arcanus:growing_edelwood').withChance(0.01),
		Item.of('malum:runewood_sapling').withChance(0.01)
	  ], '#minecraft:leaves')

});