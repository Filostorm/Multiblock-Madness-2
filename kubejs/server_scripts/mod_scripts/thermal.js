
onEvent('tags.items', event => {
	 event.add(`create:gems/slag`, 'thermal:slag')
});

onEvent('recipes', event => {
	
	var recipeNamesToRemove = [
		'thermal:rubber_from_vine',
		'thermal:rubber_from_dandelion',
		'thermal:fire_charge/lumium_ingot_4',
		'thermal:fire_charge/enderium_ingot_2',
		'thermal:fire_charge/electrum_ingot_2',
		'thermal:fire_charge/constantan_ingot_2',
		'thermal:fire_charge/bronze_ingot_4',
		'thermal:fire_charge/signalum_ingot_4',
		'thermal:fire_charge/invar_ingot_3',
		'thermal:fire_charge/enderium_glass_2',
		'thermal:fire_charge/signalum_glass_2',
		'thermal:fire_charge/lumium_glass_2',
		'thermal:constantan_dust_2',
		'thermal:bronze_dust_4',
		'thermal:invar_dust_3',
		'thermal:electrum_dust_2',
		'thermal:signalum_dust_4',
		'thermal:enderium_dust_2',
		'thermal:lumium_dust_4',
		'thermal:earth_charge/emerald_dust_from_emerald',
		'thermal:earth_charge/cinnabar_dust_from_cinnabar',
		'thermal:earth_charge/niter_dust_from_niter',
		'thermal:earth_charge/lapis_dust_from_lapis',
		'thermal:earth_charge/ender_pearl_dust_from_ender_pearl',
		'thermal:earth_charge/sulfur_dust_from_sulfur',
		'thermal:earth_charge/apatite_dust_from_apatite',
		'thermal:earth_charge/quartz_dust_from_quartz',
		'thermal:earth_charge/diamond_dust_from_diamond',
		'thermal:machines/crystallizer/crystallizer_amethyst_cluster',
		'thermal:bottler_bucket',
		/thermal:bottler_potion_.*/,
	]
    recipeNamesToRemove.forEach((name) => {
	event.remove({id: name})
	})


	//Kiln Rubber
	event.recipes.immersiveengineeringAlloy('3x thermal:cured_rubber', '2x thermal:rubber', ['#forge:dusts/sulfur','#forge:gems/sulfur']).id(`mbm2:kiln/curing_rubber`)	



	//Machine Frame
	event.remove({output: 'thermal:machine_frame'})
	global.compactCrafting(event, 'thermal:machine_frame', 1, 'immersiveengineering:component_electronic_adv',
	3, [
	  {
	  type: 'compactcrafting:hollow',
	  wall: 'A'
	  },
	  {
		  type: 'compactcrafting:mixed',
		  pattern: [
			  ['I', '-','I'],
			  ['-', '-','-'],
			  ['I', '-','I']
		  ]
	  },
	  {
	  type: 'compactcrafting:hollow',
	  wall: 'S'
	  }
	  ], {
	  'S': {
		type: 'compactcrafting:block',
		block: 'immersiveengineering:sheetmetal_steel'
	  },
	  'I': {
		type: 'compactcrafting:block',
		block: 'kubejs:invar_scaffolding'
	  },
	  'A': {
		type: 'compactcrafting:block',
		block: 'immersiveengineering:sheetmetal_aluminum'
	  }
	},  'mbm2:machine_frame')


	//Bronze Frame
	global.compactCrafting(event, 'kubejs:bronze_frame', 1, 'immersiveengineering:component_electronic',
	3, [
	  {
	  type: 'compactcrafting:hollow',
	  wall: 'A'
	  },
	  {
		  type: 'compactcrafting:mixed',
		  pattern: [
			  ['I', '-','I'],
			  ['-', '-','-'],
			  ['I', '-','I']
		  ]
	  },
	  {
	  type: 'compactcrafting:hollow',
	  wall: 'S'
	  }
	  ], {
	  'S': {
		type: 'compactcrafting:block',
		block: 'kubejs:bronze_sheetmetal'
	  },
	  'I': {
		type: 'compactcrafting:block',
		block: 'immersiveengineering:treated_scaffold'
	  },
	  'A': {
		type: 'compactcrafting:block',
		block: 'immersiveengineering:sheetmetal_electrum'
	  }
	},  'mbm2:bronze_frame')
	
	//Latex Extractor
event.remove({output: 'thermal:device_tree_extractor'})
event.shaped('thermal:device_tree_extractor', [
	'ABA',
	'CDC',
	'AEA'
  ], {
	A: '#minecraft:planks',
	B: '#forge:gears/copper',
	C: '#mbm2:small_cogs',
	D: 'thermal:redstone_servo',
	E: 'minecraft:bucket'
  }).id("mbm2:device_tree_extractor")

// [| RF Furnace |] //
event.remove({output: 'thermal:machine_furnace'})
event.shaped('thermal:machine_furnace', [
	' B ',
	'CDC',
	'EFE'
  ], {
	B: 'minecraft:redstone',
	C: 'minecraft:bricks',
	D: 'kubejs:bronze_frame',
	E: '#forge:gears/copper',
	F: 'kubejs:silver_coil'
  }).id("mbm2:machine_furnace")

// [| Crafter |] //
event.remove({output: 'thermal:machine_crafter'})
event.shaped('thermal:machine_crafter', [
	' B ',
	'CDC',
	'EFE'
  ], {
	B: 'minecraft:crafting_table',
	C: 'thermal:tin_ingot',
	D: 'kubejs:bronze_frame',
	E: '#forge:gears/copper',
	F: 'kubejs:silver_coil'
  }).id("mbm2:machine_crafter")

// [| Chiller |] //
event.remove({output: 'thermal:machine_chiller'})
event.shaped('thermal:machine_chiller', [
	' B ',
	'CDC',
	'EFE'
  ], {
	A: Item.empty,
	F: 'engineersdecor:small_freezer',
	C: 'minecraft:packed_ice',
	D: 'kubejs:bronze_frame',
	E: '#forge:gears/bronze',
	B: 'kubejs:silver_coil'
  }).id("mbm2:machine_chiller")

// [| Melter |] //
event.remove({output: 'thermal:machine_crucible'})
event.shaped('thermal:machine_crucible', [
	' B ',
	'CDC',
	'EFE'
  ], {
	B: '#forge:glass',
	C: 'minecraft:nether_bricks',
	D: 'kubejs:bronze_frame',
	E: '#forge:gears/bronze',
	F: 'kubejs:silver_coil'
  }).id("mbm2:machine_crucible")

// [| Press |] //
event.remove({output: 'thermal:machine_press'})
event.shaped('thermal:machine_press', [
	' B ',
	'CDC',
	'EFE'
  ], {
	B: 'minecraft:iron_block',
	C: '#forge:ingots/bronze',
	D: 'kubejs:bronze_frame',
	E: '#forge:gears/bronze',
	F: 'kubejs:silver_coil'
  }).id('mbm2:machine_press')

// [| Crystallizer |] //
event.remove({output: 'thermal:machine_crystallizer'})
event.shaped('thermal:machine_crystallizer', [
	'ABA',
	'CDC',
	'EFE'
  ], {
	A: 'create:framed_glass',
	B: '#forge:gems/diamond',
	C: '#forge:plates/red_alloy',
	D: 'kubejs:bronze_frame',
	E: '#forge:gears/electrum',
	F: 'kubejs:silver_coil'
  }).id('mbm2:machine_press')




  //Silver Coil
  event.shaped('kubejs:silver_coil', [
	'A  ',
	' C ',
	'  A'
  ], {
	A: 'minecraft:redstone',
	C: '#forge:ingots/silver'
  }).id('mbm2:silver_coil')

  // T1 Upgrade//
  //event.remove({id: 'thermal:augments/upgrade_augment_1'})
  event.shaped('thermal:upgrade_augment_1', [
	  'ICI',
	  'RGR',
	  'ICI'
	], {
	  I: '#forge:ingots/invar',
	  C: 'create:framed_glass',
	  R: 'minecraft:redstone',
	  G: 'kubejs:energized_steel_gear',
	}).id('thermal:augments/upgrade_augment_1')

 // Latex
 event.recipes.thermal.chiller('thermal:rubber', [Fluid.of('industrialforegoing:latex', 250), 'thermal:chiller_ball_cast'])
 event.recipes.thermal.chiller('thermal:rubber_block', [Fluid.of('industrialforegoing:latex', 1000)])
    
 //Magma
 event.recipes.thermal.crucible(Fluid.of('tconstruct:magma', 250), 'minecraft:magma_cream').id(`mbm2:magma_from_ball`)

 ///////////////////// Elemental Stuff /////////////////
 
 //Temp Recipes
 //event.shapeless(`kubejs:petrotheum_dust`, ['thermal:basalz_powder', '#forge:dusts/coal_coke']).id(`mbm2:petrotheum_dust`)
 //event.shapeless(`kubejs:cryotheum_dust`, ['thermal:blizz_powder', 'snowball']).id(`mbm2:cryotheum_dust`)
 //event.shapeless(`kubejs:pyrotheum_dust`, ['minecraft:blaze_powder', 'create:cinder_flour']).id(`mbm2:pyrotheum_dust`)
 //event.shapeless(`kubejs:aerotheum_dust`, ['thermal:blitz_powder', 'cloudstorage:cloud']).id(`mbm2:aerotheum_dust`)

event.recipes.thermal.crucible(Fluid.of(`kubejs:blazing_pyrotheum`, 250), `kubejs:pyrotheum_dust`).id(`mbm2:crucible/pyrotheum`)
event.recipes.thermal.crucible(Fluid.of(`kubejs:gelid_cryotheum`, 250), `kubejs:cryotheum_dust`).id(`mbm2:crucible/cryotheum`)
event.recipes.thermal.crucible(Fluid.of(`kubejs:zephyrean_aerotheum`, 250), `kubejs:aerotheum_dust`).id(`mbm2:crucible/aerotheum`)
event.recipes.thermal.crucible(Fluid.of(`kubejs:tectonic_petrotheum`, 250), `kubejs:petrotheum_dust`).id(`mbm2:crucible/petrotheum`)

//New Augment code
//event.shapeless(Item.of('kubejs:shifting_cube', '{AugmentData:{Type: Upgrade, BaseMod:5f}}'), ['create:experience_nugget', '#forge:gears/signalum']).id(`mbm2:shifting_cube_augment`)

//Quicksilver, no reason for it yet
event.smelting('kubejs:quicksilver', 'thermal:cinnabar')

	
//Hive Hopper recipe
event.shaped('thermal:device_hive_extractor', [' A ','BCB',' D '], {A: 'littlelogistics:fluid_hopper',B: 'create:cogwheel',C: 'create:andesite_casing',D: 'engineersdecor:factory_hopper'}).id(`mbm2:hive_hopper`)

//Charged Coil
global.powahEnergizing(event, [Item.of('thermal:rf_coil').toJson()], 'kubejs:charged_coil', 1,  25000, 'mbm2:charged_coil')

//Extruder
event.remove({output: 'thermal:device_rock_gen'})
event.shaped('thermal:device_rock_gen', ['ABA','CDC','AEA'], {A: 'thermal:invar_plate',B: 'thermal:redstone_servo',C: 'kubejs:steel_gear',D: 'kubejs:bronze_frame',E: 'minecraft:piston'}).id(`mbm2:device_rock_gen`)

//tinker_bench
event.remove({output: 'thermal:tinker_bench'})
event.shaped('thermal:tinker_bench', ['ABA','CDC','CEC'], {A: 'kubejs:iron_plating',B: 'minecraft:crafting_table',C: 'immersiveengineering:treated_wood_horizontal',D: 'kubejs:bronze_frame',E: 'thermal:rf_coil'}).id(`mbm2:tinker_bench`)

//charge_bench
event.remove({output: 'thermal:charge_bench'})
event.shaped('thermal:charge_bench', ['ABA','CDC','ECE'], {A: '#forge:plates/tier_1_electrical_alloy',B: 'kubejs:tier_1_electrical_alloy_wire_coil',C: 'kubejs:charged_coil',D: 'thermal:tinker_bench',E: 'thermal:lead_plate'}).id(`mbm2:charge_bench`)

//flux_drill
event.remove({output: 'thermal:flux_drill'})
event.shaped('thermal:flux_drill', [' A ','BCB',' D '], {A: 'thermal:drill_head',B: 'kubejs:tier_1_mechanical_alloy_interlocking_component',C: 'thermal:ruby',D: 'kubejs:charged_coil'}).id(`mbm2:flux_drill`)
//flux_magnet
event.remove({output: 'thermal:flux_magnet'})
event.shaped('thermal:flux_magnet', ['A A','BCB','BBB'], {A: 'create:polished_rose_quartz',B: 'kubejs:tier_1_structural_alloy_plate',C: 'kubejs:charged_coil'}).id(`mbm2:flux_magnet`)
//flux_saw
event.remove({output: 'thermal:flux_saw'})
event.shaped('thermal:flux_saw', [' A ','BCB',' D '], {A: 'thermal:saw_blade',B: 'kubejs:tier_1_mechanical_alloy_interlocking_component',C: 'thermal:ruby',D: 'kubejs:charged_coil'}).id(`mbm2:flux_saw`)
//flux_capacitor
event.remove({output: 'thermal:flux_capacitor'})
event.shaped('thermal:flux_capacitor', ['ABA','CDC',' E '], {A: 'thermal:lead_plate',B: 'thermal:ruby',C: 'kubejs:energetic_alloy_bolt',D: 'kubejs:small_battery_empty',E: 'kubejs:charged_coil'}).id(`mbm2:flux_capacitor`)

//saw_blade
event.remove({output: 'thermal:saw_blade'})
event.shaped('thermal:saw_blade', ['AA ','ABA',' AA'], {A: 'thermal:iron_plate',B: 'kubejs:bronze_plating'}).id(`mbm2:saw_blade`)
//drill_head
event.remove({output: 'thermal:drill_head'})
event.shaped('thermal:drill_head', [' A ','ABA','AAA'], {A: 'thermal:iron_plate',B: 'kubejs:bronze_plating'}).id(`mbm2:drill_head`)

//Add back in the Pyrolyzer
event.custom({
	"type": "thermal:pyrolyzer",
	"ingredient": {
	  "tag": "minecraft:coals"
	},
	"result": [
	  {
		"item": "thermal:coal_coke"
	  },
	  {
		"item": "thermal:tar",
		"chance": 0.25
	  },
	  {
		"fluid": "immersiveengineering:creosote",
		"amount": 250
	  }
	],
	"experience": 0.15
  }).id('mbm2:pyrolyzer/coal')
  event.custom({
	"type": "thermal:pyrolyzer",
	"ingredient": {
	  "tag": "minecraft:logs"
	},
	"result": [
	  {
		"item": "minecraft:charcoal"
	  },
	  {
		"fluid": "immersiveengineering:creosote",
		"amount": 125
	  }
	],
	"experience": 0.15
  }).id('mbm2:pyrolyzer/logs')

//Dynamos
event.remove({output: 'thermal:dynamo_compression'})
event.shaped('thermal:dynamo_compression', [' A ','BCB','DED'], {A: 'thermal:rf_coil',B: 'kubejs:dielectric_alloy_ingot',C: 'thermal:bronze_gear',D: 'thermal:bronze_ingot',E: 'kubejs:dynamo_frame'}).id('mbm2:compression_dynamo')
event.remove({output: 'thermal:dynamo_numismatic'})
event.shaped('thermal:dynamo_numismatic', [' A ','BCB','DED'], {A: 'thermal:rf_coil',B: 'kubejs:dielectric_alloy_ingot',C: 'thermal:tin_gear',D: 'thermal:constantan_ingot',E: 'kubejs:dynamo_frame'}).id('mbm2:numismatic_dynamo')
event.remove({output: 'thermal:dynamo_lapidary'})
event.shaped('thermal:dynamo_lapidary', [' A ','BCB','DED'], {A: 'thermal:rf_coil',B: 'kubejs:dielectric_alloy_ingot',C: 'thermal:gold_gear',D: 'minecraft:lapis_lazuli',E: 'kubejs:dynamo_frame'}).id('mbm2:lapidary_dynamo')
event.remove({output: 'thermal:dynamo_disenchantment'})
event.shaped('thermal:dynamo_disenchantment', [' A ','BCB','DED'], {A: 'thermal:rf_coil',B: 'kubejs:dielectric_alloy_ingot',C: 'thermal:silver_gear',D: 'minecraft:experience_bottle',E: 'kubejs:dynamo_frame'}).id('mbm2:disenchantment_dynamo')
event.remove({output: 'thermal:dynamo_gourmand'})
event.shaped('thermal:dynamo_gourmand', [' A ','BCB','DED'], {A: 'thermal:rf_coil',B: 'kubejs:dielectric_alloy_ingot',C: 'thermal:copper_gear',D: 'thermal:tin_ingot',E: 'kubejs:dynamo_frame'}).id('mbm2:gourmand_dynamo')
//Dynamo Frame miniaturization
global.compactCrafting(event, 'kubejs:dynamo_frame', 1, 'kubejs:tier_1_mechanical_alloy_gear',
	3, [
	  {
	  type: 'compactcrafting:mixed',
	  pattern: [
		['-','-','-'],
		['-','C','-'],
		['-','-','-']
	  ]
	  },
	  {
	  type: 'compactcrafting:mixed',
	  pattern: [
		['S','S','S'],
		['S','C','S'],
		['S','S','S']
	  ]
	  },
	  {
	  type: 'compactcrafting:mixed',
	  pattern: [
		['S','S','S'],
		['S','S','S'],
		['S','S','S']
	  ]
	  }
	  ], {
	  'C': {
		type: 'compactcrafting:block',
		block: 'extendedcrafting:redstone_ingot_block'
	  },
	  'S': {
		type: 'compactcrafting:block',
		block: 'kubejs:tier_1_structural_alloy_scaffolding'
	  }
	},  'mbm2:dynamo_frame')
});

