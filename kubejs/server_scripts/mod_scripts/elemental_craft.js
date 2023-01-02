

onEvent('tags.items', event => {
	event.add(`elementalcraft:basic_infused`, 'elementalcraft:drenched_iron_ingot')
	event.add(`elementalcraft:basic_infused`, 'elementalcraft:air_silk')
	event.add(`elementalcraft:basic_infused`, 'elementalcraft:whiterock')
	event.add(`elementalcraft:basic_infused`, 'elementalcraft:burnt_glass')
});
 
onEvent('recipes', event => {
	//Nether Wart
	global.elementalcraftInfusion(event, Ingredient.of('#forge:mushrooms'), Item.of('minecraft:nether_wart'), 'fire', 1000, 'mbm:infusion/nether_wart')
	
	
});
