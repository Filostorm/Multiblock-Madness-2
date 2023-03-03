global.createCrushed = [
	'iron', 
	'gold', 
	'copper', 
	'zinc', 
	'osmium', 
	'platinum', 
	'silver', 
	'tin', 
	'lead', 
	'aluminum', 
	'uranium', 
	'nickel'
]

onEvent('tags.items', event => {
	global.createCrushed.forEach((item) => {
		event.add(`forge:crushed_ores/${item}`, `create:crushed_${item}_ore`)
		event.add(`forge:crushed_ores`, `create:crushed_${item}_ore`)
	 	event.remove(`forge:crushed_ores/${item}`, `kubejs:crushed_${item}`)
	 })
	 global.newMaterialParts.forEach((item) => {
		if(item.type == 'compound_ore' && item.tier == 1){
		event.add(`mbm2:ores/compound_ore/grits/tier_one`, `#forge:grits/${item.material}`)
		event.add(`mbm2:ores/compound_ore/raw_materials/tier_one`, `kubejs:raw_${item.material}`)
		}
	 })
 });
onEvent('recipes', event => {
	global.createCrushed.forEach((item) => {
		event.remove({id: `create:crushing/raw_${item}_ore`})
		event.remove({id: `create:crushing/raw_${item}_block`})
		event.remove({id: `create:crushing/raw_${item}`})
		event.remove({id: `create:splashing/crushed_${item}_ore`})
		event.remove({id: `create:splashing/thermal/crushed_${item}_ore`})
		event.remove({id: `create:splashing/mekanism/crushed_${item}_ore`})
		event.remove({id: `create:blasting/${item}_ingot_from_crushed`})
		event.remove({id: `create:smelting/${item}_ingot_from_crushed`})
		event.remove({id: `create:blasting/${item}_ingot_compat_thermal`})
		event.remove({id: `create:smelting/${item}_ingot_compat_thermal`})
		event.remove({id: `create:blasting/ingot_${item}_compat_mekanism`})
		event.remove({id: `create:smelting/ingot_${item}_compat_mekanism`})
		
	})
/*
//Thanks Nat!
//Fluid tags for outputs
var fluidTagLookup = {}
Fluid.getTypes().forEach(fluid => {
  Fluid.of(fluid).tags.forEach(tag =>{
    if (tag in fluidTagLookup){
		fluidTagLookup[tag].push(fluid)
    } else {
		fluidTagLookup[tag] = [fluid]
    }
  })
})
console.log(fluidTagLookup[`forge:molten_${item.material}`][1]);
*/
	//XP
	global.ieSqueezer(event, Fluid.of('pneumaticcraft:memory_essence', 100), Item.of('create:experience_nugget'), 6400, 'kubejs:squeezer/experience')
	global.ieMixer(event, Fluid.of('kubejs:gemstone_catalyst_mixture', 1000), {"tag":"forge:experience","amount":1000}, Item.of('apotheosis:gem_dust'), 4000, 'kubejs:mixer/gemstufffluid')
	global.ieMixer(event, Fluid.of('kubejs:gemstone_catalyst_mixture', 250), {"tag":"forge:experience","amount":250}, Item.of('ars_nouveau:source_gem'), 4000, 'kubejs:mixer/gemstufffluid_source')
	
	//Water Filter
	event.shaped('4x kubejs:water_filter', [
		'RWR',
		'PWP',
		'RWR'
	], {
		W: 'thermal:white_rockwool',
		P: `#forge:plates/white_alloy`,
		R: '#forge:rods/iron'
	}).id(`mbm2:water_filter`)
	//Filtered Water
	global.ieMixer(event, Fluid.of('kubejs:purified_water', 2000), {"tag":"minecraft:water","amount":2000}, Item.of('kubejs:water_filter'), 4000, 'mbm2:filtering_water')


	global.newMaterialParts.forEach((item) => {
		event.remove({id: `immersiveengineering:arcfurnace/dust_${item.material}`})
		event.remove({id: `immersiveengineering:arcfurnace/ore_${item.material}`})
		event.remove({id: `immersiveengineering:arcfurnace/raw_block_${item.material}`})
		event.remove({id: `immersiveengineering:arcfurnace/raw_ore_${item.material}`})
		event.remove({id: `immersiveengineering:crusher/raw_block_${item.material}`})
		event.remove({id: `immersiveengineering:crusher/raw_ore_${item.material}`})
		event.remove({id: `mekanism:processing/${item.material}/clump/from_raw_block`})
		event.remove({id: `mekanism:processing/${item.material}/shard/from_raw_block`})
		event.remove({id: `mekanism:processing/${item.material}/slurry/dirty/from_raw_block`})
		event.remove({id: `tconstruct:common/materials/${item.material}_ingot_smelting`})
		event.remove({id: `tconstruct:smeltery/melting/metal/${item.material}/dust`})
		event.remove({id: `tconstruct:smeltery/melting/metal/${item.material}/ore_singular`})
		event.remove({id: `tconstruct:smeltery/melting/metal/${item.material}/raw_block`})
		event.remove({id: `tconstruct:smeltery/melting/metal/${item.material}/raw`})

		if (item.ore) {


			//Can't Smelt Complicated Metal
			event.remove({output: `#forge:ingots/${item.material}`, type: 'minecraft:smelting'})
			event.remove({output: `#forge:ingots/${item.material}`, type: 'minecraft:blasting'})

			//Make some dust
			if (Item.of(`#forge:dusts/${item.material}`) != null) {
				//Crushed Ore
				if (Item.of(`#forge:crushed_ores/${item.material}`) != null) {
				event.recipes.immersiveengineeringCrusher(`#forge:dusts/${item.material}`, `#forge:crushed_ores/${item.material}`).id(`mbm2:immersive/crushing/crushed_${item.material}`)
				}
				//Washed Ore
				if (Item.of(`#forge:washed_ores/${item.material}`) != null) {
				event.recipes.immersiveengineeringCrusher(`#forge:dusts/${item.material}`, `#forge:washed_ores/${item.material}`).id(`mbm2:immersive/crushing/washed_${item.material}`)
				event.recipes.createMilling([`#forge:dusts/${item.material}`], [`#forge:washed_ores/${item.material}`]).id(`mbm2:create/crushing/washed_${item.material}`)
				}
				//Raw Ore
				if (Item.of(`#forge:raw_materials/${item.material}`) != null) {
				event.recipes.immersiveengineeringCrusher(`#forge:dusts/${item.material}`, `#forge:raw_materials/${item.material}`).id(`mbm2:immersive/crushing/raw_${item.material}`)
				}
				//Grit Washing
				if (Item.of(`#forge:grits/${item.material}`) != null) {
				event.recipes.createSplashing([Item.of(`#forge:dusts/${item.material}`).withChance(0.75), Item.of('gravel').withChance(0.25)], `#forge:grits/${item.material}`).id(`mbm2:washing/grit_${item.material}`)
				}
				//Fine Dust
				if (Item.of(`#forge:fine_dusts/${item.material}`) != null) {
					event.recipes.createsifterSifting([Item.of(`#forge:fine_dusts/${item.material}`).withChance(0.5), Item.of(`sand`).withChance(0.1)], [Item.of(`#forge:dusts/${item.material}`),'createsifter:brass_mesh']).processingTime(200).id(`mbm2:sifting/${item.material}_fine_dust`)
				}
			}

			if (item.type == 'base_metal' || item.type == 'compound_ore') {

		///////////////////// ORE REFINING STEP 0.5 //////////////////
				//Create Washing 
				event.recipes.createSplashing([`#forge:grits/${item.material}`, Item.of(`#forge:grits/${item.material}`).withChance(0.75), Item.of('gravel').withChance(0.25)], `#forge:crushed_ores/${item.material}`).id(`mbm2:washing/crushed_${item.material}`)


				if (item.byproducts != null) {
					/////////////////////////////////////////////////////////
					/////////////////// BYPRODUCT VAR SETUP /////////////////
					/////////////////////////////////////////////////////////

					///////////////////// BYPRODUCT STEP 1 //////////////////
					if (Item.of(`#forge:grits/${item.byproducts[0]}`) != null) 
					{
						global.Tier1Byproduct = `#forge:grits/${item.byproducts[0]}`
					}
					else {
						global.Tier1Byproduct = `#forge:grits/${item.material}`
					}
					///////////////////// BYPRODUCT STEP 2 //////////////////
					if (Item.of(`#forge:grits/${item.byproducts[1]}`) != null) 
					{
						global.Tier2Byproduct = `#forge:grits/${item.byproducts[1]}`
					} 
					else if (Item.of(`#forge:grits/${item.byproducts[0]}`) != null) 
					{
						global.Tier2Byproduct = `#forge:grits/${item.byproducts[0]}`
					}
					else {
						global.Tier2Byproduct = `#forge:grits/${item.material}`
					}
					///////////////////// BYPRODUCT STEP 3 //////////////////
					if (Item.of(`#forge:grits/${item.byproducts[2]}`) != null) 
					{
						global.Tier3Byproduct = `#forge:grits/${item.byproducts[2]}`
					} 
					else if (Item.of(`#forge:grits/${item.byproducts[1]}`) != null) 
					{
						global.Tier3Byproduct = `#forge:grits/${item.byproducts[1]}`
					} 
					else if (Item.of(`#forge:grits/${item.byproducts[0]}`) != null) 
					{
						global.Tier3Byproduct = `#forge:grits/${item.byproducts[0]}`
					}
					else {
						global.Tier3Byproduct = `#forge:grits/${item.material}`
					}
				} else {	  
					global.Tier1Byproduct = `#forge:grits/${item.material}`
					global.Tier2Byproduct = `#forge:grits/${item.material}`
					global.Tier3Byproduct = `#forge:grits/${item.material}`
				}
				///////////////////// ORE PROCESSING STEP 1 //////////////////
				//Create Crushing
				event.recipes.createCrushing([
					`#forge:crushed_ores/${item.material}`,
					Item.of(global.Tier1Byproduct).withChance(0.25), 
					Item.of('create:experience_nugget').withChance(0.5)
				], `#forge:raw_materials/${item.material}`).id(`mbm2:crushing/raw_${item.material}`)

				///////////////////// ORE PROCESSING STEP 2 //////////////////
				//Ore Flotation
				event.recipes.multiblocked.multiblock("flotation")
				.inputFluid(Fluid.of('water', 500))
				.inputItem(`#forge:crushed_ores/${item.material}`)
				.outputItem(Item.of(`#forge:chunks/${item.material}`))
				.outputFluid(Fluid.of('kubejs:sludge', 250))
				.setPerTick(true)
				.inputFE(4096)
				.duration(100)
				//Ore Flotation w/ Purified Water
				event.recipes.multiblocked.multiblock("flotation")
				.inputFluid(Fluid.of('kubejs:purified_water', 500))
				.inputItem(`#forge:crushed_ores/${item.material}`)
				.outputItem(Item.of(`#forge:chunks/${item.material}`))
				.setChance(0.25)
				.outputItem(Item.of(global.Tier2Byproduct))
				.setChance(1)
				.outputFluid(Fluid.of('kubejs:sludge', 250))
				.setPerTick(true)
				.inputFE(4096)
				.duration(100)
				///////////////////// ORE PROCESSING STEP 3 //////////////////
				//Ore Leaching
				event.recipes.multiblocked.multiblock("leaching")
				.inputFluid(Fluid.of('mekanism:sulfuric_acid', 100))
				.inputFluid(Fluid.of('chemlib:nitric_acid_fluid', 100))
				.inputItem(`#forge:chunks/${item.material}`)
				.outputItem(Item.of(`#forge:leached_ores/${item.material}`))
				.setChance(0.25)
				.outputItem(Item.of(global.Tier3Byproduct))
				.setChance(1)
				.setPerTick(true)
				.inputFE(4096*4)
				.duration(200)
			}
			if (item.type == 'base_metal') {
		///////////////////// ORE PROCESSING CASH OUT //////////////////

				let orePartsProcessed = [
					'raw_materials', 	// 1
					'crushed_ores', 	// 2
					'chunks', 			// 3
					'leached_ores', 	// 4
					'deposits', 		// 5
					'crystals', 		// 6
				]
				let orePartsRefined = [
					'grits', 			// 0
					'dusts',			// 0
					//'washed_ores', 		// 1?
					//'clusters', 		// 2?
					//'infused_ores', 	// 3?
					//'bricks', 			// 4?
					//'shards', 			// 5?
				]

				let tier0Processed = [`#forge:${orePartsProcessed[0]}/${item.material}`, `#forge:${orePartsProcessed[1]}/${item.material}`, `#forge:${orePartsProcessed[2]}/${item.material}`, `#forge:${orePartsProcessed[3]}/${item.material}`, `#forge:${orePartsProcessed[4]}/${item.material}`,`#forge:${orePartsProcessed[5]}/${item.material}`]
				let tier1Processed = [`#forge:${orePartsProcessed[1]}/${item.material}`, `#forge:${orePartsProcessed[2]}/${item.material}`, `#forge:${orePartsProcessed[3]}/${item.material}`, `#forge:${orePartsProcessed[4]}/${item.material}`, `#forge:${orePartsProcessed[5]}/${item.material}`]
				let tier2Processed = [`#forge:${orePartsProcessed[2]}/${item.material}`, `#forge:${orePartsProcessed[3]}/${item.material}`, `#forge:${orePartsProcessed[4]}/${item.material}`, `#forge:${orePartsProcessed[5]}/${item.material}`]
				let tier3Processed = [`#forge:${orePartsProcessed[3]}/${item.material}`, `#forge:${orePartsProcessed[4]}/${item.material}`, `#forge:${orePartsProcessed[5]}/${item.material}`]
				let tier4Processed = [`#forge:${orePartsProcessed[4]}/${item.material}`, `#forge:${orePartsProcessed[5]}/${item.material}`]
				let tier5Processed = [`#forge:${orePartsProcessed[5]}/${item.material}`]
				
				let orePartsRefinedItems = [
					`#forge:${orePartsRefined[0]}/${item.material}`, 
					`#forge:${orePartsRefined[1]}/${item.material}`,
					//`#forge:${orePartsRefined[2]}/${item.material}`,
					//`#forge:${orePartsRefined[3]}/${item.material}`,
					//`#forge:${orePartsRefined[4]}/${item.material}`,
					//`#forge:${orePartsRefined[5]}/${item.material}`,
					//`#forge:${orePartsRefined[6]}/${item.material}`
				]
				//Cash out at any time after refining

				////////////// TIER 1 OR BELOW /////////////////////
				if (item.tier <= 1) {
						//Ore Part Tier 1 Metal Smelting
						event.smelting(`#forge:ingots/${item.material}`, tier0Processed).id(`mbm2:smelting/t1_ore_part_${item.material}`)
						event.blasting(`#forge:ingots/${item.material}`, tier0Processed).id(`mbm2:blasting/t1_ore_part_${item.material}`)
						event.smelting(`#forge:ingots/${item.material}`, orePartsRefinedItems).id(`mbm2:smelting/ore_refined_part_${item.material}`)
						event.blasting(`#forge:ingots/${item.material}`, orePartsRefinedItems).id(`mbm2:blasting/ore_refined_part_${item.material}`)
						
						//Retro Arcing
						event.recipes.immersiveengineeringArcFurnace(Item.of(`#forge:ingots/${item.material}`), tier0Processed).id(`mbm2:arc_furnace/${item.material}_t1_ore_part`)

						//Retro Blasting
						event.recipes.multiblocked.multiblock("ebf")
						.inputFluid(Fluid.of('mekanism:oxygen', 1000))
						.inputItem(tier0Processed)
						.outputItem(Item.of(`#forge:ingots/${item.material}`))
						.setPerTick(true)
						.inputFE(4096)
						.duration(150)
						//Retro Blasting
						event.recipes.multiblocked.multiblock("ebf")
						.inputFluid(Fluid.of('kubejs:liquid_air', 1000))
						.inputItem(tier0Processed)
						.outputItem(Item.of(`#forge:ingots/${item.material}`))
						.setPerTick(true)
						.inputFE(4096)
						.duration(200)
					
				}

				////////////// TIER 2 /////////////////////
				if (item.tier == 2) {
					event.remove({id: `tconstruct:smeltery/melting/metal/${item.material}/ingot`})
				  	if (item.fluid_id != null) {
						orePartsProcessed.forEach((part) => {
							if (part != 'raw_materials') {
								//Foundry Processing for ores
								global.tinkersOreMelting(event, 'kubejs:molten_slag', 50,  item.fluid_id, 90, `forge:${part}/${item.material}`, 1500, 125, `mbm2:foundry/melting/metal/${item.material}/${part}`)
							}
						})
						//Smeltery Processing for Metal
						orePartsRefined.forEach((part) => {
							global.tinkersMeltingPlain(event, item.fluid_id, 90, Ingredient.of(`#forge:${part}/${item.material}`).toJson(), 1200, 75, `mbm2:smeltery/melting/metal/${item.material}/${part}`)
						})
						global.tinkersMeltingPlain(event, item.fluid_id, 90, Ingredient.of(`#forge:ingots/${item.material}`).toJson(), 1000, 100, `mbm2:smeltery/melting/metal/${item.material}/ingot`)
					} else {
						console.log(`ERROR: ${item.material} needs a fluid_id in Master Material List`)
					}
					//Retro Arcing
					event.recipes.immersiveengineeringArcFurnace(Item.of(`#forge:ingots/${item.material}`), tier1Processed).id(`mbm2:arc_furnace/${item.material}_t2_ore_part`)
					//Retro Blasting
					event.recipes.multiblocked.multiblock("ebf")
					.inputFluid(Fluid.of('kubejs:liquid_air', 1000))
					.inputItem(tier1Processed)
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					.setPerTick(true)
					.inputFE(4096)
					.duration(200)
					//Oxygen
					event.recipes.multiblocked.multiblock("ebf")
					.inputFluid(Fluid.of('mekanism:oxygen', 1000))
					.inputItem(tier1Processed)
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					.setPerTick(true)
					.inputFE(4096)
					.duration(150)
				}
				
			////////////// TIER 3 /////////////////////
				if (item.tier == 3) {
						event.recipes.immersiveengineeringArcFurnace(Item.of(`#forge:ingots/${item.material}`), tier1Processed).id(`mbm2:arc_furnace/${item.material}_t3_ore_part`)

						//Retro Blasting
						event.recipes.multiblocked.multiblock("ebf")
						.inputFluid(Fluid.of('kubejs:liquid_air', 1000))
						.inputItem(tier1Processed)
						.outputItem(Item.of(`#forge:ingots/${item.material}`))
						.setPerTick(true)
						.inputFE(4096)
						.duration(200)
						//Oxygen
						event.recipes.multiblocked.multiblock("ebf")
						.inputFluid(Fluid.of('mekanism:oxygen', 1000))
						.inputItem(tier1Processed)
						.outputItem(Item.of(`#forge:ingots/${item.material}`))
						.setPerTick(true)
						.inputFE(4096)
						.duration(150)
				}
				
				if (item.tier <= 3) {
					event.recipes.immersiveengineeringArcFurnace(Item.of(`#forge:ingots/${item.material}`), orePartsRefinedItems).id(`mbm2:arc_furnace/${item.material}_ore_refined_part`)
				}

			////////////// TIER 4 /////////////////////
				if (item.tier == 4) {
					//Oxygen
					event.recipes.multiblocked.multiblock("ebf")
					.inputFluid(Fluid.of('mekanism:oxygen', 1000))
					.inputItem(tier2Processed)
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					.setPerTick(true)
					.inputFE(4096)
					.duration(150)

					//Air
					event.recipes.multiblocked.multiblock("ebf")
					.inputFluid(Fluid.of('kubejs:liquid_air', 1000))
					.inputItem(tier2Processed)
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					.setPerTick(true)
					.inputFE(4096)
					.duration(200)
				}
				if (item.tier <= 4) {
					//Oxygen
					event.recipes.multiblocked.multiblock("ebf")
					.inputFluid(Fluid.of('mekanism:oxygen', 1000))
					.inputItem(orePartsRefinedItems)
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					.setPerTick(true)
					.inputFE(4096)
					.duration(150)

					//Air
					event.recipes.multiblocked.multiblock("ebf")
					.inputFluid(Fluid.of('kubejs:liquid_air', 1000))
					.inputItem(orePartsRefinedItems)
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					.setPerTick(true)
					.inputFE(4096)
					.duration(200)
				}

				////////////// TIER 5 /////////////////////
				if (item.tier == 5) {
						//EBF
						event.recipes.multiblocked.multiblock("ebf")
						.inputFluid(Fluid.of('mekanism:oxygen', 1000))
						.inputItem(tier2Processed)
						.outputItem(Item.of(`#forge:ingots/${item.material}`))
						//.outputFluid(Fluid.of('mekanism:sulfuric_acid', 1000))
						.setPerTick(true)
						.inputFE(4096)
						.duration(200)

						//Air
						event.recipes.multiblocked.multiblock("ebf")
						.inputFluid(Fluid.of('mekanism:oxygen', 1000))
						.inputItem(orePartsRefinedItems)
						.outputItem(Item.of(`#forge:ingots/${item.material}`))
						.setPerTick(true)
						.inputFE(4096)
						.duration(200)
				}

		}


			if (item.type == 'compound_ore') {
					console.log(`${item.material} is a compound ore!`);
					console.log(`${item.components[0]} is the first output!`);
					
					if (Item.of(`#forge:ingots/${item.components[0]}`) != null) {
						event.smelting(`#forge:ingots/${item.components[0]}`, [`#forge:raw_materials/${item.material}`,`#forge:dusts/${item.material}`,`#forge:grits/${item.material}`]).id(`mbm2:smelting/raw_${item.material}`)
						event.blasting(`#forge:ingots/${item.components[0]}`, [`#forge:raw_materials/${item.material}`,`#forge:dusts/${item.material}`,`#forge:grits/${item.material}`]).id(`mbm2:blasting/raw_${item.material}`)
					} else {
						//For non metalic components
						event.smelting(`2x #forge:dusts/${item.components[0]}`, [`#forge:raw_materials/${item.material}`, `#forge:dusts/${item.material}`])
						event.blasting(`2x #forge:dusts/${item.components[0]}`, [`#forge:raw_materials/${item.material}`, `#forge:dusts/${item.material}`])
					}
					
					//Create Crushing
					event.recipes.createCrushing([
						`#forge:crushed_ores/${item.material}`,
						Item.of(`#forge:grits/${item.material}`).withChance(0.25),
						Item.of('create:experience_nugget').withChance(0.5)
					  ], `#forge:raw_materials/${item.material}`).id(`mbm2:crushing/raw_${item.material}`)


			/////////////////////////////////////////////////////////////////////////////////////////////
			// NEED TO REWORK SORTING TIERS SO WE UNLOCK EVERY TIER OF METAL IN 5 GRADES OF PROCESSING //
			/////////////////////////////////////////////////////////////////////////////////////////////



				  	//Sorting F grade at tier 1
					event.recipes.multiblocked.multiblock('sorter_mk1')
					.inputItem(`4x #forge:crushed_ores/${item.material}`)
					.inputStress(64)
					.outputItem(`#forge:crushed_ores/${item.components[0]}`)
					.outputItem(`#forge:crushed_ores/${item.components[1]}`)
					.outputItem('2x thermal:slag')
					.duration(200)

					//Sorting E grade at tier 1
				  	event.recipes.multiblocked.multiblock('sorter_mk1')
				  	.inputItem(`8x #forge:chunks/${item.material}`)
				  	.inputStress(64)
				  	.outputItem(`2x #forge:chunks/${item.components[0]}`)
				  	.outputItem(`#forge:chunks/${item.components[1]}`)
				  	.outputItem(`#forge:chunks/${item.components[2]}`)
				  	.outputItem('4x thermal:slag')
				  	.duration(200)

					//Sorting F grade at tier 2
				  	event.recipes.multiblocked.multiblock('sorter_mk2')
				  	.inputItem(`5x #forge:crushed_ores/${item.material}`)
				  	.outputItem(`2x #forge:crushed_ores/${item.components[0]}`)
				  	.outputItem(`2x #forge:crushed_ores/${item.components[1]}`)
				  	.outputItem('1x thermal:slag')
						.setPerTick(true)
					.inputFE(1024)
				  	.duration(200)

				  //Sorting E grade at tier 2
					event.recipes.multiblocked.multiblock('sorter_mk2')
					.inputItem(`10x #forge:chunks/${item.material}`)
					.outputItem(`3x #forge:chunks/${item.components[0]}`)
					.outputItem(`3x #forge:chunks/${item.components[1]}`)
					.outputItem(`2x #forge:chunks/${item.components[2]}`)
					.outputItem('2x thermal:slag')
						.setPerTick(true)
					.inputFE(1024*4)
					.duration(200)

				  //Sorting C grade at tier 2
				  	event.recipes.multiblocked.multiblock('sorter_mk2')
				  	.inputItem(`15x #forge:leached_ores/${item.material}`)
				  	.outputItem(`4x #forge:leached_ores/${item.components[0]}`)
				  	.outputItem(`3x #forge:leached_ores/${item.components[1]}`)
				  	.outputItem(`2x #forge:leached_ores/${item.components[2]}`)
				  	.outputItem(`2x #forge:leached_ores/${item.components[3]}`)
				  	.outputItem('3x thermal:slag')
						.setPerTick(true)
					.inputFE(1024*16)
				  	.duration(200)

					//Sorting B grade at tier 2
					  event.recipes.multiblocked.multiblock('sorter_mk2')
					  .inputItem(`20x #forge:deposits/${item.material}`)
					  .outputItem(`5x #forge:deposits/${item.components[0]}`)
					  .outputItem(`4x #forge:deposits/${item.components[1]}`)
					  .outputItem(`3x #forge:deposits/${item.components[2]}`)
					  .outputItem(`2x #forge:deposits/${item.components[3]}`)
					  .outputItem(`2x #forge:deposits/${item.components[4]}`)
					  .outputItem('4x thermal:slag')
						.setPerTick(true)
					.inputFE(1024*64)
					  .duration(200)

					//Sorting A grade at tier 2
					event.recipes.multiblocked.multiblock('sorter_mk2')
					.inputItem(`25x #forge:crystals/${item.material}`)
					.outputItem(`5x #forge:crystals/${item.components[0]}`)
					.outputItem(`5x #forge:crystals/${item.components[1]}`)
					.outputItem(`4x #forge:crystals/${item.components[2]}`)
					.outputItem(`3x #forge:crystals/${item.components[3]}`)
					.outputItem(`2x #forge:crystals/${item.components[4]}`)
					.outputItem(`1x #forge:crystals/${item.components[5]}`)
					.outputItem('5x thermal:slag')
					  .setPerTick(true)
				  .inputFE(1024*256)
					.duration(200)

					//Sorting A grade at tier 2
					//event.recipes.multiblocked.multiblock('sorter_mk2')
					//.inputItem(`32x #forge:crystals/${item.material}`)
					//.outputItem(`6x #forge:crystals/${item.components[0]}`)
					//.outputItem(`5x #forge:crystals/${item.components[1]}`)
					//.outputItem(`4x #forge:crystals/${item.components[2]}`)
					//.outputItem(`4x #forge:crystals/${item.components[3]}`)
					//.outputItem(`3x #forge:crystals/${item.components[4]}`)
					//.outputItem(`2x #forge:crystals/${item.components[5]}`)
					//.outputItem(`2x #forge:crystals/${item.components[6]}`)
					//.outputItem(`1x #forge:crystals/${item.components[7]}`)
					//.outputItem('5x thermal:slag')
					//.setPerTick(true)
				  	//.inputFE(1024*256)
					//.duration(200)

					//Gem Crafting
					if (item.gem_components != null) {
						if (Item.of(`#forge:gems/${item.gem_components[0]}`) != null) {
							global.thermalCrystallizer(event, 'water', 2000, Item.of(`#forge:gems/${item.gem_components[0]}`).toResultJson(), `forge:dusts/${item.material}`, `mbm2:crystallizer/${item.gem_components[0]}_from_${item.material}`)
							} else {
							console.log(`${item.gem_components[0]} has no gem!`);
						}
						if (Item.of(`#forge:gems/${item.gem_components[1]}`) != null) {
							global.pneumaticcraftThermoPlant(event, Item.of(`#forge:gems/${item.gem_components[1]}`), Ingredient.of(`#forge:fine_dusts/${item.material}`), {"type": "pneumaticcraft:fluid", "fluid": "kubejs:gemstone_catalyst_mixture", "amount": 250}, 423, 4, 0.75, 1.0, false, `mbm2:thermo_plant/${item.gem_components[1]}_from_${item.material}`)
						} else {
							console.log(`${item.gem_components[1]} has no gem!`);
						}
					}
			}
		}
		if (item.type == 'compound_rare_metal') {
				event.recipes.multiblocked.multiblock('mixer')
				.inputItems(item.dust_input)
				.outputItem(`${item.amount}x kubejs:crushed_${item.material}_blend`)
		   		.setPerTick(true)
		   		.inputFE(2048)
				.duration(200)
			global.alchemistryDissolver(event, [
				{'probability': 3.0,'results': [{'item': `chemlib:${item.components[0]}`,'count': 4}]},
				{'probability': 1.0,'results': [{'item': `chemlib:${item.components[1]}`,'count': 4}]},
				{'probability': 1.0,'results': [{'item': `chemlib:${item.components[2]}`,'count': 4}]},
				{'probability': 1.0,'results': [{'item': `chemlib:${item.components[3]}`,'count': 4}]},
			], `kubejs:crushed_${item.material}_blend`, 1, 4, true, `mbm2:dissolving/crushed_${item.material}_blend`)
		}
	})
	  



});


onEvent('block.loot_tables', event => {
	
	//Copper only drops one
	event.addSimpleBlock(`copper_ore`, `raw_copper`)
	event.addSimpleBlock(`deepslate_copper_ore`, `raw_copper`)

	global.newMaterialParts.forEach((item) => {
		if (item.ore) {
		  if (item.type == 'gem') {
			event.addBlock(`kubejs:${item.material}_ore`, table => { // Build loot table manually
			table.addPool(pool => {
				pool.rolls = [1, 2]
				 pool.survivesExplosion()
				 pool.addItem(`#forge:gems/${item.material}`, 5)
				 pool.addItem(`#forge:dusts/${item.material}`, 1, [1, 2])
			})
		  })
		  	global.stoneTypes.forEach((type) => {
			 	event.addBlock(`kubejs:${type.material}_${item.material}_ore`, table => { // Build loot table manually
					table.addPool(pool => {
					  	pool.rolls = [1, 2]
					   	pool.survivesExplosion()
					   	pool.addItem(`#forge:gems/${item.material}`, 5)
					   	pool.addItem(`#forge:dusts/${item.material}`, 1, [1, 2])
					})
				})
			})
			event.addSimpleBlock(`kubejs:${item.material}_ore_sample`, `#forge:gems/${item.material}`)
			
		  } else if (item.type == 'element') {
			event.addBlock(`kubejs:${item.material}_ore`, table => { // Build loot table manually
				table.addPool(pool => {
					//pool.rolls = [1, 2]
					pool.survivesExplosion()
					pool.addItem(`elementalcraft:${item.material}_shard`, 50, [4, 8])
					pool.addItem(`elementalcraft:powerful_${item.material}_shard`, 30, [2, 4])
					pool.addItem(`elementalcraft:${item.material}crystal`, 15)
					pool.addItem(`elementalcraft:crude_${item.material}_gem`, 5)
				})
		  })
		  global.stoneTypes.forEach((type) => {
			event.addBlock(`kubejs:${type.material}_${item.material}_ore`, table => { // Build loot table manually
				table.addPool(pool => {
					//pool.rolls = [1, 2]
					pool.survivesExplosion()
					pool.addItem(`elementalcraft:${item.material}_shard`, 50, [2, 4])
					pool.addItem(`elementalcraft:powerful_${item.material}_shard`, 30, [2, 4])
					pool.addItem(`elementalcraft:${item.material}crystal`, 15)
					pool.addItem(`elementalcraft:crude_${item.material}_gem`, 5)
					})
				})
			})
			
		  } else if (item.type == 'dust') {
			event.addSimpleBlock(`kubejs:poor_${item.material}_ore`, `2x #forge:dusts/${item.material}`)
			event.addSimpleBlock(`kubejs:${item.material}_ore`, `5x #forge:dusts/${item.material}`)
			//event.addSimpleBlock(`kubejs:rich_${item.material}_ore`, `10x #forge:dusts/${item.material}`)
			event.addSimpleBlock(`kubejs:${item.material}_ore_sample`, `#forge:dusts/${item.material}`)

			global.stoneTypes.forEach((type) => {
				event.addSimpleBlock(`kubejs:poor_${type.material}_${item.material}_ore`, `2x #forge:dusts/${item.material}`)
				event.addSimpleBlock(`kubejs:${type.material}_${item.material}_ore`, `5x #forge:dusts/${item.material}`)
				//event.addSimpleBlock(`kubejs:rich_${type.material}_${item.material}_ore`, `10x #forge:dusts/${item.material}`)
			})
		  } else {
			event.addSimpleBlock(`kubejs:poor_${item.material}_ore`, `#forge:grits/${item.material}`)
			event.addSimpleBlock(`kubejs:${item.material}_ore`, `#forge:raw_materials/${item.material}`)
			//event.addSimpleBlock(`kubejs:rich_${item.material}_ore`, `2x #forge:raw_materials/${item.material}`)
			event.addSimpleBlock(`kubejs:${item.material}_ore_sample`, `#forge:raw_materials/${item.material}`)

			global.stoneTypes.forEach((type) => {
				event.addSimpleBlock(`kubejs:poor_${type.material}_${item.material}_ore`, `#forge:grits/${item.material}`)
				event.addSimpleBlock(`kubejs:${type.material}_${item.material}_ore`, `#forge:raw_materials/${item.material}`)
				//event.addSimpleBlock(`kubejs:rich_${type.material}_${item.material}_ore`, `2x #forge:raw_materials/${item.material}`)
			})
		  }
		}
	})
  });