
onEvent('tags.items', event => {
	let archColors = [
		'blue',
		'red',
		'green',
		'purple',
	]
    archColors.forEach((color) => {
		event.add(`minecraft:leaves`, `ars_nouveau:${color}_archwood_leaves`)
	})
});
onEvent('recipes', event => {
	//Source Tube
	event.shaped('kubejs:source_tube', [
		'B',
		'C'
	  ], {
		B: 'ars_nouveau:source_gem',
		C: '#forge:plates/pewter'
	  })
	  

	//Imbuement Chamber
  	event.remove({id: 'ars_nouveau:imbuement_chamber'})
	event.shaped('ars_nouveau:imbuement_chamber', [
		'PGP',
		'P P',
		'PGP'
	  ], {
		G: '#forge:ingots/auric_gold',
		P: 'kubejs:charred_planks'
	  })
	  
	  //Crafting Ender Pearls
	  global.arsImbument(event, 'minecraft:ender_pearl', 1, '#forge:slimeballs', 1000, [{"item": {"item": "powah:uraninite"}},{"item": {"item": "powah:uraninite"}},{"item": {"item": "powah:uraninite"}},{"item": {"item": "powah:uraninite"}}], 'mbm2:slimy_pearl')

	  //Enchanting Apparatus
	  event.remove({output: 'ars_nouveau:enchanting_apparatus'})
	  event.shaped('ars_nouveau:enchanting_apparatus', ['ABA','A A','CCC'], {A: 'kubejs:auric_gold_ingot',B: 'elementalcraft:springaline_shard',C: 'ars_nouveau:arcane_stone'})
	  

});