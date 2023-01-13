

onEvent('tags.items', event => {

	let beyondMaterials = [
		'calorite', 
		'ostrum', 
		'desh', 
		//'steel'
	]

	beyondMaterials.forEach((item) => {
		event.add(`forge:platings`, `beyond_earth:compressed_${item}`)
		event.add(`forge:platings/${item}`, `beyond_earth:compressed_${item}`)
	})
	event.add(`forge:platings`, `beyond_earth:compressed_steel`)
	event.add(`forge:platings/compressed_steel`, `beyond_earth:compressed_steel`)
 });
 
onEvent('recipes', event => {
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
	//Fuel
	global.ieMixer(event, Fluid.of('beyond_earth:fuel', 100), {"tag":"forge:kerosene","amount":100}, Item.of('mekanism:fluorite_gem'), 4000, 'mbm2:beyond_earth/fuel')

	//The Workbench
	event.remove({id: 'beyond_earth:nasa_workbench'})
	event.recipes.createMechanicalCrafting('beyond_earth:nasa_workbench', [
		'A A A',
		'RERER',
		'BHUHB',
		'GCMCG',
		' PPP '
	  ], {
		A: 'create:mechanical_arm',
		B: 'pneumaticcraft:pneumatic_cylinder',
		H: 'immersiveengineering:coil_hv',
		C: 'compressedcreativity:compressed_iron_casing',
		U: 'thermal:upgrade_augment_1',
		E: 'immersiveengineering:component_electronic_adv',
		R: '#forge:rods/aluminum',
		P: '#forge:platings/duralumin',
		M: '#forge:mechanical_components/energetic_alloy',
		G: '#forge:gears/compressed_steel',
	  }).id('mbm2:nasa_workbench')

	  //ROTARS
	  event.replaceInput({mod: 'beyond_earth'}, 'beyond_earth:engine_fan', 'compressedcreativity:engine_rotor')

	  //Temp Engine Frame recipe
	  event.replaceInput({id: 'beyond_earth:engine_frame'}, '#forge:nuggets/iron', '#forge:rods/compressed_steel')
});
