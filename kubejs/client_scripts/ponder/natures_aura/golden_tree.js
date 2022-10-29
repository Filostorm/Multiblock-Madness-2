
onEvent("ponder.registry", (event) => {
    event.create(["naturesaura:gold_fiber","naturesaura:gold_leaf"])
    .scene("brilliant_fiber", "Gold Leaves", "kubejs:tree", (scene, util) => {

        scene.showStructure()
        scene.idle(10)

        scene.showControls(40, [4.5, 7.1, 4.5], "left")
        .rightClick()
        .withItem("naturesaura:gold_fiber")
        scene.idle(20)

        scene.world.replaceBlocks([4, 6, 4], Block.id("naturesaura:golden_leaves").with("stage", "0"), true);
        scene.idle(10)
        scene.world.modifyBlock([4, 6, 4], (curState) => curState.with("stage", "1"), true);
        scene.idle(10)
        scene.world.modifyBlock([4, 6, 4], (curState) => curState.with("stage", "2"), true);

        for (let y = 6; y > 2; y--) {
        for (let x = 2; x < 7; x++) {
        for (let z = 2; z < 7; z++) {
            if (x == 4 && y == 6 && z == 4) {
                scene.text(10, "Leaves will start to be converted to Golden Leaves")
            } else {
                scene.world.replaceBlocks([x, y, z], Block.id("naturesaura:golden_leaves").with("stage", "0"), false);
                scene.idle(1)
            }
        }
        }
        }
        for (let y = 6; y > 2; y--) {
        for (let x = 2; x < 7; x++) {
        for (let z = 2; z < 7; z++) {
            if (x == 4 && y == 6 && z == 4) {
            } else {
                scene.world.replaceBlocks([x, y, z], Block.id("naturesaura:golden_leaves").with("stage", "1"), false);
                scene.idle(1)
            }
        }
        }
        }
        for (let y = 6; y > 2; y--) {
        for (let x = 2; x < 7; x++) {
        for (let z = 2; z < 7; z++) {
            if (x == 4 && y == 6 && z == 4) {
            } else {
                scene.world.replaceBlocks([x, y, z], Block.id("naturesaura:golden_leaves").with("stage", "2"), false);
                scene.idle(1)
            }
        }
        }
        }
        scene.idle(10)
        scene.addKeyframe()
        scene.text(10, "Break to collect the Golden Leaves", [2.5, 4.1, 3.5])
        scene.idle(20)
        //.withItem("naturesaura:gold_leaf")
        //scene.world.replaceBlocks([2, 4, 3], "naturesaura:gold_leaf", true);
        scene.world.replaceBlocks([2, 4, 3], 'minecraft:air', true);
        scene.world.createItemEntity([2, 4, 3], util.vector.of(0, 0.05, -0.07), "naturesaura:gold_leaf");
        scene.idle(20)
    });
});


