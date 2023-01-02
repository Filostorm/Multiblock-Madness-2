

onEvent('tags.items', event => {
		event.add('forge:slimeballs', 'createaddition:biomass_pellet')
		
		event.add('create:movement_anchors', 'create:mechanical_bearing')
		event.add('create:movement_anchors', 'create:mechanical_piston')
		event.add('create:movement_anchors', 'create:gantry_carriage')

		event.add('create:chassis', 'create:linear_chassis')
		event.add('create:chassis', 'create:radial_chassis')

		event.add('create:sticky', 'create:super_glue')
		event.add('create:sticky', 'slime_ball')



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



  
	
  // Precision Mechanism
  event.recipes.createSequencedAssembly([ // start the recipe
  'create:precision_mechanism', // have this item be an output
  ], '#forge:plates/gold', [ // input.
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

event.remove({id: 'createaddition:compat/immersiveengineering/fabric_sail'})
event.shapeless('2x create:white_sail', ['create:sail_frame', 'create:sail_frame', 'immersiveengineering:hemp_fabric'])


//Treated Slabs for the Factory
event.recipes.createCutting('2x immersiveengineering:slab_treated_wood_horizontal', 'immersiveengineering:treated_wood_horizontal').id('kubejs:cutting/treated_slabs')
event.recipes.createCutting('2x immersiveengineering:stick_treated', '#forge:treated_wood_slab').id('kubejs:cutting/treated_sticks')


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
  }).id("mbm2:stone_alloy")
  event.recipes.createMixing([`create:andesite_alloy`], ['#forge:stone', 'minecraft:iron_nugget']).id('mbm2:mixing/stone_alloy')

  //Double Stone Alloy
event.shaped('2x create:andesite_alloy', [
	'AB',
	'BA'
  ], {
	A: 'minecraft:iron_nugget',
	B: 'elementalcraft:whiterock',
  }).id("mbm2:stone_alloy_x2")
  event.recipes.createMixing([`2x create:andesite_alloy`], ['elementalcraft:whiterock', 'minecraft:iron_nugget']).id(`mbm2:mixing/stone_alloy_x2`)


/// Hose Pully w/o kelp
event.shaped('create:hose_pulley', [
	'B',
	'D',
	'C'
	  ], {
	B: 'create:copper_casing',
	C: 'minecraft:chain',
	D: 'kubejs:copper_mechanical_component'
	  }).id(`mbm2:crafting/hose_pulley`)

	  //Brass Upgrades
	event.shapeless('2x create:brass_funnel', ['#forge:ingots/brass', 'create:electron_tube', 'create:andesite_funnel'])
	event.shapeless('2x create:brass_tunnel', ['#forge:ingots/brass', '#forge:ingots/brass', 'create:electron_tube', 'create:andesite_tunnel'])

	
	//Brass Casing
	event.remove({id: 'create:item_application/brass_casing_from_wood'})
	event.remove({id: 'create:item_application/brass_casing_from_log'})
	global.createApplying(event, 'create:brass_casing', Ingredient.of('#forge:ingots/brass'), Ingredient.of('#forge:treated_wood'), `mbm2:applying/brass_casing`)

	//Charred Planks for Copper Casing
	global.elementalcraftInfusion(event, Ingredient.of('#minecraft:planks'), Item.of('kubejs:charred_planks'), 'fire', 250, 'mbm:infusion/copper_casing')
	
	//Copper Casing
	event.remove({id: 'create:item_application/copper_casing_from_wood'})
	event.remove({id: 'create:item_application/copper_casing_from_log'})
	global.createApplying(event, 'create:copper_casing', Ingredient.of('#forge:ingots/copper'), Item.of('kubejs:charred_planks'), `mbm2:applying/copper_casing`)
	

	//Gib Saplings
	event.recipes.createCrushing([
		Item.of('minecraft:jungle_sapling').withChance(0.01),
		Item.of('minecraft:dark_oak_sapling').withChance(0.01),
		Item.of('ars_nouveau:blue_archwood_sapling').withChance(0.01),
		Item.of('hexerei:mahogany_sapling').withChance(0.01),
		Item.of('hexerei:willow_sapling').withChance(0.01),
		Item.of('forbidden_arcanus:growing_edelwood').withChance(0.01),
		Item.of('malum:runewood_sapling').withChance(0.01)
	  ], '#minecraft:leaves').id(`mbm2:crushing/leaves_into_saplings`)

	/// Blaze Burner
	event.remove({id: 'create:crafting/kinetics/empty_blaze_burner'})
	event.shaped('create:empty_blaze_burner', [
		'RRR',
		'R R',
		'PNP'
		  ], {
		R: '#forge:rods/invar',
		P: '#forge:plates/invar',
		N: '#forge:netherrack'
		  }).id(`mbm2:crafting/empty_blaze_burner`)

	  //Spirit Compat
	  event.recipes.createHaunting('spirit:soul_powder', 'minecraft:glowstone_dust').id('mbm2:huanting/soul_powder')
	  event.recipes.createHaunting('spirit:soul_slate', 'minecraft:deepslate').id('mbm2:huanting/soul_slate')


	/// Propeller
	event.remove({id: 'create:crafting/kinetics/propeller'})
	event.shaped('create:propeller', [
	  ' A ',
	  'ACA',
	  ' A '
		], {
	  A: 'create:andesite_alloy',
	  C: '#forge:gears/iron'
		}).id(`mbm2:crafting/propeller`)


	/// Steam Engine
	event.remove({id: 'create:crafting/kinetics/steam_engine'})
	event.shaped('create:steam_engine', [
	  ' A ',
	  'PMP',
	  ' B '
		], {
	  B: '#forge:cog_blocks/constantan',
	  M: 'create:precision_mechanism',
	  P: '#forge:plates/obsidian',
	  A: 'create:fluid_pipe',
		}).id(`mbm2:crafting/steam_engine`)

//Clear Filter		
event.shapeless('create:attribute_filter', [Item.of('create:attribute_filter').ignoreNBT()]).id(`mbm2:create/clear_attribute_filter`)
event.shapeless('create:filter', [Item.of('create:filter').ignoreNBT()]).id(`mbm2:create/clear_filter`)


	//Make some Hot Cream with a bonus chance
	event.recipes.createMixing([Fluid.of('tconstruct:magma', 1000), Item.of('magma_cream').withChance(0.25)], ['magma_block']).heated().id(`mbm2:mixing/magma_from_block`)
	event.recipes.createMixing([Fluid.of('tconstruct:magma', 250)], ['magma_cream']).heated().id(`mbm2:mixing/magma_from_ball`)

	//Melt some Clay
	event.recipes.createMixing([Fluid.of('tconstruct:molten_clay', 1000)], ['clay', Fluid.of('water', 1000)]).id(`mbm2:mixing/clay_from_block`)
	event.recipes.createMixing([Fluid.of('tconstruct:molten_clay', 250)], ['clay_ball', Fluid.of('water', 250)]).id(`mbm2:mixing/clay_from_ball`)


		
});