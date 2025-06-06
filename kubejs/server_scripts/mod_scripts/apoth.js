/*

onEvent('tags.items', event => {
	event.add(`forge:ingots`, `naturesaura:tainted_gold`)
	 event.remove(`create:crushed_ores/${item}`, `kubejs:crushed_${item}`)
 });
 */
onEvent('recipes', (event) => {
    event.remove({ output: 'apotheosis:salvaging_table' });
    event.shaped('apotheosis:salvaging_table', ['GSG', 'PTP', 'PLP'], {
        T: 'minecraft:smithing_table',
        G: 'apotheosis:gem_dust',
        L: 'minecraft:lava_bucket',
        P: '#forge:ingots/swift_alloy',
        S: 'elementalcraft:air_silk'
    });
});
