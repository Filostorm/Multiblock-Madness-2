onEvent("ponder.registry", event => {    
    event.create(["malum:runewood_totem_base", "malum:soulwood_totem_base", "malum:blighted_soil", "malum:cursed_grit", "malum:soulwood_growth"])
        .scene("malum_totem", "Using the Totem", "kubejs:totem", (scene, util) => {
        
        scene.showBasePlate()

            scene.idle(10)
            scene.world.showSection([4, 1, 4], Facing.down)
            scene.idle(10)
            scene.text(25, "Place up to 5 Runewood Logs on top of the Totem Base", [4.5, 1, 4.5]).placeNearTarget()
            scene.idle(10)
            scene.showControls(10, [4, 1.5, 4], "right")
                .rightClick()
                .whileSneaking()
                scene.idle(5)
            
            for (let y = 2; y < 5; y++) {
                    scene.world.showSection([4, y, 4], Facing.down)
                    scene.idle(5)
            }
            scene.idle(30)

            scene.addKeyframe()
            scene.text(25, "Apply Spirits to carve patterns based on the desired effect, as show in the Encyclopedia Arcana", [4.5, 2, 4.5]).placeNearTarget()
            scene.idle(35)
            for (let y = 2; y < 5; y++) {
                if (y == 2) {
                    scene.showControls(15, [5, y, 4.5], "right")
                        .rightClick()
                        .withItem('malum:arcane_spirit')
                    scene.world.modifyBlock([4, y, 4], () => Block.id("malum:runewood_totem_pole").with("facing", "north").with("spirit_type", "arcane"), true);
                    scene.idle(20)
                }
                if (y > 2) {
                    scene.showControls(15, [5, y, 4.5], "right")
                        .rightClick()
                        .withItem('malum:infernal_spirit')
                    scene.world.modifyBlock([4, y, 4], () => Block.id("malum:runewood_totem_pole").with("facing", "north").with("spirit_type", "infernal"), true);
                    scene.idle(20)
                }
            }
            scene.idle(10)

            scene.addKeyframe()
            scene.text(30, "You can clear the Totem carvings by right clicking with an axe")
            scene.idle(40)
            for (let y = 3; y < 5; y++) {
                    scene.showControls(15, [5, y, 4.5], "right")
                        .rightClick()
                        .withItem('minecraft:stone_axe')
                    scene.world.modifyBlock([4, y, 4], () => Block.id("malum:runewood_totem_pole").with("facing", "south"), true);
                    scene.idle(20)
            }
            scene.idle(20)
            for (let y = 3; y < 5; y++) {
                    scene.showControls(15, [5, y, 4.5], "right")
                        .rightClick()
                        .withItem('malum:earthen_spirit')
                    scene.world.modifyBlock([4, y, 4], () => Block.id("malum:runewood_totem_pole").with("facing", "north").with("spirit_type", "earthen"), true);
                    scene.idle(20)
            }
            scene.idle(20)

            scene.addKeyframe()
            scene.text(25, "Right Click the Totem Base to activate the Rite", [4, 1.5, 4.5]).placeNearTarget()
            scene.showControls(10, [4.5, 1.5, 4], "right")
                .rightClick()
            scene.idle(35)
        })

        //////////////////////////////////   The Undirected Rite   /////////////////////////////
        .scene("malum_soul_totem", "The Undirected Rite", "kubejs:soul_totem", (scene, util) => {
        
        scene.showBasePlate()

        scene.text(25, "The Undirected Rite contains great power, until activated")
        scene.idle(5)
        scene.world.setBlock([4, 1, 4], "malum:runewood_totem_base", false)
        scene.world.showSection([4, 1, 4], Facing.down)
        scene.idle(5)

        for (let y = 2; y < 7; y++) {
            scene.world.setBlock([4, y, 4], "malum:runewood_log", false)
            scene.world.showSection([4, y, 4], Facing.down)
            scene.idle(5)
        }
        for (let y = 2; y < 7; y++) {
            scene.showControls(5, [5, y, 4.5], "right")
                .rightClick()
                .withItem('malum:arcane_spirit')
            scene.world.modifyBlock([4, y, 4], () => Block.id("malum:runewood_totem_pole").with("facing", "north").with("spirit_type", "arcane"), true);
            scene.idle(10)
        }
        scene.idle(10)

        scene.addKeyframe()
        scene.text(20, "Right Click the Totem Base to activate the Rite", [4, 1, 4.5]).placeNearTarget()
        scene.showControls(10, [4.5, 1.5, 4], "right")
            .rightClick()
        scene.idle(35)

        scene.addKeyframe()
        for (let y = 1; y < 7; y++) {
            if (y != 1) {
            scene.world.replaceBlocks([4, y, 4], Block.id("malum:soulwood_totem_pole").with("facing", "north").with("spirit_type", "arcane"), true);
            }
            if (y == 1) {
                scene.world.replaceBlocks([4, 1, 4], Block.id("malum:soulwood_totem_base"), true);
                for (let x = 3; x < 6; x++) {
                        for (let z = 3; z < 6; z++) {
                        scene.world.replaceBlocks([x, 0, z], Block.id("malum:blighted_soil"), true);
                    }
                }
            }
            if (y == 2) {
                for (let x = 2; x < 7; x++) {
                        for (let z = 2; z < 7; z++) {
                        scene.world.replaceBlocks([x, 0, z], Block.id("malum:blighted_soil"), false);
                    }
                }
            }
            if (y == 3) {
                for (let x = 1; x < 8; x++) {
                        for (let z = 1; z < 8; z++) {
                        scene.world.replaceBlocks([x, 0, z], Block.id("malum:blighted_soil"), false);
                    }
                }
            }
            if (y == 4) {
                for (let x = 0; x < 9; x++) {
                        for (let z = 0; z < 9; z++) {
                        scene.world.replaceBlocks([x, 0, z], Block.id("malum:blighted_soil"), false);
                    }
                }
            }/*
            if (y == 5) {
                for (let x = 0; x < 9; x++) {
                        for (let z = 0; z < 9; z++) {
                        scene.world.replaceBlocks([x, 0, z], Block.id("malum:blighted_soil"), false);
                    }
                }
            }
            if (y == 6) {
                for (let x = 0; x < 9; x++) {
                        for (let z = 0; z < 9; z++) {
                        scene.world.replaceBlocks([x, 0, z], Block.id("malum:blighted_soil"), false);
                    }
                }
            }*/
            scene.idle(5)
        }
        scene.text(25, "This Rite will convert the Totem into Soulwood, which can have strange effects on basic Rites")
        scene.idle(35)

        scene.addKeyframe()
        var bbox = util.select.fromTo(0, 1, 0, 8, 1, 8)
        scene.overlay.showOutline(PonderPalette.RED, "airgap", bbox, 50)
        scene.text(50, "After activating the Rite again, now on the newly formed Soulwood Totem, it will start converting items in a 9x9 area around it", [4.5, 1, 3.5]).placeNearTarget()
        scene.idle(60)

        scene.addKeyframe()
        scene.idle(10)
        scene.text(30, "Placed items work, as well as dropped items, or items on display stands. The conversions only work on top of Blighted Soil", [4, 2, 1])
        scene.world.setBlock([4, 1, 1], "malum:runewood_sapling", false)
        scene.world.showSection([4, 1, 1], Facing.down)
        scene.idle(40)
        scene.world.replaceBlocks([4, 1, 1], Block.id("malum:soulwood_growth"), true);
        scene.idle(20)
        
    })
})
