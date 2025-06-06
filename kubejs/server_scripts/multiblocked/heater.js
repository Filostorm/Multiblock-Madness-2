onEvent('recipes', (event) => {
    //Hot Air
    event.recipes.multiblocked
        .multiblock('heater')
        .inputFluid(Fluid.of('kubejs:liquid_air', 100))
        .outputFluid(Fluid.of('kubejs:hot_air', 1000))
        .setPerTick(true)
        .inputFE(500)
        .duration(200);

    event.recipes.multiblocked
        .multiblock('heater')
        .inputFluid(Fluid.of('mekanism:oxygen', 100))
        .outputFluid(Fluid.of('kubejs:hot_air', 1000))
        .setPerTick(true)
        .inputFE(500)
        .duration(200);
});
