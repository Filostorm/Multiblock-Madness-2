	var basicCompressor = [
		'pneumaticcraft:air_compressor', 
		'pneumaticcraft:thermal_compressor', 
		'pneumaticcraft:liquid_compressor',
		//'compressedcreativity:rotational_compressor'
	  ]

onEvent('tags.items', event => {
	  basicCompressor.forEach(gen => {
		  event.add('pneumaticcraft:compressor/basic', gen)
	  });
	//Fix Tags 
	event.add(`forge:ingots`, 'pneumaticcraft:ingot_iron_compressed')
	event.add(`forge:ingots/compressed_steel`, 'pneumaticcraft:ingot_iron_compressed')
	event.add(`forge:gears`, 'pneumaticcraft:compressed_iron_gear')
	event.add(`forge:gears/compressed_steel`, 'pneumaticcraft:compressed_iron_gear')
	event.add(`forge:storage_blocks`, 'pneumaticcraft:compressed_iron_block')
	event.add(`forge:storage_blocks/compressed_steel`, 'pneumaticcraft:compressed_iron_block')
	event.remove(`forge:stone`, 'pneumaticcraft:reinforced_stone')
	event.remove(`forge:stone`, 'pneumaticcraft:compressed_stone')
	
 });
 
onEvent('tags.fluids', event => {
  event.add(`forge:kerosene`, 'pneumaticcraft:kerosene')
});
onEvent('recipes', event => {

	var removeByName = [
		'pneumaticcraft:pressure_chamber_valve',
		'pneumaticcraft:pressure_chamber_valve_x4',
		'pneumaticcraft:pressure_chamber_glass',
		'pneumaticcraft:pressure_chamber_glass_x4',
		'pneumaticcraft:refinery/oil_3',
	]
		removeByName.forEach((item) => {
			event.remove({id: item})
		})
	


	//Compressed Steel
	event.remove({id: 'pneumaticcraft:pressure_chamber/compressed_iron_ingot'})
	global.pressureChamber(event, [{"item": "pneumaticcraft:ingot_iron_compressed","count": 1}], [{"tag": "forge:ingots/steel"}], 2.0, 'mbm2:pressure_chamber/compressed_steel_ingot')
	event.remove({id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot'})
	global.explosionCrafting(event, 'pneumaticcraft:ingot_iron_compressed', '#forge:ingots/steel', 20, 'mbm2:explosion_crafting/compressed_steel')

	event.remove({id: 'pneumaticcraft:pressure_chamber/compressed_iron_block'})
	event.remove({id: 'pneumaticcraft:explosion_crafting/compressed_iron_block'})
	//global.pressureChamber(event, [{"item": "pneumaticcraft:compressed_iron_block","count": 1}], [{"tag": "forge:storage_blocks/steel"}], 2.0, 'mbm2:pressure_chamber/compressed_steel_block')
	//global.explosionCrafting(event, 'pneumaticcraft:compressed_iron_block', '#forge:storage_blocks/steel', 20, 'mbm2:explosion_crafting/compressed_steel_block')

	//Compressed Aluminum
	global.pressureChamber(event, [Item.of('2x #forge:ingots/pressurized_aluminum_alloy')], [{"type": "pneumaticcraft:stacked_item","tag": "forge:ingots/aluminum", "count": 2},{"tag": "forge:ingots/thorium"}, {"tag": "forge:ingots/magnesium"}], 2.0, 'mbm2:pressure_chamber/high_strength_ingot')

	//Turbine Blade
	event.remove({id: 'pneumaticcraft:pressure_chamber/turbine_blade'})
	global.pressureChamber(event, [Item.of('pneumaticcraft:turbine_blade').toResultJson()], [{"type": "pneumaticcraft:stacked_item","tag": "forge:ingots/nethersteel", "count": 4},{"tag": "forge:dusts/magnesium"}, {"item": "kubejs:blazing_redstone"}], 2.0, 'mbm2:pressure_chamber/turbine_blade')

	//Gear Recipe is wrong
	event.remove({id: 'pneumaticcraft:compressed_iron_gear'})
	
	//Lightbock needs rose quartz
    event.replaceInput({id: 'pneumaticcraft:uv_light_box'}, 'minecraft:redstone_lamp', 'create:rose_quartz_lamp')
	
	//Empty PCB
	event.remove({id: 'pneumaticcraft:pressure_chamber/empty_pcb'})
	global.pressureChamber(event, [Item.of('pneumaticcraft:empty_pcb').toResultJson()], [{"type": "pneumaticcraft:stacked_item","tag": 'forge:wires/red_alloy', "count": 2},{"type": "pneumaticcraft:stacked_item","tag": 'forge:sheets/electrum', "count": 4}, {"item": 'pneumaticcraft:plastic'}], 2.0, 'mbm2:pressure_chamber/empty_pcb')
	
	
	
//PCB Blueprint
  	event.shaped('pneumaticcraft:pcb_blueprint', [
		'UEU',
		'WPW',
		'UCU'
  	], {
		P: 'pneumaticcraft:empty_pcb',
		E: 'immersiveengineering:component_electronic_adv',
		W: '#forge:wires/gold',
		C: 'createaddition:copper_spool',
		U: '#forge:gems/lapis', //'#compressedcreativity:upgrade_components',
  	}).id('mbm2:pcb_blueprint')

//Reinforced Stone
	event.remove({id: 'pneumaticcraft:reinforced_stone'})
	event.shaped('4x pneumaticcraft:reinforced_stone', [
		'SRS',
		'R R',
		'SRS'
	  ], {
		S: '#forge:stone',
		R: '#forge:rods/compressed_steel',
	  }).id('mbm2:reinforced_stone')

	//Casing
	event.shaped('kubejs:pneumaticcraft_casing', [
	  'PPP',
	  'SCS',
	  'STS'
	], {
	  S: 'pneumaticcraft:reinforced_bricks',
	  P: '#forge:plates/thorium',
	  C: 'powah:dielectric_casing',
	  T: 'pneumaticcraft:small_tank',
	}).id('mbm2:pneumaticcraft_casing')

	//air_compressor
	event.remove({id: 'pneumaticcraft:air_compressor'})
	event.shaped('pneumaticcraft:air_compressor', [
	  ' P ',
	  'TCT',
	  'GFG'
	], {
	  T: 'pneumaticcraft:pressure_tube',
	  G: '#forge:gears/thorium',
	  C: 'kubejs:pneumaticcraft_casing',
	  F: 'engineersdecor:small_lab_furnace',
	  P: 'create:propeller',
	}).id('mbm2:air_compressor')

	//thermopneumatic_processing_plant
	event.remove({id: 'pneumaticcraft:thermopneumatic_processing_plant'})
	event.shaped('pneumaticcraft:thermopneumatic_processing_plant', [
	  'GPG',
	  'HCH',
	  'RFR'
	], {
	  G: '#forge:gears/reinforced_electrum',
	  R: 'pneumaticcraft:turbine_rotor', //'compressedcreativity:engine_rotor',
	  C: 'kubejs:pneumaticcraft_casing',
	  F: 'powah:capacitor_blazing',
	  P: 'immersiveengineering:component_electronic_adv',
	  H: 'thermal:obsidian_glass',
	}).id('mbm2:thermopneumatic_processing_plant')
	
	
	//Refinery
	event.remove({id: 'pneumaticcraft:refinery'})
	event.shaped('pneumaticcraft:refinery', [
	  'PEP',
	  'HCH',
	  'PFP'
	], {
	  E: 'immersiveengineering:component_electronic_adv',
	  F: 'powah:thermoelectric_plate',
	  C: 'kubejs:pneumaticcraft_casing',
	  H: 'thermal:obsidian_glass',
	  P: '#forge:platings/pressurized_aluminum_alloy',
	}).id('mbm2:refinery')
	
	//Refinery Output
	event.remove({id: 'pneumaticcraft:refinery_output'})
	event.shaped('pneumaticcraft:refinery_output', [
	  'RDR',
	  'HCH',
	  'RDR'
	], {
	  H: 'thermal:obsidian_glass',
	  R: '#forge:rods/rose_gold',
	  C: 'kubejs:pneumaticcraft_casing',
	  D: '#forge:plates/drenched_iron',
	}).id('mbm2:refinery_output')

	//Fluid Mixer
	event.remove({id: 'pneumaticcraft:fluid_mixer'})
	event.shaped('pneumaticcraft:fluid_mixer', [
	  ' R ',
	  'HCH',
	  'RPR'
	], {
	  H: 'pneumaticcraft:turbine_rotor',
	  R: 'pneumaticcraft:small_tank',
	  C: 'kubejs:pneumaticcraft_casing',
	  P: 'pneumaticcraft:pressure_tube',
	}).id('mbm2:fluid_mixer')

	//Thermal Lagging
	event.remove({id: 'pneumaticcraft:thermal_lagging'})
	event.shaped('4x pneumaticcraft:thermal_lagging', [
	  'WGW',
	  'GPG',
	  'WGW'
	], {
	  G: 'ae2:quartz_glass',
	  W: ['#forge:wool','#thermal:rockwool'],
	  P: '#pneumaticcraft:plastic_sheets',
	}).id('mbm2:thermal_lagging')

});
