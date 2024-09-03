

onEvent('tags.items', event => {
		event.add(`forge:storage_blocks`, 'extendedcrafting:redstone_ingot_block')
		event.add(`forge:storage_blocks/red_alloy`, 'extendedcrafting:redstone_ingot_block')

		event.add(`forge:ingots`, 'extendedcrafting:redstone_ingot')
		event.add(`forge:ingots/red_alloy`, 'extendedcrafting:redstone_ingot')

		event.add(`forge:nuggets`, 'extendedcrafting:redstone_nugget')
		event.add(`forge:nuggets/red_alloy`, 'extendedcrafting:redstone_nugget')
  });

onEvent('recipes', event => {
	event.remove({id: 'extendedcrafting:redstone_ingot'})
	event.remove({id: 'extendedcrafting:ender_ingot'})
	event.remove({id: 'extendedcrafting:luminessence'})

	//black iron slate
	event.replaceInput({id: 'extendedcrafting:black_iron_slate'}, 'extendedcrafting:black_iron_ingot', '#forge:plates/black_iron')

	//luminessence
	//event.recipes.createMixing(['2x extendedcrafting:luminessence'], [Fluid.of('kubejs:molten_luminite', 1000), '4x tconstruct:glow_ball', '2x naturalist:glow_goop', 'botania:light_relay']).superheated().id('mbm2:mixing/luminessence_create')
	//event.recipes.multiblocked.multiblock('mixer')
  	//.inputItems('4x tconstruct:glow_ball', '2x naturalist:glow_goop', 'botania:light_relay')
  	//.inputFluid(Fluid.of('kubejs:molten_luminite', 1000))
  	//.outputItem(Item.of('4x extendedcrafting:luminessence'))
  	//.setPerTick(true)
  	//.inputFE(2000)
  	//.duration(300)

	//luminessence
	event.recipes.multiblocked.multiblock("chemical_reactor")
	.inputItems('4x tconstruct:glow_ball', '2x naturalist:glow_goop', 'botania:light_relay')
	.inputFluid(Fluid.of('kubejs:molten_luminite', 1000))
	.outputItem(Item.of('4x extendedcrafting:luminessence'))
	.setPerTick(true)
	.inputFE(4000)
	.duration(200)

	//Catalyst and Components
	event.remove({output: 'extendedcrafting:redstone_component'})
	event.shaped('extendedcrafting:redstone_component', ['AAB','CDA','CCA'], {A: '#forge:spools/red_alloy',B: 'extendedcrafting:luminessence',C: 'extendedcrafting:black_iron_slate',D: 'powah:dielectric_paste'}).id('mbm2:ex_crafting/redstone_component')
	event.remove({output: 'extendedcrafting:redstone_catalyst'})
	event.shaped('extendedcrafting:redstone_catalyst', ['ABA','BCB','ABA'], {A: 'extendedcrafting:redstone_component',B: 'extendedcrafting:luminessence',C: 'kubejs:black_iron_plating'}).id('mbm2:ex_crafting/redstone_catalyst')

	event.remove({output: 'extendedcrafting:basic_component'})
	event.shaped('extendedcrafting:basic_component', ['AAB','CDA','CCA'], {A: '#forge:spools/white_alloy',B: 'extendedcrafting:luminessence',C: 'extendedcrafting:black_iron_slate',D: 'powah:dielectric_paste'}).id('mbm2:ex_crafting/basic_component')

	event.remove({output: 'extendedcrafting:basic_catalyst'})
	event.shaped('extendedcrafting:basic_catalyst', ['ABA','BCB','ABA'], {A: 'extendedcrafting:basic_component',B: 'extendedcrafting:luminessence',C: 'kubejs:black_iron_plating'}).id('mbm2:ex_crafting/basic_catalyst')

	event.remove({output: 'extendedcrafting:advanced_component'})
	event.shaped('extendedcrafting:advanced_component', ['AAB','CDA','CCA'], {A: '#forge:spools/lunar_alloy',B: 'extendedcrafting:luminessence',C: 'extendedcrafting:black_iron_slate',D: 'powah:dielectric_paste'}).id('mbm2:ex_crafting/advanced_component')

	event.remove({output: 'extendedcrafting:advanced_catalyst'})
	event.shaped('extendedcrafting:advanced_catalyst', ['ABA','BCB','ABA'], {A: 'extendedcrafting:advanced_component',B: 'extendedcrafting:luminessence',C: 'extendedcrafting:basic_catalyst'}).id('mbm2:ex_crafting/advanced_catalyst')
	
	//More Catalyst stuff
	event.remove({output: 'extendedcrafting:elite_catalyst'})
	event.shaped('extendedcrafting:elite_catalyst', ['ABA','BCB','ABA'], {A: 'extendedcrafting:elite_component',B: 'extendedcrafting:luminessence',C: 'extendedcrafting:advanced_catalyst'}).id('mbm2:ex_crafting/elite_catalyst')
	event.remove({output: 'extendedcrafting:ultimate_catalyst'})
	event.shaped('extendedcrafting:ultimate_catalyst', ['ABA','BCB','ABA'], {A: 'extendedcrafting:ultimate_component',B: 'extendedcrafting:luminessence',C: 'extendedcrafting:elite_catalyst'}).id('mbm2:ex_crafting/ultimate_catalyst')

	event.remove({output: 'extendedcrafting:elite_component'})
	event.shaped('extendedcrafting:elite_component', ['AAB','CDA','CCA'], {A: 'mekanism:enriched_diamond',B: 'extendedcrafting:luminessence',C: 'extendedcrafting:black_iron_slate',D: 'powah:dielectric_paste'}).id('mbm2:ex_crafting/elite_component')
	event.remove({output: 'extendedcrafting:ultimate_component'})
	event.shaped('extendedcrafting:ultimate_component', ['AAB','CDA','CCA'], {A: 'chemlib:beryllium_ingot',B: 'extendedcrafting:luminessence',C: 'extendedcrafting:black_iron_slate',D: 'powah:dielectric_paste'}).id('mbm2:ex_crafting/ultimate_component')


	//table recipe reworks
	event.remove({output: 'extendedcrafting:basic_table'})
	event.shaped('extendedcrafting:basic_table', ['ABA','CDC','AEA'], {A: 'extendedcrafting:basic_component',B: 'extendedcrafting:basic_catalyst',C: 'ars_nouveau:glyph_craft',D: 'kubejs:white_alloy_storage_block',E: 'extendedcrafting:pedestal'}).id('mbm2:ex_crafting/basic_table')
	event.remove({output: 'extendedcrafting:advanced_table'})
	event.shaped('extendedcrafting:advanced_table', ['ABA','CDC','AEA'], {A: 'extendedcrafting:advanced_component',B: 'extendedcrafting:advanced_catalyst',C: 'ars_nouveau:glyph_craft',D: 'kubejs:lunar_alloy_storage_block',E: 'extendedcrafting:basic_table'}).id('mbm2:ex_crafting/advanced_table')
	
	//Packagedex crafting
	event.remove({output: 'packagedexcrafting:basic_crafter'})
	event.shaped('packagedexcrafting:basic_crafter', ['ABA','CDC','AEA'], {A: 'kubejs:black_iron_plate',B: 'packagedauto:me_package_component',C: 'ae2:molecular_assembler',D: 'extendedcrafting:redstone_catalyst',E: 'extendedcrafting:basic_table'}).id('mbm2:ex_crafting/basic_packager')
	event.remove({output: 'packagedexcrafting:advanced_crafter'})
	event.shaped('packagedexcrafting:advanced_crafter', ['ABA','CDC','AEA'], {A: 'extendedcrafting:advanced_component',B: 'extendedcrafting:advanced_catalyst',C: 'ae2:molecular_assembler',D: 'kubejs:lunar_alloy_storage_block',E: 'packagedexcrafting:basic_crafter'}).id('mbm2:ex_crafting/advanced_packager')

	//Removed for use later //Bruh don't hide stuff without adding new recipes
	//let useLater =[
	//	'extendedcrafting:elite_table',
	//	'extendedcrafting:ultimate_table',
	//	'extendedcrafting:ender_catalyst',
	//	'extendedcrafting:enhanced_ender_catalyst',
	//	'extendedcrafting:crystaltine_catalyst',
	//	'extendedcrafting:the_ultimate_catalyst',
	//	'extendedcrafting:ultimate_catalyst',
	//	'extendedcrafting:elite_catalyst',
	//	'packagedexcrafting:elite_crafter',
	//	'packagedexcrafting:ultimate_crafter',
	//	'packagedexcrafting:combination_crafter',
	//	'packagedexcrafting:marked_pedestal',
	//	'extendedcrafting:elite_component',
	//	'extendedcrafting:ultimate_component',
	//	'extendedcrafting:ender_component',
	//	'extendedcrafting:enhanced_ender_component',
	//	'extendedcrafting:crystaltine_component',
	//	'extendedcrafting:the_ultimate_component']
	//
	//useLater.forEach(exOutput =>{
	//	event.remove({output: `${exOutput}`})
	//})
});
