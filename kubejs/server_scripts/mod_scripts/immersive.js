

onEvent('tags.items', event => {
  event.remove(`forge:rods/wooden`, 'immersiveengineering:stick_treated')
  event.remove('minecraft:planks', 'immersiveengineering:fiberboard')
  
  event.add(`forge:scaffoldings/steel`, 'immersiveengineering:steel_scaffolding_standard')
  event.add(`forge:scaffoldings/aluminium`, 'immersiveengineering:alu_scaffolding_standard')
 });


onEvent('recipes', event => {

  //Replace Scaffolding recipe
	event.remove({id: 'immersiveengineering:crafting/steel_scaffolding_standard'})
  


  //No recycling - doesnt work, prob needs to be an actual datapack
  //event.custom({
	//  "type": "immersiveengineering:generated_list",
	//  "conditions": [ { "type": "forge:false" } ]
	//})


//Fuels
  global.ieGeneratorFuel(event, 'forge:diesel', 400) //*4096
  
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
	event.shapeless('4x engineersdecor:dense_grit_sand_block', ['minecraft:dirt','minecraft:gravel','minecraft:sand','minecraft:sand']).id(`mbm2:shapeless/dense_grit_sand_block`)

//Coke Bricks
	event.remove({id: 'immersiveengineering:crafting/cokebrick'})
	//event.recipes.createFilling(['kubejs:unfired_coke_oven_brick'], [Fluid.of('tconstruct:molten_clay', 250), 'engineersdecor:dense_grit_sand_block']).id('mbm2:immersiveengineering/unfired_coke_oven_brick')
  event.blasting('kubejs:coke_oven_brick', 'kubejs:sturdy_brick').id(`mbm2:blasting/coke_oven_brick`)
	event.shaped('immersiveengineering:cokebrick', [
		'AA',
		'AA'
	], {
		A: 'kubejs:coke_oven_brick',
		}).id(`mbm2:crafting/coke_bricks`)
  

	//Kiln Bricks
	event.remove({id: 'immersiveengineering:crafting/alloybrick'})
	event.recipes.createCompacting('immersiveengineering:alloybrick', ['2x kubejs:unfired_clay_brick','2x engineersdecor:dense_grit_sand_block']).heated().id(`mbm2:compacting/kiln_bricks`)


  //Blast Bricks
	event.blasting('kubejs:blast_brick', 'kubejs:tough_brick').id(`mbm2:blasting/blast_brick`)
  event.remove({id: 'immersiveengineering:crafting/blastbrick'})
  event.shaped('immersiveengineering:blastbrick', [
		'AA',
		'AA'
	], {
		A: 'kubejs:blast_brick',
		}).id(`mbm2:crafting/blast_bricks`)
  
  //Reinforced Blast Bricks
	event.remove({id: 'immersiveengineering:crafting/blastbrick_reinforced'})
  event.recipes.createFilling('immersiveengineering:blastbrick_reinforced', [Fluid.of('tconstruct:molten_steel', 180), 'immersiveengineering:blastbrick']).id('mbm2:filling/blastbrick_reinforced')
 //event.shaped('immersiveengineering:blastbrick_reinforced', [
 //  'S',
 //  'B'
 //  ], {
 //  B: 'tconstruct:scorched_bricks',
 //  S: '#forge:plates/steel'
 //  }).id("kubejs:blastbrick_reinforced")


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
  event.recipes.createDeploying('kubejs:incomplete_component_electronic', ['kubejs:incomplete_component_electronic', '#forge:gems/quartz']),
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
/*
  global.AssemblyLaser(event, Item.of('immersiveengineering:component_electronic_adv').toJson(), [
    {"item": "immersiveengineering:plate_duroplast"}, 
    {"type": "pneumaticcraft:stacked_item","item": "immersiveengineering:electron_tube", "count": 2}, 
    {"type": "pneumaticcraft:stacked_item","tag": "forge:wires/aluminum", "count": 2}
  ], 'mbm2:laser_assembly/component_electronic_adv')
*/
    
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
event.shaped('2x immersiveengineering:heavy_engineering', [
  'CDC',
  'PBP',
  'CDC'
    ], {
  B: 'thermal:obsidian_glass',
  C: '#forge:components/industrial_alloy',
  P: 'thermal:invar_gear',
  D: 'mna:bone_ash'
    }).id('mbm2:immersiveengineering/heavy_engineering')
    //Make more expensive, have rubber be a ingredent in a component

//Light Engineering
	event.remove({id: 'immersiveengineering:crafting/light_engineering'})
  event.shaped('2x immersiveengineering:light_engineering', [
    'PCB',
    'CEC',
    'BCP'
      ], {
    E: '#forge:wire_coils/electrum',
    C: 'immersiveengineering:component_steel',
    P: '#forge:plates/energized_steel',
    B: ['#forge:gears/bronze', '#forge:gears/constantan']
      }).id('mbm2:immersiveengineering/light_engineering')
      
//Generator
	event.remove({id: 'immersiveengineering:crafting/generator'})
  event.shaped('2x immersiveengineering:generator', [
    'PDC',
    'DBD',
    'CDP'
      ], {
    B: 'powah:capacitor_blazing',
    C: '#forge:components/industrial_alloy',
    P: 'powah:thermoelectric_plate',
    D: 'immersiveengineering:coil_mv'
      }).id('mbm2:immersiveengineering/generator')

//Redstone Engineering
	event.remove({id: 'immersiveengineering:crafting/rs_engineering'})
event.shaped('2x immersiveengineering:rs_engineering', [
  'CDC',
  'PBP',
  'CDC'
    ], {
  B: 'immersiveengineering:component_electronic',
  C: 'immersiveengineering:component_steel',
  P: '#forge:spools/red_alloy',
  D: '#forge:rods/aluminum'
    }).id('mbm2:immersiveengineering/rs_engineering')

//Radiator
	event.remove({id: 'immersiveengineering:crafting/radiator'})
event.shaped('immersiveengineering:radiator', [
  'CPC',
  'PBP',
  'CPC'
    ], {
  B: 'ars_nouveau:water_essence',
  C: '#forge:components/industrial_alloy',
  P: 'tconstruct:scorched_glass'
    }).id('mbm2:immersiveengineering/radiator')
  event.shaped('3x immersiveengineering:radiator', [
    'CPC',
    'PBP',
    'CPC'
      ], {
    B: '#elementalcraft:gems/fine_water',
    C: '#forge:components/industrial_alloy',
    P: 'tconstruct:scorched_glass'
      }).id('mbm2:immersiveengineering/radiator_x3')
  

    //Slag Glass
	  event.remove({id: 'immersiveengineering:smelting/slag_glass'})
    event.blasting('immersiveengineering:slag_glass', 'thermal:slag').id(`mbm2:blasting/slag_glass`)

//Workbench
event.remove({id: 'immersiveengineering:crafting/workbench'})
event.shaped('immersiveengineering:workbench', [
  'PTT',
  'C F'
    ], {
  T: '#forge:treated_wood_slab',
  P: '#forge:plates/invar',
  C: 'immersiveengineering:craftingtable',
  F: 'immersiveengineering:treated_fence'
    }).id('mbm2:immersiveengineering/workbench')

    //Fix Component Bleuprint
    event.remove({id: 'immersiveengineering:crafting/blueprint_components'})
    event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'), [
      'IAS',
      'BBB',
      'PPP'
        ], {
          I: '#forge:ingots/aluminum',
          A: '#forge:ingots/constantan',
          S: '#forge:ingots/steel',
          P: 'paper',
          B: 'blue_dye'
        }).id('mbm2:immersiveengineering/components')

//Interlocking Blueprint
    event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"interlocking_components"}'), [
      ' G ',
      'BBB',
      'PPP'
        ], {
      G: '#forge:gears/steel',
      P: 'paper',
      B: 'blue_dye'
        }).id('mbm2:immersiveengineering/interlocking_components')

    //Hempcrete, might not use
    event.remove({id: 'immersiveengineering:crafting/hempcrete'})
    event.shaped('8x immersiveengineering:hempcrete', [
      'CCC',
      'HGH',
      'CCC'
        ], {
          C: 'immersiveengineering:concrete',
          G: 'immersiveengineering:dust_hop_graphite',
          H: 'immersiveengineering:hemp_fiber'
        }).id('mbm2:immersiveengineering/hempcrete')

    ///////////////// ARC FURNACE TIME ////////////////////////////
    /*
	global.newMaterialParts.forEach((item) => {
    if(item.type == 'base_metal') {
      
    }
})
*/
/*
event.recipes.immersiveengineeringArcFurnace([outputs], input)
event.recipes.immersiveengineeringArcFurnace([outputs], input, [additives])
event.recipes.immersiveengineeringArcFurnace([outputs], input, [additives], slag)
*/


	//Lots of Sawdust
	event.remove({id: 'immersiveengineering:crafting/fiberboard'})
  event.custom({
    "type":"immersiveengineering:shaped_fluid",
    "pattern":["www","wbw","www"],
    "key":{"w":{"item":"thermal:sawdust_block"},
    "b":{"tag":"forge:phenolic_resin","amount":1000,"type":"immersiveengineering:fluid"}},
    "result":{"item":"immersiveengineering:fiberboard","count":8}}).id('mbm2:crafting/fiberboard')

		//event.custom({"type":"immersiveengineering:sawmill",
		//	"secondaries":[
		//		{"output":{"tag":"forge:dusts/wood"}, "stripping":true},
		//		{"output":{"tag":"forge:dusts/wood"}, "stripping":false}
		//	],
		//	"result":{"item":"minecraft:acacia_planks","count":6},
		//	"energy":1600,
		//	"input":[
		//		{"item":"minecraft:acacia_log"},
		//		{"item":"minecraft:acacia_wood"}
		//	],
		//	"stripped":{
		//		"item":"minecraft:stripped_acacia_log"
		//	}
		//})


});