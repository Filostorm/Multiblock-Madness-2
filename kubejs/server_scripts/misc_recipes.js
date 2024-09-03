
onEvent('tags.items', event => {
	//debris tag for potion
	event.add(`mbm2:brewery_debris`, 'geolosys:ancient_debris_ore')
	event.add(`mbm2:brewery_debris`, 'minecraft:ancient_debris')
	event.add(`mbm2:brewery_debris`, 'geolosys:ancient_debris_ore_sample')

	//polonium subsitute tag
	event.add(`mbm2:polonium_subsitute`, 'mekanism:pellet_polonium')
	event.add(`mbm2:polonium_subsitute`, 'biggerreactors:blutonium_ingot')
	
	//Mahogany is lame
	event.add('forge:stripped_logs', 'hexerei:stripped_mahogany_log')
	event.add('minecraft:logs', 'hexerei:stripped_mahogany_log')
	event.add('minecraft:logs_that_burn', 'hexerei:stripped_mahogany_log')
	event.add('minecraft:logs_that_burn', 'hexerei:mahogany_log')

	//hull subsitute
	event.add(`mbm2:hull_subsitute`, 'quark:cobblestone_vertical_slab')
	event.add(`mbm2:hull_subsitute`, 'quark:stone_vertical_slab')
	event.add(`mbm2:hull_subsitute`, 'quark:smooth_stone_vertical_slab')

	//give coal it's own tag
	event.add(`mbm2:coal`, 'minecraft:coal')
	
 });

// Add the minecraft:axe tag to the mattocks (Thanks Totto!)
onEvent('block.tags', event => {
	event.add('tconstruct:mineable/mattock', '#minecraft:mineable/axe');
  });

onEvent('recipes', event => {

	//Slag Casing
	global.casingTable(event, 'tconstruct:casts/multi_use/gem', false, 'thermal:slag', 'forge:molten_slag', 250, 40, 'tconstruct:smeltery/casting/metal/slag/gem_gold_cast')
	global.casingTable(event, 'tconstruct:casts/single_use/gem', true, 'thermal:slag', 'forge:molten_slag', 250, 40, 'tconstruct:smeltery/casting/metal/slag/gem_sand_cast')
  
	//Block Casing
	global.casingBasin(event, 'thermal:slag_block', 'forge:molten_slag', 1000, 120, 'tconstruct:smeltery/casting/metal/slag/block')

  	//Sheetmetal Cast
	global.casingBasinCast(event, 'forge:sheetmetals', true, 'kubejs:sheetmetal_cast', 'forge:molten_steel', 180, 200, 'tconstruct:smeltery/casting/sheetmetal_cast')



//Chests
/* need to figure out how to add a plank recipe for every non quark chest material type
event.remove({input: '#minecraft:logs', output: '#forge:chests'})
event.shaped('4x minecraft:chest', [
	'PPP',
	'P P',
	'PPP'
  ], {
	P: '#minecraft:logs',
  }).id("mbm2:log_chest")
*/
event.remove({input: '#minecraft:planks', output: '#forge:chests'})
  event.shaped('minecraft:chest', [
	'PPP',
	'P P',
	'PPP'
  ], {
	P: '#minecraft:planks',
  }).id("mbm2:plank_chest")

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
		F: 'minecraft:enchanting_table'
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
	//Sticky Piston
	let glue = Item.of('create:super_glue').ignoreNBT()
	event.shapeless(`sticky_piston`, [glue,'piston']).id(`mbm2:super_sticky_piston`).damageIngredient(glue).keepIngredient(glue)
  
	//So, you made an extra Metal Mind
	//global.tinkersMeltingPlain(event, 'tconstruct:molten_iron', 720, Item.of('feruchemy:metal_mind').toJson(), 750, 142, `mbm2:smeltery/melting/metalmind`)

	//string from cobweb
	event.shapeless('3x string', ['cobweb']).id('mbm2:string_from_cobweb')

	let compressedBlocks = [ // only vanilla items with this script right now
		'cobblestone',
		'cobbled_deepslate',
		'netherrack',
	]
  //compressed crafintg
  compressedBlocks.forEach(block => {
	
	event.shaped(`kubejs:1x_compressed_${block}`, [
		`CCC`,
		`CCC`,
		`CCC`
	  ], {
		C: `${block}`
	  }).id(`mbm2:1x_compressed_${block}`)
	  event.shapeless(`9x ${block}`, [`kubejs:1x_compressed_${block}`]).id(`mbm2:1x_uncompressed_${block}`)
	  event.shaped(`kubejs:2x_compressed_${block}`, [
		  `CCC`,
		  `CCC`,
		  `CCC`
		], {
		  C: `kubejs:1x_compressed_${block}`
	  }).id(`mbm2:2x_compressed_${block}`)
	  event.shapeless(`9x kubejs:1x_compressed_${block}`, [`kubejs:2x_compressed_${block}`]).id(`mbm2:2x_uncompressed_${block}`)
		event.shaped(`kubejs:3x_compressed_${block}`, [
		  `CCC`,
		  `CCC`,
		  `CCC`
		], {
		  C: `kubejs:2x_compressed_${block}`
		}).id(`mbm2:3x_compressed_${block}`)
	  event.shapeless(`9x kubejs:2x_compressed_${block}`, [`kubejs:3x_compressed_${block}`]).id(`mbm2:3x_uncompressed_${block}`)
  
  });
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
  ], 'forbidden_arcanus:obsidian_ingot', [ // input.
  event.recipes.createDeploying('kubejs:incomplete_titanium_plated_obsidian', ['kubejs:incomplete_titanium_plated_obsidian', '#forge:sheets/titanium']),
  event.recipes.createDeploying('kubejs:incomplete_titanium_plated_obsidian', ['kubejs:incomplete_titanium_plated_obsidian', '#forge:sheets/titanium']),
  event.recipes.createPressing('kubejs:incomplete_titanium_plated_obsidian', ['kubejs:incomplete_titanium_plated_obsidian']),
  ]).transitionalItem('kubejs:incomplete_titanium_plated_obsidian').loops(2).id('mbm2:titanium_plated_obsidian');


  //Ender Tank and Ender Chest
  event.remove({id: 'enderstorage:ender_chest'})
  event.remove({id: 'enderstorage:ender_tank'})
  event.shaped('enderstorage:ender_chest', ['ABA','CDC','AEA'], {A: 'extendedcrafting:ender_ingot',B: 'tconstruct:enderman_head',C: 'kubejs:titanium_plated_obsidian',D: 'cloudstorage:static_cloud_chest',E: 'minecraft:ender_pearl'}).id('mbm2:ender_chest')
  event.shaped('enderstorage:ender_tank', ['ABA','CDC','AEA'], {A: 'extendedcrafting:ender_ingot',B: 'tconstruct:enderman_head',C: 'kubejs:titanium_plated_obsidian',D: 'beyond_earth:steel_tank',E: 'minecraft:ender_pearl'}).id('mbm2:ender_tank');


  //Chunkloader Upgrade
  event.shaped(Item.of('compactmachines:chunkloader_upgrade', '{upgrade_info:{key:"compactmachines:chunkloader"}}'), ['ABA','BCB','ABA'], {A: 'compactmachines:wall',B: 'compactcrafting:field_projector',C: 'compactmachines:personal_shrinking_device'}).id('mbm2:chunkloader_upgrade')

 //PenumaticCraft GPS Clearing Recipe
  event.shapeless('pneumaticcraft:gps_tool', ['pneumaticcraft:gps_tool']).id('mbm2:gps_clearing')

 //Furnace conversion
  event.shapeless('minecraft:furnace', ['quark:deepslate_furnace']).id('mbm2:furnaceconversion')

//thermalcell fix
  event.remove({id: 'thermal:fluid_cell'})
  event.shaped(Item.of('thermal:fluid_cell', '{BlockEntityTag:{TankInv:[{Amount:0,Capacity:32000,FluidName:"minecraft:empty",Tank:0b}]}}'), ['ABA','CDC','AEA'], {A: 'thermal:cured_rubber',B: '#thermal:glass/hardened',C: 'minecraft:iron_ingot',D: 'thermal:fluid_cell_frame',E: 'thermal:redstone_servo'}).id('mbm2:fluidcellfix')


  //Swap scraps for stacked iron/steel plating
  event.recipes.createSequencedAssembly([ // start the recipe
  'kubejs:bolt_mold', // have this item be an output
  ], Item.of('#forge:storage_blocks/compressed_steel'), [ // input.
  event.recipes.createPressing('kubejs:blank_mold', ['kubejs:blank_mold']),
  event.recipes.createFilling('kubejs:blank_mold', ['kubejs:blank_mold', Fluid.of('lava', 1000)]),
  event.recipes.createDeploying('kubejs:blank_mold', ['kubejs:blank_mold', '#forge:bolts']),
  event.recipes.createPressing('kubejs:blank_mold', ['kubejs:blank_mold']),
  ]).transitionalItem('kubejs:blank_mold').loops(1).id(`mbm2:bolt_mold`)

//Char/Coal Chunks
  event.shapeless('8x kubejs:charcoal_chunk', ['charcoal']).id('mbm2:charcoal_chunk_crafting')
  event.shapeless('charcoal', ['8x kubejs:charcoal_chunk']).id('mbm2:charcoal_chunk_uncrafting')

  event.shapeless('8x kubejs:coal_chunk', ['coal']).id('mbm2:coal_chunk_crafting')
  event.shapeless('coal', ['8x kubejs:coal_chunk']).id('mbm2:coal_chunk_uncrafting')

 //lerasium nugget requires arcane gold
//event.replaceInput({id: 'allomancy:lerasium_nugget'}, '#forge:storage_blocks/gold', 'forbidden_arcanus:arcane_gold_block')


//Static Cloud
  global.powahEnergizing(event, [Item.of('cloudstorage:cloud').toJson()], Item.of('cloudstorage:static_cloud'), 25000, 'mbm2:cloudstorage/static_cloud')

//Arcane Sand
  event.shapeless('8x kubejs:arcane_sand', ['forbidden_arcanus:arcane_crystal_dust_speck', '#forge:sand', '#forge:sand', '#forge:sand', '#forge:sand', '#forge:sand', '#forge:sand', '#forge:sand', '#forge:sand']).id('mbm2:arcane_sand')

//Sink
    event.remove({output: 'cookingforblockheads:sink'})
    global.compactCrafting(event, 'cookingforblockheads:sink', 1, 'reliquary:emperor_chalice',
    3, [
      {
        type: 'compactcrafting:mixed',
          pattern: [
              ['L', 'S','S'],
              ['L', '','S'],
              ['L', 'S','S']
          ]
      },
      {
          type: 'compactcrafting:mixed',
          pattern: [
              ['C', 'C','C'],
              ['C', 'A','C'],
              ['C', 'C','C']
          ]
      },
      {  type: 'compactcrafting:mixed',
          pattern: [
              ['C', 'C','C'],
              ['C', 'C','C'],
              ['C', 'C','C']
          ]
      },
      ], {
		'S': {
        type: 'compactcrafting:block',
        block: 'create:polished_cut_andesite_slab'
      },
      'C': {
        type: 'compactcrafting:block',
        block: 'minecraft:copper_block'
      },
      'A': {
        type: 'compactcrafting:block',
        block: 'thermal:device_water_gen'
      },
      'L': {
        type: 'compactcrafting:block',
        block: 'create:polished_cut_andesite_stairs'
      }
    },  'mbm2:sink')
	
//simplified repeaters/comparators
  event.shaped('minecraft:repeater', ['ABA','CCC'], {A: 'minecraft:redstone_torch',B: 'minecraft:redstone',C: 'projectred_core:plate'}).id('mbm2:stone_plate_repeater')
  event.shaped('minecraft:repeater', ['A A','BAB','CCC'], {A: 'minecraft:redstone',B: 'minecraft:stick',C: 'projectred_core:plate'}).id('mbm2:stone_plate_repeater_alt')
  event.shaped('minecraft:comparator', [' A ','ABA','CCC'], {A: 'minecraft:redstone_torch',B: 'minecraft:quartz',C: 'projectred_core:plate'}).id('mbm2:stone_plate_comparator')

//Flowers Begone (AKA: Azalea Shearing)
  event.shapeless('ecologics:azalea_log', ['ecologics:flowering_azalea_log', '#forge:shears']).damageIngredient('#forge:shears', 1).id('mbm2:remove_azalea_flowers')
  event.custom({
	"type": "farmersdelight:cutting",
	"ingredients": [
	  {
		"item": "ecologics:flowering_azalea_log"
	  }
	],
	"tool": {
	  "tag": "forge:shears"
	},
	"result": [
	  {
		"item": "ecologics:azalea_log"
	  },
	  {
		"item": "ecologics:azalea_flower",
		"chance": 0.5
	  },
	  {
		"item": "ecologics:azalea_flower",
		"chance": 0.25
	  }
	]
  }).id('mbm2:cutting/remove_azalea_flowers')

//Darkutils Tome of enchanting
  event.shaped('darkutils:tome_enchanting', [' A ','BCB',' D '], {A: 'ars_nouveau:bookwyrm_charm',B: 'create:experience_nugget',C: 'tombstone:book_of_disenchantment',D: 'thermal:xp_crystal'}).id('mbm2:darkutil_enchant_tome')


  //Travel Anchor
	event.remove({output: 'travel_anchors:travel_anchor'})
  	event.shaped('travel_anchors:travel_anchor', [
		'CIC',
		'IFI',
		'CIC'
	 ], {
		F: 'extendedcrafting:frame',
		C: '#forge:platings/steel',
		I: 'extendedcrafting:ender_ingot',
	 }).id("mbm2:travel_anchor")  

	 //Molten Core
	 event.shaped('4x reliquary:molten_core', [
		'BBB',
		'BRB',
		'BBB'
	  ], {
		R: 'ars_nouveau:ritual_awakening',
		B: 'minecraft:blaze_powder',
	  }).id("mbm2:crafting/molten_core")
	  global.tinkersMeltingPlain(event, 'tconstruct:blazing_blood', 250, Ingredient.of('reliquary:molten_core').toJson(), 900, 240, `mbm2:smeltery/melting/molten_core`)

//Rabbit Hide from Leather
global.naturesauraAltar(event, '4x minecraft:rabbit_hide', 'minecraft:leather', 'naturesaura:conversion_catalyst', 'overworld', 5000, 80, 'mbm2:conversion/rabbit_hide')

//Glow Goop alt recipe
global.arsEnchantment(event, Item.of('naturalist:glow_goop'), Item.of('minecraft:slime_ball'), [Item.of('minecraft:glow_berries'), Item.of('minecraft:glow_berries')], 0, 'mbm2:glow_goop_alt')

//Ruby and Sapphire block fix
event.shaped('#forge:storage_blocks/ruby', ['AAA','AAA','AAA'], {A: '#forge:gems/ruby'}).id("mbm2:crafting/ruby_block")
event.shaped('#forge:storage_blocks/sapphire', ['AAA','AAA','AAA'], {A: '#forge:gems/sapphire'}).id("mbm2:crafting/sapphire_block")
event.shapeless('9x #forge:gems/ruby', ['#forge:storage_blocks/ruby']).id("mbm2:crafting/ruby_block_to_ruby")
event.shapeless('9x #forge:gems/sapphire', ['#forge:storage_blocks/sapphire']).id("mbm2:crafting/sapphire_block_to_sapphire")

//Gem Dust
	global.ieCrusher(event, 
		{"count":1,"base_ingredient":Item.of(`kubejs:crystal_slag`).toJson()}, //Output
		[{chance: 0.25, output: Item.of('#forge:gems/amethyst').toJson()}, {'chance': 0.05, 'output': Item.of('apotheosis:gem_dust').toJson()}],
		{"item":`ars_nouveau:source_gem`}, //Input
		6000, `mbm2:crushing/gem_dust_from_source_gem`)

		// Modular Rourters
		event.remove({output: '2x modularrouters:modular_router'})
		event.shaped('2x modularrouters:modular_router', ['ABC','BDB','CBA'], {A: 'thermal:redstone_servo',B: 'botania:livingrock',C: 'kubejs:tier_2_mechanical_alloy_robot_arm',D: 'kubejs:titanium_scaffolding'}).id("mbm2:crafting/modular_router")
		event.remove({output: 'modularrouters:blank_module'})
		event.shaped('modularrouters:blank_module', [' A ','BCB','DED'], {A: 'extendedcrafting:black_iron_slate',B: 'solarflux:blank_upgrade',C: 'kubejs:mana_diamond_dust',D: 'kubejs:tier_2_electrical_alloy_spool',E: 'pneumaticcraft:programming_puzzle'}).id("mbm2:crafting/blank_module")
		event.remove({output: 'modularrouters:blank_upgrade'})
		event.shaped('modularrouters:blank_upgrade', ['ABC','DEB',' DA'], {A: 'kubejs:tier_2_electrical_alloy_spool',B: 'solarflux:blank_upgrade',C: 'compressedcreativity:brass_coated_upgrade_matrix',D: 'extendedcrafting:black_iron_slate',E: 'kubejs:mana_diamond_dust'}).id("mbm2:crafting/blank_upgrade")
	
	//Nether Scrap
	event.custom({
		"type": "thermal:centrifuge",
		"ingredient": {
		  "item": "minecraft:lava_bucket"
		},
		"result": [
		  {
			"item": 'minecraft:basalt',
			"chance": 0.50
		  },
		  {
			"item": 'minecraft:obsidian',
			"chance": 0.25
		  },
		  {
			"item": 'kubejs:fragment_kharaxium',
			"chance": 0.20
		  },
		  {
			"item": 'minecraft:netherite_scrap',
			"chance": 0.05
		  },
		  {
			"fluid": 'kubejs:enriched_lava',
			"amount": 10
		  }
		],
		"energy": 20000
	  }).id('mbm2:centrifuge/netherite_scrap_automatable')
	
	//Dragon's Breath
	event.custom({
		"type": "thermal:centrifuge",
		"ingredient": {
		  "item": "minecraft:dragon_breath"
		},
		"result": [
		  {
			"item": 'quark:clear_shard',
		  },
		  {
			"fluid": 'kubejs:liquid_dragon_breath',
			"amount": 250
		  }
		],
		"energy": 20000
	  }).id('mbm2:centrifuge/dragon_breath')
	
		
});
