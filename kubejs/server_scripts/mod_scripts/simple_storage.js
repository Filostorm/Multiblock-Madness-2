onEvent('recipes', event => {

//Basic Cables
  event.remove({id: 'storagenetwork:kabel'})
  event.shaped('8x storagenetwork:kabel', [
	'ABA',
	'CDC',
	'ABA'
  ], {
	A: 'minecraft:stone_slab',
	B: 'minecraft:redstone',
	C: 'thermal:electrum_plate',
	D: 'ae2:quartz_fiber'
  })

//Controller
  event.remove({id: 'storagenetwork:master'})
  event.shaped('storagenetwork:master', [
	'ABA',
	'BCB',
	'ABA'
  ], {
	A: 'ars_nouveau:source_gem',
	B: 'storagenetwork:kabel',
	C: 'powah:dielectric_casing'
  })

//Crafting Terminal
  event.remove({id: 'storagenetwork:request'})
  event.shaped('storagenetwork:request', [
	'ABA',
	'BCB',
	'ABA'
  ], {
	A: 'kubejs:red_alloy_plate',
	B: 'storagenetwork:kabel',
	C: 'powah:capacitor_basic_large'
  })

});