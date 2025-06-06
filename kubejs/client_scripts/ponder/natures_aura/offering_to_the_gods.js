onEvent('ponder.registry', (event) => {
    event
        .create(['naturesaura:offering_table', 'naturesaura:sky_ingot'])
        .scene('offering_table', 'Offering to the Gods', 'kubejs:offering_table', (scene, util) => {
            scene.showBasePlate();

            scene.idle(10);
            scene.text(
                10,
                'Place down the Offering Table, with flowers of any type around it.',
                [4.5, 1.5, 4.5]
            );
            scene.world.showSection([4, 1, 4], Facing.down);

            scene.idle(10);
            let positions = [
                { x: 2, y: 1, z: 3 },
                { x: 2, y: 1, z: 4 },
                { x: 2, y: 1, z: 5 },

                { x: 3, y: 1, z: 6 },
                { x: 4, y: 1, z: 6 },
                { x: 5, y: 1, z: 6 },

                { x: 6, y: 1, z: 5 },
                { x: 6, y: 1, z: 4 },
                { x: 6, y: 1, z: 3 },

                { x: 5, y: 1, z: 2 },
                { x: 4, y: 1, z: 2 },
                { x: 3, y: 1, z: 2 },

                { x: 0, y: 1, z: 2 },
                { x: 0, y: 1, z: 3 },
                { x: 0, y: 1, z: 4 },
                { x: 0, y: 1, z: 5 },
                { x: 0, y: 1, z: 6 },

                { x: 2, y: 1, z: 8 },
                { x: 3, y: 1, z: 8 },
                { x: 4, y: 1, z: 8 },
                { x: 5, y: 1, z: 8 },
                { x: 6, y: 1, z: 8 },

                { x: 8, y: 1, z: 6 },
                { x: 8, y: 1, z: 5 },
                { x: 8, y: 1, z: 4 },
                { x: 8, y: 1, z: 3 },
                { x: 8, y: 1, z: 2 },

                { x: 6, y: 1, z: 0 },
                { x: 5, y: 1, z: 0 },
                { x: 4, y: 1, z: 0 },
                { x: 3, y: 1, z: 0 },
                { x: 2, y: 1, z: 0 }
            ];
            positions.forEach((pos) => {
                scene.world.showSection([pos.x, pos.y, pos.z], Facing.down);
                scene.idle(1);
            });
            scene.idle(10);
            scene.text(
                30,
                'Place the ingredent inside the Altar, then drop the Spirit of Calling to complete the craft.',
                [4.5, 1.5, 4.5]
            );
        });
});
