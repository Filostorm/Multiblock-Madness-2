
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
});
