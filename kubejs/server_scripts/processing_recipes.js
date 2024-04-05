onEvent('recipes', event => {
	
	var crushingRecipes = {
		'#forge:coal_coke':'immersiveengineering:dust_coke',
		'#minecraft:planks':'thermal:sawdust',
		'#minecraft:logs':'4x thermal:sawdust',
		'#forge:gems/lapis':'thermal:lapis_dust',
		'#forge:slag':'kubejs:slag_dust',
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
		'create:milling/lapis_lazuli',
	]
	removeDupes.forEach(item => {
		event.remove({id: item})
		
	})
	
	  global.tinkersMeltingPlain(event, 'kubejs:molten_slag', 250, `#forge:slag`, 900, 40, `mbm2:smeltery/melting/slag`)
	  //global.tinkersMeltingPlain(event, 'kubejs:molten_slag', 250, `#forge:gravel`, 900, 40, `mbm2:smeltery/melting/slag_from_gravel`)


	//Make some Hot Cream with a bonus chance
	event.recipes.createMixing([Fluid.of('tconstruct:magma', 1000), Item.of('magma_cream').withChance(0.50)], ['magma_block']).heated().id(`mbm2:create/mixing/magma_from_block`)
	event.recipes.createMixing([Fluid.of('tconstruct:magma', 250)], ['magma_cream']).heated().id(`mbm2:create/mixing/magma_from_ball`)


		//Carbon
		global.tinkersMeltingPlain(event, 'kubejs:molten_carbon', 200, [`#forge:dusts/coal_coke`,`#forge:coal_coke`], 900, 20, `mbm2:smeltery/melting/coal_coke`)
		//global.tinkersMeltingPlain(event, 'kubejs:molten_carbon', 180, `#forge:coal_coke`, 900, 20, `mbm2:smeltery/melting/coal_coke`)

		global.tinkersMeltingPlain(event, 'kubejs:molten_carbon', 100, [`#forge:dusts/coal`,`#mbm2:coal`], 900, 20, `mbm2:smeltery/melting/coal`)

		global.tinkersMeltingPlain(event, 'kubejs:molten_carbon', 50, [`#forge:dusts/coal`,`#forge:charcoal`], 900, 20, `mbm2:smeltery/melting/charcoal`)
		//global.tinkersMeltingPlain(event, 'kubejs:molten_carbon', 90, `#minecraft:coals`, 900, 20, `mbm2:smeltery/melting/coal`)
		
		//Carbon makes graphite
		event.remove({id: 'biggerreactors:smelting/graphite_ingot'})
		event.recipes.tconstruct.casting_table('biggerreactors:graphite_ingot', 'kubejs:molten_carbon', 100)
		

		//global.tinkersMeltingPlain(event, 'kubejs:molten_carbon', 40, `#forge:charcoal`, 900, 20, `mbm2:smeltery/melting/charcoal`)
    
		//Redstone
		global.tinkersMeltingPlain(event, 'thermal:redstone', 100, `#forge:dusts/redstone`, 900, 20, `mbm2:smeltery/melting/redstone`)
		global.tinkersMeltingPlain(event, 'thermal:redstone', 900, '#forge:storage_blocks/redstone', 900, 80, `mbm2:smeltery/melting/redstone_block`)

		//Dark Quartz
		//global.tinkersMeltingPlain(event, 'kubejs:liquid_smoke', 100, Ingredient.of('botania:quartz_dark').toJson(), 900, 20, `mbm2:smeltery/melting/dark_quartz`)
		//global.tinkersMeltingPlain(event, 'kubejs:liquid_smoke', 400, Ingredient.of('botania:dark_quartz').toJson(), 900, 40, `mbm2:smeltery/melting/dark_quartz_block`)
		global.tinkersOreMelting(event, 'kubejs:liquid_smoke', 100,  'tconstruct:molten_quartz', 50, Ingredient.of('botania:quartz_dark').toJson(), 900, 20, `mbm2:foundry/melting/dark_quartz`)
		global.tinkersOreMelting(event, 'kubejs:liquid_smoke', 400,  'tconstruct:molten_quartz', 200, Ingredient.of('botania:dark_quartz').toJson(), 900, 40, `mbm2:foundry/melting/dark_quartz_block`)

		//Luminite
		global.tinkersMeltingPlain(event, 'kubejs:molten_luminite', 250, Ingredient.of('#forge:dusts/luminite').toJson(), 900, 80, `mbm2:smeltery/melting/luminite_dust`)
		global.tinkersMeltingPlain(event, 'kubejs:molten_luminite', 250, Ingredient.of('#forge:gems/luminite').toJson(), 900, 150, `mbm2:smeltery/melting/luminite_gem`)
		
		global.casingTable(event, 'tconstruct:casts/multi_use/gem', false, `#forge:gems/luminite`, `forge:molten_luminite`, 250, 60, `mbm2:smeltery/casting/gem/luminite/gem_gold_cast`)
		global.casingTable(event, 'tconstruct:casts/single_use/gem', true, `#forge:gems/luminite`, `forge:molten_luminite`, 250, 60, `mbm2:smeltery/casting/gem/luminite/gem_sand_cast`)

		//fluix
		global.tinkersMeltingPlain(event, 'kubejs:molten_fluix', 100, Ingredient.of('#forge:dusts/fluix').toJson(), 900, 80, `mbm2:smeltery/melting/fluix_dust`)
		global.tinkersMeltingPlain(event, 'kubejs:molten_fluix', 100, Ingredient.of('#forge:gems/fluix').toJson(), 900, 150, `mbm2:smeltery/melting/fluix_gem`)
		global.tinkersMeltingPlain(event, 'kubejs:molten_fluix', 400, Ingredient.of('ae2:fluix_block').toJson(), 900, 240, `mbm2:smeltery/melting/fluix_blox`)
		
		global.casingTable(event, 'tconstruct:casts/multi_use/gem', false, `#forge:gems/fluix`, `forge:molten_fluix`, 100, 60, `mbm2:smeltery/casting/gem/fluix/gem_gold_cast`)
		global.casingTable(event, 'tconstruct:casts/single_use/gem', true, `#forge:gems/fluix`, `forge:molten_fluix`, 100, 60, `mbm2:smeltery/casting/gem/fluix/gem_sand_cast`)
		global.casingBasin(event, 'ae2:fluix_block', 'forge:molten_fluix', 400, 100, 'mbm2:smeltery/casting/gem/fluix/block')

		
		//Round Silver Plate
		event.recipes.thermal.chiller(Item.of('tconstruct:round_plate', '{Material:"tconstruct:silver"}'), [Fluid.of('tconstruct:molten_silver', 180), 'thermal:chiller_ball_cast'])

		//Quartz Casting
		global.casingTable(event, 'tconstruct:casts/multi_use/gem', false, `#forge:gems/quartz`, `tconstruct:molten_quartz`, 100, 60, `mbm2:smeltery/casting/gem/quartz/gem_gold_cast`)
		global.casingTable(event, 'tconstruct:casts/single_use/gem', true, `#forge:gems/quartz`, `tconstruct:molten_quartz`, 100, 60, `mbm2:smeltery/casting/gem/quartz/gem_sand_cast`)
});
