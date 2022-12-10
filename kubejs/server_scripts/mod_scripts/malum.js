

onEvent('tags.items', event => {
	event.add(`forge:ores/soulstone`, 'malum:soulstone_ore')
	event.add(`forge:ores/soulstone`, 'malum:deepslate_soulstone_ore')
 });
 
onEvent('recipes', event => {
	event.shapeless('malum:holy_sapball', ['malum:holy_sap']).id(`mbm2:malum/holy_sap`)
	event.shapeless('malum:unholy_sapball', ['malum:unholy_sap']).id(`mbm2:malum/unholy_sap`)
});
