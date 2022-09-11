onEvent('recipes', event => {
  event.remove({id: 'immersiveengineering:crafting/stick_iron'})

  //Hammer
	event.remove({input:'immersiveengineering:hammer'}) // Random Crushing etc
	event.remove({output: 'immersiveengineering:hammer'})
	event.shaped('immersiveengineering:hammer', [
		'ABC',
		'ADB',
		'DAA'
	], {
		A: Item.empty,
		B: 'thermal:invar_ingot',
		C: 'immersiveengineering:hemp_fiber',
		D: '#forge:rods/wooden'
		})

	//Grit
	event.remove({id: 'engineersdecor:independent/dense_grit_sand_block_recipe'})
	event.shapeless('4x engineersdecor:dense_grit_sand_block', ['minecraft:dirt','minecraft:gravel','minecraft:sand','minecraft:sand'])

	//Kiln Bricks
	event.remove({id: 'immersiveengineering:crafting/alloybrick'})
	event.recipes.createPressing('kubejs:unfired_clay_brick', 'minecraft:clay_ball').id(`kubejs:pressing/unfired_clay_brick`)
	event.recipes.createCompacting('immersiveengineering:alloybrick', ['2x kubejs:unfired_clay_brick','2x engineersdecor:dense_grit_sand_block']).heated().id(`kubejs:compacting/kiln_bricks`)

//Iron Components
event.recipes.createSequencedAssembly([
'immersiveengineering:component_iron', // output
  ], '#forge:ingots/copper', [ // input.
  event.recipes.createCutting('kubejs:incomplete_component_iron', 'kubejs:incomplete_component_iron').processingTime(50),
  event.recipes.createDeploying('kubejs:incomplete_component_iron', ['kubejs:incomplete_component_iron', '#forge:plates/iron']),
  event.recipes.createDeploying('kubejs:incomplete_component_iron', ['kubejs:incomplete_component_iron', '#forge:plates/iron']),
  ]).transitionalItem('kubejs:incomplete_component_iron').loops(1) // transitional item and the loops

//Steel Components
event.recipes.createSequencedAssembly([
'immersiveengineering:component_steel', // output
  ], '#forge:ingots/copper', [ // input.
  event.recipes.createCutting('kubejs:incomplete_component_steel', 'kubejs:incomplete_component_steel').processingTime(50),
  event.recipes.createDeploying('kubejs:incomplete_component_steel', ['kubejs:incomplete_component_steel', '#forge:plates/steel']),
  event.recipes.createDeploying('kubejs:incomplete_component_steel', ['kubejs:incomplete_component_steel', '#forge:plates/steel']),
  ]).transitionalItem('kubejs:incomplete_component_steel').loops(1) // transitional item and the loops

//Circuit Board
event.recipes.createSequencedAssembly([
'immersiveengineering:circuit_board', // output
  ], 'immersiveengineering:plate_duroplast', [ // input.
  event.recipes.createDeploying('kubejs:incomplete_circuit_board', ['kubejs:incomplete_circuit_board', '#forge:plates/copper']),
  ]).transitionalItem('kubejs:incomplete_circuit_board').loops(1) // transitional item and the loops

//Electronic Component
event.recipes.createSequencedAssembly([
'immersiveengineering:component_electronic', // output
  ], 'immersiveengineering:slab_treated_wood_packaged', [ // input.
  event.recipes.createDeploying('kubejs:incomplete_component_electronic', ['kubejs:incomplete_component_electronic', 'minecraft:quartz']),
  event.recipes.createDeploying('kubejs:incomplete_component_electronic', ['kubejs:incomplete_component_electronic', '#forge:dusts/redstone']),
  event.recipes.createDeploying('kubejs:incomplete_electron_tube', ['kubejs:incomplete_electron_tube', '#forge:wires/electrum']),
  ]).transitionalItem('kubejs:incomplete_component_electronic').loops(1) // transitional item and the loops

//Tube
event.recipes.createSequencedAssembly([
'3x immersiveengineering:electron_tube', // output
  ], '#forge:plates/nickel', [ // input.
  event.recipes.createDeploying('kubejs:incomplete_electron_tube', ['kubejs:incomplete_electron_tube', '#forge:wires/copper']),
  event.recipes.createDeploying('kubejs:incomplete_electron_tube', ['kubejs:incomplete_electron_tube', '#forge:glass/colorless']),
  event.recipes.createDeploying('kubejs:incomplete_electron_tube', ['kubejs:incomplete_electron_tube', '#forge:dusts/redstone']),
  ]).transitionalItem('kubejs:incomplete_electron_tube').loops(1) // transitional item and the loops

//Advanced Electronic Component
event.recipes.createSequencedAssembly([
'immersiveengineering:component_electronic_adv', // output
  ], 'immersiveengineering:plate_duroplast', [ // input.
  event.recipes.createDeploying('kubejs:incomplete_component_electronic_adv', ['kubejs:incomplete_component_electronic_adv', 'immersiveengineering:electron_tube']),
  event.recipes.createDeploying('kubejs:incomplete_component_electronic_adv', ['kubejs:incomplete_component_electronic_adv', '#forge:wires/aluminum']),
  ]).transitionalItem('kubejs:incomplete_component_electronic_adv').loops(2) // transitional item and the loops

//Light Bulb
event.recipes.createSequencedAssembly([
'3x immersiveengineering:light_bulb', // output
  ], '#forge:glass/colorless', [ // input.
  event.recipes.createDeploying('kubejs:incomplete_light_bulb', ['kubejs:incomplete_light_bulb', '#forge:wires/copper']),
  event.recipes.createDeploying('kubejs:incomplete_light_bulb', ['kubejs:incomplete_light_bulb', 'minecraft:paper']),
  event.recipes.createDeploying('kubejs:incomplete_light_bulb', ['kubejs:incomplete_light_bulb', 'minecraft:paper']),
  event.recipes.createDeploying('kubejs:incomplete_light_bulb', ['kubejs:incomplete_light_bulb', 'minecraft:paper']),
  ]).transitionalItem('kubejs:incomplete_light_bulb').loops(1) // transitional item and the loops






});