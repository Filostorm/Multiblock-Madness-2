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
D: 'ars_nouveau:source_gem'
  }).id("kubejs:projector_dish")

// [| compactcrafting:base |] //
event.remove({id: 'compactcrafting:base'})
event.shaped('4x compactcrafting:base', [
	' B ',
	'CDC',
	'EEE'
  ], {
B: 'minecraft:ender_pearl',
C: 'minecraft:diamond',
D: 'mna:decoration/arcane_stone_slab',
E: 'thermal:invar_plate'
  }).id("kubejs:base")



});
