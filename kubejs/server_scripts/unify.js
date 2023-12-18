// priority: 0

settings.logAddedRecipes = false
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')


global.fluidsToRemove = [
	'createaddition:bioethanol',
	'createaddition:flowing_bioethanol',
	'immersiveengineering:ethanol',
	'createaddition:seed_oil',
	'createaddition:flowing_seed_oil',
	'immersiveengineering:plantoil',
	'thermal:creosote',
	'pneumaticcraft:biodiesel', //50,000 burn time
	'thermal:crude_oil',
	//'createbigcannons:molten_steel',
	//'createbigcannons:molten_bronze',
	'chemlib:sulfuric_acid_fluid',
	'chemlib:oxygen_fluid',
	'chemlib:hydrogen_fluid',
	//'industrialforegoing:essence',
	'sophisticatedcore:xp_still',
	'reliquary:xp_juice_still',
	'cofh_core:experience',
	//'tconstruct:molten_ender',
	//'industrialforegoing:latex',
	'thermal:latex',
]

var removeByName = [
	'mna:chainmail_chestplate',
	'mna:chainmail_helmet',
	'mna:chainmail_leggings',
	'mna:chainmail_boots',
	'minecraft:magma_cream',
	'quark:tweaks/crafting/utility/bent/paper',
	'mekanism:paper',
	'minecraft:sticky_piston',
	'beyond_earth:desh_plate',
	'allomancy:duralumin_ingot_from_alloying',
	'allomancy:nicrosil_ingot_from_alloying',
	'allomancy:bendalloy_ingot_from_alloying',
	'thermal:rockwool/white_rockwool_from_blasting',
	'malum:magma_cream_from_sapballs',
	'thermal:bottler_bucket',
	'minecraft:cut_sandstone',
	'immersiveengineering:crafting/stick_iron',
	'minecraft:beacon',
	'tconstruct:common/flint',
	'thermal:smelting/netherite_ingot_from_dust_blasting',
	'tconstruct:common/materials/netherite_ingot_from_nuggets',
	'minecraft:netherite_ingot',
	//'tconstruct:smeltery/melting/ender/pearl'
]

onEvent('recipes', event => {
	event.remove({input: 'enderstorage:ender_chest'})


	//latex
	event.replaceInput({}, 'thermal:latex_bucket', 'industrialforegoing:latex_bucket')
	
	//Dusts
	event.replaceOutput({}, 'mekanism:dust_sulfur', 'thermal:sulfur_dust')
	event.replaceOutput({}, 'mekanism:dust_quartz', 'thermal:quartz_dust')
	event.replaceOutput({}, 'mekanism:dust_gold', 'thermal:gold_dust')
	event.replaceOutput({}, 'mekanism:dust_netherite', 'thermal:netherite_dust')
	event.replaceOutput({}, 'ae2:ender_dust', 'thermal:ender_pearl_dust')

	//Diamond
	event.replaceOutput({}, 'createaddition:diamond_grit', 'thermal:diamond_dust')
	event.replaceOutput({}, 'mekanism:dust_diamond', 'thermal:diamond_dust')

	//Sawdust
	event.replaceOutput({}, 'mekanism:sawdust', 'thermal:sawdust')
	event.replaceOutput({}, 'immersiveengineering:dust_wood', 'thermal:sawdust')

	//Lapis
	event.replaceOutput({}, 'mekanism:dust_lapis_lazuli', 'thermal:lapis_dust')

	//Coal
	event.replaceOutput({}, 'mekanism:dust_coal', 'lazierae2:coal_dust')

	//Lithium Dust
	event.replaceOutput({}, 'mekanism:dust_lithium', 'chemlib:lithium_dust')
	
	//Electrum Block
	event.replaceOutput({}, 'immersiveengineering:storage_electrum', 'thermal:electrum_block')
	

	removeByName.forEach((item) => {
		event.remove({id: item})
	})
	
	global.removeAndHide.forEach((item) => {
		event.remove({output: item})
	})


	//Steel block crafting
	event.shaped(`#forge:storage_blocks/steel`, [
		'III',
		'III',
		'III'
	  ], {
		I: `#forge:ingots/steel`,
	  }).id('mbm2:crafting/steel_block')

	//centrifuge/experience_bottle
	event.remove({id: 'thermal:machines/centrifuge/centrifuge_experience_bottle'})
	  event.custom({
		"type": "thermal:centrifuge",
		"ingredient": {
		  "item": "minecraft:experience_bottle"
		},
		"result": [
		  {
			"item": "minecraft:glass_bottle"
		  },
		  {
			"fluid": "pneumaticcraft:memory_essence",
			"amount": 250
		  }
		],
		"energy": 400
	  }).id('mbm2:centrifuge/experience_bottle')
	  
	  //Ender Fluid Unify
	  //Endermen
	  event.custom({
		"type": "tconstruct:entity_melting",
		"entity": {
		  "types": [
			"minecraft:enderman",
			"minecraft:endermite",
			"minecraft:ender_dragon"
		  ]
		},
		"result": {
		  "fluid": "thermal:ender",
		  "amount": 25
		},
		"damage": 2
	  }).id('tconstruct:smeltery/entity_melting/ender')
	  //Ender Pearl
	  event.custom({
		"type": "tconstruct:melting",
		"ingredient": [
		  {
			"tag": "forge:ender_pearls"
		  },
		  {
			"item": "minecraft:ender_eye"
		  }
		],
		"result": {
		  "fluid": "thermal:ender",
		  "amount": 250
		},
		"temperature": 477,
		"time": 49
	  }).id('tconstruct:smeltery/melting/ender/pearl')
	  //Enderman Head
	  event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
		  "item": "tconstruct:enderman_head"
		},
		"result": {
		  "fluid": "thermal:ender",
		  "amount": 500
		},
		"temperature": 477,
		"time": 116
	  }).id('tconstruct:smeltery/entity_melting/heads/enderman')
	  //Dragon Head
	  event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
		  "item": "minecraft:dragon_head"
		},
		"result": {
		  "fluid": "thermal:ender",
		  "amount": 1000
		},
		"temperature": 477,
		"time": 164
	  }).id('tconstruct:smeltery/entity_melting/heads/ender_dragon')
	  //End Crystal
	  event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
		  "item": "minecraft:end_crystal"
		},
		"result": {
		  "fluid": "thermal:ender",
		  "amount": 250
		},
		"temperature": 477,
		"time": 82,
		"byproducts": [
		  {
			"fluid": "tconstruct:molten_glass",
			"amount": 7000
		  }
		]
	  }).id('tconstruct:smeltery/melting/ender/end_crystal')
	  //Ender Chest
	  event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
		  "item": "minecraft:ender_chest"
		},
		"result": {
		  "fluid": "tconstruct:molten_obsidian",
		  "amount": 8000
		},
		"temperature": 1000,
		"time": 332,
		"byproducts": [
		  {
			"fluid": "thermal:ender",
			"amount": 250
		  }
		]
	  }).id('tconstruct:smeltery/melting/obsidian/chest')
	  //End Tools
	  event.custom({
		"type": "tconstruct:material_melting",
		"input": "tconstruct:ender_pearl",
		"temperature": 477,
		"result": {
		  "fluid": "thermal:ender",
		  "amount": 250
		}
	  }).id('tconstruct:tools/materials/melting/ender_pearl')
	  

	  //Farmers Delight Unifie
	  event.custom({
		"conditions": [
		  {
			"type": "forge:mod_loaded",
			"modid": "immersiveengineering"
		  }
		],
		"type": "immersiveengineering:fermenter",
		"fluid": {
		  "fluid": "pneumaticcraft:ethanol",
		  "amount": 80
		},
		"input": {
		  "tag": "forge:crops/tomato"
		},
		"energy": 6400
	  }).id('farmersdelight:recipes/integration/immersiveengineering/fermenter/tomato')
	  event.custom({
		"conditions": [
		  {
			"type": "forge:mod_loaded",
			"modid": "immersiveengineering"
		  }
		],
		"type": "immersiveengineering:squeezer",
		"fluid": {
		  "fluid": "pneumaticcraft:vegetable_oil",
		  "amount": 80
		},
		"input": {
		  "item": "farmersdelight:cabbage_seeds"
		},
		"energy": 6400
	  }).id('farmersdelight:recipes/integration/immersiveengineering/squeezer/cabbage_seeds')
	  event.custom({
		"conditions": [
		  {
			"type": "forge:mod_loaded",
			"modid": "immersiveengineering"
		  }
		],
		"type": "immersiveengineering:squeezer",
		"fluid": {
		  "fluid": "pneumaticcraft:vegetable_oil",
		  "amount": 60
		},
		"input": {
		  "item": "farmersdelight:tomato_seeds"
		},
		"energy": 6400
	  }).id('farmersdelight:recipes/integration/immersiveengineering/squeezer/tomato_seeds')

	  //Fix latex
	  event.custom({
		"type": "thermal:tree_extractor",
		"trunk": "minecraft:jungle_log",
		"leaves": "minecraft:jungle_leaves",
		"result": {
		  "fluid": "industrialforegoing:latex",
		  "amount": 25
		}
	  }).id('thermal:devices/tree_extractor/tree_extractor_jungle')

})


onEvent('tags.items', event => {
	// Removes all tags from this entry
	global.removeAndHide.forEach((item) => {
		event.removeAllTagsFrom(item)
	})
	event.add(`forge:blocks/bronze`, 'thermal:bronze_block')
	event.add(`forge:blocks/steel`, 'immersiveengineering:storage_steel')
})


onEvent('tags.fluids', event => {
	//Makes fluids not fluidy
	event.removeAll('minecraft:water')
	event.add('minecraft:water', 'minecraft:water')
	event.add('minecraft:water', 'minecraft:flowing_water')

	global.fluidsToRemove.forEach((item) => {
		event.removeAllTagsFrom(item)
	})
})

