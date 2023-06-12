/*

onEvent('tags.items', event => {
	event.add(`forge:ingots`, `naturesaura:tainted_gold`)
	 event.remove(`create:crushed_ores/${item}`, `kubejs:crushed_${item}`)
 });
 */
onEvent('recipes', event => {
	//Casing
	global.elementalcraftBinding(event, 'earth', 2500, 'kubejs:captured_soul', [Item.of('spirit:soul_crystal_shard').toJson(), Item.of('forbidden_arcanus:soul').toJson(), Item.of('apotheosis:gem_dust').toJson(), Item.of('mna:arcane_ash').toJson()], 'mbm2:captured_soul')
  
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
	event.remove({id: 'hostilenetworks:living_matter/sim_chamber'})
	event.shaped('hostilenetworks:sim_chamber', [
	  'CEC',
	  'PHG',
	  'DDD'
	  ], {
	  E: 'immersiveengineering:component_electronic_adv',
	  C: '#forge:gears/cobalt',
	  D: 'darkutils:damage_plate_player',
	  P: 'powah:ender_core',
	  G: 'glassential:glass_ethereal',
	  H: 'kubejs:hostile_casing'
	  }).id(`mbm2:sim_chamber`)
	  
	//Loot Fab
	event.remove({id: 'hostilenetworks:living_matter/loot_fabricator'})
	event.shaped('hostilenetworks:loot_fabricator', [
		'PEP',
		'CHG',
		'PCP'
		], {
		E: 'pneumaticcraft:printed_circuit_board',
		C: 'elementalcraft:strongly_contained_crystal',
		P: '#forge:platings/enderium',
		G: 'glassential:glass_ethereal',
		H: 'kubejs:hostile_casing'
		}).id(`mbm2:loot_fabricator`)
		
		
	//Deep Learner
	event.recipes.createPressing('tconstruct:obsidian_pane', 'obsidian').id(`kubejs:pressing/obsidian_pane`)
	event.recipes.createCutting('kubejs:deep_learner_base', ['tconstruct:obsidian_pane']).processingTime(400).id(`kubejs:cutting/deep_learner_base`)

	event.remove({id: 'hostilenetworks:living_matter/deep_learner'})
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
		  'mob': 'creeper',
		  'drop_item': 'gunpowder',
		  'second_item': '#forge:platings/iron',
		},
		{
		  'mob': 'enderman',
		  'drop_item': 'ender_pearl',
		  'second_item': '#forge:platings/iron',
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
	event.remove({id: 'hostilenetworks:living_matter/matrix'})
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
	

//Round Silver Plate
event.recipes.thermal.chiller(Item.of('tconstruct:round_plate', '{Material:"tconstruct:silver"}'), [Fluid.of('tconstruct:molten_silver', 180), 'thermal:chiller_ball_cast'])



});
