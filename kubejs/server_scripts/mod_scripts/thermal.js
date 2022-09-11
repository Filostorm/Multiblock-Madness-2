onEvent('recipes', event => {
	
	event.remove([
		{id: 'thermal:rubber_from_vine'},
		{id: 'thermal:rubber_from_dandelion'},
		{id: 'thermal:fire_charge/lumium_ingot_4'},
		{id: 'thermal:fire_charge/enderium_ingot_2'},
		{id: 'thermal:fire_charge/electrum_ingot_2'},
		{id: 'thermal:fire_charge/constantan_ingot_2'},
		{id: 'thermal:fire_charge/bronze_ingot_4'},
		{id: 'thermal:fire_charge/signalum_ingot_4'},
		{id: 'thermal:fire_charge/invar_ingot_3'},
		{id: 'thermal:fire_charge/enderium_glass_2'},
		{id: 'thermal:fire_charge/signalum_glass_2'},
		{id: 'thermal:fire_charge/lumium_glass_2'},
		{id: 'thermal:constantan_dust_2'},
		{id: 'thermal:bronze_dust_4'},
		{id: 'thermal:invar_dust_3'},
		{id: 'thermal:electrum_dust_2'},
	])
	
	//Frame has a miniterzation recipe
	event.remove({output: 'thermal:machine_frame'})
	
	//Latex Extractor
event.remove({output: 'thermal:device_tree_extractor'})
event.shaped('thermal:device_tree_extractor', [
	'ABA',
	'CDC',
	'AEA'
  ], {
	A: '#minecraft:planks',
	B: '#forge:gears/copper',
	C: '#forge:glass',
	D: 'thermal:redstone_servo',
	E: 'minecraft:bucket'
  }).id("kubejs:device_tree_extractor")

// [| RF Furnace |] //
event.remove({output: 'thermal:machine_furnace'})
event.shaped('thermal:machine_furnace', [
	'ABA',
	'CDC',
	'EFE'
  ], {
	A: Item.empty,
	B: 'minecraft:redstone',
	C: 'minecraft:bricks',
	D: 'kubejs:bronze_frame',
	E: 'thermal:copper_gear',
	F: 'thermal:rf_coil'
  }).id("kubejs:machine_furnace")

// [| Crafter |] //
event.remove({output: 'thermal:machine_crafter'})
event.shaped('thermal:machine_crafter', [
	'ABA',
	'CDC',
	'EFE'
  ], {
	A: Item.empty,
	B: 'minecraft:crafting_table',
	C: 'thermal:tin_ingot',
	D: 'kubejs:bronze_frame',
	E: 'thermal:copper_gear',
	F: 'thermal:rf_coil'
  }).id("kubejs:machine_crafter")

// [| Chiller |] //
event.remove({output: 'thermal:machine_chiller'})
event.shaped('thermal:machine_chiller', [
	'ABA',
	'CDC',
	'EFE'
  ], {
	A: Item.empty,
	B: '#forge:glass',
	C: 'minecraft:packed_ice',
	D: 'kubejs:bronze_frame',
	E: 'thermal:invar_gear',
	F: 'thermal:rf_coil'
  }).id("kubejs:machine_chiller")

// [| Melter |] //
event.remove({output: 'thermal:machine_crucible'})
event.shaped('thermal:machine_crucible', [
	'ABA',
	'CDC',
	'EFE'
  ], {
	A: Item.empty,
	B: '#forge:glass',
	C: 'minecraft:nether_bricks',
	D: 'kubejs:bronze_frame',
	E: 'thermal:invar_gear',
	F: 'thermal:rf_coil'
  }).id("kubejs:machine_crucible")

// [| Press |] //
event.remove({output: 'thermal:machine_press'})
event.shaped('thermal:machine_press', [
	'ABA',
	'CDC',
	'EFE'
  ], {
	A: Item.empty,
	B: 'minecraft:iron_block',
	C: 'thermal:bronze_ingot',
	D: 'kubejs:bronze_frame',
	E: 'thermal:constantan_gear',
	F: 'thermal:rf_coil'
  }).id('kubejs:machine_press')

});