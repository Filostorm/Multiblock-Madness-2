/*

onEvent('tags.items', event => {
	event.add(`forge:ingots`, `naturesaura:tainted_gold`)
	 event.remove(`create:crushed_ores/${item}`, `kubejs:crushed_${item}`)
 });
 
onEvent('recipes', event => {
	event.remove({output: 'tconstruct:smeltery_controller'})
  	event.shaped('tconstruct:smeltery_controller', [
		'AAA',
		'ABA',
		'AAA'
  	], {
		A: 'tconstruct:seared_brick',
		B: '#forge:gears/steel'
  	})
  	event.shapeless(`kubejs:carbon_covered_iron`, [`#forge:ingots/iron`, '#forge:dusts/coal_coke']).id(`kubejs:carbon_covered_iron`)
	//Item.of(`#forge:grits/${item.material}`).withChance(0.25)
	event.recipes.createMixing(`${item.amount}x #forge:ingots/${item.material}`, item.ingot_input).heated().id(`create:mixing/${item.material}_ingot`)
});
*/