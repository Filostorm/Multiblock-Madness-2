console.info('EBF Recipe Script')

let ebfDefinition = MbdRegistry.getDefinition("mbd:ebf");

let recipeMap;

if (ebfDefinition != null) { // two ways to get the recipeMap
    recipeMap = ebfDefinition.getRecipeMap();
} else {
    recipeMap = MbdRegistry.getRecipeMap("ebf");
}
onEvent('recipes', event => {
if (recipeMap != null) {
    console.info('EBF RecipeMap Found');

       /*
        onEvent('recipes', event => {
            event.recipes.multiblocked.multiblock("coal")
                .inputItem(Item.of("diamond_axe").ignoreNBT())
                .inputItems("minecraft:diamond", "minecraft:apple")
                .inputFluid("minecraft:lava")
                .outputItem("apple")
                .outputFE(100)
                //Switch on the perTick/chance for incoming ingredients,
                //any ingredient will have perTick/chance applied as the
                //switch.
                .setChance(0.1)
                .setPerTick(true)
                .outputMana(100)
                .outputStress(100)
                .inputItem(Ingredient.of("#forge:rods").withCount(2))
                .setChance(1)
                .setPerTick(false)
                //All gas/infuse/pigment use a same set of input structure
                //.inputGas({ type: "mekanism:hydrogen", amount: 1000 })
                //Recipe conditions
                .thunder(1)
                .dimension("minecraft:nether")
                .biome("minecraft:plains")
                .yLevel(1, 10)
                //Text
                .text("sussy baka")
                //Data
                .data({ temperature: 1300 })
                .duration(100)
        })*/


        event.recipes.multiblocked.multiblock("ebf")
        .inputItems('3x minecraft:apple', 'minecraft:gold_ingot')
        .outputItems('minecraft:golden_apple')
        .text("T: §61000§rK")
        .data({ temperature: 1000 })
        .duration(100)

        event.recipes.multiblocked.multiblock("ebf")
        .inputItems('minecraft:sand')
        .outputItems('minecraft:glass')
        .text("T: §65000§rK")
        .data({ temperature: 5000 })
        .duration(100)

} else {
    console.info('EBF RecipeMap Missing');
}
});

    let subID = ebfDefinition.getID() // mbd.ebf

    onEvent(`mbd.dynamic_pattern.${subID}`, event => {
        let controller = event.getController()
        console.info(`dynamic_pattern controller info: ${controller}`)
    });
    

    // register event for a specific machine.
    onEvent(`mbd.setup_recipe.${subID}`, event => {
        let recipe = event.getRecipe(); // get recipe found (matching IO requirement).
        let recipeLogic = event.getRecipeLogic(); // get RecipeLogic
        let temp = recipe.getData().getInt("temperature") // get custom data

        if (temp != null) {
            if (temp > 1000) {
                 console.info(`ebf recipe cancel, ${temp} < 1000`)
                event.cancel(); // cancel to block this recipe setup.
            } else {
                console.info(` recipe temp: ${temp}, coil temp: 1000`)}
        }
    });

