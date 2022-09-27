
onEvent('block.loot_tables', event => {
	//Ore should drop the dust
	event.addSimpleBlock('mna:vinteum_ore', 'mna:vinteum_dust')
});
  

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
});

