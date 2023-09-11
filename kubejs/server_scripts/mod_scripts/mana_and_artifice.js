
onEvent('block.loot_tables', event => {
	//Ore should drop the dust
	event.addSimpleBlock('mna:vinteum_ore', 'mna:vinteum_dust')
});

onEvent('tags.items', event => {
	//Missing tags??
	event.add('forge:ingots/vinteum', 'mna:vinteum_ingot')
	event.add('forge:ingots/transmuted_silver', 'mna:transmuted_silver')
})

onEvent('recipes', event => {
	var recipeNamesToRemove = [
		'mna:runeforge_alt',
	]
    recipeNamesToRemove.forEach((name) => {
	event.remove({id: name})
	})
	
// [| stone_rune_blank |] //
	event.remove({id: 'mna:stone_runes/rune_blank'})
event.shaped('2x mna:stone_rune_blank', [
	'ABA',
	'BBB',
	'ABA'
  ], {
	A: Item.empty,
	B: 'create:andesite_alloy'
  }).id("mbm2:stone_rune_blank")

// [| manaweaving_altar |] //
	event.remove({id: 'mna:manaweaving_altar'})
event.shaped('mna:manaweaving_altar', [
	'ABA',
	'ACA',
	'ADA'
  ], {
	A: 'mna:transmuted_silver',
	B: 'mna:decoration/arcane_sandstone',
	C: 'mna:ritual_focus_minor',
	D: 'mna:decoration/arcane_stone'
  }).id("mbm2:manaweaving_altar")

// [| improvised_manaweaver_wand |] //
event.remove({id: 'mna:improvised_manaweaver_wand'})
event.shaped(Item.of('mna:improvised_manaweaver_wand', '{Damage:0}'), [
	'  B',
	' C ',
	'C  '
  ], {
B: '#mna:improvised_manaweave_wand_caps',
C: '#forge:rods/wooden'
  }).id("mbm2:improvised_manaweaver_wand")

  // Vinteum Coated Mithril
	event.remove({id: 'mna:vinteum_coated_iron'})
	event.remove({id: 'mna:vinteum_bar_blast_furnace'})
	event.remove({id: 'mna:vinteum_bar'})
	event.recipes.createMixing('mna:vinteum_coated_iron', [`#forge:ingots/mithril`, 'mna:vinteum_dust']).heated().id(`mbm2:vinteum_coated_mithril`)
  	global.tinkersMelting(event, 'kubejs:molten_slag', 50, 'kubejs:molten_vinteum', 90, 'mna:vinteum_coated_iron', 1200, 142, `mbm2:smeltery/melting/metal/vinteum_coated_mithril`)
	event.custom({
		"type": "mna:arcane-furnace",
		"tier": 1,
		"input": 'mna:vinteum_coated_iron',
		"output": 'mna:vinteum_ingot',
		"outputQuantity": 1,
		"burnTime": 200
	})
	



	
	//Mystic Focus Minor
	event.remove({id: 'mna:ritual_focus_minor'})
	event.shaped('mna:ritual_focus_minor', ['ABA','CDC','ABA'], {A: '#forge:glass/colorless',B: 'elementalcraft:drenched_iron_ingot',C: 'mna:superheated_vinteum_ingot',D: 'ars_nouveau:source_gem'}).id(`mbm2:ritual_focus_minor`)
	event.custom({
		"type": "ars_nouveau:enchanting_apparatus",
		"reagent": [
		  {
			"item": 'ars_nouveau:source_gem'
		  }
		],
		"pedestalItems": [
		{
		  "item": Ingredient.of('mna:superheated_vinteum_ingot').toJson(),
		},
		{
		  "item": Ingredient.of('elementalcraft:drenched_iron_ingot').toJson(),
		},
		{
		  "item": Ingredient.of('botania:mana_glass').toJson(),
		},
		],
		"output": {
		  "item": 'mna:ritual_focus_minor'
		},
		"sourceCost": 1000,
		"keepNbtOfReagent": false
	  }).id(`mbm2:enchanting_apparatus/ritual_focus_minor`)




});

