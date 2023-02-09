onEvent('tags.items', event => {
	event.add('#forge:seeds/certus_quartz', 'ae2:certus_crystal_seed')
 });
 
onEvent('recipes', event => {

	
	//Energetic Blend
	global.powahEnergizing(event, [Item.of('#forge:dusts/glowstone').toJson(), Item.of('#forge:dusts/redstone').toJson()], Item.of('kubejs:energetic_blend'), 15000, 'mbm2:powah/energetic_blend')
	//event.shapeless(`kubejs:energetic_blend`, [`#forge:dusts/glowstone`, '#forge:dusts/redstone']).id(`mbm2:energetic_blend`)

	//Energetic Alloy
	//global.powahEnergizing(event, [Item.of('#forge:ingots/electrum').toJson(), Item.of('kubejs:energetic_blend').toJson()], Item.of('kubejs:energetic_alloy_ingot'), 15000, 'mbm2:powah/energetic_alloy')

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

  //Silicon
  event.smelting('ae2:silicon', `#forge:dusts/quartz`).id(`mbm2:silicon_from_quartz`)
  
	//energy_acceptor
	event.remove({id: 'ae2:network/blocks/energy_energy_acceptor'})
	event.shaped('ae2:energy_acceptor', [
	  'HRH',
	  'GSG',
	  'HCH'
	], {
	  S: '#immersiveengineering:scaffoldings/energetic_alloy',
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
		P: '#forge:plates/rose_gold', //hepatizon, fluix_steel
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

  
	//interface
	event.remove({id: 'ae2:network/blocks/interfaces_interface'})
	event.shaped('ae2:interface', [
	  'PQP',
	  'FEA',
	  'PQP'
	], {
	  P: '#forge:plates/lumium',
	  A: 'ae2:annihilation_core',
	  F: 'ae2:formation_core',
	  Q: 'ae2:quartz_glass',
	  E: 'immersiveengineering:component_electronic_adv'
	}).id('mbm2:interface')
	

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