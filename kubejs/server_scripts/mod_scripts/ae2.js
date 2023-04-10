onEvent('tags.items', event => {
	event.add('#forge:seeds/certus_quartz', 'ae2:certus_crystal_seed')
 });
 
onEvent('recipes', event => {

	let recipesToRemove = [
		'ae2things:cells/disk_drive_1k',
		'ae2:network/cells/item_storage_cell_1k',
		'ae2:network/cells/fluid_storage_cell_1k',
		'ae2things:cells/disk_drive_4k',
		'ae2:network/cells/item_storage_cell_4k',
		'ae2:network/cells/fluid_storage_cell_4k',
		'ae2things:cells/disk_drive_16k',
		'ae2:network/cells/item_storage_cell_16k',
		'ae2:network/cells/fluid_storage_cell_16k',
		'ae2things:cells/disk_drive_64k',
		'ae2:network/cells/item_storage_cell_64k',
		'ae2:network/cells/fluid_storage_cell_64k',
		'ae2things:cells/disk_drive_256k',
		'ae2:network/cells/item_storage_cell_256k',
		'ae2:network/cells/fluid_storage_cell_256k',


		'ae2:network/cells/spatial_storage_cell_2_cubed',
		'ae2:network/cells/spatial_storage_cell_16_cubed',
		'ae2:network/cells/spatial_storage_cell_128_cubed',
	]
	recipesToRemove.forEach(item => {
		event.remove({id: item})
	});


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
	global.powahEnergizing(event, [Item.of('ae2:certus_quartz_crystal').toJson()], Item.of('ae2:charged_certus_quartz_crystal'), 25000, 'mbm2:powah/charged_quartz')


  // Printed Silicon
  event.recipes.createSequencedAssembly([ // start the recipe
  'ae2:printed_silicon', // have this item be an output
  ], 'ae2:silicon', [ // input.
  event.recipes.createPressing('kubejs:incomplete_printed_silicon', ['kubejs:incomplete_printed_silicon']),
  event.recipes.createPressing('kubejs:incomplete_printed_silicon', ['kubejs:incomplete_printed_silicon']),
  event.recipes.createCutting('kubejs:incomplete_printed_silicon', ['kubejs:incomplete_printed_silicon']).processingTime(100),
  ]).transitionalItem('kubejs:incomplete_printed_silicon').loops(1).id(`mbm2:printed_silicon`)

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
  ], 'diamond', [ // input.
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
  global.ieBlueprint(event, 'components', Item.of(`ae2:formation_core`), [{item: `ae2:logic_processor`}, {item: 'ae2:fluix_crystal'}, {count:2, base_ingredient: {tag: 'forge:wires/red_alloy'}}], `mbm2:immersive/formation_core`)

//Annihilation Core
  event.remove({output: 'ae2:annihilation_core'})
  global.ieBlueprint(event, 'components', Item.of(`ae2:annihilation_core`), [{item: `ae2:logic_processor`}, {item: 'ae2:fluix_crystal'}, {count:2, base_ingredient:  {tag: 'forge:wires/electrum'}}], `mbm2:immersive/annihilation_core`)


//Thermal Quartz
  global.thermalCrystallizer(event, 'water', 2000, Item.of('ae2:certus_quartz_crystal').toResultJson(), 'forge:dusts/certus_quartz', `mbm2:crystallizer/certus_quartz_from_dust`)
  global.thermalCrystallizer(event, 'water', 2000, Item.of('ae2:fluix_crystal').toResultJson(), 'forge:dusts/fluix', `mbm2:crystallizer/fluix_from_dust`)
  //global.thermalCrystallizer(event, 'water', 2000, Item.of('ae2:certus_quartz_crystal').toResultJson(), 'forge:seeds/certus_quartz', `mbm2:crystallizer/certus_quartz_from_seed`)

//Fluix alt recipe
 event.recipes.createMixing(['4x ae2:fluix_crystal'], [Fluid.of('immersiveengineering:redstone_acid', 250), '#forge:gems/quartz', 'ae2:charged_certus_quartz_crystal']).id('mbm2:mixing/fluix_crystal')


  //Silicon
  event.smelting('ae2:silicon', `#forge:dusts/quartz`).id(`mbm2:silicon_from_quartz`)
  
	//energy_acceptor
	event.remove({id: 'ae2:network/blocks/energy_energy_acceptor'})
	event.shaped('ae2:energy_acceptor', [
	  'HRH',
	  'GSG',
	  'HCH'
	], {
	  S: '#forge:casings/hepatizon',
	  C: 'immersiveengineering:component_electronic',
	  H: 'powah:energy_cable_hardened',
	  G: 'ae2:quartz_glass',
	  R: 'kubejs:silver_coil'

	}).id('mbm2:energy_acceptor')

	//semi_dark_monitor
	event.remove({id: 'ae2:network/parts/panels_semi_dark_monitor'})
	event.shaped('ae2:semi_dark_monitor', [
	  ' GQ',
	  'PRQ',
	  ' GQ'
	], {
		G: '#forge:dusts/glowstone',
		R: '#forge:dusts/redstone',
	  	Q: 'ae2:quartz_glass',
	  	P: '#forge:plates/energetic_alloy',
	}).id('mbm2:semi_dark_monitor')
  
	//terminal
	event.remove({id: 'ae2:network/parts/terminals'})
	event.shaped('ae2:terminal', [
	  'PTP',
	  'ASA',
	  'PCP'
	], {
		A: 'create:display_board',
	  	S: 'ae2:semi_dark_monitor',
		C: 'ae2:logic_processor',
		P: '#forge:plates/energetic_alloy',
		T: 'kubejs:source_tube'
	}).id('mbm2:terminal')

	//crafting_terminal
	event.remove({id: 'ae2:network/parts/terminals_crafting'})
	event.shaped('ae2:crafting_terminal', [
	  'PTP',
	  'ASF',
	  'PCP'
	], {
		A: 'ae2:annihilation_core',
		F: 'ae2:formation_core',
	  	S: 'ae2:terminal',
		C: 'ae2:calculation_processor',
		P: '#forge:plates/hepatizon', //, fluix_steel
		T: 'kubejs:source_tube'
	}).id('mbm2:crafting_terminal')
  
	//storage_bus
	event.remove({id: 'ae2:network/parts/storage_bus'})
	event.shaped('ae2:storage_bus', [
	  ' IG',
	  'CPU',
	  ' SG'
	], {
		P: '#forge:platings/energetic_alloy',
		U: 'sophisticatedstorage:advanced_pickup_upgrade',
		C: 'ae2:fluix_glass_cable',
		G: 'ae2:quartz_glass',
		I: 'minecraft:piston',
		S: 'minecraft:sticky_piston',
	}).id('mbm2:storage_bus')

  
	//charger
	event.remove({id: 'ae2:network/blocks/crystal_processing_charger'})
	event.shaped('ae2:charger', [
	  'PCP',
	  'O  ',
	  'PCP'
	], {
		P: '#forge:plates/hepatizon',
		O: 'powah:energizing_orb',
		C: 'thermal:rf_coil',
	}).id('mbm2:charger')
  

	//laser_diode
	event.shaped('thermal:laser_diode', [
	  ' FG',
	  'REF',
	  ' R '
	], {
		F: '#forge:dusts/fluix',
		R: '#forge:rods/red_alloy',
		E: 'powah:capacitor_hardened',
		G: 'elementalcraft:burnt_glass'
	}).id('mbm2:laser_diode')

	//inscriber
	event.remove({id: 'ae2:network/blocks/inscribers'})
	event.shaped('ae2:inscriber', [
	  'PSP',
	  'D  ',
	  'PSP'
	], {
		P: '#forge:plates/hepatizon',
	  	D: 'thermal:laser_diode',
		S: 'minecraft:sticky_piston',
	}).id('mbm2:inscriber')

  
	//Interface
	event.remove({id: 'ae2:network/blocks/interfaces_interface'})
	event.shaped('ae2:interface', [
	  'PQP',
	  'FEA',
	  'PQP'
	], {
	  P: '#forge:plates/signalum',
	  A: 'ae2:annihilation_core',
	  F: 'ae2:formation_core',
	  Q: 'ae2:quartz_glass',
	  E: 'immersiveengineering:component_electronic_adv'
	}).id('mbm2:interface')
	
	//Storage Drive
	event.remove({id: 'ae2:network/blocks/storage_drive'})
	event.shaped('ae2:drive', [
	  'PEP',
	  'CSC',
	  'PEP'
	], {
		S: '#forge:casings/titanium',
		P: '#forge:platings/hepatizon',
		E: 'ae2:engineering_processor',
		C: 'ae2:fluix_glass_cable'
	}).id('mbm2:drive')


	//Crafting Unit
	event.remove({id: 'ae2:network/crafting/cpu_crafting_unit'})
	event.shaped('ae2:crafting_unit', [
	  'PEP',
	  'CSC',
	  'PEP'
	], {
		S: '#forge:scaffoldings/energetic_alloy',
		P: '#forge:plates/titanium',
		E: 'ae2:calculation_processor',
		C: 'ae2:fluix_smart_cable'
	}).id('mbm2:crafting_unit')
  
	//Fluix Covered Cable
	event.remove({id: 'ae2:network/cables/covered_fluix'})
	event.shaped('8x ae2:fluix_covered_cable', [
	  'CCC',
	  'CBC',
	  'CCC'
	], {
	  C: 'ae2:fluix_glass_cable',
	  B: 'thermal:latex_bucket'
	}).id('mbm2:fluix_covered_cable')
	global.ieBottling(event, [Item.of('ae2:fluix_covered_cable').toJson()], Item.of('ae2:fluix_glass_cable').toJson(), {"tag":"forge:latex","amount":125}, 'mbm2:bottling/fluix_covered_cable')

	

	//Nore Cable stuff
	event.remove({id: 'ae2:network/cables/dense_smart_fluix'})
	event.shapeless('4x ae2:fluix_smart_cable', ['ae2:fluix_smart_dense_cable']).id('mbm2:uncompressing_fluix_smart_cable')
	event.shapeless('4x ae2:fluix_covered_cable', ['ae2:fluix_covered_dense_cable']).id('mbm2:uncompressing_fluix_covered_cable')
	



	//1k Storage Component
	event.remove({id: 'ae2:network/cells/item_storage_components_cell_1k_part'})
	event.shaped('ae2:cell_component_1k', [
	  'SQS',
	  'QPQ',
	  'SQS'
	], {
		Q: '#forge:gems/certus_quartz',
		S: '#forge:sheets/energetic_alloy',
		P: 'ae2:logic_processor',
	}).id('mbm2:cell_component_1k')

    



	/*
	  'ae2:fluix_smart_cable', 
	  'ae2:fluix_glass_cable', 

	  'ae2:quartz_glass', 
	  'kubejs:red_alloy_wire',, 
	  'kubejs:source_tube' 
	  'ae2:charged_certus_quartz_crystal', 
	  'ae2:fluix_crystal', 
	  'immersiveengineering:redstone_acid_bucket', 
	  'naturesaura:gold_powder'*/
});