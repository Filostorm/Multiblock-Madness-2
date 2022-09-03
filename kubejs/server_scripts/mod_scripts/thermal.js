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
  })
});