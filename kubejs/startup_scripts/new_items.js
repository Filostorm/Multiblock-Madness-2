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
	'deep_learner_base',
	'polymer_clay',
	'luminite_canister',
	'mesh',
	'zinc_mesh',
	'carbon_mesh',
	'activated_carbon_mesh',
	'standard_dyson_panel',
	'hull_panel_sand_cast',
	'logic_component',
	'unfinished_basic_control_circuit',
	'unfinished_advanced_control_circuit',
	'unfinished_elite_control_circuit',
	'unfinished_ultimate_control_circuit',
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

var batteryItems = [
	//'small_battery',
	//'large_battery',
	'energy_crystal',
	'energy_orb',
	'lapatron_crystal',
	'lapatron_orb',
]
var batteryStorage = [
	//500*1*20, /**power per tick */
	//4000*1*20,
	32000*((2*60)*20),
	256000*((2*60)*20),
	2048000*((4*60)*20),
	16384000*((4*60)*20),
]

var nameUpperWSpace = (name, status) => {
	let partOne = name.split('_')[0]
	let partTwo = name.split('_')[1]
	let fullName = partOne.charAt(0).toUpperCase() + partOne.slice(1) + ' ' + partTwo.charAt(0).toUpperCase() + partTwo.slice(1) + ` (${status})`
	return fullName
}

onEvent('item.registry', event => {
	basicItems.forEach((item) => {
		event.create(item)
	})
	batteryItems.forEach((item) => {
		event.create(`${item}_empty`).displayName(nameUpperWSpace(item, 'Empty')).texture(`kubejs:item/battery/${item}_empty`)
		event.create(`${item}_full`).displayName(nameUpperWSpace(item, 'Full')).texture(`kubejs:item/battery/${item}_full`)
	})
	global.transitionalItems.forEach((item) => {
		event.create(`incomplete_${item}`, 'create:sequenced_assembly').texture('kubejs:item/package')
	})
	global.transitionalItemsTexture.forEach((item) => {
		event.create(`incomplete_${item}`, 'create:sequenced_assembly').texture(`kubejs:item/incomplete_${item}`)
	})
	event.create(`partially_folded_damascus_steel`, 'create:sequenced_assembly')

	event.create(`washed_thermogenic_blend`).color(0, 0xf06330).texture(`kubejs:item/ore/washed`)
	event.create(`crushed_thermogenic_blend`).color(0, 0xf06330).texture(`kubejs:item/ore/crushed`)
	event.create(`fine_thermogenic_dust`).color(0, 0xf06330).texture(`kubejs:item/ore/fine_dust`)

	event.create(`washed_thermolytic_blend`).color(0, 0x42f5da).texture(`kubejs:item/ore/washed`)
	event.create(`crushed_thermolytic_blend`).color(0, 0x42f5da).texture(`kubejs:item/ore/crushed`)
	event.create(`fine_thermolytic_dust`).color(0, 0x42f5da).texture(`kubejs:item/ore/fine_dust`)

	event.create(`solar_chip_blue`).displayName('Dyson Tracking Chip (1)').texture(`kubejs:item/solar_chip_blue`)
	event.create(`solar_chip_red`).displayName('Dyson Tracking Chip (8)').texture(`kubejs:item/solar_chip_red`)
	event.create(`solar_chip_green`).displayName('Dyson Tracking Chip (64)').texture(`kubejs:item/solar_chip_green`)
	event.create(`solar_chip_purple`).displayName('Dyson Tracking Chip (4096)').texture(`kubejs:item/solar_chip_purple`)



  });