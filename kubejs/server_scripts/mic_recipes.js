

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
  }).id("kubejs:plank_chest")
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
  }).id("kubejs:scanner")
  //Cards
  event.remove({id: 'scannable:blank_module'})
  event.shaped('2x scannable:blank_module', [
	'AAA',
	'ABA',
	'CDC'
  ], {
	A: 'minecraft:clay_ball',
	B: 'elementalcraft:earthcrystal',
	C: '#forge:gems',
	D: '#forge:wires/rose_gold'
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

  //Brik
  	event.remove({id: 'minecraft:brick'})
  	event.smelting('minecraft:brick', 'kubejs:unfired_clay_brick').id(`kubejs:smelting/brick`)

	//Piston not racist anymore
	event.replaceInput({id: 'minecraft:piston'}, 'cobblestone', '#forge:cobblestone')
  
	//So, you made an extra Metal Mind
	global.tinkersMeltingPlain(event, 'tconstruct:molten_iron', 720, Item.of('feruchemy:metal_mind').toJson(), 750, 142, `mbm2:smeltery/melting/metalmind`)


  // Damascus Steel
  event.recipes.createCutting('kubejs:steel_scraps', ['#forge:ingots/steel']).processingTime(200),

  //Swap scraps for stacked iron/steel plating
  event.recipes.createSequencedAssembly([ // start the recipe
  'kubejs:damascus_steel_ingot', // have this item be an output
  ], 'kubejs:steel_scraps', [ // input.
  event.recipes.createFilling('kubejs:partially_folded_damascus_steel', ['kubejs:partially_folded_damascus_steel', Fluid.of('lava', 50)]),
  event.recipes.createPressing('kubejs:partially_folded_damascus_steel', ['kubejs:partially_folded_damascus_steel']),
  event.recipes.createCutting('kubejs:partially_folded_damascus_steel', ['kubejs:partially_folded_damascus_steel']).processingTime(50),
//  event.recipes.createCutting('kubejs:partially_folded_damascus_steel', 'kubejs:partially_folded_damascus_steel').processingTime(50)
  ]).transitionalItem('kubejs:partially_folded_damascus_steel').loops(20).id(`mbm2:damascus_steel_ingot`)
});
