onEvent('ponder.registry', (event) => {
    event
        .create(['naturesaura:animal_spawner', 'naturesaura:birth_spirit'])
        .scene('birth_spirit', 'Spirit of Birthing', 'kubejs:grass_9x9', (scene, util) => {
            scene.showStructure();
            scene
                .text(
                    60,
                    'Breeding animals in an area with high levels of Aura has a chance to drop a Spirit of Birthing.'
                )
                .colored(PonderPalette.SLOW);
            scene.idle(10);

            const cowLink = scene.world.createEntity('cow', [5.5, 1, 4.5]);
            scene.idle(5);
            const cowLink2 = scene.world.createEntity('cow', [3.5, 1, 4.5]);
            scene.idle(5);
            scene.showControls(10, [4.5, 2, 4.5], 'down').rightClick().withItem('wheat');
            scene.idle(15);

            const pos = [5, 1.5, 5];
            const start = [5, 2, 5];
            const end = [2, 2, 3];
            scene.addKeyframe();
            scene.particles.simple(1, 'heart', pos);
            scene.particles.simple(1, 'heart', start).density(10).area(end).motion([0, 0, -0.1]);
            scene.idle(15);

            const babyCow = scene.world.createEntity('cow', [4.5, 1, 4.5], (entity) => {
                let nbt = entity.fullNBT;
                nbt.putInt('Age', -100);
                entity.fullNBT = nbt;
            });
            scene.idle(5);
            scene.world.createItemEntity(
                [4.5, 1, 4.5],
                util.vector.of(0, 0.4, -0.07),
                'naturesaura:birth_spirit'
            );
        })
        .scene('birthing_altar', 'The Brithing Altar', 'kubejs:birthing_altar', (scene, util) => {
            for (let x = 0; x < 9; x++) {
                for (let z = 0; z < 9; z++) {
                    scene.world.showSection([x, 0, z], Facing.down);
                    scene.idle(2);
                }
                if (x == 2) {
                    scene.text(60, '16x Hay Bales', [2.5, 1, 2.5]);
                }
                if (x == 3) {
                    scene.text(50, '16x Infused Bricks', [3.5, 1, 4.5]);
                }
                if (x == 5) {
                    scene.text(20, '4x Ancient Planks', [5.5, 1, 5.5]);
                }
            }
            scene.idle(10);
            scene.addKeyframe();
            scene.world.showSection([4, 1, 4], Facing.down);
            scene
                .text(20, 'Place the Birthing Altar in the center', [4.5, 2, 4.5])
                .placeNearTarget();
            scene.idle(30);
        });
});
