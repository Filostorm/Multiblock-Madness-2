/*

onEvent('tags.items', event => {
	event.add(`forge:ingots`, `naturesaura:tainted_gold`)
	 event.remove(`create:crushed_ores/${item}`, `kubejs:crushed_${item}`)
 });
 */
onEvent('recipes', event => {
	//Skystone tank rename
	event.remove({output: 'ae2:sky_stone_tank'})
  	event.shaped('ae2:sky_stone_tank', [
		'AAA',
		'ABA',
		'AAA'
  	], {
		A: '#forge:rods/compressed_steel',
		B: 'thermal:obsidian_glass'
  	}).id('mbm2:hardened_tank')

	
	//Skystone tank rename
	event.remove({output: 'ae2:sky_stone_tank'})
  	event.shaped('ae2:sky_stone_tank', [
		'AAA',
		'ABA',
		'AAA'
  	], {
		A: '#forge:rods/compressed_steel',
		B: 'thermal:obsidian_glass'
  	}).id('mbm2:hardened_tank')

	//Charging Quartz wioth Powah
	global.powahEnergizing(event, [Item.of('ae2:certus_quartz_crystal').toJson()], Item.of('ae2:charged_certus_quartz_crystal'), 15000, 'mbm2:powah/charged_quartz')


  // Printed Silicon
  event.recipes.createSequencedAssembly([ // start the recipe
  'ae2:printed_silicon', // have this item be an output
  ], 'ae:silicon', [ // input.
  event.recipes.createPressing('kubejs:incomplete_printed_silicon_processor', ['kubejs:incomplete_printed_silicon_processor']),
  event.recipes.createPressing('kubejs:incomplete_printed_silicon_processor', ['kubejs:incomplete_printed_silicon_processor']),
  event.recipes.createCutting('kubejs:incomplete_printed_silicon_processor', ['kubejs:incomplete_printed_silicon_processor']).processingTime(100),
  ]).transitionalItem('kubejs:incomplete_printed_silicon_processor').loops(1).id(`mbm2:printed_silicon_processor`)

  // Printed Calculation Processor
  event.recipes.createSequencedAssembly([ // start the recipe
  'ae2:printed_calculation_processor', // have this item be an output
  ], 'ae2:certus_quartz_crystal', [ // input.
  event.recipes.createPressing('kubejs:incomplete_printed_calculation_processor', ['kubejs:incomplete_printed_calculation_processor']),
  event.recipes.createCutting('kubejs:incomplete_printed_calculation_processor', ['kubejs:incomplete_printed_calculation_processor']).processingTime(100),
  event.recipes.createPressing('kubejs:incomplete_printed_calculation_processor', ['kubejs:incomplete_printed_calculation_processor']),
  ]).transitionalItem('kubejs:incomplete_printed_calculation_processor').loops(1).id(`mbm2:printed_calculation_processor`)

  // Calculation Processor
  event.recipes.createSequencedAssembly([ // start the recipe
  'ae2:calculation_processor', // have this item be an output
  ], 'ae2:printed_calculation_processor', [ // input.
  event.recipes.createDeploying('kubejs:incomplete_calculation_processor', ['kubejs:incomplete_calculation_processor', 'ae2:printed_silicon']),
  event.recipes.createFilling('kubejs:incomplete_calculation_processor', ['kubejs:incomplete_calculation_processor', Fluid.of('immersiveengineering:redstone_acid', 250)]),
  ]).transitionalItem('kubejs:incomplete_calculation_processor').loops(1).id(`mbm2:calculation_processor`)


  // Printed Logic Processor
  event.recipes.createSequencedAssembly([ // start the recipe
  'ae2:printed_logic_processor', // have this item be an output
  ], 'gold_ingot', [ // input.
  event.recipes.createCutting('kubejs:incomplete_printed_logic_processor', ['kubejs:incomplete_printed_logic_processor']).processingTime(100),
  event.recipes.createCutting('kubejs:incomplete_printed_logic_processor', ['kubejs:incomplete_printed_logic_processor']).processingTime(100),
  event.recipes.createPressing('kubejs:incomplete_printed_logic_processor', ['kubejs:incomplete_printed_logic_processor']),
  ]).transitionalItem('kubejs:incomplete_printed_logic_processor').loops(1).id(`mbm2:printed_logic_processor`)

  // Logic Processor
  event.recipes.createSequencedAssembly([ // start the recipe
  'ae2:logic_processor', // have this item be an output
  ], 'ae2:printed_logic_processor', [ // input.
  event.recipes.createDeploying('kubejs:incomplete_logic_processor', ['kubejs:incomplete_logic_processor', 'ae2:printed_silicon']),
  event.recipes.createFilling('kubejs:incomplete_logic_processor', ['kubejs:incomplete_logic_processor', Fluid.of('immersiveengineering:redstone_acid', 250)]),
  ]).transitionalItem('kubejs:incomplete_logic_processor').loops(1).id(`mbm2:logic_processor`)


  // Printed Engineering Processor
  event.recipes.createSequencedAssembly([ // start the recipe
  'ae2:printed_engineering_processor', // have this item be an output
  ], 'dimond', [ // input.
  event.recipes.createCutting('kubejs:incomplete_printed_engineering_processor', ['kubejs:incomplete_printed_engineering_processor']).processingTime(100),
  event.recipes.createPressing('kubejs:incomplete_printed_engineering_processor', ['kubejs:incomplete_printed_engineering_processor']),
  event.recipes.createCutting('kubejs:incomplete_printed_engineering_processor', ['kubejs:incomplete_printed_engineering_processor']).processingTime(100),
  ]).transitionalItem('kubejs:incomplete_printed_engineering_processor').loops(1).id(`mbm2:printed_engineering_processor`)

  // Engineering Processor
  event.recipes.createSequencedAssembly([ // start the recipe
  'ae2:engineering_processor', // have this item be an output
  ], 'ae2:printed_engineering_processor', [ // input.
  event.recipes.createDeploying('kubejs:incomplete_engineering_processor', ['kubejs:incomplete_engineering_processor', 'ae2:printed_silicon']),
  event.recipes.createFilling('kubejs:incomplete_engineering_processor', ['kubejs:incomplete_engineering_processor', Fluid.of('immersiveengineering:redstone_acid', 250)]),
  ]).transitionalItem('kubejs:incomplete_engineering_processor').loops(1).id(`mbm2:engineering_processor`)

 //Formation Core
  event.remove({output: 'ae2:formation_core'})
  global.ieBlueprint(event, 'components', Item.of(`ae2:formation_core`), [{count:1, base_ingredient: {item: `ae2:printed_logic_processor`}}, {item: 'ae2:fluix_crystal'}, {tag: 'forge:wires/red_alloy'}], `mbm2:immersive/formation_core`)

//Annihilation Core
  event.remove({output: 'ae2:annihilation_core'})
  global.ieBlueprint(event, 'components', Item.of(`ae2:annihilation_core`), [{base_ingredient: {item: `ae2:printed_logic_processor`}}, {item: 'ae2:fluix_crystal'}, {tag: 'forge:wires/electrum'}], `mbm2:immersive/annihilation_core`)


  	//event.shapeless(`kubejs:carbon_covered_iron`, [`#forge:ingots/iron`, '#forge:dusts/coal_coke']).id(`mbm2:carbon_covered_iron`)
	/*
	  'ae2:energy_acceptor', 
	  'ae2:fluix_smart_cable', 
	  'ae2:crafting_terminal', 
	  'ae2:storage_bus', 
	  'ae2:fluix_glass_cable', 

	  'ae2:quartz_glass', 
	  'kubejs:red_alloy_wire',, 
	  'kubejs:source_tube' 
	  'ae2:charged_certus_quartz_crystal', 
	  'ae2:fluix_crystal', 
	  'immersiveengineering:redstone_acid_bucket', 
	  'naturesaura:gold_powder'*/
});