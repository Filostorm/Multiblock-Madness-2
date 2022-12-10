
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
  }).id("kubejs:stone_rune_blank")

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
  }).id("kubejs:manaweaving_altar")
/*
// [| improvised_manaweaver_wand |] //
event.remove({id: 'mna:improvised_manaweaver_wand'})
event.shaped(Item.of('mna:improvised_manaweaver_wand', '{Damage:0}'), [
	'  B',
	' C ',
	'C  '
  ], {
B: '#mna:improvised_manaweave_wand_caps',
C: '#forge:rods/wooden'
  }).id("kubejs:improvised_manaweaver_wand")
*/
  // Vinteum Coated Silver
	event.remove({id: 'mna:vinteum_coated_iron'})
	event.remove({id: 'mna:vinteum_bar_blast_furnace'})
	event.remove({id: 'mna:vinteum_bar'})
	event.recipes.createMixing('mna:vinteum_coated_iron', [`#forge:ingots/silver`, 'mna:vinteum_dust']).heated().id(`kubejs:vinteum_coated_silver`)
  	global.tinkersMelting(event, 'kubejs:molten_slag', 50, 'kubejs:molten_vinteum', 90, 'mna:vinteum_coated_iron', 1200, 142, `kubejs:smeltery/melting/metal/vinteum_coated_silver`)
});

