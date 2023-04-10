/*

onEvent('tags.items', event => {
	event.add(`forge:ingots`, `naturesaura:tainted_gold`)
	 event.remove(`create:crushed_ores/${item}`, `kubejs:crushed_${item}`)
 });
 */
onEvent('recipes', event => {
	//HOP Dark Quartz??
    event.replaceInput({id: 'botania:quartz_dark'}, '#minecraft:coals', '#forge:dusts/hop_graphite')
    //event.replaceInput({id: 'lazierae2:compat/botania/infuser/quartz_dark'}, 'minecraft:coal', '#forge:dusts/hop_graphite')
	
	

//Living Wood Twig
event.remove({id: 'botania:livingwood_twig'})
global.naturesauraAltar(event, 'botania:livingwood_twig', Ingredient.of('#botania:livingwood_logs').toJson(), 'naturesaura:overworld', 15000, 80, 'mbm2:altar/livingwood_twig')
//event.shaped('botania:livingwood_twig', [
//  ' A',
//  'A '
//], {
//  A: '#botania:livingwood_logs'
//}).id('mbm2:crafting/livingwood_twig')

});
