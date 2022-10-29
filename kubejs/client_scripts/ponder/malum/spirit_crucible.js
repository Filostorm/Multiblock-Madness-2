onEvent("ponder.registry", event => {
    event.create(["malum:spirit_crucible", "malum:spirit_catalyzer", "malum:twisted_tablet"])
        .scene("spirit_crucible", "Using the Spirit Crucible for Focusing", "kubejs:spirit_crucible", (scene, util) => {
        
        scene.showBasePlate()

            scene.idle(10)
            scene.text(25, "Spirit Focusing just requires the Crucible", [4.5, 1, 4.5])
            scene.world.showSection([4, 1, 4], Facing.down)
            scene.world.showSection([4, 2, 4], Facing.down)
            scene.idle(30)

            scene.addKeyframe()
            scene.text(30, "Up to 8 Spirit Catalyzers can be placed within 3 blocks of the Crucible", [1.5, 1, 4.5])
            let positions = [
                { x: 1, z: 4 },
                { x: 4, z: 7 },
                { x: 7, z: 4 },
                { x: 4, z: 1 },
            ]
            positions.forEach(pos => {
                scene.world.showSection([pos.x, 1, pos.z], Facing.down)
                scene.world.showSection([pos.x, 2, pos.z], Facing.down)
                scene.idle(5)
            })
            scene.idle(25)
            scene.addKeyframe()
            scene.text(30, "Place furnace fuel items on the Catalyzers before starting the recipe", [4.5, 1, 1.5]).placeNearTarget()
            scene.idle(35)
            scene.text(40, "Each fuled Catalyzer increases the speed of the recipe, along with the durability loss of the central item")
        })


        .scene("spirit_repair", "Using the Spirit Crucible to repair items", "kubejs:spirit_repair", (scene, util) => {
        
        scene.showBasePlate()
        
            scene.world.showSection([4, 1, 4], Facing.down)
            scene.world.showSection([4, 2, 4], Facing.down)
            scene.idle(20)
            
            scene.world.showSection([7, 1, 4], Facing.up)
            scene.idle(15)
            
            scene.text(25, "Spirit Repairing also requires a Twisted Tablet, which will hold the raw material", [7, 1, 5]).placeNearTarget()
            scene.world.showSection([6, 1, 4], Facing.west)
            scene.idle(35)
            
            scene.addKeyframe()
            scene.text(40, "The item to repair must be placed last", [4.5, 1, 4.5])
            scene.idle(30)
            

        })
})
