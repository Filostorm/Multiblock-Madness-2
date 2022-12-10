	var basicCompressor = [
		'pneumaticcraft:air_compressor', 
		'pneumaticcraft:thermal_compressor', 
		'pneumaticcraft:liquid_compressor'
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
	global.pressureChamber(event, [{"item": "pneumaticcraft:ingot_iron_compressed","count": 1}], [{"tag": "forge:ingots/steel"}], 2.0, 'kubejs:pressure_chamber/compressed_steel_ingot')
	event.remove({id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot'})
	global.explosionCrafting(event, 'pneumaticcraft:ingot_iron_compressed', '#forge:ingots/steel', 20, 'kubejs:explosion_crafting/compressed_steel')

	//Compressed Steel Block
	event.remove({id: 'pneumaticcraft:pressure_chamber/compressed_iron_block'})
	global.pressureChamber(event, [{"item": "pneumaticcraft:compressed_iron_block","count": 1}], [{"tag": "forge:storage_blocks/steel"}], 2.0, 'kubejs:pressure_chamber/compressed_steel_block')
	event.remove({id: 'pneumaticcraft:explosion_crafting/compressed_iron_block'})
	global.explosionCrafting(event, 'pneumaticcraft:compressed_iron_block', '#forge:storage_blocks/steel', 20, 'kubejs:explosion_crafting/compressed_steel_block')
	
	//Gear Recipe is wrong
	event.remove({id: 'pneumaticcraft:compressed_iron_gear'})
	
/*
  	event.shaped('tconstruct:smeltery_controller', [
		'AAA',
		'ABA',
		'AAA'
  	], {
		A: 'tconstruct:seared_brick',
		B: '#forge:gears/steel'
  	})
  	event.shapeless(`kubejs:carbon_covered_iron`, [`#forge:ingots/iron`, '#forge:dusts/coal_coke']).id(`kubejs:carbon_covered_iron`)
*/
});
