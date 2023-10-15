

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

  //Tier 1 Solar
  event.shaped('solarflux:sp_1', ['AAA','BCB','BBB'], {A: 'solarflux:mirror',B: '#forge:treated_wood',C: '#forge:gears/dielectric_alloy'}).id("solarflux:solar_panel_1")

  //Tier 2 Solar
  event.shaped('solarflux:sp_2', ['AAA','ABA','AAA'], {A: 'solarflux:sp_1',B: 'kubejs:tier_1_electrical_alloy_wire_coil'}).id("solarflux:solar_panel_2")

//Chests
/*
event.shaped('4x minecraft:chest', [
	'LLL',
	'L L',
	'LLL'
  ], {
	L: '#minecraft:logs',
  }).id("kubejs:log_chest")
  */
event.shaped('minecraft:chest', [
	'PPP',
	'P P',
	'PPP'
  ], {
	P: '#minecraft:planks',
  }).id("mbm2:plank_chest")
//event.shapeless(`minecraft:chest`, ['#forge:chests/wooden']).id("kubejs:default_chest")


//Scanner
event.remove({id: 'scannable:scanner'})
event.shaped('scannable:scanner', [
	'A A',
	'CDC',
	'EEE'
  ], {
	A: 'immersiveengineering:toolupgrade_shield_flash',
 	C: '#forge:wires/gold',
 	D: 'create:electron_tube',
 	E: '#forge:plates/steel'
  }).id("mbm2:scanner")
  //Cards
  event.remove({id: 'scannable:blank_module'})
  event.shaped('2x scannable:blank_module', [
	'AAA',
	'ABA',
	'CDC'
  ], {
	A: 'minecraft:clay_ball',
	B: 'elementalcraft:earthcrystal',
	C: '#forge:gems/quartz',
	D: '#forge:wires/rose_gold'
  }).id("mbm2:blank_module")


// [| Wood Scaffolding |] //
event.shaped('3x kubejs:wood_scaffolding', [
	'AAA',
  ' C ',
  'C C'
	], {
	A: '#minecraft:planks',
  C: '#forge:rods/wooden'
	}).id("mbm2:wood_scaffolding")

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
	  }).id("mbm2:sticks_from_logs")

  // Paper
	event.shapeless('3x minecraft:paper', ['minecraft:sugar_cane','minecraft:sugar_cane','minecraft:sugar_cane']).id('minecraft:paper')

	//Beam
  	event.remove({id: 'druidcraftrg:beam'})
	event.shaped('4x druidcraftrg:beam', [
		' L ',
		'LSL',
		' L '
	  ], {
		L: '#minecraft:oak_logs',
		S: '#forge:string',
	  }).id("mbm2:druidcraftrg/beams")

  // Soul Torch
  event.shapeless('4x soul_torch', ['torch','torch','torch','torch','soul_sand']).id('mbm2:soul_torch')


	//Piston not racist anymore
	event.replaceInput({id: 'minecraft:piston'}, 'cobblestone', '#forge:cobblestone')
  
	//So, you made an extra Metal Mind
	global.tinkersMeltingPlain(event, 'tconstruct:molten_iron', 720, Item.of('feruchemy:metal_mind').toJson(), 750, 142, `mbm2:smeltery/melting/metalmind`)

	//string from cobweb
	event.shapeless('3x string', ['cobweb']).id('mbm2:string_from_cobweb')

  //compressed cobble
  event.shaped('kubejs:1x_compressed_cobblestone', [
	  'CCC',
	  'CCC',
	  'CCC'
	], {
	  C: 'cobblestone'
	}).id("mbm2:1x_compressed_cobblestone")
	event.shapeless('9x cobblestone', ['kubejs:1x_compressed_cobblestone']).id('mbm2:1x_uncompressed_cobblestone')
	event.shaped('kubejs:2x_compressed_cobblestone', [
		'CCC',
		'CCC',
		'CCC'
	  ], {
		C: 'kubejs:1x_compressed_cobblestone'
	}).id("mbm2:2x_compressed_cobblestone")
	event.shapeless('9x kubejs:1x_compressed_cobblestone', ['kubejs:2x_compressed_cobblestone']).id('mbm2:2x_uncompressed_cobblestone')
  	event.shaped('kubejs:3x_compressed_cobblestone', [
		'CCC',
		'CCC',
		'CCC'
  	], {
		C: 'kubejs:2x_compressed_cobblestone'
  	}).id("mbm2:3x_compressed_cobblestone")
	event.shapeless('9x kubejs:2x_compressed_cobblestone', ['kubejs:3x_compressed_cobblestone']).id('mbm2:3x_uncompressed_cobblestone')

  //thermal filter augment
  event.remove({id: 'thermal:augments/item_filter_augment'})
  event.shaped('thermal:item_filter_augment', [
	  ' T ',
	  'TFT',
	  ' T '
	], {
	  T: '#forge:nuggets/tin',
	  F: 'thermal:filter_attachment',
	}).id("mbm2:thermal/item_filter_augment")

	event.remove({id: 'thermal:augments/fluid_filter_augment'})
	event.shaped('thermal:fluid_filter_augment', [
		' B ',
		'BFB',
		' B '
	  ], {
		B: '#forge:nuggets/bronze',
		F: 'thermal:filter_attachment',
	  }).id("mbm2:thermal/fluid_filter_augment")

  //Convenient hopper recipe
  event.shaped('minecraft:hopper', [
	'ILI',
	'ILI',
	' I '
  ], {
	L: '#minecraft:logs',
	I: 'minecraft:iron_ingot',
  }).id("mbm2:simplifiedhopper")  

 //Cheaper Armory Cabinet
  event.replaceInput({id: 'functionalstorage:armory_cabinet'}, 'minecraft:netherite_ingot', 'kubejs:iron_plating')  // Titanium Plated Obsidian
  
 //titanium plated obsidian	
  event.recipes.createSequencedAssembly([ // start the recipe
  'kubejs:titanium_plated_obsidian', // have this item be an output
  ], 'minecraft:obsidian', [ // input.
  event.recipes.createDeploying('kubejs:incomplete_titanium_plated_obsidian', ['kubejs:incomplete_titanium_plated_obsidian', '#forge:sheets/titanium']),
  event.recipes.createDeploying('kubejs:incomplete_titanium_plated_obsidian', ['kubejs:incomplete_titanium_plated_obsidian', '#forge:sheets/titanium']),
  event.recipes.createPressing('kubejs:incomplete_titanium_plated_obsidian', ['kubejs:incomplete_titanium_plated_obsidian']),
  ]).transitionalItem('kubejs:incomplete_titanium_plated_obsidian').loops(2).id('mbm2:titanium_plated_obsidian');


  //Ender Tank and Ender Chest
  event.remove({id: 'enderstorage:ender_chest'})
  event.remove({id: 'enderstorage:ender_tank'})
  event.shaped('enderstorage:ender_chest', ['ABA','CDC','AEA'], {A: 'extendedcrafting:ender_ingot',B: 'tconstruct:enderman_head',C: 'kubejs:titanium_plated_obsidian',D: 'cloudstorage:static_cloud_chest',E: 'minecraft:ender_pearl'}).id('mbm2:ender_chest')
  event.shaped('enderstorage:ender_tank', ['ABA','CDC','AEA'], {A: 'extendedcrafting:ender_ingot',B: 'tconstruct:enderman_head',C: 'kubejs:titanium_plated_obsidian',D: 'beyond_earth:steel_tank',E: 'minecraft:ender_pearl'}).id('mbm2:ender_tank');

  //Entangled Block
  event.replaceInput({id: 'entangled:block'}, 'minecraft:obsidian', 'kubejs:titanium_plated_obsidian');


  //Chunkloader Upgrade
  event.shaped(Item.of('compactmachines:chunkloader_upgrade', '{upgrade_info:{key:"compactmachines:chunkloader"}}'), ['ABA','BCB','ABA'], {A: 'compactmachines:wall',B: 'compactcrafting:field_projector',C: 'compactmachines:personal_shrinking_device'}).id('mbm2:chunkloader_upgrade')



});
