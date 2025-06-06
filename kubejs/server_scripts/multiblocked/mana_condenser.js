onEvent('recipes', (event) => {
    global.createApplying(
        event,
        'mbm2:mana_condenser',
        Ingredient.of('botania:mana_pearl'),
        Item.of('botania:chiseled_livingrock_bricks'),
        `mbm2:applying/mana_condenser`
    );

    event.recipes.multiblocked
        .multiblock('mana_condenser')
        .setPerTick(true)
        .inputMana(50)
        .outputFluid(Fluid.of('kubejs:liquid_mana', 10))
        .duration(100);
});
