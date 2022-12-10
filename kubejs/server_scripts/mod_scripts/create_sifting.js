/*

onEvent('tags.items', event => {
	event.add(`forge:ingots`, `naturesaura:tainted_gold`)
	 event.remove(`create:crushed_ores/${item}`, `kubejs:crushed_${item}`)
 });
 */
onEvent('recipes', event => {
	event.remove({id: 'createsifter:sifting/gravel_brass_mesh'})
	global.createSifting(event, [Item.of('createsifter:brass_mesh').toJson(), Ingredient.of('#forge:gravel').toJson()], [
		Item.of(`#forge:nuggets/copper`).withChance(0.20).toResultJson(),
		Item.of(`#forge:nuggets/zinc`).withChance(0.25).toResultJson(),
		Item.of(`#forge:nuggets/iron`).withChance(0.15).toResultJson(),
		Item.of(`#forge:nuggets/gold`).withChance(0.25).toResultJson(),
		Item.of(`#forge:gems/lapis`).withChance(0.20).toResultJson(),
		Item.of(`coal`).withChance(0.25).toResultJson(),
		Item.of(`flint`).withChance(0.10).toResultJson(),
		Item.of(`create:experience_nugget`).withChance(0.15).toResultJson(),
	], 500, 'mbm2:sifting/gravel_brass_mesh')
});
