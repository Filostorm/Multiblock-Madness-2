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
	'carbon_covered_iron',
	'sandy_brick',
	'sturdy_brick',
	//'unfired_coke_oven_brick',
	'coke_oven_brick',
	'steel_scraps',
	//'aerotheum_dust',
	//'cryotheum_dust',
	//'petrotheum_dust',
	//'pyrotheum_dust',
	't1_blank_board',
	't1_circuit_board',
	't1_circuit',
	't2_blank_board',
	't2_circuit_board',
	't2_circuit',
	't3_blank_board',
	't3_circuit_board',
	't3_circuit',
	't4_blank_board',
	't4_circuit_board',
	't4_circuit',
	'energetic_blend',
	'glass_shard',
	'water_filter',
	'quicksilver',
	'shaped_quartz',
	'blast_brick',
	'tough_brick',
	'captured_soul',
	'spirited_brick',
	'heated_brick',
	'reactive_blend',
	'deep_learner_base'
]

global.transitionalItems = [
	'basic_capacitor',
	'circuit_board',
	'light_bulb',
	'component_iron',
	'component_steel',
	'printed_calculation_processor',
	'calculation_processor',
	'printed_logic_processor',
	'logic_processor',
	'printed_engineering_processor',
	'engineering_processor',
	'printed_silicon',
]
global.transitionalItemsTexture = [
	'component_electronic_adv',
	'component_electronic',
	'electron_tube',
]

onEvent('item.registry', event => {
	basicItems.forEach((item) => {
		event.create(item)
	})
	global.transitionalItems.forEach((item) => {
		event.create(`incomplete_${item}`, 'create:sequenced_assembly').texture('kubejs:item/package')
	})
	global.transitionalItemsTexture.forEach((item) => {
		event.create(`incomplete_${item}`, 'create:sequenced_assembly').texture(`kubejs:item/incomplete_${item}`)
	})
	event.create(`partially_folded_damascus_steel`, 'create:sequenced_assembly')

	event.create(`washed_thermogenic_blend`).color(0, 0xf06330).texture(`kubejs:item/ore/ore_washed`)
	event.create(`crushed_thermogenic_blend`).color(0, 0xf06330).texture(`kubejs:item/ore/ore_crushed`)
	event.create(`fine_thermogenic_dust`).color(0, 0xf06330).texture(`kubejs:item/ore/ore_fine_dust`)

	event.create(`washed_thermolytic_blend`).color(0, 0x42f5da).texture(`kubejs:item/ore/ore_washed`)
	event.create(`crushed_thermolytic_blend`).color(0, 0x42f5da).texture(`kubejs:item/ore/ore_crushed`)
	event.create(`fine_thermolytic_dust`).color(0, 0x42f5da).texture(`kubejs:item/ore/ore_fine_dust`)
  });