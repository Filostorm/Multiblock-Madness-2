var basicMetalBlocks = [
	//'tier1_casing',
	'tier1_machine_block',
	'tier2_machine_block',
	'tier3_machine_block',
	'machine_casing_fusion_coil',
	'machine_casing_fusion_glass',
	'machine_casing_fusion_glass_yellow',
	'ev_casing',
	'uhv_casing',
	'uv_casing',
	'mm_casing',
	'protype_casing',
	'high_pressure_casing',
	'factory_fan',
	'heated_vinteum_block',
	'overgrown_light_engineering_block',
]
var basicWoodBlocks = [
	'charred_planks'
]
onEvent('block.registry', event => {
	
	console.log('new blocks')

	//Metal
	basicMetalBlocks.forEach((item) => {
		event.create(item).hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').material('metal')
	})
	//Wood
	basicWoodBlocks.forEach((item) => {
		event.create(item).hardness(2).resistance(2).tagBlock('minecraft:mineable/axe').material('wood')
	})
	
	
	event.create('sheetmetal_cast').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').model("kubejs:block/sheetmetal_cast").renderType('cutout').defaultCutout().material('metal')
	event.create('bronze_frame').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').model("kubejs:block/thermal_frame").renderType('cutout').defaultCutout().material('metal')
	event.create('alchemistry_frame').displayName('Alchemical Frame').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').model("kubejs:block/alchemistry_frame").renderType('cutout').defaultCutout().material('metal')
	event.create('pneumaticcraft_casing').displayName('Pneumatic Casing').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').model("kubejs:block/pneumaticcraft_casing").renderType('cutout').defaultCutout().material('metal')
	event.create('hostile_casing').displayName('Hostile Casing').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').model("kubejs:block/hostile_casing").renderType('cutout').defaultCutout().material('metal')
	event.create('haunted_casing').displayName('Haunted Casing').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').model("kubejs:block/haunted_casing").renderType('cutout').defaultCutout().material('metal')
	
	event.create('tier1_casing').displayName('Basic Multiblock Casing').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').material('metal')
	event.create('tier2_casing').displayName('Sturdy Multiblock Casing').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').material('metal')
	event.create('tier3_casing').displayName('Reinforced Multiblock Casing').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').material('metal')
	event.create('transmuted_casing').displayName('Transmuted Casing').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').material('metal')

	//Compressed blocks
	let compressedBlocks = [
		'cobblestone',
		'cobbled_deepslate',
		'netherrack'
	]
	compressedBlocks.forEach(block => {
		event.create(`1x_compressed_${block}`).hardness(1).resistance(1).tagBlock(`minecraft:mineable/pickaxe`).tagBlock(`minecraft:needs_stone_tool`).material(`stone`)
		event.create(`2x_compressed_${block}`).hardness(2).resistance(2).tagBlock(`minecraft:mineable/pickaxe`).tagBlock(`minecraft:needs_iron_tool`).material(`stone`)
		event.create(`3x_compressed_${block}`).hardness(3).resistance(3).tagBlock(`minecraft:mineable/pickaxe`).tagBlock(`minecraft:needs_iron_tool`).material(`stone`)
	});
	
	event.create('drygmy_shard_block').displayName('Drygmy Shard Block').hardness(3).resistance(2).tagBlock('minecraft:mineable/pickaxe').material('glass')
	event.create('starbuncle_shard_block').displayName('Starbuncle Shard Block').hardness(3).resistance(2).tagBlock('minecraft:mineable/pickaxe').material('glass')
	event.create('whirlisprig_shard_block').displayName('Whirlisprig Shard Block').hardness(3).resistance(2).tagBlock('minecraft:mineable/pickaxe').material('glass')
	event.create('wixie_shard_block').displayName('Wixie Shard Block').hardness(3).resistance(2).tagBlock('minecraft:mineable/pickaxe').material('glass')
	
	event.create('solar_panel').displayName('Dyson Panel').fullBlock(false).notSolid().box(0,0,0,16,6,16, true).hardness(2).resistance(2).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').model("kubejs:block/solar_panel").renderType('cutout').defaultCutout().material('metal')
	event.create('solar_bar').displayName('Dyson Panel Support').fullBlock(false).notSolid().box(0,0,0,16,6,16, true).hardness(2).resistance(2).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').model("kubejs:block/solar_bar").renderType('cutout').defaultCutout().material('metal')

	event.create('arcane_sand', 'falling').displayName('Arcane Sand').hardness(1).resistance(1).tagBlock('minecraft:mineable/shovel').material('sand')

	event.create(`reflector`).material('metal').hardness(0.5).resistance(0.5).tagBlock('minecraft:mineable/pickaxe').renderType('cutout').defaultCutout().model(`kubejs:block/reflector`).fullBlock(false).notSolid().box(0,0,0,16,8,16, true)

});

onEvent('tags.items', event => {
	event.add(`forge:sheetmetal_cast`, `kubejs:sheetmetal_cast`)
});	
