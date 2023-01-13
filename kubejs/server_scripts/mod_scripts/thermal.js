
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
	C: '#forge:glass',
	D: 'thermal:redstone_servo',
	E: 'minecraft:bucket'
  }).id("mbm2:device_tree_extractor")

// [| RF Furnace |] //
event.remove({output: 'thermal:machine_furnace'})
event.shaped('thermal:machine_furnace', [
	'ABA',
	'CDC',
	'EFE'
  ], {
	A: Item.empty,
	B: 'minecraft:redstone',
	C: 'minecraft:bricks',
	D: 'kubejs:bronze_frame',
	E: '#forge:gears/copper',
	F: 'kubejs:silver_coil'
  }).id("mbm2:machine_furnace")

// [| Crafter |] //
event.remove({output: 'thermal:machine_crafter'})
event.shaped('thermal:machine_crafter', [
	'ABA',
	'CDC',
	'EFE'
  ], {
	A: Item.empty,
	B: 'minecraft:crafting_table',
	C: 'thermal:tin_ingot',
	D: 'kubejs:bronze_frame',
	E: '#forge:gears/copper',
	F: 'kubejs:silver_coil'
  }).id("mbm2:machine_crafter")

// [| Chiller |] //
event.remove({output: 'thermal:machine_chiller'})
event.shaped('thermal:machine_chiller', [
	'ABA',
	'CDC',
	'EFE'
  ], {
	A: Item.empty,
	B: '#forge:glass',
	C: 'minecraft:packed_ice',
	D: 'kubejs:bronze_frame',
	E: '#forge:gears/invar',
	F: 'kubejs:silver_coil'
  }).id("mbm2:machine_chiller")

// [| Melter |] //
event.remove({output: 'thermal:machine_crucible'})
event.shaped('thermal:machine_crucible', [
	'ABA',
	'CDC',
	'EFE'
  ], {
	A: Item.empty,
	B: '#forge:glass',
	C: 'minecraft:nether_bricks',
	D: 'kubejs:bronze_frame',
	E: '#forge:gears/invar',
	F: 'kubejs:silver_coil'
  }).id("mbm2:machine_crucible")

// [| Press |] //
event.remove({output: 'thermal:machine_press'})
event.shaped('thermal:machine_press', [
	'ABA',
	'CDC',
	'EFE'
  ], {
	A: Item.empty,
	B: 'minecraft:iron_block',
	C: '#forge:ingots/bronze',
	D: 'kubejs:bronze_frame',
	E: 'thermal:constantan_gear',
	F: 'kubejs:silver_coil'
  }).id('mbm2:machine_press')

// [| Press |] //
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
	E: '#forge:gears/constantan',
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
  })

  // T1 Upgrade//
  event.remove({id: 'thermal:augments/upgrade_augment_1'})
  event.shaped('thermal:upgrade_augment_1', [
	  'ICI',
	  'RGR',
	  'ICI'
	], {
	  I: '#forge:ingots/invar',
	  C: 'create:framed_glass',
	  R: 'minecraft:redstone',
	  G: 'kubejs:energized_steel_gear',
	}).id('kubejs:machine_press')

 // Latex
 event.recipes.thermal.chiller('thermal:rubber', [Fluid.of('thermal:latex', 250), 'thermal:chiller_ball_cast'])
 event.recipes.thermal.chiller('thermal:rubber_block', [Fluid.of('thermal:latex', 1000)])
    
 //Magma
 event.recipes.thermal.crucible(Fluid.of('tconstruct:magma', 250), 'minecraft:magma_cream').id(`mbm2:magma_from_ball`)

 ///////////////////// Elemental Stuff /////////////////
 
 //Temp Recipes
 event.shapeless(`kubejs:petrotheum_dust`, ['thermal:basalz_powder', '#forge:dusts/coal_coke']).id(`mbm2:petrotheum_dust`)
 event.shapeless(`kubejs:cryotheum_dust`, ['thermal:blizz_powder', 'snowball']).id(`mbm2:cryotheum_dust`)
 event.shapeless(`kubejs:pyrotheum_dust`, ['minecraft:blaze_powder', 'create:cinder_flour']).id(`mbm2:pyrotheum_dust`)
 event.shapeless(`kubejs:aerotheum_dust`, ['thermal:blitz_powder', 'cloudstorage:cloud']).id(`mbm2:aerotheum_dust`)

event.recipes.thermal.crucible(Fluid.of(`kubejs:blazing_pyrotheum`, 250), `kubejs:pyrotheum_dust`).id(`mbm2:crucible/pyrotheum`)
event.recipes.thermal.crucible(Fluid.of(`kubejs:gelid_cryotheum`, 250), `kubejs:cryotheum_dust`).id(`mbm2:crucible/cryotheum`)
event.recipes.thermal.crucible(Fluid.of(`kubejs:zephyrean_aerotheum`, 250), `kubejs:aerotheum_dust`).id(`mbm2:crucible/aerotheum`)
event.recipes.thermal.crucible(Fluid.of(`kubejs:tectonic_petrotheum`, 250), `kubejs:petrotheum_dust`).id(`mbm2:crucible/petrotheum`)



//Meelt that metal down bruh
var partAmounts = {
	'ingot':90,
	'plate':90,
	'gear':360,
	'rod':45,
	'wire':45,
	'nugget':10,
	'coin':30,
}
global.newMaterialParts.forEach((item) => {
	if (item.fluid_id != null) {
		for (var part in partAmounts) {
			if (Item.of(`#forge:${part}s/${item.material}`) != null) {
 				event.recipes.thermal.crucible(Fluid.of(item.fluid_id, partAmounts[part]), `#forge:${part}s/${item.material}`).id(`mbm2:crucible/${item.material}_${part}`)
			}
		}
	}
})
});

