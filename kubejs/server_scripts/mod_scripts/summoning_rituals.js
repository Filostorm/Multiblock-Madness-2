
onEvent('recipes', event => {

	/*
	event.recipes.summoningrituals
    .altar(Ingredient.of("#forge:ingots"))
    .itemOutput('3x gold_ingot')
    .itemOutput('diamond')
    .mobOutput('wolf')
    .mobOutput(
        SummoningOutput.mob('blaze')
            .count(5)
            .offset(0, 3, 0)
            .spread(4, 0, 4)
            .data({ Health: 50, Attributes: [{ Name: 'generic.max_health', Base: 50 }] })
    )
    .input('64x minecraft:stone')
    .input('5x prismarine_shard')
    .input('10x amethyst_shard')
    .input(Ingredient.of('#forge:glass'))
    .sacrifice('pig', 3)
    .sacrifice('sheep')
    .sacrifice('cow')
    .sacrificeRegion(3, 3)
    .recipeTime(200)
    .blockBelow('minecraft:furnace', { lit: true })
    .dayTime('day');
    .weather('clear')
	*/
	event.recipes.summoningrituals
    .altar('forbidden_arcanus:soul')
    .mobOutput(
        SummoningOutput.mob('blaze')
            .count(4)
            .offset(0, 3, 0)
            .spread(4, 0, 4)
	)
    .input('soul_sand')
    .input('minecraft:obsidian')
    .input(Item.of('flint_and_steel').ignoreNBT())
    .input('create:cinder_flour')
    .input('soul_lantern')
    .recipeTime(200).id('kubejs:summoning/4x_blaze')
    
	event.recipes.summoningrituals
    .altar('forbidden_arcanus:soul')
    .mobOutput(
        SummoningOutput.mob('phantom')
            .count(4)
            .offset(0, 3, 0)
            .spread(4, 0, 4)
	)
    .input('#forge:leather')
    .input('#forge:dyes/light_gray')
    .input('#minecraft:beds')
    .input(Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'))
    .input('soul_lantern')
    .recipeTime(200).id('kubejs:summoning/4x_phantom')

event.recipes.summoningrituals
    .altar('forbidden_arcanus:soul')
    .mobOutput(
        SummoningOutput.mob('artifacts:mimic')
            .count(1)
            .offset(0, 3, 0)
            .spread(4, 0, 4)
	)
    .input('minecraft:chest')
    .input('quark:oak_chest')
    .input('quark:spruce_chest')
    .input('quark:birch_chest')
    .input('quark:jungle_chest')
    .input('quark:acacia_chest')
    .input('quark:dark_oak_chest')
    .input('forbidden_arcanus:arcane_gold_block')
    .input('botania:rune_greed')
    .recipeTime(200).id('kubejs:summoning/mimic_expensive')

    event.recipes.summoningrituals
    .altar('forbidden_arcanus:soul')
    .mobOutput(
        SummoningOutput.mob('artifacts:mimic')
            .count(1)
            .offset(0, 3, 0)
            .spread(4, 0, 4)
	)
    .input('#forge:chests/wooden')
    .input('forbidden_arcanus:arcane_gold_block')
    .input('#artifacts:artifacts')
    .recipeTime(200).id('kubejs:summoning/mimic_reroll')

    event.recipes.summoningrituals
    .altar('forbidden_arcanus:soul')
    .mobOutput(
        SummoningOutput.mob('elder_guardian')
            .count(2)
            .offset(0, 3, 0)
            .spread(4, 0, 4)
    )
    .input('minecraft:pufferfish_bucket')
    .input('minecraft:pufferfish_bucket')
    .input('aquaculture:fish_bones')
    .input('aquaculture:fish_bones')
    .input('minecraft:prismarine_shard')
    .input('minecraft:prismarine_shard')
    .recipeTime(200).id('kubejs:summoning/elder_guardian')

	event.recipes.summoningrituals
    .altar('forbidden_arcanus:soul')
    .mobOutput(
        SummoningOutput.mob('naturalist:firefly')
            .count(4)
            .offset(0, 3, 0)
            .spread(4, 0, 4)
	)
    .input('minecraft:torch')
    .input('minecraft:slime_ball')
    .input('minecraft:honeycomb')
    .recipeTime(200).id('kubejs:summoning/4x_firefly')

    event.recipes.summoningrituals
    .altar('forbidden_arcanus:soul')
    .mobOutput(
        SummoningOutput.mob('thermal:blitz')
            .count(4)
            .offset(0, 3, 0)
            .spread(4, 0, 4)
	)
    .input('minecraft:glowstone')
    .input('cloudstorage:static_cloud')
    .input('elementalcraft:powerful_air_shard')
    .input('thermal:blitz_powder')
    .input('ars_nouveau:air_essence')
    .recipeTime(200).id('kubejs:summoning/4x_blitz')

    event.recipes.summoningrituals
    .altar('forbidden_arcanus:soul')
    .mobOutput(
        SummoningOutput.mob('thermal:blizz')
            .count(4)
            .offset(0, 3, 0)
            .spread(4, 0, 4)
	)
    .input('minecraft:snow_block')
    .input('minecraft:packed_ice')
    .input('elementalcraft:powerful_water_shard')
    .input('thermal:blizz_powder')
    .input('ars_nouveau:water_essence')
    .recipeTime(200).id('kubejs:summoning/4x_blizz')

    event.recipes.summoningrituals
    .altar('forbidden_arcanus:soul')
    .mobOutput(
        SummoningOutput.mob('thermal:basalz')
            .count(4)
            .offset(0, 3, 0)
            .spread(4, 0, 4)
	)
    .input('minecraft:obsidian')
    .input('minecraft:basalt')
    .input('elementalcraft:powerful_earth_shard')
    .input('thermal:basalz_powder')
    .input('ars_nouveau:earth_essence')
    .recipeTime(200).id('kubejs:summoning/4x_basalz')
});
