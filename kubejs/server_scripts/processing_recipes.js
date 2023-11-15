onEvent('recipes', event => {
	
	var crushingRecipes = {
		'#forge:coal_coke':'immersiveengineering:dust_coke',
		'#minecraft:planks':'thermal:sawdust',
		'#minecraft:logs':'4x thermal:sawdust',
		'#forge:gems/lapis':'thermal:lapis_dust',
		'#forge:slag':'kubejs:slag_dust',
		'mna:decoration/arcane_sandstone':'2x kubejs:arcane_sand'
	}
	for (var recipe in crushingRecipes) {
		event.recipes.mekanismCrushing(crushingRecipes[recipe], recipe).id(`mbm2:mekanism/crushing/${recipe.split(':')[1]}`)
		event.recipes.createMilling(crushingRecipes[recipe], recipe).id(`mbm2:create/crushing/${recipe.split(':')[1]}`)
		event.recipes.immersiveengineeringCrusher(crushingRecipes[recipe], recipe).id(`mbm2:immersiveengineering/crushing/${recipe.split(':')[1]}`)
	}

	var removeDupes = [
		'immersiveengineering:crusher/coke',
		'mekanism:processing/lapis_lazuli/to_dust',
		'create:compat/ae2/milling/certus_quartz',
	]
	removeDupes.forEach(item => {
		event.remove({id: item})
		
	})
	
	//Slag Melting
	//event.custom({
	//	"type": "createbigcannons:melting",
	//	"ingredients": [
	//	  {
	//		"tag": 'forge:slag'
	//	  }
	//	],
	//	"results": [
	//	  {
	//		"fluid": "kubejs:molten_slag",
	//		"amount": 250
	//	  }
	//	],
	//	"processingTime": 100,
	//	"heatRequirement": "heated"
	//})
	  global.tinkersMeltingPlain(event, 'kubejs:molten_slag', 250, `#forge:slag`, 900, 40, `mbm2:smeltery/melting/slag`)
	  //global.tinkersMeltingPlain(event, 'kubejs:molten_slag', 250, `#forge:gravel`, 900, 40, `mbm2:smeltery/melting/slag_from_gravel`)


	//Make some Hot Cream with a bonus chance
	event.recipes.createMixing([Fluid.of('tconstruct:magma', 1000), Item.of('magma_cream').withChance(0.50)], ['magma_block']).heated().id(`mbm2:create/mixing/magma_from_block`)
	event.recipes.createMixing([Fluid.of('tconstruct:magma', 250)], ['magma_cream']).heated().id(`mbm2:create/mixing/magma_from_ball`)


		//Carbon
		global.tinkersMeltingPlain(event, 'kubejs:molten_carbon', 180, `#forge:dusts/coal_coke`, 900, 20, `mbm2:smeltery/melting/coal_coke_dust`)
		global.tinkersMeltingPlain(event, 'kubejs:molten_carbon', 180, `#forge:coal_coke`, 900, 20, `mbm2:smeltery/melting/coal_coke`)

		global.tinkersMeltingPlain(event, 'kubejs:molten_carbon', 90, `#forge:dusts/coal`, 900, 20, `mbm2:smeltery/melting/coal_dust`)
		global.tinkersMeltingPlain(event, 'kubejs:molten_carbon', 90, `#minecraft:coals`, 900, 20, `mbm2:smeltery/melting/coal`)
		//Carbon makes graphite
		event.remove({id: 'biggerreactors:smelting/graphite_ingot'})
		event.recipes.tconstruct.casting_table('biggerreactors:graphite_ingot', 'kubejs:molten_carbon', 90)
		

		//global.tinkersMeltingPlain(event, 'kubejs:molten_carbon', 40, `#forge:charcoal`, 900, 20, `mbm2:smeltery/melting/charcoal`)
    
		//Redstone
		global.tinkersMeltingPlain(event, 'thermal:redstone', 100, `#forge:dusts/redstone`, 900, 20, `mbm2:smeltery/melting/redstone`)
		global.tinkersMeltingPlain(event, 'thermal:redstone', 900, '#forge:storage_blocks/redstone', 900, 80, `mbm2:smeltery/melting/redstone_block`)

		//Dark Quartz
		global.tinkersMeltingPlain(event, 'kubejs:liquid_smoke', 100, Ingredient.of('botania:quartz_dark').toJson(), 900, 20, `mbm2:smeltery/melting/dark_quartz`)
		global.tinkersMeltingPlain(event, 'kubejs:liquid_smoke', 400, Ingredient.of('botania:dark_quartz').toJson(), 900, 40, `mbm2:smeltery/melting/dark_quartz_block`)

		//Nethersteel
		//global.tinkersMeltingPlain(event, 'createbigcannons:molten_nethersteel', 90, Ingredient.of('createbigcannons:nethersteel_ingot').toJson(), 900, 40, `mbm2:smeltery/melting/nethersteel_ingot`)
		//global.tinkersMeltingPlain(event, 'createbigcannons:molten_nethersteel', 810, Ingredient.of('createbigcannons:nethersteel_block').toJson(), 900, 120, `mbm2:smeltery/melting/nethersteel_block`)
		//global.tinkersMeltingPlain(event, 'createbigcannons:molten_nethersteel', 10, Ingredient.of('createbigcannons:nethersteel_nugget').toJson(), 900, 10, `mbm2:smeltery/melting/nethersteel_nugget`)
	
		//Luminite
		global.tinkersMeltingPlain(event, 'kubejs:molten_luminite', 250, Ingredient.of('#forge:dusts/luminite').toJson(), 900, 80, `mbm2:smeltery/melting/luminite_dust`)
		global.tinkersMeltingPlain(event, 'kubejs:molten_luminite', 250, Ingredient.of('#forge:gems/luminite').toJson(), 900, 150, `mbm2:smeltery/melting/luminite_gem`)
		
		global.casingTable(event, 'tconstruct:casts/multi_use/gem', false, `#forge:gems/luminite`, `forge:molten_luminite`, 90, 60, `tconstruct:smeltery/casting/metal/luminite/gem_gold_cast`)
		global.casingTable(event, 'tconstruct:casts/single_use/gem', true, `#forge:gems/luminite`, `forge:molten_luminite`, 90, 60, `tconstruct:smeltery/casting/metal/luminite/gem_sand_cast`)

		
		//Round Silver Plate
		event.recipes.thermal.chiller(Item.of('tconstruct:round_plate', '{Material:"tconstruct:silver"}'), [Fluid.of('tconstruct:molten_silver', 180), 'thermal:chiller_ball_cast'])


});
