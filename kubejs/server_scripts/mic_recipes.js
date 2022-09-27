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

	//Nugget Casing
	global.casingTable(event, 'tconstruct:casts/multi_use/gem', false, 'thermal:slag', 'forge:molten_slag', 250, 40, 'tconstruct:smeltery/casting/metal/slag/gem_gold_cast')
	global.casingTable(event, 'tconstruct:casts/single_use/gem', true, 'thermal:slag', 'forge:molten_slag', 250, 40, 'tconstruct:smeltery/casting/metal/slag/gem_sand_cast')
  
	//Block Casing
	global.casingBasin(event, 'thermal:slag_block', 'forge:molten_slag', 1000, 120, 'tconstruct:smeltery/casting/metal/slag/block')


  	//Sheetmetal Cast
	global.casingBasinCast(event, 'forge:sheetmetals', true, 'kubejs:sheetmetal_cast', 'forge:molten_steel', 180, 200, 'tconstruct:smeltery/casting/sheetmetal_cast')

// [| compactcrafting:projector_dish |] //
event.remove({id: 'compactcrafting:projector_dish'})
event.shaped('4x compactcrafting:projector_dish', [
	'AB ',
	'ADB',
	'AB '
  ], {
	A: '#forge:glass_panes/colorless',
B: 'solarflux:mirror',
D: 'ars_nouveau:source_gem'
  }).id("kubejs:projector_dish")

// [| compactcrafting:base |] //
event.remove({id: 'compactcrafting:base'})
event.shaped('4x compactcrafting:base', [
	' B ',
	'CDC',
	'EEE'
  ], {
B: 'minecraft:ender_eye',
C: 'minecraft:diamond',
D: 'mna:decoration/arcane_stone_slab',
E: 'thermal:invar_plate'
  }).id("kubejs:base")

// [| solarflux:mirror |] //
//event.remove({output: 'solarflux:mirror'})
event.shaped('3x solarflux:mirror', [
'BBB',
'CCC'
  ], {
B: '#forge:glass/colorless',
C: 'thermal:silver_plate'
  }).id("solarflux:mirror")

// [| improvised_manaweaver_wand |] //
event.remove({id: 'mna:improvised_manaweaver_wand'})
event.shaped(Item.of('mna:improvised_manaweaver_wand', '{Damage:0}'), [
	'  B',
	' C ',
	'C  '
  ], {
B: '#mna:improvised_manaweave_wand_caps',
C: '#forge:rods/wooden'
  }).id("kubejs:improvised_manaweaver_wand")


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
});
