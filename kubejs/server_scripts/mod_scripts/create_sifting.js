onEvent('recipes', event => {

	
	event.replaceInput({id: 'createsifter:sifter'}, 'create:cogwheel', '#extendedgears:small_cogwheel')

	//Gravel
	event.remove({id: 'createsifter:sifting/gravel_brass_mesh'})
	global.createSifting(event, [Item.of('createsifter:brass_mesh').toJson(), Item.of('#forge:gravel').toJson()], [
		Item.of(`#forge:nuggets/copper`).withChance(0.20).toResultJson(),
		Item.of(`#forge:nuggets/tin`).withChance(0.25).toResultJson(),
		Item.of(`#forge:nuggets/iron`).withChance(0.20).toResultJson(),
		Item.of(`#forge:nuggets/silver`).withChance(0.25).toResultJson(),
		Item.of(`#forge:gems/lapis`).withChance(0.20).toResultJson(),
		Item.of(`coal`).withChance(0.25).toResultJson(),
		Item.of(`flint`).withChance(0.10).toResultJson(),
		Item.of(`create:experience_nugget`).withChance(0.15).toResultJson(),
	], 500, 'mbm2:sifting/gravel_brass_mesh')

	//Netherrack
	global.createSifting(event, [Item.of('createsifter:brass_mesh').toJson(), Item.of('#forge:netherrack').toJson()], [
		Item.of(`#forge:nuggets/gold`).withChance(0.25).toResultJson(),
		Item.of(`#forge:nuggets/zinc`).withChance(0.20).toResultJson(),
		Item.of(`#forge:nuggets/nickel`).withChance(0.20).toResultJson(),
		Item.of(`#forge:nuggets/aluminum`).withChance(0.15).toResultJson(),
		Item.of(`#forge:gems/sulfur`).withChance(0.20).toResultJson(),
		Item.of(`minecraft:glowstone_dust`).withChance(0.15).toResultJson(),
		Item.of(`create:cinder_flour`).withChance(0.33).toResultJson(),
		Item.of(`create:experience_nugget`).withChance(0.15).toResultJson(),
	], 500, 'mbm2:sifting/netherrack_brass_mesh')

	//Scrap Metal
	global.createSifting(event, [Item.of('createsifter:brass_mesh').toJson(), Item.of('apotheosis:common_material').toJson()], [
		Item.of('tconstruct:debris_nugget').withChance(0.90).toResultJson(),
		Item.of('tconstruct:debris_nugget').withChance(0.75).toResultJson(),
		Item.of('tconstruct:debris_nugget').withChance(0.50).toResultJson(),
		Item.of('tconstruct:debris_nugget').withChance(0.25).toResultJson(),
		Item.of('kubejs:steel_scraps').withChance(0.50).toResultJson(),
		Item.of('mekanism:dirty_netherite_scrap').withChance(0.25).toResultJson(),
		Item.of('minecraft:netherite_scrap').withChance(0.15).toResultJson(),
	], 500, 'mbm2:sifting/common_material_brass_mesh')
});
