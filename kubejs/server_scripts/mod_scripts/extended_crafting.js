

onEvent('tags.items', event => {
		event.add(`forge:storage_blocks`, 'extendedcrafting:redstone_ingot_block')
		event.add(`forge:storage_blocks/red_alloy`, 'extendedcrafting:redstone_ingot_block')

		event.add(`forge:ingots`, 'extendedcrafting:redstone_ingot')
		event.add(`forge:ingots/red_alloy`, 'extendedcrafting:redstone_ingot')

		event.add(`forge:nuggets`, 'extendedcrafting:redstone_nugget')
		event.add(`forge:nuggets/red_alloy`, 'extendedcrafting:redstone_nugget')
		
		event.add(`forge:storage_blocks`, 'extendedcrafting:crystaltine_block')
		event.add(`forge:storage_blocks/crystaltine`, 'extendedcrafting:crystaltine_block')

		event.add(`forge:ingots`, 'extendedcrafting:crystaltine_ingot')
		event.add(`forge:ingots/crystaltine`, 'extendedcrafting:crystaltine_ingot')

		event.add(`forge:nuggets`, 'extendedcrafting:crystaltine_nugget')
		event.add(`forge:nuggets/crystaltine`, 'extendedcrafting:crystaltine_nugget')
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
	var ExtendedRecipes = [
		{
		  'type': 'redstone',
		  'base_item': 'extendedcrafting:black_iron_slate',
		  'add_item': 'powah:dielectric_paste',
		  'flavor_item': '#forge:spools/red_alloy',
		},
		{
		  'type': 'basic',
		  'base_item': 'extendedcrafting:black_iron_slate',
		  'add_item': 'powah:dielectric_paste',
		  'flavor_item': '#forge:spools/white_alloy',
		},
		{
		  'type': 'advanced',
		  'base_item': 'extendedcrafting:black_iron_slate',
		  'add_item': 'powah:dielectric_paste',
		  'flavor_item': '#forge:spools/lunar_alloy',
		},
		{
		  'type': 'elite',
		  'base_item': 'extendedcrafting:black_iron_slate',
		  'add_item': 'powah:dielectric_paste',
		  'flavor_item': 'mekanism:enriched_diamond',
		},
		{
		  'type': 'ultimate',
		  'base_item': 'extendedcrafting:black_iron_slate',
		  'add_item': 'powah:dielectric_paste',
		  'flavor_item': 'chemlib:beryllium_ingot',
		},
		{
		  'type': 'ender',
		  'base_item': 'extendedcrafting:black_iron_slate',
		  'add_item': 'powah:dielectric_paste',
		  'flavor_item': 'extendedcrafting:ender_ingot',
		},
		{
		  'type': 'enhanced_ender',
		  'base_item': 'extendedcrafting:black_iron_slate',
		  'add_item': 'powah:dielectric_paste',
		  'flavor_item': 'extendedcrafting:enhanced_ender_ingot',
		},
		{
		  'type': 'crystaltine',
		  'base_item': 'extendedcrafting:black_iron_slate',
		  'add_item': 'powah:dielectric_paste',
		  'flavor_item': 'extendedcrafting:crystaltine_ingot',
		},
		{
		  'type': 'the_ultimate',
		  'base_item': 'extendedcrafting:black_iron_slate',
		  'add_item': 'powah:dielectric_paste',
		  'flavor_item': 'extendedcrafting:the_ultimate_ingot',
		},
	]
	ExtendedRecipes.forEach(item => {
		//Component
		event.remove({output: `extendedcrafting:${item.type}_component`})
		event.shaped(`extendedcrafting:${item.type}_component`, 
			[
				'AAB',
				'CDA',
				'CCA'
			],
		{
			A: item.flavor_item,
			B: 'extendedcrafting:luminessence',
			C: item.base_item,
			D: item.add_item,
		}).id(`mbm2:ex_crafting/${item.type}_component`)

		//Catalyst
		event.remove({output: `extendedcrafting:${item.type}_catalyst`})
		event.shaped(`extendedcrafting:${item.type}_catalyst`, 
			[
				'ABA',
				'BCB',
				'ABA'
			], 
		{
			A: `extendedcrafting:${item.type}_component`,
			B: 'extendedcrafting:luminessence',
			C: item.base_item
		}).id(`mbm2:ex_crafting/${item.type}_catalyst`)
	})


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

	event.remove({output: 'extendedcrafting:crystaltine_ingot'})
	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "ABBBBBA",
		  "ACDEDCA",
		  "ACDEDCA",
		  "ABBBBBA",
		],
		"key": {
		  "A": {
			"item": "botania:mana_diamond"
		  },
		  "B": {
			"item": "compressedcreativity:brass_gilded_lapis_lazuli"
		  },
		  "C": {
			"item": "forbidden_arcanus:arcane_gold_ingot"
		  },
		  "D": {
			"item": "kubejs:crystalized_alloy_ingot"
		  },
		  "E": {
			"item": "kubejs:elemental_star"
		  }
		},
		"result": Item.of('2x extendedcrafting:crystaltine_ingot').toResultJson()
	  }).id('mbm2:ex_crafting/crystaltine_ingot')


});
