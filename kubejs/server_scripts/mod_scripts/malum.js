

onEvent('tags.items', event => {
	event.add(`forge:ores/soulstone`, 'malum:soulstone_ore')
	event.add(`forge:ores/soulstone`, 'malum:deepslate_soulstone_ore')
	event.add(`create:crushed_ores`, 'malum:crushed_soulstone')
	event.add(`create:crushed_ores/soulstone`, 'malum:crushed_soulstone')
 });
 
onEvent('recipes', event => {
	event.shapeless('malum:holy_sapball', ['malum:holy_sap']).id(`mbm2:malum/holy_sap`)
	event.shapeless('malum:unholy_sapball', ['malum:unholy_sap']).id(`mbm2:malum/unholy_sap`)

	event.remove({id: 'malum:sticky_piston_from_sapballs'})
	
	
	  //Blazing Quartz
  	global.tinkersMelting(event, 'tconstruct:molten_quartz', 50, 'tconstruct:blazing_blood', 50, 'malum:blazing_quartz', 1000, 142, `mbm2:smeltery/melting/blazing_quartz`)
});
