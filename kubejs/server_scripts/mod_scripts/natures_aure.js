onEvent('tags.blocks', event => {
	event.add(`minecraft:mineable/pickaxe`, `naturesaura:gold_brick`)
	event.add(`minecraft:mineable/pickaxe`, 'naturesaura:nature_altar')
});
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
	}).id("mbm2:ancient_wood_scaffolding")
	
	//Gold Bricks from powder
	event.shapeless(`naturesaura:gold_brick`, ['minecraft:stone_bricks', 'naturesaura:gold_powder', 'naturesaura:gold_powder', 'naturesaura:gold_powder', 'naturesaura:gold_powder']).id(`mbm2:naturesaura/gold_brick_with_powder`)

	//Nature Altar
	global.naturesauraTreeRitual(event, 'naturesaura:nature_altar', [
		Item.of('naturesaura:token_joy').toJson(), 
		Item.of('#forge:ingots/pewter').toJson(), 
		Item.of('#forge:ingots/pewter').toJson(), 
		Item.of('#forge:ingots/pewter').toJson(), 
		Item.of('forbidden_arcanus:arcane_crystal_dust').toJson(),
		Item.of('elementalcraft:whiterock').toJson(),
		Item.of('elementalcraft:whiterock').toJson(),
		Item.of('elementalcraft:whiterock').toJson(),
	], 'oak_sapling', 500, 'naturesaura:tree_ritual/nature_altar')
});



