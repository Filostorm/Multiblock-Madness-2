onEvent('tags.items', (event) => {
    //Missing tags??
    event.add('mbm2:ingots/furnaces/tier_1', 'ironfurnaces:iron_furnace');
    event.add('mbm2:ingots/furnaces/tier_1', 'ironfurnaces:copper_furnace');
    event.add('mbm2:ingots/furnaces/tier_1', 'ironfurnaces:upgrade_iron');
    event.add('mbm2:ingots/furnaces/tier_1', 'ironfurnaces:upgrade_copper');
});

onEvent('recipes', (event) => {});
