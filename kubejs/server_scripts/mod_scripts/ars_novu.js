
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
	event.shaped('kubejs:source_tube', [
		'B',
		'C'
	  ], {
		B: 'ars_nouveau:source_gem',
		C: 'kubejs:transmuted_silver_plate'
	  })
	  global.arsImbument(event, 'minecraft:ender_pearl', 1, '#forge:slimeballs', 1000, [{"item": {"item": "powah:uraninite"}},{"item": {"item": "powah:uraninite"}},{"item": {"item": "powah:uraninite"}},{"item": {"item": "powah:uraninite"}}], 'kubejs:slimy_pearl')
});