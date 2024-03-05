
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
		C: '#forge:plates/tier_1_magical_alloy'
	  }).id(`mbm2:crafting/source_tube`)
	  

	//Imbuement Chamber
  	//event.remove({id: 'ars_nouveau:imbuement_chamber'})
	event.shaped('ars_nouveau:imbuement_chamber', [
		'PGP',
		'P P',
		'PGP'
	  ], {
		G: '#forge:ingots/swift_alloy',
		P: 'kubejs:charred_planks'
	  }).id('ars_nouveau:imbuement_chamber')
	  
	  //Crafting Ender Pearls
	  global.arsImbuement(event, 'minecraft:ender_pearl', 1, '#forge:slimeballs', 1000, [{"item": {"item": "powah:uraninite"}},{"item": {"item": "powah:uraninite"}},{"item": {"item": "powah:uraninite"}},{"item": {"item": "powah:uraninite"}}], 'mbm2:slimy_pearl')

	  //Enchanting Apparatus
	  event.remove({output: 'ars_nouveau:enchanting_apparatus'})
	  event.shaped('ars_nouveau:enchanting_apparatus', ['ABA','A A','CCC'], {A: '#forge:ingots/swift_alloy',B: 'elementalcraft:springaline_shard',C: 'ars_nouveau:arcane_stone'})
	  

	  //Volcanic Sourcelink
	  event.shaped('ars_nouveau:volcanic_sourcelink', ['ABA','CDC','CEC'], {A: '#forge:ingots/swift_alloy',B: 'kubejs:source_tube',C: 'naturesaura:tainted_gold',D: 'minecraft:lava_bucket',E: 'ars_nouveau:arcane_pedestal'}).id('ars_nouveau:volcanic_sourcelink')
	  //Mycelial Sourcelink
	  event.shaped('ars_nouveau:mycelial_sourcelink', ['ABA','CDC','CEC'], {A: 'naturesaura:infused_iron',B: 'kubejs:source_tube',C: '#forge:ingots/swift_alloy',D: 'minecraft:mushroom_stew',E: 'ars_nouveau:arcane_pedestal'}).id('ars_nouveau:mycelial_sourcelink')
	  //Agronomic Sourcelink
	  event.shaped('ars_nouveau:agronomic_sourcelink', ['ABA','CDC','CEC'], {A: 'naturesaura:infused_iron',B: 'kubejs:source_tube',C: '#forge:ingots/swift_alloy',D: 'minecraft:wheat',E: 'ars_nouveau:arcane_pedestal'}).id('ars_nouveau:agronomic_sourcelink')
	  //Vitalic Sourcelink
	  event.shaped('ars_nouveau:vitalic_sourcelink', ['ABA','CDC','CEC'], {A: 'naturesaura:infused_iron',B: 'kubejs:source_tube',C: '#forge:ingots/swift_alloy',D: 'minecraft:glistering_melon_slice',E: 'ars_nouveau:arcane_pedestal'}).id('ars_nouveau:vitalic_sourcelink')
	  //Alchemical Sourcelink
	  event.shaped('ars_nouveau:alchemical_sourcelink', ['ABA','CDC','CEC'], {A: 'kubejs:blazing_redstone',B: 'kubejs:source_tube',C: '#forge:ingots/swift_alloy',D: 'minecraft:brewing_stand',E: 'ars_nouveau:arcane_pedestal'}).id('ars_nouveau:alchemical_sourcelink')
	  //Ritual Brazier
	  event.shaped('ars_nouveau:ritual_brazier', ['ABA','CDC','CEC'], {A: 'mna:superheated_vinteum_ingot',B: 'ars_nouveau:source_gem_block',C: 'naturesaura:tainted_gold',D: 'ars_nouveau:arcane_pedestal',E: 'ars_nouveau:arcane_stone'}).id('ars_nouveau:ritual_brazier')
	  //Arcane Pedestal
	  event.shaped('ars_nouveau:arcane_pedestal', ['ABA','CAC','CAC'], {A: 'ars_nouveau:arcane_stone',B: 'ars_nouveau:source_gem',C: '#forge:ingots/swift_alloy'}).id('ars_nouveau:arcane_pedestal')

	  //Gilb wing
	global.elementalcraftInfusion(event, Item.of('phantom_membrane'), Item.of('ars_nouveau:wilden_wing'), 'earth', 1000, 'mbm2:infusion/wilden_wing')
	

});