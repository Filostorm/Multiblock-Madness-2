
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
	  event.shaped('ars_nouveau:ritual_brazier', ['ABA','CDC','CEC'], {A: '#forge:ingots/infused_mithril',B: 'ars_nouveau:source_gem_block',C: 'naturesaura:tainted_gold',D: 'ars_nouveau:arcane_pedestal',E: 'ars_nouveau:arcane_stone'}).id('ars_nouveau:ritual_brazier')
	  //Arcane Pedestal
	  event.shaped('ars_nouveau:arcane_pedestal', [
		' B ',
		'ACA',
		'ACA'], {A: 'ars_nouveau:arcane_stone',B: 'ars_nouveau:source_gem',C: ['#forge:ingots/swift_alloy','#forge:ingots/auric_gold']}).id('ars_nouveau:arcane_pedestal')

	  //Gilb wing
	global.elementalcraftInfusion(event, Item.of('phantom_membrane'), Item.of('ars_nouveau:wilden_wing'), 'earth', 1000, 'mbm2:infusion/wilden_wing')
	
	//Ars shards block crafting
	event.shaped('kubejs:drygmy_shard_block', ['AAA','AAA','AAA'], {A: 'ars_nouveau:drygmy_shard'}).id('mbm2:drygmy_shards_to_block')
	event.shaped('kubejs:starbuncle_shard_block', ['AAA','AAA','AAA'], {A: 'ars_nouveau:starbuncle_shards'}).id('mbm2:starbuncle_shards_to_block')
	event.shaped('kubejs:whirlisprig_shard_block', ['AAA','AAA','AAA'], {A: 'ars_nouveau:whirlisprig_shards'}).id('mbm2:whirlisprig_shards_to_block')
	event.shaped('kubejs:wixie_shard_block', ['AAA','AAA','AAA'], {A: 'ars_nouveau:wixie_shards'}).id('mbm2:wixie_shards_to_block')
	event.shapeless('9x ars_nouveau:drygmy_shard', ['kubejs:drygmy_shard_block']).id('mbm2:drygmy_block_to_shards')
	event.shapeless('9x ars_nouveau:starbuncle_shards', ['kubejs:starbuncle_shard_block']).id('mbm2:starbuncle_block_to_shards')
	event.shapeless('9x ars_nouveau:whirlisprig_shards', ['kubejs:whirlisprig_shard_block']).id('mbm2:whirlisprig_block_to_shards')
	event.shapeless('9x ars_nouveau:wixie_shards', ['kubejs:wixie_shard_block']).id('mbm2:wixie_block_to_shards')

	//Blank Glyph
	event.shaped('4x ars_nouveau:blank_glyph', [' A ','ABA',' A '], {A: 'ars_nouveau:conjuration_essence',B: 'ars_nouveau:blank_parchment'}).id('mbm2:blank_glyph')

	//Automatable Dispel Glyph
	global.arsEnchantment(event, Item.of('ars_nouveau:glyph_dispel'), Item.of('ars_nouveau:blank_glyph'), [Item.of('ars_nouveau:abjuration_essence'), Item.of('minecraft:milk_bucket'), Item.of('minecraft:milk_bucket'), Item.of('minecraft:milk_bucket')], 50, 'mbm2:dispel_glyph', true)

	//Automatable Wixie Shards
	event.custom({
		"type": "thermal:crystallizer",
		"ingredients": [
		  {
			"fluid": 'kubejs:liquid_source',
			"amount": 4000
		  },
		  {
			"item": 'ars_nouveau:glyph_dispel',
			"count": 2
		  },
		  {
			"item": 'kubejs:bottled_magic',
			"count": 1
		  }
		],
		"result": [
		  {
			"item": "ars_nouveau:wixie_shards",
			"count": 2
		  }
		]
	  }).id(`mbm2:crystallizer/hnn_wixie_shard`)

	//Source Pearl
	global.arsEnchantment(event, Item.of('kubejs:source_pearl'), Item.of('ae2:fluix_pearl'), [Item.of('ars_nouveau:magebloom'), Item.of('ars_nouveau:abjuration_essence'), Item.of('ars_nouveau:magebloom'), Item.of('ars_nouveau:abjuration_essence'), Item.of('ars_nouveau:magebloom'), Item.of('ars_nouveau:abjuration_essence'), Item.of('ars_nouveau:magebloom'), Item.of('ars_nouveau:abjuration_essence')], 2000, 'mbm2:source_pearl')
	
	//liquid_source
	event.recipes.createEmptying([Fluid.of('kubejs:liquid_source', 1000), 'bucket'], ['ars_nouveau:bucket_of_source']).id('mbm2:emptying/liquid_source')
});
