onEvent('recipes', (event) => {
    //Hot Air
    event.recipes.multiblocked
        .multiblock('sludge_pump')
        .inputFluid(Fluid.of('water', 500))
        .inputStress(64)
        .setChance(0.4)
        .outputItem(Item.of('sand'))
        .setChance(0.7)
        .outputItem(Item.of('clay_ball'))
        .setChance(0.1)
        .outputItem(Item.of('clay'))
        .setChance(0.3)
        .outputItem(Item.of('gravel'))
        .setChance(0.2)
        .outputItem(Item.of('kelp'))
        .setChance(0.05)
        .outputItem(Item.of('aquaculture:fish_bones'))
        .duration(200);

    event.recipes.multiblocked
        .multiblock('sludge_pump')
        .inputFluid(Fluid.of('kubejs:sludge', 50))
        .inputStress(64)
        .setChance(0.4)
        .outputItem(Item.of('sand'))
        .setChance(0.4)
        .outputItem(Item.of('thermal:slag'))
        .setChance(0.1)
        .outputItem(Item.of('clay'))
        .setChance(0.3)
        .outputItem(Item.of('coal'))
        .setChance(0.5)
        .outputItem(Item.of('#forge:nuggets/zinc'))
        .setChance(0.5)
        .outputItem(Item.of('#forge:nuggets/silver'))
        .setChance(0.5)
        .outputItem(Item.of('#forge:nuggets/nickel'))
        .setChance(0.5)
        .outputItem(Item.of('#forge:nuggets/lead'))
        .duration(200);
});
