onEvent('recipes', event => {


  global.ieGeneratorFuel(event, 'forge:diesel', 250)

  event.remove({output: 'immersiveengineering:blastbrick'})
  
  //Hammer
	event.remove({input:'immersiveengineering:hammer'}) // Random Crushing etc
	event.remove({output: 'immersiveengineering:hammer'})
	event.shaped('immersiveengineering:hammer', [
		'ABC',
		'ADB',
		'DAA'
	], {
		A: Item.empty,
		B: 'minecraft:iron_ingot',
		C: 'immersiveengineering:hemp_fiber',
		D: '#forge:rods/wooden'
		}).id(`mbm2:immersiveengineering/hammer`)

	//Grit
	event.remove({id: 'engineersdecor:independent/dense_grit_sand_block_recipe'})
	event.shapeless('4x engineersdecor:dense_grit_sand_block', ['minecraft:dirt','minecraft:gravel','minecraft:sand','minecraft:sand']).id(`mbm2:crafting/dense_grit_sand_block`)


	event.remove({id: 'immersiveengineering:crafting/cokebrick'})
  event.recipes.createMixing([`kubejs:sandy_brick`], ['kubejs:unfired_clay_brick', 'sand']).id('mbm2:mixing/sandy_brick')
  event.recipes.createMixing([`kubejs:unfired_coke_oven_brick`], ['kubejs:sandy_brick', 'gravel']).id('mbm2:mixing/unfired_coke_oven_brick')
	//event.recipes.createFilling(['kubejs:unfired_coke_oven_brick'], [Fluid.of('tconstruct:molten_clay', 250), 'engineersdecor:dense_grit_sand_block']).id('mbm2:immersiveengineering/unfired_coke_oven_brick')
  event.smelting('kubejs:coke_oven_brick', 'kubejs:unfired_coke_oven_brick').id(`mbm2:smelting/coke_oven_brick`)
	event.shaped('immersiveengineering:cokebrick', [
		'AA',
		'AA'
	], {
		A: 'kubejs:coke_oven_brick',
		}).id(`mbm2:crafting/coke_bricks`)
  

	//Kiln Bricks
	event.remove({id: 'immersiveengineering:crafting/alloybrick'})
	event.recipes.createPressing('kubejs:unfired_clay_brick', 'minecraft:clay_ball').id(`kubejs:pressing/unfired_clay_brick`)
	event.recipes.createCompacting('immersiveengineering:alloybrick', ['2x kubejs:unfired_clay_brick','2x engineersdecor:dense_grit_sand_block']).heated().id(`mbm2:compacting/kiln_bricks`)


//Iron Components
event.recipes.createSequencedAssembly([
'immersiveengineering:component_iron', // output
  ], '#forge:ingots/copper', [ // input.
  //event.recipes.createCutting('kubejs:incomplete_component_iron', 'kubejs:incomplete_component_iron').processingTime(50),
  event.recipes.createDeploying('kubejs:incomplete_component_iron', ['kubejs:incomplete_component_iron', '#forge:plates/iron']),
  event.recipes.createDeploying('kubejs:incomplete_component_iron', ['kubejs:incomplete_component_iron', '#forge:plates/iron']),
  ]).transitionalItem('kubejs:incomplete_component_iron').loops(1) // transitional item and the loops

//Steel Components
event.recipes.createSequencedAssembly([
'immersiveengineering:component_steel', // output
  ], '#forge:ingots/copper', [ // input.
  //event.recipes.createCutting('kubejs:incomplete_component_steel', 'kubejs:incomplete_component_steel').processingTime(50),
  event.recipes.createDeploying('kubejs:incomplete_component_steel', ['kubejs:incomplete_component_steel', '#forge:plates/steel']),
  event.recipes.createDeploying('kubejs:incomplete_component_steel', ['kubejs:incomplete_component_steel', '#forge:plates/steel']),
  ]).transitionalItem('kubejs:incomplete_component_steel').loops(1) // transitional item and the loops
/*
//Circuit Board
event.recipes.createSequencedAssembly([
'immersiveengineering:circuit_board', // output
  ], 'immersiveengineering:plate_duroplast', [ // input.
  event.recipes.createDeploying('kubejs:incomplete_circuit_board', ['kubejs:incomplete_circuit_board', '#forge:plates/copper']),
  ]).transitionalItem('kubejs:incomplete_circuit_board').loops(1) // transitional item and the loops

//Light Bulb
event.recipes.createSequencedAssembly([
'3x immersiveengineering:light_bulb', // output
  ], '#forge:glass/colorless', [ // input.
  event.recipes.createDeploying('kubejs:incomplete_light_bulb', ['kubejs:incomplete_light_bulb', '#forge:wires/copper']),
  event.recipes.createDeploying('kubejs:incomplete_light_bulb', ['kubejs:incomplete_light_bulb', 'minecraft:paper']),
  event.recipes.createDeploying('kubejs:incomplete_light_bulb', ['kubejs:incomplete_light_bulb', 'minecraft:paper']),
  event.recipes.createDeploying('kubejs:incomplete_light_bulb', ['kubejs:incomplete_light_bulb', 'minecraft:paper']),
  ]).transitionalItem('kubejs:incomplete_light_bulb').loops(1) // transitional item and the loops

*/
//Electronic Component
event.recipes.createSequencedAssembly([
'immersiveengineering:component_electronic', // output
  ], 'immersiveengineering:slab_treated_wood_horizontal', [ // input.
  event.recipes.createDeploying('kubejs:incomplete_component_electronic', ['kubejs:incomplete_component_electronic', 'minecraft:quartz']),
  event.recipes.createDeploying('kubejs:incomplete_component_electronic', ['kubejs:incomplete_component_electronic', '#forge:dusts/redstone']),
  event.recipes.createDeploying('kubejs:incomplete_electron_tube', ['kubejs:incomplete_electron_tube', '#forge:wires/electrum']),
  ]).transitionalItem('kubejs:incomplete_component_electronic').loops(1) // transitional item and the loops

//Tube
event.recipes.createSequencedAssembly([
  '3x immersiveengineering:electron_tube', // output
    ], '#forge:plates/nickel', [ // input.
    event.recipes.createDeploying('kubejs:incomplete_electron_tube', ['kubejs:incomplete_electron_tube', '#forge:wires/copper']),
    event.recipes.createDeploying('kubejs:incomplete_electron_tube', ['kubejs:incomplete_electron_tube', 'create:framed_glass']),
    event.recipes.createDeploying('kubejs:incomplete_electron_tube', ['kubejs:incomplete_electron_tube', '#forge:dusts/redstone']),
    ]).transitionalItem('kubejs:incomplete_electron_tube').loops(1) // transitional item and the loops
  
//Advanced Electronic Component
event.recipes.createSequencedAssembly([
'immersiveengineering:component_electronic_adv', // output
  ], 'immersiveengineering:plate_duroplast', [ // input.
  event.recipes.createDeploying('kubejs:incomplete_component_electronic_adv', ['kubejs:incomplete_component_electronic_adv', 'immersiveengineering:electron_tube']),
  event.recipes.createDeploying('kubejs:incomplete_component_electronic_adv', ['kubejs:incomplete_component_electronic_adv', '#forge:wires/aluminum']),
  ]).transitionalItem('kubejs:incomplete_component_electronic_adv').loops(2) // transitional item and the loops

//Belt
  event.shaped('8x immersiveengineering:conveyor_basic', [
  'BBB',
  'CDC'
    ], {
  B: 'thermal:cured_rubber',
  C: 'minecraft:iron_ingot',
  D: 'minecraft:redstone'
    })


// [| Treated Scaffolding |] //
event.shaped('3x immersiveengineering:treated_scaffold', [
  'AAA',
  ' C ',
  'C C'
  ], {
  A: '#forge:treated_wood',
  C: 'immersiveengineering:stick_treated'
  }).id("immersiveengineering:crafting/treated_scaffold")

  //Blast Bricks
	event.remove({id: 'immersiveengineering:crafting/blastbrick_reinforced'})
  event.shaped('immersiveengineering:blastbrick_reinforced', [
    'S',
    'B'
    ], {
    B: 'tconstruct:scorched_bricks',
    S: '#forge:plates/steel'
    }).id("kubejs:blastbrick_reinforced")

      /*      
      event.forEachRecipe({mod: 'immersiveengineering', type: 'minecraft:crafting_shaped'}, recipe => {
        console.info(recipe.toString())
        let outputItems = recipe.json.get('result');
        let ingredientPattern = recipe.json.get('pattern')
        let ingredientListShaped = recipe.json.get('key');
        console.log(ingredientListShaped)
        console.log(ingredientPattern)
        console.log(outputItems)
      })
      */
    

//Heavy Engineering
	event.remove({id: 'immersiveengineering:crafting/heavy_engineering'})
event.shaped('4x immersiveengineering:heavy_engineering', [
  'CDC',
  'PBP',
  'CDC'
    ], {
  B: 'thermal:obsidian_glass',
  C: 'kubejs:compressed_steel_component',
  P: 'thermal:invar_gear',
  D: 'thermal:cured_rubber'
    }).id('mbm2:immersiveengineering/heavy_engineering')
    

//Heavy Engineering
	event.remove({id: 'immersiveengineering:crafting/light_engineering'})
  event.shaped('4x immersiveengineering:light_engineering', [
    'PCD',
    'CBC',
    'DCP'
      ], {
    B: 'kubejs:energized_steel_gear',
    C: 'immersiveengineering:component_steel',
    P: 'thermal:electrum_plate',
    D: 'pneumaticcraft:reinforced_bricks'
      }).id('mbm2:immersiveengineering/light_engineering')
      
//Generator
	event.remove({id: 'immersiveengineering:crafting/generator'})
  event.shaped('4x immersiveengineering:generator', [
    'PDC',
    'DBD',
    'CDP'
      ], {
    B: 'powah:crystal_blazing',
    C: 'immersiveengineering:component_steel',
    P: 'powah:thermoelectric_plate',
    D: 'immersiveengineering:coil_mv'
      }).id('mbm2:immersiveengineering/generator')

//Redstone Engineering
	event.remove({id: 'immersiveengineering:crafting/rs_engineering'})
event.shaped('4x immersiveengineering:rs_engineering', [
  'CDC',
  'PBP',
  'CDC'
    ], {
  B: 'immersiveengineering:component_electronic',
  C: 'immersiveengineering:component_iron',
  P: 'kubejs:red_alloy_wire',
  D: 'kubejs:red_alloy_rod'
    }).id('mbm2:immersiveengineering/rs_engineering')

//Radiator
	event.remove({id: 'immersiveengineering:crafting/radiator'})
event.shaped('3x immersiveengineering:radiator', [
  'CPC',
  'PBP',
  'CPC'
    ], {
  B: 'ars_nouveau:water_essence',
  C: 'immersiveengineering:sheetmetal_steel',
  P: 'tconstruct:scorched_glass'
    }).id('mbm2:immersiveengineering/radiator')

});