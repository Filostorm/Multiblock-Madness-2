/*

onEvent('tags.items', event => {
	event.add(`forge:ingots`, `naturesaura:tainted_gold`)
	 event.remove(`create:crushed_ores/${item}`, `kubejs:crushed_${item}`)
 });
 */
onEvent('recipes', event => {
	//Casing
	global.elementalcraftBinding(event, 'earth', 2500, 'kubejs:captured_soul', [Item.of('spirit:soul_crystal_shard').toJson(), Item.of('forbidden_arcanus:soul').toJson(), Item.of('apotheosis:gem_dust').toJson(), Item.of('forbidden_arcanus:aureal_bottle').toJson()], 'mbm2:captured_soul')
  
	event.shaped('kubejs:haunted_casing', [
		'RPR',
		'PSP',
		'RPR'
		], {
		P: 'tconstruct:obsidian_pane',
		R: '#forge:rods/soulsteel',
		S: 'kubejs:captured_soul',
		}).id(`mbm2:haunted_casing`)
	
	event.recipes.tconstruct.casting_basin('kubejs:hostile_casing', 'tconstruct:blood', 500).cast('kubejs:haunted_casing').consumeCast().coolingTime(250).id(`mbm2:casting/hostile_casing`)

	//Sim chamber
	event.remove({output: 'hostilenetworks:sim_chamber'})
	event.shaped('hostilenetworks:sim_chamber', [
	  'CEC',
	  'PHG',
	  'DDD'
	  ], {
	  E: 'immersiveengineering:component_electronic',
	  C: '#forge:gears/cobalt',
	  D: 'darkutils:damage_plate_player',
	  P: 'powah:ender_core',
	  G: 'glassential:glass_ethereal',
	  H: 'kubejs:hostile_casing'
	  }).id(`mbm2:sim_chamber`)
	  
	//Loot Fab
	event.remove({output: 'hostilenetworks:loot_fabricator'})
	event.shaped('hostilenetworks:loot_fabricator', [
		'PEP',
		'CHG',
		'PCP'
		], {
		E: 'immersiveengineering:component_electronic_adv',
		C: 'elementalcraft:strongly_contained_crystal',
		P: '#forge:platings/nethersteel',
		G: 'glassential:glass_ethereal',
		H: 'kubejs:hostile_casing'
		}).id(`mbm2:loot_fabricator`)
		
		
	//Deep Learner
	event.recipes.createPressing('tconstruct:obsidian_pane', 'obsidian').id(`kubejs:pressing/obsidian_pane`)
	event.recipes.createCutting('kubejs:deep_learner_base', ['tconstruct:obsidian_pane']).processingTime(400).id(`kubejs:cutting/deep_learner_base`)

	event.remove({output: 'hostilenetworks:deep_learner'})
	event.shaped('hostilenetworks:deep_learner', [
		'ORO',
		'RBG',
		'ORO'
		], {
		B: 'kubejs:deep_learner_base',
		O: '#forge:ingots/obsidian',
		G: '#forge:glass_panes/colorless',
		R: 'kubejs:reactive_blend'
	}).id(`mbm2:deep_learner`)

	//data_models
	var dataModelRecipes = [
		{
		  'mob': 'skeleton',
		  'drop_item': 'bone',
		  'second_item': '#forge:platings/iron',
		},
		{
		  'mob': 'creeper',
		  'drop_item': 'gunpowder',
		  'second_item': '#forge:platings/iron',
		},
		{
		  'mob': 'zombie',
		  'drop_item': 'rotten_flesh',
		  'second_item': '#forge:platings/iron',
		},
		{
		  'mob': 'spider',
		  'drop_item': 'cobweb',
		  'second_item': '#forge:platings/iron',
		},
		{
		  'mob': 'slime',
		  'drop_item': 'slime_ball',
		  'second_item': '#forge:platings/iron',
		},

		{
		  'mob': 'enderman',
		  'drop_item': 'ender_pearl',
		  'second_item': '#forge:platings/steel',
		},
		{
		  'mob': 'blaze',
		  'drop_item': 'ars_nouveau:fire_essence',
		  'second_item': '#forge:platings/steel',
		},
		{
		  'mob': 'phantom',
		  'drop_item': 'phantom_membrane',
		  'second_item': '#forge:platings/steel',
		},
		{
		  'mob': 'wither_skeleton',
		  'drop_item': 'wither_skeleton_skull',
		  'second_item': '#forge:platings/steel',
		},
		{
		  'mob': 'elder_guardian',
		  'drop_item': 'prismarine',
		  'second_item': '#forge:platings/steel',
		},

		{
		  'mob': 'wither',
		  'drop_item': 'nether_star',
		  'second_item': '#forge:platings/stainless_steel',
		},
		{
		  'mob': 'ender_dragon',
		  'drop_item': 'dragon_egg',
		  'second_item': '#forge:platings/stainless_steel',
		},

		{
		  'mob': 'thermal/blizz',
		  'drop_item': 'ars_nouveau:water_essence',
		  'second_item': '#forge:platings/steel',
		},
		{
		  'mob': 'thermal/basalz',
		  'drop_item': 'ars_nouveau:earth_essence',
		  'second_item': '#forge:platings/steel',
		},
		{
		  'mob': 'thermal/blitz',
		  'drop_item': 'ars_nouveau:air_essence',
		  'second_item': '#forge:platings/steel',
		},
	]
	dataModelRecipes.forEach(item => {
	event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:6,id:"hostilenetworks:${item.mob}"}}`), [
		'PDP',
		'PMP',
		'PDP'
		], {
			M: 'hostilenetworks:blank_data_model',
			D: item.drop_item,
			P: item.second_item
		}).id(`mbm2:data_model/${item.mob}`)
	})


	
	//Empty Prediction
	event.remove({output: 'hostilenetworks:empty_prediction'})
	event.shaped('8x hostilenetworks:empty_prediction', [
		'DGB',
		'GPG',
		'BGD'
		], {
			G: '#forge:glass/colorless',
			D: 'kubejs:reactive_blend',
			B: 'kubejs:spirited_brick',
			P: Item.of('tconstruct:round_plate', '{Material:"tconstruct:silver"}'),
		}).id(`mbm2:crafting/empty_prediction`)
	


});
