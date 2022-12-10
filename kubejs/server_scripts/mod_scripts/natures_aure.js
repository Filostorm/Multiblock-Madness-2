onEvent('tags.items', event => {
	event.add(`forge:ingots`, `naturesaura:tainted_gold`)
	event.add(`forge:ingots/tainted_gold`, `naturesaura:tainted_gold`)
	event.add(`forge:ingots`, `naturesaura:infused_iron`)
	event.add(`forge:ingots/infused_iron`, `naturesaura:infused_iron`)
	event.add(`forge:ingots`, `naturesaura:sky_ingot`)
	event.add(`forge:ingots/sky_metal`, `naturesaura:sky_ingot`)
	event.add(`forge:storage_blocks`, 'naturesaura:tainted_gold_block')
	event.add(`forge:storage_blocks/tainted_gold`, 'naturesaura:tainted_gold_block')
	event.add(`forge:storage_blocks`, 'naturesaura:infused_iron_block')
	event.add(`forge:storage_blocks/infused_iron`, 'naturesaura:infused_iron_block')
	event.remove(`forge:rods/wooden`, 'naturesaura:ancient_stick')
	
 });
onEvent('recipes', event => {
	event.remove({id: 'naturesaura:gold_fiber'})
  	event.shaped('4x naturesaura:gold_fiber', [
		'GEG',
		'ELE',
		'GEG'
  	], {
		G: 'minecraft:grass',
		L: '#minecraft:leaves',
		E: '#forge:nuggets/electrum'
  	}).id('naturesaura:gold_fiber')

// [| Ancient Wood Scaffolding |] //
event.shaped('3x kubejs:ancient_wood_scaffolding', [
	'AAA',
  ' C ',
  'C C'
	], {
	A: 'naturesaura:ancient_planks',
  C: 'naturesaura:ancient_stick'
	}).id("kubejs:ancient_wood_scaffolding")

});



