onEvent("ponder.tag", (event) => {
    event.createTag("kubejs:malum", "malum:spirit_altar", "Malum", "Harvenst Souls to become a god", [
        "malum:spirit_altar",
        "malum:spirit_crucible",
        "malum:runewood_totem_base",
        "malum:holy_sap"
    ]);
});

onEvent("ponder.registry", event => {    
    event.create(["malum:spirit_altar", "malum:runewood_item_pedestal", "malum:runewood_item_stand", "malum:runewood_obelisk"])
        .scene("spirit_altar", "Using the Spirit Altar", "kubejs:spirit_altar", (scene, util) => {
        
        scene.showBasePlate()

            scene.idle(10)
            scene.text(30, "The Spirit Altar requires Spirits and items for crafting", [4.5, 1, 4.5])
            scene.world.showSection([4, 1, 4], Facing.down)
            scene.idle(40)

            scene.addKeyframe()
            scene.text(30, "Item Pedestals are placed within 4 blocks from the central Altar", [1.5, 1, 4.5])
            let positions = [
                { x: 1, y: 1, z: 4 },
                { x: 4, y: 1, z: 7 },
                { x: 7, y: 1, z: 4 },
                { x: 4, y: 1, z: 1 },
            ]
            positions.forEach(pos => {
            //    scene.world.setBlock([pos.x, pos.y, pos.z], "forbidden_arcanus:darkstone_pedestal", false)
                scene.world.showSection([pos.x, pos.y, pos.z], Facing.down)
                scene.idle(3)
            })
            scene.idle(30)

            scene.text(20, "Item Stands can also be used", [2.5, 1, 6.5])
            let positions2 = [
                { x: 2, y: 1, z: 6 },
                { x: 6, y: 1, z: 6 },
                { x: 6, y: 1, z: 2 },
                { x: 2, y: 1, z: 2 },
            ]
            positions2.forEach(pos => {
            //    scene.world.setBlock([pos.x, pos.y, pos.z], "forbidden_arcanus:darkstone_pedestal", false)
                scene.world.showSection([pos.x, pos.y, pos.z], Facing.down)
                scene.idle(3)
            })
            scene.idle(20)
            scene.addKeyframe()
            scene.text(30, "Up to 4 Runewood Obelisks can also be used to increase speed", [1.5, 1, 4.5])
            let positions3 = [
                { x: 1, y: 1, z: 4 },
                { x: 4, y: 1, z: 7 },
                { x: 7, y: 1, z: 4 },
                { x: 4, y: 1, z: 1 },
            ]
            positions3.forEach(pos => {
                scene.world.hideSection([pos.x, pos.y, pos.z], Facing.down)
            })
            scene.idle(20)
            positions3.forEach(pos => {
                scene.world.setBlock([pos.x, 1, pos.z], "malum:runewood_obelisk", false)
                scene.world.setBlock([pos.x, 2, pos.z], "malum:runewood_obelisk_component", false)
                scene.world.showSection([pos.x, 1, pos.z], Facing.down)
                scene.world.showSection([pos.x, 2, pos.z], Facing.down)
                scene.idle(3)
            })
            scene.idle(30)
        })
})
