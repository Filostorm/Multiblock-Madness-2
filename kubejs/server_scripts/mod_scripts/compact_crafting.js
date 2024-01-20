onEvent('tags.blocks', event => {
	event.add(`minecraft:mineable/pickaxe`, `compactcrafting:field_projector`)
});
onEvent('recipes', event => {

// [| compactcrafting:projector_dish |] //
event.remove({id: 'compactcrafting:projector_dish'})
event.shaped('4x compactcrafting:projector_dish', [
	'AB ',
	'ADB',
	'AB '
  ], {
	A: '#forge:glass_panes/colorless',
B: 'solarflux:mirror',
D: 'kubejs:source_tube'
  }).id("mbm2:projector_dish")

// [| compactcrafting:base |] //
event.remove({id: 'compactcrafting:base'})
event.shaped('compactcrafting:base', [
	' B ',
	'CDC',
	'EEE'
  ], {
B: 'minecraft:lightning_rod',
C: 'minecraft:diamond',
D: 'ars_nouveau:arcane_stone',
E: '#forge:plates/brass'
  }).id("mbm2:base")



});
