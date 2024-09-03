onEvent('recipes', event => {

	
	event.replaceInput({id: 'createsifter:sifter'}, 'create:cogwheel', '#mbm2:small_cogs')


	event.remove({id: `createsifter:sifting/gravel_andesite_mesh`})
	event.remove({id: `createsifter:sifting/gravel_zinc_mesh`})
	
	


	//Gravel
	event.remove({id: 'createsifter:sifting/gravel_andesite_mesh'})
	global.createSifting(event, [Item.of('createsifter:andesite_mesh').toJson(), Item.of('#forge:gravel').toJson()], [
		Item.of('#forge:ores/fragment/vincyte').withChance(0.10).toResultJson(),
		//Item.of('#forge:ores/fragment/jimmium').withChance(0.04).toResultJson(),
		//Item.of('#forge:ores/fragment/densite').withChance(0.02).toResultJson(),
		Item.of(`coal`).withChance(0.20).toResultJson(),
		Item.of(`flint`).withChance(0.33).toResultJson(),
	], 500, 'mbm2:sifting/gravel_andesite_mesh')


	//Gravel
	event.remove({id: 'createsifter:sifting/gravel_zinc_mesh'})
	global.createSifting(event, [Item.of('createsifter:zinc_mesh').toJson(), Item.of('#forge:gravel').toJson()], [
		//Item.of('#forge:ores/fragment/vincyte').withChance(0.07).toResultJson(),
		//Item.of('#forge:ores/fragment/jimmium').withChance(0.07).toResultJson(),
		Item.of('#forge:ores/fragment/densite').withChance(0.10).toResultJson(),
		Item.of(`#forge:gems/lapis`).withChance(0.10).toResultJson(),
		Item.of(`coal`).withChance(0.25).toResultJson(),
		Item.of(`create:experience_nugget`).withChance(0.05).toResultJson(),
	], 500, 'mbm2:sifting/gravel_zinc_mesh')

	//Gravel
	event.remove({id: 'createsifter:sifting/gravel_brass_mesh'}) //75% chance at a fragment = 1 stack of gravel = 12 raw ore / 3
	global.createSifting(event, [Item.of('createsifter:brass_mesh').toJson(), Item.of('#forge:gravel').toJson()], [
		//Item.of('#forge:ores/fragment/vincyte').withChance(0.10).toResultJson(),
		Item.of('#forge:ores/fragment/jimmium').withChance(0.10).toResultJson(),
		//Item.of('#forge:ores/fragment/densite').withChance(0.05).toResultJson(),
		Item.of(`#forge:gems/lapis`).withChance(0.20).toResultJson(),
		Item.of(`create:experience_nugget`).withChance(0.10).toResultJson(),
	], 500, 'mbm2:sifting/gravel_brass_mesh')

	//Netherrack
	global.createSifting(event, [Item.of('createsifter:brass_mesh').toJson(), Item.of('#forge:netherrack').toJson()], [
		Item.of('#forge:ores/fragment/imortite').withChance(0.10).toResultJson(),
		//Item.of('#forge:ores/fragment/kharaxium').withChance(0.10).toResultJson(),
		Item.of('#forge:ores/fragment/potentium').withChance(0.05).toResultJson(),
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

	//Arcane Sand w/Zinc
	global.createSifting(event, [Item.of('createsifter:zinc_mesh').toJson(), Item.of('kubejs:arcane_sand').toJson()], [
		Item.of('forbidden_arcanus:arcane_crystal_dust_speck').withChance(0.33).toResultJson(),
		Item.of('elementalcraft:inert_crystal').withChance(0.15).toResultJson(),
		Item.of('create:experience_nugget').withChance(0.10).toResultJson(),
	], 500, 'mbm2:sifting/arcane_sand_zinc_mesh')

	//Arcane Sand w/Brass
	global.createSifting(event, [Item.of('createsifter:brass_mesh').toJson(), Item.of('kubejs:arcane_sand').toJson()], [
		Item.of('forbidden_arcanus:arcane_crystal_dust_speck').withChance(0.50).toResultJson(),
		Item.of('elementalcraft:inert_crystal').withChance(0.33).toResultJson(),
		Item.of('create:experience_nugget').withChance(0.10).toResultJson(),
		Item.of('botania:fertilizer').withChance(0.50).toResultJson(),
	], 500, 'mbm2:sifting/arcane_sand_brass_mesh')
	
});
