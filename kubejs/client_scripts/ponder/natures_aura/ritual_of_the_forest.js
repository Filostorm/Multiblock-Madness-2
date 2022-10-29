
onEvent("ponder.registry", (event) => {
    event.create(["naturesaura:wood_stand","naturesaura:gold_powder"]).scene("ritual_of_the_forest", "Ritual of the Forest", "kubejs:ritual_of_the_forest", (scene, util) => {

        scene.showBasePlate()
        scene.idle(10)
        scene.text(20, "Place the Wooden Stands like so, they will hold items required for crafting", [1.5, 1, 7.5])
        let positions = [
            { x: 1, y: 1, z: 7 },
            { x: 4, y: 1, z: 8 },
            { x: 7, y: 1, z: 7 },
            { x: 8, y: 1, z: 4 },
            { x: 7, y: 1, z: 1 },
            { x: 4, y: 1, z: 0 },
            { x: 1, y: 1, z: 1 },
            { x: 0, y: 1, z: 4 },
        ]
        positions.forEach(pos => {
            //scene.world.setBlock([pos.x, pos.y, pos.z], "naturesaura:wood_stand", false)
            scene.world.showSection([pos.x, pos.y, pos.z], Facing.down)
            scene.idle(2)
        })
        scene.idle(20)
        scene.addKeyframe()
        scene.text(30, "Place the Gold Powder around the center for each ritual.", [3.5, 1, 5.5])
                let goldPositions = [
            { x: 3, y: 1, z: 5 },
            { x: 3, y: 1, z: 6 },
            { x: 4, y: 1, z: 6 },
            { x: 5, y: 1, z: 6 },
            { x: 5, y: 1, z: 5 },
            { x: 6, y: 1, z: 5 },
            { x: 6, y: 1, z: 4 },
            { x: 6, y: 1, z: 3 },
            { x: 5, y: 1, z: 3 },
            { x: 5, y: 1, z: 2 },
            { x: 4, y: 1, z: 2 },
            { x: 3, y: 1, z: 2 },
            { x: 3, y: 1, z: 3 },
            { x: 2, y: 1, z: 3 },
            { x: 2, y: 1, z: 4 },
            { x: 2, y: 1, z: 5 },
        ]
        goldPositions.forEach(pos => {
            //scene.world.setBlock([pos.x, pos.y, pos.z], "naturesaura:gold_powder", false)
            scene.world.showSection([pos.x, pos.y, pos.z], Facing.down)
            scene.idle(1)
        })
        scene.idle(25)
        scene.addKeyframe()
        scene.text(30, "Place the required Sapling in the center.", [4.5, 1, 4.5])
        //scene.world.setBlock([4, 1, 4], "minecraft:oak_sapling", false)
        scene.world.showSection([4, 1, 4], Facing.down)
        scene.idle(20)

        //scene.world.modifyBlock([1, 1, 1], (curState) => curState.with("east", "side"), true);
    });
});


