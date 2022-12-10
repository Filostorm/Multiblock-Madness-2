onEvent('recipes', event => {
	// Sludge Sifter
  event.shaped('multiblocked:sludge_sifter', [
	'ABA',
	'CDC',
	'EFE'
  ], {
	A: 'create:cogwheel',
	B: '#forge:string',
	C: '#forge:glass/colorless',
	D: 'create:copper_casing',
	E: 'thermal:nickel_plate',
	F: 'thermal:gold_gear'
  }).id(`kubejs:multiblocked/sludge_sifter`)

	// Sorter Mk1
  event.shaped('multiblocked:sorter_mk1', [
	'QWQ',
	'RLR',
	'QWQ'
  ], {
	W: '#forge:wires/zinc',
	R: '#forge:rods/brass',
	Q: 'create:polished_rose_quartz',
	L: 'minecraft:redstone_lamp',
  }).id(`kubejs:multiblocked/sorter_mk1`)

	// Input Vault
  event.shaped('multiblocked:create_item_input', [
	'C',
	'V',
  ], {
	C: '#forge:chests/wooden',
	V: 'create:item_vault',
  }).id(`kubejs:multiblocked/create_item_input`)
  event.shapeless(`multiblocked:create_item_input`, ['multiblocked:create_item_output']).id(`kubejs:multiblocked/create_item_input_switch`)

	// Output Vault
  event.shaped('multiblocked:create_item_output', [
	'V',
	'C',
  ], {
	C: '#forge:chests/wooden',
	V: 'create:item_vault',
  }).id(`kubejs:multiblocked/create_item_output`)
  event.shapeless(`multiblocked:create_item_output`, ['multiblocked:create_item_input']).id(`kubejs:multiblocked/create_item_output_switch`)

// Create Output
event.shaped('multiblocked:create_output', [
	'C',
	'G',
  ], {
	C: 'create:cogwheel',
	G: 'create:gearbox',
  }).id(`kubejs:multiblocked/create_output`)
  event.shapeless(`multiblocked:create_output`, ['multiblocked:create_input']).id(`kubejs:multiblocked/create_output_switch`)
// Create Input
event.shaped('multiblocked:create_input', [
  'G',
  'C',
], {
  C: 'create:cogwheel',
  G: 'create:gearbox',
}).id(`kubejs:multiblocked/create_input`)
event.shapeless(`multiblocked:create_input`, ['multiblocked:create_output']).id(`kubejs:multiblocked/create_input_switch`)

})