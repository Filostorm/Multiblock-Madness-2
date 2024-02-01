onEvent('tags.items', event => {
		event.add('forge:slimeballs', 'createaddition:biomass_pellet')


		event.add('forge:spools', 'createaddition:electrum_spool')
		event.add('forge:spools/electrum', 'createaddition:electrum_spool')
		event.add('forge:spools', 'createaddition:gold_spool')
		event.add('forge:spools/gold', 'createaddition:gold_spool')
		event.add('forge:spools', 'createaddition:copper_spool')
		event.add('forge:spools/copper', 'createaddition:copper_spool')
		

		
		event.add('mbm2:movement_anchors', 'create:mechanical_bearing')
		event.add('mbm2:movement_anchors', 'create:mechanical_piston')
		event.add('mbm2:movement_anchors', 'create:gantry_carriage')

		event.add('mbm2:chassis', 'create:linear_chassis')
		event.add('mbm2:chassis', 'create:radial_chassis')

		event.add('mbm2:sticky', 'create:super_glue')
		event.add('mbm2:sticky', 'slime_ball')

		event.add('mbm2:small_cogs', 'create:cogwheel')

}); 
onEvent('recipes', event => {

/// Alt Belt Recipe using Rubber
	event.shaped('2x create:belt_connector', [
	'AAA',
	'AAA'
  ], {
	A: 'thermal:cured_rubber'
  }).id(`mbm2:crafting/rubber/belt_connector`)
  
/// Alt Funnel Recipe using Rubber
  event.shaped('4x create:andesite_funnel', [
	'B',
	'C'
	  ], {
	B: 'create:andesite_alloy',
	C: 'thermal:cured_rubber'
	  }).id(`mbm2:crafting/rubber/andesite_funnel`)

/// Alt Brass Funnel Recipe using Rubber
  event.shaped('4x create:brass_funnel', [
	'B',
	'C',
	'D'
	  ], {
	B: 'create:electron_tube',
	C: 'create:brass_ingot',
	D: 'thermal:cured_rubber'
	  }).id(`mbm2:crafting/rubber/brass_funnel`)
// [| rubber/andesite_tunnel |] //
event.shaped('4x create:andesite_tunnel', [
	'AA',
	'CC',
  ], {
	A: 'create:andesite_alloy',
C: 'thermal:cured_rubber'
  }).id(`mbm2:crafting/rubber/andesite_tunnel`)

// [| rubber/brass_tunnel |] //
event.shaped('2x create:brass_tunnel', [
	'A ',
	'CC',
	'DD'
  ], {
	A: 'create:electron_tube',
C: 'create:brass_ingot',
D: 'thermal:cured_rubber'
  }).id(`mbm2:crafting/rubber/brass_tunnel`)

// [| rubber/spout |] //
event.shaped('create:spout', [
	'B',
	'C',
  ], {
B: 'create:copper_casing',
C: 'thermal:cured_rubber'
  }).id(`mbm2:crafting/rubber/spout`)


/// Spools
  	event.remove({id: 'createaddition:crafting/spool'})
	event.shaped('4x createaddition:spool', [
		'P',
		'S',
		'P'
		  ], {
		P: '#forge:plates/iron',
		S: 'immersiveengineering:stick_treated'
	}).id(`mbm2:crafting/spool`)

  
	
  // Precision Mechanism
  event.recipes.createSequencedAssembly([ // start the recipe
  'create:precision_mechanism', // have this item be an output
  ], '#forge:plates/gold', [ // input.
  event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:andesite_alloy']),
  event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:gears/brass']),
  event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
  event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
//  event.recipes.createCutting('create:incomplete_precision_mechanism', 'create:incomplete_precision_mechanism').processingTime(50)
  ]).transitionalItem('create:incomplete_precision_mechanism').loops(1).id('mbm2:create/precision_mechanism')
  global.ieBlueprint(event, 'components', Item.of(`create:precision_mechanism`), [{tag: `forge:plates/gold`}, {tag: `forge:gears/brass`}, {item: `create:andesite_alloy`}, {tag: `mbm2:small_cogs`}], `mbm2:blueprint/precision_mechanism`)

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
  }).id('mbm2:crafting/windmill_bearing')

//Sail
event.remove({id: 'create:crafting/kinetics/white_sailfrom_conversion'})
event.remove({id: 'create:crafting/kinetics/white_sail'})
event.shaped('2x create:sail_frame', [
  'BA',
  'AB'
], {
  A: 'create:andesite_alloy',
  B: 'immersiveengineering:stick_treated'
}).id('mbm2:crafting/sail')

event.remove({id: 'createaddition:compat/immersiveengineering/fabric_sail'})
event.shapeless('2x create:white_sail', ['create:sail_frame', 'create:sail_frame', 'immersiveengineering:hemp_fabric']).id('mbm2:create/sail_frame')


//Treated Slabs for the Factory
event.recipes.createCutting('2x immersiveengineering:slab_treated_wood_horizontal', 'immersiveengineering:treated_wood_horizontal').id('mbm2:cutting/treated_slabs')
event.recipes.createCutting('2x immersiveengineering:stick_treated', '#forge:treated_wood_slab').id('mbm2:cutting/treated_sticks')


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
	D: 'kubejs:copper_interlocking_component'
	  }).id(`mbm2:crafting/hose_pulley`)

	  //Brass Upgrades
	event.shapeless('2x create:brass_funnel', ['#forge:ingots/brass', 'create:electron_tube', 'create:andesite_funnel']).id(`mbm2:create/brass_upgrade_funnel`)
	event.shapeless('2x create:brass_tunnel', ['#forge:ingots/brass', '#forge:ingots/brass', 'create:electron_tube', 'create:andesite_tunnel']).id(`mbm2:create/brass_upgrade_tunnel`)

	
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
		//Item.of('malum:runewood_sapling').withChance(0.01)
	  ], '#minecraft:leaves').id(`mbm2:crushing/leaves_into_saplings`)

	/// Blaze Burner
	event.remove({id: 'create:crafting/kinetics/empty_blaze_burner'})
	event.shaped('create:empty_blaze_burner', [
		'RRR',
		'R R',
		'PNP'
		  ], {
		R: '#forge:rods/bronze',
		P: '#forge:plates/bronze',
		N: '#forge:netherrack'
		  }).id(`mbm2:crafting/empty_blaze_burner`)

	  //Spirit Compat
	  event.recipes.createHaunting('spirit:soul_powder', 'minecraft:glowstone_dust').id('mbm2:haunting/soul_powder')
	  event.recipes.createHaunting('spirit:soul_slate', 'minecraft:deepslate').id('mbm2:haunting/soul_slate')


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
/*
	/// schematicannon
	event.remove({id: 'create:crafting/schematics/schematicannon'})
	event.shaped('create:schematicannon', [
	  ' C ',
	  'BEB',
	  'SPS'
		], {
	  S: 'minecraft:smooth_stone',
	  B: 'create:brass_casing',
	  C: 'createbigcannons:wrought_iron_cannon_chamber',
	  E: 'createbigcannons:wrought_iron_cannon_end',
	  P: 'createbigcannons:powder_charge',
		}).id(`mbm2:crafting/schematicannon`)

	/// schematicannon HARD MODE
	event.shaped('create:schematicannon', [
	  ' C ',
	  'BEB',
	  'SPS'
		], {
	  S: 'minecraft:smooth_stone',
	  B: 'create:brass_casing',
	  C: 'createbigcannons:steel_cannon_barrel',
	  E: 'createbigcannons:wrought_iron_cannon_end',
	  P: 'createbigcannons:powder_charge',
		}).id(`mbm2:crafting/schematicannon_hrd_md`)
*/


//Clear Filter		dont need anymore
//event.shapeless('create:attribute_filter', [Item.of('create:attribute_filter').ignoreNBT()]).id(`mbm2:create/clear_attribute_filter`)
//event.shapeless('create:filter', [Item.of('create:filter').ignoreNBT()]).id(`mbm2:create/clear_filter`)

	//Melt some Clay
	event.recipes.createMixing([Fluid.of('tconstruct:molten_clay', 1000)], ['clay', Fluid.of('water', 1000)]).id(`mbm2:mixing/clay_from_block`)
	event.recipes.createMixing([Fluid.of('tconstruct:molten_clay', 250)], ['clay_ball', Fluid.of('water', 250)]).id(`mbm2:mixing/clay_from_ball`)


	event.recipes.createMixing([Fluid.of('immersiveengineering:redstone_acid', 250)], ['redstone', Fluid.of('water', 250)]).id(`mbm2:mixing/redstone_acid`)

	//Temp? Crushing Wheel changes
    event.replaceInput({id: 'create:mechanical_crafting/crushing_wheel'}, '#minecraft:planks', '#forge:treated_wood')
    event.replaceInput({id: 'create:mechanical_crafting/crushing_wheel'}, '#forge:stone', 'elementalcraft:whiterock')
	
	//Magma balls
	event.recipes.createMilling(['2x minecraft:magma_cream', Item.of('magma_cream').withChance(0.50), Item.of('magma_cream').withChance(0.50)], ['minecraft:magma_block']).id(`mbm2:create/crushing/magma_block`)

	//Magma
	event.recipes.createFilling('magma_block', [Fluid.of('tconstruct:magma', 500), 'create:scoria']).id('mbm2:filling/magma_block_from_scoria')
	
	//Blood
	event.recipes.createMixing([Fluid.of('tconstruct:blood', 50)], [Fluid.of('minecraft:water', 50), 'rotten_flesh']).heated().id('mbm2:mixing/blood')

	//Blazing Blood
	event.recipes.createMixing([Fluid.of('tconstruct:blazing_blood', 500)], [Fluid.of('tconstruct:blood', 500), 'blaze_powder']).superheated().id('mbm2:mixing/blazing_blood')

	//ender ingot recipe rework
	event.recipes.createMixing('extendedcrafting:ender_ingot', [Fluid.of('thermal:ender', 250), '#forge:ingots/graphite']).heated().id('mbm2:mixing/ender_ingot')

	//Rose Quartz
	event.shapeless('4x create:rose_quartz', ['3x #forge:gems/quartz','thermal:cinnabar']).id(`mbm2:create/rose_quartz_with_cinnabar`)


});
