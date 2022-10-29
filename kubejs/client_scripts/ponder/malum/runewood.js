onEvent("ponder.registry", event => {
    event.create(["malum:holy_sap", "malum:exposed_runewood_log", "malum:revealed_runewood_log"])
        .scene("holy_sap", "Extracting Holy Sap from Exposed Runewood", "kubejs:runewood_tree", (scene, util) => {
        
        scene.showStructure()

        scene.idle(10)
        scene.text(20, "You'll find a few spots of Sap covered logs on Runewood Trees.", [4.5, 3, 4.5])
        scene.idle(30)

        scene.addKeyframe()
        scene.text(20, "Use an axe to clear away the remaining bark.", [4.5, 3, 4.5]).placeNearTarget()
        scene.showControls(40, [5, 3, 4.5], "right")
        .rightClick()
        .withItem("minecraft:stone_axe")
        scene.idle(10)

        scene.world.replaceBlocks([4, 3, 4], Block.id("malum:revealed_runewood_log"), true);
        scene.idle(40)

        scene.addKeyframe()
        scene.text(20, "Collect the Sap with a Glass Bottle.", [4.5, 3, 4.5])
        scene.showControls(20, [5, 3, 4.5], "right")
        .rightClick()
        .withItem("minecraft:glass_bottle")
        scene.idle(10)

        scene.world.replaceBlocks([4, 3, 4], Block.id("malum:stripped_runewood"), true);
        scene.world.createItemEntity([4, 3.5, 4], util.vector.of(0, 0.4, -0.07), "malum:holy_sap");

        })
})
