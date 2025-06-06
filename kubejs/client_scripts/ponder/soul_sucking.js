onEvent('ponder.registry', (event) => {
    event
        .create([
            'forbidden_arcanus:soul_extractor',
            'forbidden_arcanus:soul',
            'forbidden_arcanus:soulless_sand'
        ])
        .scene('soul_extractor', 'Extracting Souls', 'kubejs:nether_5x5', (scene, util) => {
            //Start the Scene
            scene.showBasePlate();

            //Enter Main Player
            scene.idle(5);
            scene.world.setBlock([2, 1, 2], 'minecraft:soul_sand', false);
            scene.world.showSection([2, 1, 2], Facing.down);
            scene.idle(10);

            //How it works
            scene.text(20, 'Use the Soul Extractor on Soul Sand.', [2.5, 1, 2.5]);
            scene
                .showControls(50, [2.5, 1, 2.5], 'right')
                .rightClick()
                .withItem('forbidden_arcanus:soul_extractor');
            scene.idle(30);

            //What it does
            scene.world.replaceBlocks([2, 1, 2], 'forbidden_arcanus:soulless_sand', true);
            scene.idle(30);
            scene.showControls(60, [2.5, 1, 2.5], 'right').withItem('forbidden_arcanus:soul');
            scene.idle(10);
        });
});
