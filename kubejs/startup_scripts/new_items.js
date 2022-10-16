var basicItems = [
	'unfired_clay_brick',
	'blank_rune',
	'curcuit_board',
	'curcuit_board_1',
	'curcuit_board_2',
	'curcuit_board_3',
	'silver_coil',
	'shifting_cube',
	'source_ingot',
	'source_nugget',
	'source_tube',
	'source_pearl',
	'blazing_redstone',
]

global.transitionalItems = [
	'basic_capacitor',
	'circuit_board',
	'component_electronic_adv',
	'light_bulb',
	'component_iron',
	'component_electronic',
	'electron_tube',
	'component_steel',
]

onEvent('item.registry', event => {
	basicItems.forEach((item) => {
		event.create(item)
	})
	
	global.transitionalItems.forEach((item) => {
		event.create(`incomplete_${item}`).texture('kubejs:item/package')
	})
  });