var bygWood = [
	'mahogany',
	'aspen',
	'baobab',
	'blue_enchanted',
	'cherry',
	'cika',
	'cypress',
	'ebony',
	'nightshade',
	'palm',
	'pine',
	'rainbow_eucalyptus',
	'redwood',
	'skyris',
	'willow',
	'witch_hazel',
	'zelkova',
	'ether',
	'fir',
	'green_enchanted',
	'holly',
	'jacaranda',
	'lament',
	'mangrove',
	'maple',
]
var bygStem = [
	'sythian',
//	'embur',
	'imparius',
	'bulbis',
]
onEvent('tags.items', event => {
    bygWood.forEach((type) => {
		event.add(`byg:planks`, `byg:${type}_planks`)
		event.add(`byg:logs`, `byg:${type}_log`)
		event.add(`byg:stripped_logs`, `byg:stripped_${type}_log`)
	})
    bygStem.forEach((type) => {
		event.add(`byg:planks`, `byg:${type}_planks`)
		event.add(`byg:logs`, `byg:${type}_stem`)
	})
});

onEvent('recipes', event => {

	//Slag Casing
	global.casingTable(event, 'tconstruct:casts/multi_use/gem', false, 'thermal:slag', 'forge:molten_slag', 250, 40, 'tconstruct:smeltery/casting/metal/slag/gem_gold_cast')
	global.casingTable(event, 'tconstruct:casts/single_use/gem', true, 'thermal:slag', 'forge:molten_slag', 250, 40, 'tconstruct:smeltery/casting/metal/slag/gem_sand_cast')
  
	//Block Casing
	global.casingBasin(event, 'thermal:slag_block', 'forge:molten_slag', 1000, 120, 'tconstruct:smeltery/casting/metal/slag/block')

  	//Sheetmetal Cast
	global.casingBasinCast(event, 'forge:sheetmetals', true, 'kubejs:sheetmetal_cast', 'forge:molten_steel', 180, 200, 'tconstruct:smeltery/casting/sheetmetal_cast')

// [| solarflux:mirror |] //
//event.remove({output: 'solarflux:mirror'})
event.shaped('3x solarflux:mirror', [
'BBB',
'CCC'
  ], {
B: '#forge:glass/colorless',
C: 'thermal:silver_plate'
  }).id("solarflux:mirror")


//Chests
event.shaped('4x minecraft:chest', [
	'LLL',
	'L L',
	'LLL'
  ], {
	L: '#byg:logs',
  }).id("kubejs:byg_log_chest")
event.shaped('4x minecraft:chest', [
	  'LLL',
	  'L L',
	  'LLL'
	], {
	  L: '#byg:stripped_logs',
	}).id("kubejs:byg_stripped_log_chest")
event.shaped('minecraft:chest', [
	'PPP',
	'P P',
	'PPP'
  ], {
	P: '#byg:planks',
  }).id("kubejs:byg_plank_chest")
//event.shapeless(`minecraft:chest`, ['#forge:chests/wooden']).id("kubejs:default_chest")


//Scanner
event.remove({id: 'scannable:scanner'})
event.shaped('scannable:scanner', [
	'A A',
	'CDC',
	'EEE'
  ], {
	A: 'immersiveengineering:stick_iron',
 	C: 'createaddition:gold_wire',
 	D: 'minecraft:redstone',
 	E: 'create:copper_sheet'
  }).id("kubejs:scanner")

  event.remove({id: 'scannable:blank_module'})
  event.shaped('2x scannable:blank_module', [
	'AAA',
	'ABA',
	'CDC'
  ], {
	A: 'minecraft:clay_ball',
	B: 'powah:uraninite',
	C: 'minecraft:quartz',
	D: 'thermal:gold_plate'
  }).id("kubejs:blank_module")


// [| Wood Scaffolding |] //
event.shaped('3x kubejs:wood_scaffolding', [
	'AAA',
  ' C ',
  'C C'
	], {
	A: '#minecraft:planks',
  C: '#forge:rods/wooden'
	}).id("kubejs:wood_scaffolding")

// [| Summoning Altar |] //
	event.shaped('summoningrituals:altar', [
		'ABC',
		'DED',
		'EFE'
	  ], {
		A: 'forbidden_arcanus:dark_soul',
		B: 'spirit:soul_crystal_shard',
		C: 'forbidden_arcanus:soul',
		D: 'thermal:gold_plate',
		E: 'minecraft:red_carpet',
		F: 'mna:basic_table'
	  }).id("summoningrituals:altar")

// Sticks
event.shaped('16x minecraft:stick', [
	'L',
	'L'
  ], {
	L: '#minecraft:logs',
  }).id("kubejs:sticks_from_logs")

  // Paper
	event.shapeless('3x minecraft:paper', ['minecraft:sugar_cane','minecraft:sugar_cane','minecraft:sugar_cane']).id('minecraft:paper')
});
