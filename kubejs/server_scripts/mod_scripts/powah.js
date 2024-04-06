
var basicGens = [
  'powah:furnator_basic', 
  'powah:magmator_basic', 
  'powah:thermo_generator_basic', 
  //'powah:solar_panel_basic'
]

onEvent('tags.items', event => {
  basicGens.forEach(gen => {
  	event.add('powah:generator/basic', gen)
  });
  
	event.add(`forge:ingots`, `powah:steel_energized`)
	event.add(`forge:ingots/energized_steel`, `powah:steel_energized`)
	event.add(`forge:storage_blocks`, 'powah:energized_steel_block')
	event.add(`forge:storage_blocks/energized_steel`, 'powah:energized_steel_block')

	event.add(`forge:rods`, 'powah:dielectric_rod')
	event.add(`forge:rods`, 'powah:dielectric_rod_horizontal')
	event.add(`forge:rods/dielectric_alloy`, 'powah:dielectric_rod')
	event.add(`forge:rods/dielectric_alloy`, 'powah:dielectric_rod_horizontal')
  
	event.add(`forge:gems`, 'powah:uraninite')
	event.add(`forge:gems/uraninite`, 'powah:uraninite')
  

})

onEvent('recipes', event => {
	
  //Rods are Rods now
  event.remove({id: 'powah:crafting/dielectric_rod'})
  event.remove({id: 'powah:crafting/dielectric_rod_h'})
  event.remove({id: 'powah:crafting/dielectric_casing'})

  //Uranium only
  event.remove({id: 'powah:energizing/uraninite_from_raw'})
  event.remove({id: 'powah:energizing/uraninite_from_ore'})
  event.remove({id: 'powah:energizing/uraninite_from_ore_dense'})
  event.remove({id: 'powah:energizing/uraninite_from_ore_poor'})
  
  
  

	//Dielectric Casing
  event.shaped('powah:dielectric_casing', [
    'SPS',
    'S S',
    'SPS'
    ], {
    S: 'kubejs:dielectric_alloy_scaffolding',
    P: '#forge:platings/tier_1_structural_alloy'
    }).id(`mbm2:dielectric_casing`)
    
  
	global.compactCrafting(event, 'powah:dielectric_casing', 2, 'createaddition:gold_spool',
	3, [
	  {
		  type: 'compactcrafting:mixed',
		  pattern: [
			  ['S', 'D','S'],
			  ['D', '-','D'],
			  ['S', 'D','S']
		  ]
	  },
	  {
		  type: 'compactcrafting:mixed',
		  pattern: [
			  ['D', '-','D'],
			  ['-', '-','-'],
			  ['D', '-','D']
		  ]
	  },
	  {
		  type: 'compactcrafting:mixed',
		  pattern: [
			  ['S', 'D','S'],
			  ['D', '-','D'],
			  ['S', 'D','S']
		  ]
	  },
	  ], {
	  'S': {
		type: 'compactcrafting:block',
		block: 'kubejs:tier_1_structural_alloy_sheetmetal'
	  },
	  'D': {
		type: 'compactcrafting:block',
		block: 'kubejs:dielectric_alloy_scaffolding'
	  }
	},  'mbm2:dielectric_casing_2x')
	





  event.remove({id: 'powah:crafting/capacitor_basic_tiny'})
  event.shaped('2x powah:capacitor_basic_tiny', [
	'  C',
	' I ',
	'C  '
  ], {
	C: 'powah:dielectric_paste',
	I: '#forge:ingots/tin'
  }).id(`mbd2:crafting/capacitor_basic_tiny`)
  
  
  

  //Basic Capacitor
  event.remove({id: 'powah:crafting/capacitor_basic'})
  event.recipes.createSequencedAssembly([ // start the recipe
'powah:capacitor_basic', // have this item be an output
  ], '#forge:ingots/iron', [ // input.
  event.recipes.createDeploying('kubejs:incomplete_basic_capacitor', ['kubejs:incomplete_basic_capacitor', 'powah:dielectric_paste']),
  event.recipes.createDeploying('kubejs:incomplete_basic_capacitor', ['kubejs:incomplete_basic_capacitor', '#forge:dusts/redstone']),
  event.recipes.createDeploying('kubejs:incomplete_basic_capacitor', ['kubejs:incomplete_basic_capacitor', '#forge:dusts/redstone']),
  ]).transitionalItem('kubejs:incomplete_basic_capacitor').loops(2).id(`mbd2:sequenced_assembly/capacitor_basic`)

  global.ieBlueprint(event, 'components', Item.of(`2x powah:capacitor_basic`), [{tag: 'forge:rods/invar'}, {tag: 'forge:wires/red_alloy'}, {count:2, base_ingredient: {item: `powah:dielectric_paste`}}], `mbm2:immersive/capacitor_basic`)

//Paste
  event.remove({output: 'powah:dielectric_paste'})
	event.recipes.createMixing('8x powah:dielectric_paste', ['#minecraft:coals','#forge:clay', Fluid.of('minecraft:lava', 250)]).id(`mbd2:mixing/dielectric_paste`)
	event.recipes.createMixing('8x powah:dielectric_paste', ['#minecraft:coals','#forge:clay']).heated().id(`mbd2:mixing/dielectric_paste_heated`)


///////////////// Starter tier no longer exsists //////////////////////
  event.remove({id: 'powah:crafting/cable_basic'})
  event.remove({id: 'powah:crafting/energy_cell_basic_2'})

// [| energy_hopper_basic |] //
event.shaped('powah:energy_hopper_basic', [
  'AAA',
'BCB',
'ADA'
  ], {
  A: 'powah:dielectric_paste',
B: 'powah:capacitor_basic',
C: 'powah:dielectric_casing',
D: 'minecraft:hopper'
  }).id("powah:crafting/energy_hopper_basic")

// [| player_transmitter_basic |] //
event.shaped('powah:player_transmitter_basic', [
  ' B ',
  'CDC',
  ' E '
  ], {
B: 'powah:player_aerial_pearl',
C: 'powah:capacitor_basic',
D: 'powah:dielectric_casing',
E: 'powah:dielectric_rod'
  }).id("powah:crafting/player_tranmitter_basic")

// [| reactor_basic |] //
event.shaped('4x powah:reactor_basic', [
  'ABA',
'BCB',
'ABA'
  ], {
  A: 'powah:uraninite',
B: 'powah:capacitor_basic',
C: 'powah:dielectric_casing'
  }).id("powah:crafting/reactor_basic")
/*
// [| solar_panel_basic |] //
event.shaped('powah:solar_panel_basic', [
  'AAA',
'BCB',
'DDD'
  ], {
  A: 'powah:photoelectric_pane',
B: 'powah:capacitor_basic',
C: 'powah:dielectric_casing',
D: 'minecraft:iron_ingot'
  }).id("powah:crafting/solar_panel_basic")
*/

// [| battery_basic |] //
event.shaped('powah:battery_basic', [
  'ABA',
'BCB',
'ABA'
  ], {
  A: 'powah:dielectric_paste',
B: 'powah:capacitor_basic_large',
C: 'minecraft:redstone_block'
  }).id("powah:crafting/battery_basic")

// [| energizing_rod_basic |] //
event.shaped('powah:energizing_rod_basic', [
  'ABA',
'CDC',
'AEA'
  ], {
  A: Item.empty,
B: '#forge:storage_blocks/quartz',
C: 'powah:capacitor_basic',
D: 'powah:dielectric_casing',
E: 'powah:dielectric_rod'
  }).id("powah:crafting/energizing_rod_basic")

  
//Blazing Redstone
	event.recipes.createMixing('kubejs:blazing_redstone', ['minecraft:blaze_powder','#forge:dusts/redstone']).id(`mbd2:create/mixing/blazing_redstone`)
  event.recipes.multiblocked.multiblock('mixer')
    .inputItems('minecraft:blaze_powder','#forge:dusts/redstone')
    .outputItem(`kubejs:blazing_redstone`)
    .setPerTick(true)
    .inputFE(500)
    .duration(100)

  //Thermoelectric Plate
  event.remove({id: 'powah:crafting/thermoelectric_plate'})
  event.shaped('powah:thermoelectric_plate', [
	'RCR',
	'CGC',
	'RCR'
  ], {
    C: 'powah:capacitor_basic_tiny',
    G: '#forge:gears/dielectric_alloy',
	  R: 'kubejs:blazing_redstone'
  }).id(`mbm2:crafting/thermoelectric_plate`)
  

let powahToSwap = [
'powah:energy_cell_basic',
'powah:furnator_basic',
//'powah:magmator_basic',
//'powah:thermo_generator_basic',
'powah:energy_cable_basic',
]

  //Swap Basic Inputs with electrical alloy
powahToSwap.forEach(machine => {
  event.replaceInput({output: machine}, '#forge:ingots/iron', '#forge:plates/tier_1_electrical_alloy')
});
  
event.replaceInput({id: 'powah:energizing/energized_steel'}, '#forge:ingots/iron', '#forge:ingots/steel')

//Energized Steel Block
global.powahEnergizing(event, [Item.of('#forge:storage_blocks/steel').toJson(), Item.of('#forge:storage_blocks/gold').toJson()],'powah:energized_steel_block',2, 90000, 'mbm2:powah/energized_steel_block')

// [| magmator_basic |] //
event.shaped('powah:magmator_basic', [
  'AAA',
'BCB',
'ADA'
  ], {
  A: '#forge:plates/tier_1_electrical_alloy',
B: 'powah:capacitor_basic',
C: 'powah:dielectric_casing',
D: 'minecraft:bucket'
  }).id("mbm2:crafting/magmator_basic")


// [| thermo_generator_basic |] //
event.shaped('powah:thermo_generator_basic', [
  'ABA',
'CDC',
'EEE'
  ], {
  A: 'powah:dielectric_paste',
B: '#forge:plates/tier_1_electrical_alloy',
C: 'powah:capacitor_basic',
D: 'powah:dielectric_casing',
E: 'powah:thermoelectric_plate'
  }).id("mbm2:crafting/thermo_generator_basic")

// [| furnator_basic |] //
event.shaped('powah:furnator_basic', [
  'AAA',
'BCB',
'ADA'
  ], {
  A: '#forge:plates/tier_1_electrical_alloy',
B: 'powah:capacitor_basic',
C: 'powah:dielectric_casing',
D: 'minecraft:furnace'
  }).id("mbm2:crafting/furnator_basic")

  //tiered crystals
    //Blazing Crystal
    event.remove({id: 'powah:energizing/blazing_crystal_2'})
    event.remove({id: 'powah:energizing/blazing_crystal'})
    global.powahEnergizing(event, [Item.of('solarflux:blazing_coating').toJson(), Item.of('reliquary:molten_core').toJson(), Item.of('botania:quartz_blaze').toJson()], 'powah:crystal_blazing', 1,  120000, 'mbm2:powah/blazing_crystal')

    //Niotic Crystal
    event.remove({id: 'powah:energizing/niotic_crystal'})
    global.powahEnergizing(event, [Item.of('#forge:sprockets/tier_1_magical_alloy').toJson(), Item.of('kubejs:titanium_plated_obsidian').toJson(), Item.of('elementalcraft:springaline_shard').toJson(), Item.of('tconstruct:slimesteel_ingot').toJson()], 'powah:crystal_niotic', 1,  300000, 'mbm2:powah/niotic_crystal')

    //Spirited Crystal
    event.remove({id: 'powah:energizing/spirited_crystal'})
    global.powahEnergizing(event, [Item.of('naturesaura:calling_spirit').toJson(), Item.of('forbidden_arcanus:dark_soul').toJson(), Item.of('kubejs:spirited_brick').toJson(), Item.of('tconstruct:soulsteel_ingot').toJson(), Item.of('lazierae2:resonating_crystal').toJson()], 'powah:crystal_spirited', 1,  1000000, 'mbm2:powah/spirited_crystal')

    //Nitro Crystal
    event.remove({id: 'powah:energizing/nitro_crystal'})
    global.powahEnergizing(event, [Item.of('powah:spirited_crystal_block').toJson(), Item.of('powah:niotic_crystal_block').toJson(), Item.of('powah:blazing_crystal_block').toJson(), Item.of('kubejs:wixie_shard_block').toJson(), Item.of('kubejs:lithium_plating').toJson(), Item.of('beyond_earth:calorite_block').toJson()], 'powah:nitro_crystal_block', 20000000, 1,  'mbm2:powah/nitro_crystal')



// [| energizing_rod_basic |] //
event.remove({id: 'powah:crafting/energizing_rod_basic'})
event.shaped('powah:energizing_rod_basic', [
  ' A ',
  'BCB',
  ' R '
  ], {
  A: '#forge:storage_blocks/quartz',
  B: '#forge:spools/tier_1_electrical_alloy',
  C: 'powah:capacitor_basic_large',
  R: 'powah:dielectric_rod'
  }).id("mbm2:crafting/energizing_rod_basic")
    
});
