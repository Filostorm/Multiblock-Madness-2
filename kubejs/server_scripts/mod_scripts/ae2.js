onEvent('tags.items', event => {
	event.add('#forge:seeds/certus_quartz', 'ae2:certus_crystal_seed')
 });
 
onEvent('recipes', event => {

	let recipesToRemove = [
		'create:compat/ae2/mixing/fluix_crystal',

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


//Fluix alt recipe
 event.recipes.createMixing(['4x ae2:fluix_crystal'], [Fluid.of('immersiveengineering:redstone_acid', 250), '#forge:gems/quartz', 'ae2:charged_certus_quartz_crystal']).id('mbm2:mixing/fluix_crystal')


  //Silicon
  event.smelting('ae2:silicon', `#forge:dusts/quartz`).id(`mbm2:silicon_from_quartz`)
  
	//controller
	event.remove({id: 'ae2:network/blocks/controller'})
	event.shaped('ae2:controller', [
	  'HCH',
	  'GSG',
	  'HCH'
	], {
	  S: '#forge:frame_boxs/titanite',
	  C: 'pneumaticcraft:printed_circuit_board',
	  H: '#forge:plates/fluix_steel',
	  G: 'ae2:quartz_vibrant_glass',

	}).id('mbm2:controller')

	//energy_acceptor
	event.remove({id: 'ae2:network/blocks/energy_energy_acceptor'})
	event.shaped('ae2:energy_acceptor', [
	  'HRH',
	  'GSG',
	  'HCH'
	], {
	  S: '#forge:casings/brass',
	  C: 'kubejs:charged_coil',
	  H: 'powah:energy_cable_basic',
	  G: 'ae2:quartz_glass',
	  R: '#forge:gems/fluix'

	}).id('mbm2:energy_acceptor')

	//semi_dark_monitor
	event.remove({id: 'ae2:network/parts/panels_semi_dark_monitor'})
	event.shaped('ae2:semi_dark_monitor', [
	  ' GQ',
	  'PRQ',
	  ' GQ'
	], {
		G: '#forge:dusts/glowstone',
		R: '#forge:dusts/fluix',
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
		C: 'powah:capacitor_basic_large', //'ae2:logic_processor',
		P: '#forge:plates/energetic_alloy',
		T: 'kubejs:source_tube'
	}).id('mbm2:terminal')

	//Pattern Terminal
	event.replaceInput({id: 'ae2:network/parts/terminals_pattern_encoding'}, 'ae2:crafting_terminal', 'ae2:semi_dark_monitor')
	

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
		P: '#forge:plates/reinforced_electrum', // cobalt, hepatizon, fluix_steel
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
	  'PGP'
	], {
	  P: '#forge:platings/cobalt_brass',
	  A: 'ae2:annihilation_core',
	  F: 'ae2:formation_core',
	  Q: 'immersiveengineering:component_electronic',
	  E: '#forge:scaffoldings/fluix_steel',
	  G: 'ae2:quartz_glass',
	}).id('mbm2:interface')
	

	//Pattern Provider
	event.remove({id: 'ae2:network/blocks/pattern_providers_interface'})
	//Early Recipe
	//event.shaped('ae2:pattern_provider', ['ABA','CDC','ABA'], {A: '#forge:plates/tier_1_electrical_alloy',B: 'ae2:quartz_glass',C: 'kubejs:charged_coil',D: '#forge:frame_boxs/energetic_alloy'}).id('mbm2:pattern_provider')
	//Alt Recipe
	event.shaped('ae2:pattern_provider', [
	  'PEP',
	  'FCF',
	  'PQP'
	], {
	  P: '#forge:platings/lumium',
	  //A: 'ae2:annihilation_core',
	  F: 'ae2:formation_core',
	  Q: 'ae2:quartz_glass',
	  C: '#forge:scaffoldings/fluix_steel',
	  E: 'immersiveengineering:component_electronic_adv'
	}).id('mbm2:alt_pattern_provider')
	
	//Crafting Unit
	event.remove({id: 'ae2:network/crafting/cpu_crafting_unit'})
	event.shaped('ae2:crafting_unit', [
	  'PEP',
	  'CSC',
	  'PEP'
	], {
		S: '#forge:frame_boxs/energetic_alloy',
		P: '#forge:plates/tier_1_electrical_alloy',
		E: 'ae2:calculation_processor',
		C: 'ae2:fluix_smart_cable'
	}).id('mbm2:crafting_unit')
  

	//Molecular Assembler
	event.remove({id: 'ae2:network/crafting/molecular_assembler'})
	event.shaped('ae2:molecular_assembler', [
	  'CQC',
	  'FEA',
	  'CQC'
	], {
	  C: 'create:mechanical_crafter',
	  A: 'ae2:annihilation_core',
	  F: 'ae2:formation_core',
	  Q: 'thermal:lumium_glass',
	  E: '#forge:frame_boxs/titanium'
	}).id('mbm2:molecular_assembler')
	
	
	//Pattern
	event.remove({id: 'ae2:network/crafting/patterns_blank'})
	//Early Recipe
	event.shaped('ae2:blank_pattern', ['ABA','CDC','EEE'], {A: 'minecraft:glowstone_dust',B: 'create:precision_mechanism',C: 'ae2:quartz_glass',D: 'immersiveengineering:slab_treated_wood_horizontal',E: 'kubejs:energetic_alloy_plate'}).id('mbm2:blank_pattern')
	//2x Recipe
	event.shaped('2x ae2:blank_pattern', [
	  'GEG',
	  'QFQ',
	  'PPP'
	], {
		F: 'immersiveengineering:fiberboard',
		P: '#forge:plates/aluminum',
		Q: 'ae2:quartz_glass',
		G: 'minecraft:glowstone_dust',
		E: 'immersiveengineering:component_electronic'
	}).id('mbm2:blank_pattern_x2')
  
	//Fluix Covered Cable
	event.remove({id: 'ae2:network/cables/covered_fluix'})
	event.shaped('8x ae2:fluix_covered_cable', [
	  'CCC',
	  'CBC',
	  'CCC'
	], {
	  C: 'ae2:fluix_glass_cable',
	  B: 'industrialforegoing:latex_bucket'
	}).id('mbm2:fluix_covered_cable')
	global.ieBottling(event, [Item.of('ae2:fluix_covered_cable').toJson()], Item.of('ae2:fluix_glass_cable').toJson(), {"tag":"forge:latex","amount":100}, 'mbm2:bottling/fluix_covered_cable')

	

	//Nore Cable stuff
	event.remove({id: 'ae2:network/cables/dense_smart_fluix'})
	event.shapeless('4x ae2:fluix_smart_cable', ['ae2:fluix_smart_dense_cable']).id('mbm2:uncompressing_fluix_smart_cable')
	event.shapeless('4x ae2:fluix_covered_cable', ['ae2:fluix_covered_dense_cable']).id('mbm2:uncompressing_fluix_covered_cable')
	

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



	//Resonating Crystal
	global.mekanismMetallurgicInfusing(event, Item.of('lazierae2:resonating_crystal'), Item.of('kubejs:resonating_dust'), 'mekanism:diamond', 20, `mbm2:infusing/resonating_crystal`)
	
	event.recipes.createFilling('kubejs:resonating_dust', [Fluid.of('thermal:ender', 250), 'ae2:sky_dust']).id('mbm2:filling/resonating_dust')
	event.recipes.tconstruct.casting_table('kubejs:resonating_dust', 'thermal:ender', 250).cast('ae2:sky_dust').consumeCast().coolingTime(100).id(`mbm2:casting/resonating_dust`)
	


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

	//Can't find the right meteorites, or are you just too lazy?
	event.recipes.botania.pure_daisy('beyond_earth:sky_stone', 'ae2:smooth_sky_stone_block').id(`mbm2:reverse_skystone_conversion`)
	event.recipes.botania.pure_daisy('ae2:sky_stone_block', 'beyond_earth:sky_stone').id(`mbm2:skystone_conversion`)

	event.recipes.tconstruct.casting_table('ae2:calculation_processor_press', 'tconstruct:molten_steel', 810).cast('ae2:calculation_processor').consumeCast().coolingTime(180).id(`mbm2:casting/ae2_press_calculation`)
	event.recipes.tconstruct.casting_table('ae2:engineering_processor_press', 'tconstruct:molten_steel', 810).cast('ae2:engineering_processor').consumeCast().coolingTime(180).id(`mbm2:casting/ae2_press_engineering`)
	event.recipes.tconstruct.casting_table('ae2:logic_processor_press', 'tconstruct:molten_steel', 810).cast('ae2:logic_processor').consumeCast().coolingTime(180).id(`mbm2:casting/ae2_press_logic`)
	event.recipes.tconstruct.casting_table('ae2:silicon_press', 'tconstruct:molten_steel', 810).cast('ae2:printed_silicon').consumeCast().coolingTime(180).id(`mbm2:casting/ae2_press_silicon`)

	//ae2 additions scripts

	var ae2aLoaded = Platform.isLoaded('ae2_additions');
    if(ae2aLoaded){ 
	let ae2aRemoval = [
		//'ae2_additions:network/cells/item_advanced_cell_housing',
		//'ae2_additions:network/cells/item_ultimate_cell_housing',
		//'ae2_additions:network/cells/item_storage_cell_1kk',
		//'ae2_additions:network/cells/item_storage_cell_4kk',
		//'ae2_additions:network/cells/item_storage_cell_16kk',
		//'ae2_additions:network/cells/item_storage_cell_64kk',
		//'ae2_additions:network/cells/item_storage_cell_256kk',
		//'ae2_additions:network/cells/item_storage_cell_1kkk_1th',
		//'ae2_additions:network/cells/item_storage_cell_1kkk_2th',
		//'ae2_additions:network/cells/item_storage_cell_1kkk_3th',
		//'ae2_additions:network/cells/item_storage_cell_1kkk_4th',
		//'ae2_additions:network/cells/item_storage_cell_1kk_storage',
		//'ae2_additions:network/cells/item_storage_cell_4kk_storage',
		//'ae2_additions:network/cells/item_storage_cell_16kk_storage',
		//'ae2_additions:network/cells/item_storage_cell_64kk_storage',
		//'ae2_additions:network/cells/item_storage_cell_256kk_storage',
		//'ae2_additions:network/cells/item_storage_cell_1kkk_1th_storage',
		//'ae2_additions:network/cells/item_storage_cell_1kkk_2th_storage',
		//'ae2_additions:network/cells/item_storage_cell_1kkk_3th_storage',
		//'ae2_additions:network/cells/item_storage_cell_1kkk_4th_storage',
		'ae2_additions:network/crafting/pattern_provider_3th_gen',
		'ae2_additions:network/crafting/pattern_provider_4th_gen',
	]
	ae2aRemoval.forEach(item => {
		event.remove({id: item})
	});

	event.replaceInput({id: 'ae2_additions:network/crafting/pattern_provider_2th_gen'}, 'ae2:fluix_block', 'powah:uraninite_block')

	event.shaped('ae2_additions:pattern_provider_3th', ['ABA','CDC','ABA'], {A: 'kubejs:lunar_alloy_plating',B: 'laserio:logic_chip',C: 'pneumaticcraft:module_expansion_card',D: 'ae2_additions:pattern_provider_2th'}).id(`mbm2:pattern_provider_3rd`)
	
	event.shaped('ae2_additions:pattern_provider_4th', ['ABA','CDC','ABA'], {A: 'kubejs:space_alloy_plating',B: 'lazierae2:parallel_processor',C: 'mekanism:ultimate_control_circuit',D: 'ae2_additions:pattern_provider_3th'}).id(`mbm2:pattern_provider_4th`)
}

	  //crystal_processing_quartz_growth_accelerator
	  event.replaceInput({id: 'ae2:network/blocks/crystal_processing_quartz_growth_accelerator'}, '#forge:ingots/iron', '#forge:platings/cobalt')

	//Thermal Quartz
	global.thermalCrystallizer(event, 'water', 2000, Item.of('ae2:certus_quartz_crystal').toResultJson(), '#forge:dusts/certus_quartz', `mbm2:crystallizer/certus_quartz_from_dust`)
	global.thermalCrystallizer(event, 'water', 2000, Item.of('ae2:fluix_crystal').toResultJson(), '#forge:dusts/fluix', `mbm2:crystallizer/fluix_from_dust`)

	global.thermalCrystallizer(event, 'water', 2000, Item.of(`#forge:gems/fluix`).toResultJson(), 'ae2:fluix_crystal_seed', `mbm2:crystallizer/growing_fluix`)
	global.thermalCrystallizer(event, 'water', 2000, Item.of(`#forge:gems/certus_quartz`).toResultJson(), 'ae2:certus_crystal_seed', `mbm2:crystallizer/growing_certus`)

	//logic_unit
	event.remove({output: 'lazierae2:logic_unit'})
	event.shaped('kubejs:unfinished_logic_unit', ['FFF', 'ABA','CCC'], {A: 'pneumaticcraft:plastic',B: 'ae2:logic_processor',C: 'kubejs:fluix_steel_plate', F: 'kubejs:shaped_fluix_crystal'}).id(`mbm2:unfinished_logic_unit`)
	global.AssemblyLaser(event, 'lazierae2:logic_unit', `kubejs:unfinished_logic_unit`, `mbm2:finished_logic_unit`)

	//crystal_growth
	event.remove({output: 'ae2things:crystal_growth'})
	event.shaped('ae2things:crystal_growth', ['ABA','CDC','AEA'], {A: 'kubejs:titanium_plated_obsidian',B: 'minecraft:hopper',C: 'thermal:obsidian_glass',D: 'lazierae2:growth_core',E: 'ae2:fluix_glass_cable'}).id(`mbm2:crystal_growth`)
	//aggregator
	event.remove({output: 'lazierae2:aggregator'})
	event.shaped('lazierae2:aggregator', ['ABA','CDC','EFE'], {A: 'lazierae2:fluix_steel_ingot',B: 'ae2:charger',C: 'lazierae2:parallel_processor',D: 'lazierae2:logic_unit',E: 'ae2:dense_energy_cell',F: 'ae2things:crystal_growth'}).id(`mbm2:aggregator`)
	
	// Shaped Fluix
	event.recipes.createCutting('kubejs:shaped_fluix_crystal', 'ae2:fluix_crystal').id('mbm2:cutting/shaped_fluix_crystal')
	event.recipes.mekanismSawing(`2x kubejs:shaped_fluix_crystal`, `ae2:fluix_crystal`).id(`mbm2:mek_sawmill/shaped_fluix_crystal`)
	event.custom({type:'immersiveengineering:sawmill',
		secondaries:[
			{output:Item.of(`#forge:dusts/fluix`).toJson(), stripping:'false'}
		],
		result:Item.of(`5x kubejs:shaped_fluix_crystal`).toResultJson(),
		input:Ingredient.of('ae2:fluix_block').toJson(),
		energy:1000
	}).id(`mbm2:ie_sawmill/shaped_fluix_crystal`)


	//1k Storage Component
	event.remove({id: 'ae2:network/cells/item_storage_components_cell_1k_part'})
	event.shaped('ae2:cell_component_1k', [
	  'SQS',
	  'QPQ',
	  'SQS'
	], {
		Q: 'ae2:certus_quartz_crystal',
		S: '#forge:plates/tier_1_electrical_alloy',
		P: 'ae2:logic_processor',
	}).id('mbm2:cell_component_1k')

    

	//4k Storage Component
	event.remove({id: 'ae2:network/cells/item_storage_components_cell_4k_part'})
	event.shaped('ae2:cell_component_4k', [
	  'SPS',
	  'KQK',
	  'SKS'
	], {
		Q: 'kubejs:shaped_fluix_crystal',
		S: '#forge:plates/tier_1_electrical_alloy',
		P: 'ae2:calculation_processor',
		K: 'ae2:cell_component_1k'
	}).id('mbm2:cell_component_4k')

    
	//16k Storage Component
	event.remove({output: 'ae2:cell_component_16k'})
	event.shaped('ae2:cell_component_16k', ['ABA','CDC','ACA'], {A: 'kubejs:tier_1_electrical_alloy_plate',B: 'ae2:calculation_processor',C: 'ae2:cell_component_4k',D: 'pneumaticcraft:plastic'}).id(`mbm2:crafting/cell_component_16k`)

	//64k Storage Component
	event.remove({output: 'ae2:cell_component_64k'})
	event.shaped('ae2:cell_component_64k', ['ABA','CDC','ACA'], {A: 'kubejs:tier_2_electrical_alloy_plate',B: 'ae2:calculation_processor',C: 'ae2:cell_component_16k',D: 'botania:mana_diamond'}).id(`mbm2:crafting/cell_component_64k`)

	//256k Storage Component
	event.remove({output: 'ae2:cell_component_256k'})
	event.shaped('ae2:cell_component_256k', ['ABA','CDC','ACA'], {A: 'kubejs:tier_2_electrical_alloy_plate',B: 'ae2:calculation_processor',C: 'ae2:cell_component_64k',D: 'chemlib:lithium_dust'}).id(`mbm2:crafting/cell_component_256k`)

	//1kk Storage Component
	event.remove({output: 'ae2_additions:cell_component_1kk'})
	event.shaped('ae2_additions:cell_component_1kk', ['ABA','CDC','ACA'], {A: 'kubejs:tier_3_electrical_alloy_plate',B: 'ae2:calculation_processor',C: 'ae2:cell_component_256k',D: 'minecraft:dragon_breath'}).id(`mbm2:crafting/cell_component_1kk`)

	//Basic Card
	event.remove({output: 'ae2:basic_card'})
	event.shaped('ae2:basic_card', ['AB ','CDB','AB '], {A: 'minecraft:gold_ingot',B: 'kubejs:titanium_plate',C: 'kubejs:tier_2_electrical_alloy_spool',D: 'ae2:calculation_processor'}).id(`mbm2:crafting/basic_card`)
	
	//Advanced Card
	event.remove({output: 'ae2:advanced_card'})
	event.shaped('ae2:advanced_card', ['AB ','CDB','AB '], {A: 'minecraft:diamond',B: 'kubejs:titanium_plate',C: 'kubejs:tier_2_electrical_alloy_spool',D: 'ae2:engineering_processor'}).id(`mbm2:crafting/advanced_card`)



});
