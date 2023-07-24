onEvent('tags.blocks', event => {
	event.add(`minecraft:mineable/pickaxe`, `naturesaura:gold_brick`)
	event.add(`minecraft:mineable/pickaxe`, 'naturesaura:nature_altar')
	event.add(`minecraft:mineable/pickaxe`, 'naturesaura:gold_nether_brick')
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

	
	event.add(`mbm2:naturesaura/crimson_altar`, 'minecraft:warped_planks')
	event.add(`mbm2:naturesaura/crimson_altar`, 'minecraft:crimson_planks')
	
	
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

	//Wood Stand
	event.remove({id: 'naturesaura:wood_stand'})
 	global.createApplying(event, 'naturesaura:wood_stand', Ingredient.of('naturesaura:gold_leaf'), Ingredient.of('#forge:stripped_logs'), `mbm2:applying/wood_stand`)

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

	//Tainted Gold
	//event.remove({id: 'naturesaura:altar/tainted_gold'})
	global.naturesauraAltar(event, 'naturesaura:tainted_gold', 'kubejs:auric_gold_ingot', 'normal', 'nether', 15000, 80, 'naturesaura:altar/tainted_gold')
	//event.remove({id: 'naturesaura:altar/tainted_gold_block'})
	global.naturesauraAltar(event, 'naturesaura:tainted_gold_block', 'kubejs:auric_gold_storage_block', 'normal', 'nether', 135000, 700, 'naturesaura:altar/tainted_gold_block')
	
});



