onEvent('recipes', event => {
	/*
  event.shaped('tconstruct:smeltery_controller', [
	'AAA',
	'ABA',
	'AAA'
  ], {
	A: 'tconstruct:seared_brick',
	B: '#forge:gears/steel'
  })*/
  
  
  

  //Basic Capacitor
  event.remove({id: 'powah:crafting/capacitor_basic'})
  event.recipes.createSequencedAssembly([ // start the recipe
'powah:capacitor_basic', // have this item be an output
  ], '#forge:ingots/iron', [ // input.
  event.recipes.createDeploying('kubejs:incomplete_basic_capacitor', ['kubejs:incomplete_basic_capacitor', 'powah:dielectric_paste']),
  event.recipes.createDeploying('kubejs:incomplete_basic_capacitor', ['kubejs:incomplete_basic_capacitor', '#forge:dusts/redstone']),
  event.recipes.createDeploying('kubejs:incomplete_basic_capacitor', ['kubejs:incomplete_basic_capacitor', '#forge:dusts/redstone']),
  ]).transitionalItem('kubejs:incomplete_basic_capacitor').loops(2)

//Paste
  event.remove({output: 'powah:dielectric_paste'})
	event.recipes.createMixing('8x powah:dielectric_paste', ['#minecraft:coals','#forge:clay', Fluid.of('minecraft:lava', 250)]).id(`kubejs:mixing/dielectric_paste`)
	event.recipes.createMixing('16x powah:dielectric_paste', ['#minecraft:coals','#forge:clay']).superheated().id(`kubejs:mixing/dielectric_paste_heated`)


//Starter tier no longer exsists
  event.remove({id: 'powah:crafting/cable_basic'})
  event.remove({id: 'powah:crafting/energy_cell_basic_2'})

// [| energy_hopper_basic |] //
event.shaped('powah:energy_hopper_basic', [
  'AAA',
'BCB',
'ADA'
  ], {
  A: 'powah:dielectric_paste',
B: 'powah:capacitor_basic',
C: 'powah:dielectric_casing',
D: 'minecraft:hopper'
  }).id("powah:crafting/energy_hopper_basic")

// [| player_transmitter_basic |] //
event.shaped('powah:player_transmitter_basic', [
  'ABA',
'CDC',
'AEA'
  ], {
  A: Item.empty,
B: 'powah:player_aerial_pearl',
C: 'powah:capacitor_basic',
D: 'powah:dielectric_casing',
E: 'powah:dielectric_rod'
  }).id("powah:crafting/player_tranmitter_basic")

// [| reactor_basic |] //
event.shaped('4x powah:reactor_basic', [
  'ABA',
'BCB',
'ABA'
  ], {
  A: 'powah:uraninite',
B: 'powah:capacitor_basic',
C: 'powah:dielectric_casing'
  }).id("powah:crafting/reactor_basic")

// [| solar_panel_basic |] //
event.shaped('powah:solar_panel_basic', [
  'AAA',
'BCB',
'DDD'
  ], {
  A: 'powah:photoelectric_pane',
B: 'powah:capacitor_basic',
C: 'powah:dielectric_casing',
D: 'minecraft:iron_ingot'
  }).id("powah:crafting/solar_panel_basic")

// [| thermo_generator_basic |] //
event.shaped('powah:thermo_generator_basic', [
  'ABA',
'CDC',
'EEE'
  ], {
  A: 'powah:dielectric_paste',
B: 'minecraft:iron_ingot',
C: 'powah:capacitor_basic',
D: 'powah:dielectric_casing',
E: 'powah:thermoelectric_plate'
  }).id("powah:crafting/thermo_generator_basic")

// [| magmator_basic |] //
event.shaped('powah:magmator_basic', [
  'AAA',
'BCB',
'ADA'
  ], {
  A: 'minecraft:iron_ingot',
B: 'powah:capacitor_basic',
C: 'powah:dielectric_casing',
D: 'minecraft:bucket'
  }).id("powah:crafting/magmator_basic")

// [| furnator_basic |] //
event.shaped('powah:furnator_basic', [
  'AAA',
'BCB',
'ADA'
  ], {
  A: 'minecraft:iron_ingot',
B: 'powah:capacitor_basic',
C: 'powah:dielectric_casing',
D: 'minecraft:furnace'
  }).id("powah:crafting/furnator_basic")

// [| battery_basic |] //
event.shaped('powah:battery_basic', [
  'ABA',
'BCB',
'ABA'
  ], {
  A: 'powah:dielectric_paste',
B: 'powah:capacitor_basic_large',
C: 'minecraft:redstone_block'
  }).id("powah:crafting/battery_basic")

// [| energizing_rod_basic |] //
event.shaped('powah:energizing_rod_basic', [
  'ABA',
'CDC',
'AEA'
  ], {
  A: Item.empty,
B: '#forge:storage_blocks/quartz',
C: 'powah:capacitor_basic',
D: 'powah:dielectric_casing',
E: 'powah:dielectric_rod'
  }).id("powah:crafting/energizing_rod_basic")
});