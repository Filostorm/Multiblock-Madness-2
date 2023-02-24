var basicMetalBlocks = [
	//'tier1_casing',
	'tier1_machine_block',
	'tier2_casing',
	'tier2_machine_block',
	'tier3_casing',
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
]
var basicWoodBlocks = [
	'charred_planks'
]
onEvent('block.registry', event => {
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
	
	event.create('tier1_casing').displayName('Basic Multiblock Casing').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').material('metal')


});

onEvent('tags.items', event => {
	event.add(`forge:sheetmetal_cast`, `kubejs:sheetmetal_cast`)
});	