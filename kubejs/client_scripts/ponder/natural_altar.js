onEvent("ponder.tag", (event) => {
    event.createTag("kubejs:natures_aura", "naturesaura:nature_altar", "Nature's Aura", "Using the surrounding aura to great effect.", [
        "naturesaura:gold_leaf",
        "naturesaura:wood_stand",
        "naturesaura:nature_altar",
        "naturesaura:offering_table",
    ]);
});

onEvent("ponder.registry", (event) => {
    event.create(["naturesaura:nature_altar","naturesaura:gold_brick","naturesaura:infused_iron"])
    .scene("natural_altar", "The Natural Altar", "kubejs:grass_9x9", (scene, util) => {

        scene.showBasePlate()
        //scene.world.showSection([0, 0, 0, 9, 0, 9], Facing.up)
        scene.idle(10)
        scene.text(10, "20x Oak Planks", [3.5, 1, 4.5])
        let positions = [
            { x: 3, y: 0, z: 4 },
            { x: 4, y: 0, z: 5 },
            { x: 5, y: 0, z: 4 },
            { x: 4, y: 0, z: 3 },

            { x: 2, y: 0, z: 5 },
            { x: 3, y: 0, z: 6 },
            { x: 5, y: 0, z: 6 },
            { x: 6, y: 0, z: 5 },
            { x: 6, y: 0, z: 3 },
            { x: 5, y: 0, z: 2 },
            { x: 3, y: 0, z: 2 },
            { x: 2, y: 0, z: 3 },

            { x: 1, y: 0, z: 5 },
            { x: 3, y: 0, z: 7 },
            { x: 5, y: 0, z: 7 },
            { x: 7, y: 0, z: 5 },
            { x: 7, y: 0, z: 3 },
            { x: 5, y: 0, z: 1 },
            { x: 3, y: 0, z: 1 },
            { x: 1, y: 0, z: 3 },
        ]
        positions.forEach(pos => {
            //scene.world.replaceBlocks([pos.x, pos.y, pos.z], "minecraft:oak_planks", false);
            //scene.world.setBlock([pos.x, pos.y, pos.z], "minecraft:grass_block", false)
            //scene.world.hideSection([pos.x, pos.y, pos.z], Facing.down)
            scene.world.setBlock([pos.x, pos.y, pos.z], "minecraft:oak_planks", false)
            scene.world.showSection([pos.x, pos.y, pos.z], Facing.down)
            scene.idle(2)
        })
        scene.idle(15)
        scene.addKeyframe()
        scene.text(10, "4x Chiseled Stone Bricks", [3.5, 1, 5.5])
                let stoneChiseledPositions = [
            { x: 3, y: 0, z: 5 },
            { x: 5, y: 0, z: 5 },
            { x: 5, y: 0, z: 3 },
            { x: 3, y: 0, z: 3 },
        ]
        stoneChiseledPositions.forEach(pos => {
            scene.world.setBlock([pos.x, pos.y, pos.z], "minecraft:chiseled_stone_bricks", false)
            scene.world.showSection([pos.x, pos.y, pos.z], Facing.down)
            scene.idle(2)
        })
        scene.idle(15)
        scene.addKeyframe()
        scene.text(30, "16x Stone Bricks", [2.5, 1, 4.5])
                let stoneBrickPositions = [
            { x: 2, y: 0, z: 4 },
            { x: 4, y: 0, z: 6 },
            { x: 6, y: 0, z: 4 },
            { x: 4, y: 0, z: 2 },
            { x: 1, y: 0, z: 4 },
            { x: 4, y: 0, z: 7 },
            { x: 7, y: 0, z: 4 },
            { x: 4, y: 0, z: 1 }
        ]
        stoneBrickPositions.forEach(pos => {
            scene.world.setBlock([pos.x, pos.y, pos.z], "minecraft:stone_bricks", false)
            scene.world.showSection([pos.x, pos.y, pos.z], Facing.down)
            scene.idle(1)
        })
        scene.idle(5)
                let stoneBrickPositions2 = [
            { x: 0, y: 1, z: 4 },
            { x: 4, y: 1, z: 8 },
            { x: 8, y: 1, z: 4 },
            { x: 4, y: 1, z: 0 },
            { x: 0, y: 2, z: 4 },
            { x: 4, y: 2, z: 8 },
            { x: 8, y: 2, z: 4 },
            { x: 4, y: 2, z: 0 },
        ]
        stoneBrickPositions2.forEach(pos => {
            scene.world.setBlock([pos.x, pos.y, pos.z], "minecraft:stone_bricks", false)
            scene.world.showSection([pos.x, pos.y, pos.z], Facing.down)
            scene.idle(1)
        })
        scene.idle(20)
        scene.addKeyframe()
        scene.text(20, "8x Golden Stone Bricks", [0.5, 3, 4.5])
                let goldenBrickPositions = [
                    { x: 0, y: 3, z: 4 },
                    { x: 2, y: 1, z: 6 },
                    { x: 4, y: 3, z: 8 },
                    { x: 6, y: 1, z: 6 },
                    { x: 8, y: 3, z: 4 },
                    { x: 6, y: 1, z: 2 },
                    { x: 4, y: 3, z: 0 },
                    { x: 2, y: 1, z: 2 },
        ]
        goldenBrickPositions.forEach(pos => {
            scene.world.setBlock([pos.x, pos.y, pos.z], "naturesaura:gold_brick", false)
            scene.world.showSection([pos.x, pos.y, pos.z], Facing.down)
            scene.idle(2)
        })
        scene.idle(25)
        scene.addKeyframe()
        scene.text(30, "Place the Natural Altar in the center.", [4.5, 1, 4.5])
        scene.world.setBlock([4, 1, 4], "naturesaura:nature_altar", false)
        scene.world.showSection([4, 1, 4], Facing.down)
        scene.idle(20)

        //scene.world.modifyBlock([1, 1, 1], (curState) => curState.with("east", "side"), true);
    })
    .scene("crimson_altar", "The Crimson Altar", "kubejs:crimson_altar", (scene, util) => {
        scene.showStructure()
        scene.text(20, "If the Natural Altar is built in the nether, it transforms into the Crimson Altar.", [4.5, 1, 4.5])

        scene.idle(30)
        scene.addKeyframe()
        scene.text(30, "20x Crimson or Warped Planks", [3.5, 1, 4.5])
        scene.idle(15)
        let positions = [
            { x: 3, y: 0, z: 4 },
            { x: 4, y: 0, z: 5 },
            { x: 5, y: 0, z: 4 },
            { x: 4, y: 0, z: 3 },

            { x: 2, y: 0, z: 5 },
            { x: 3, y: 0, z: 6 },
            { x: 5, y: 0, z: 6 },
            { x: 6, y: 0, z: 5 },
            { x: 6, y: 0, z: 3 },
            { x: 5, y: 0, z: 2 },
            { x: 3, y: 0, z: 2 },
            { x: 2, y: 0, z: 3 },

            { x: 1, y: 0, z: 5 },
            { x: 3, y: 0, z: 7 },
            { x: 5, y: 0, z: 7 },
            { x: 7, y: 0, z: 5 },
            { x: 7, y: 0, z: 3 },
            { x: 5, y: 0, z: 1 },
            { x: 3, y: 0, z: 1 },
            { x: 1, y: 0, z: 3 },
        ]
        positions.forEach(pos => {
            //scene.world.replaceBlocks([pos.x, pos.y, pos.z], "minecraft:oak_planks", false);
            //scene.world.setBlock([pos.x, pos.y, pos.z], "minecraft:grass_block", false)
            //scene.world.hideSection([pos.x, pos.y, pos.z], Facing.down)
            scene.world.setBlock([pos.x, pos.y, pos.z], "minecraft:warped_planks", false)
            scene.world.showSection([pos.x, pos.y, pos.z], Facing.down)
        })
        scene.idle(20)
        scene.addKeyframe()
        scene.text(15, "4x Red Nether Bricks", [3.5, 1, 5.5])

        scene.idle(20)
        scene.addKeyframe()
        scene.text(15, "16x Nether Bricks", [2.5, 1, 4.5])

        scene.idle(20)
        scene.addKeyframe()
        scene.text(15, "8x Golden Nether Bricks", [0.5, 3, 4.5])
    });
});


