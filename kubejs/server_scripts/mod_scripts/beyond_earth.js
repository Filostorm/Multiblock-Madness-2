

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
	global.ieMixer(event, Fluid.of('beyond_earth:fuel', 100), {"tag":"forge:kerosene","amount":100}, Item.of('mekanism:fluorite_gem'), 4000, 'kubejs:beyond_earth/fuel')

	
});
