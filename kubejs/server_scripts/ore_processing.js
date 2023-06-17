
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
	


	global.newMaterialParts.forEach((item) => {
		event.remove({id: `immersiveengineering:arcfurnace/dust_${item.material}`})
		event.remove({id: `immersiveengineering:arcfurnace/ore_${item.material}`})
		event.remove({id: `immersiveengineering:arcfurnace/raw_block_${item.material}`})
		event.remove({id: `immersiveengineering:arcfurnace/raw_ore_${item.material}`})
		event.remove({id: `immersiveengineering:crusher/raw_block_${item.material}`})
		event.remove({id: `immersiveengineering:crusher/raw_ore_${item.material}`})
		event.remove({id: `tconstruct:common/materials/${item.material}_ingot_smelting`})
		event.remove({id: `tconstruct:smeltery/melting/metal/${item.material}/dust`})
		event.remove({id: `tconstruct:smeltery/melting/metal/${item.material}/ore_singular`})
		event.remove({id: `tconstruct:smeltery/melting/metal/${item.material}/raw_block`})
		event.remove({id: `tconstruct:smeltery/melting/metal/${item.material}/raw`})

		//event.remove({id: `mekanism:processing/${item.material}/slurry/dirty/from_ore`})
		//event.remove({id: `mekanism:processing/${item.material}/slurry/dirty/from_raw_ore`})
		//event.remove({id: `mekanism:processing/${item.material}/slurry/clean`})
		//event.remove({id: `mekanism:processing/${item.material}/crystal/from_slurry`})
		event.remove({id: `mekanism:processing/${item.material}/clump/from_raw_block`})
		event.remove({id: `mekanism:processing/${item.material}/shard/from_raw_block`})
		event.remove({id: `mekanism:processing/${item.material}/slurry/dirty/from_raw_block`})

		if (item.ore) {
			
			//This makes a list of every smeltable/refinable part based on the grade 
			let refineProcessedOre = []
			let smeltProcessedOre = []
			global.oreProcessingParts.forEach((part) => {
				if (part.grade >= item.tier-1) {
					refineProcessedOre.push(`#forge:ores/${part.name}/${item.material}`)
					smeltProcessedOre.push(`#forge:ores/${part.name}/${item.material}`)
				}
				//Grit can also be smelted
				if (part.name == 'grit' /*part.grade == 0 && item.tier != 0*/) {
					smeltProcessedOre.push(`#forge:ores/${part.name}/${item.material}`)
				}
			})
				//console.log(refineProcessedOre)
				//console.log(smeltProcessedOre)
			


			//New Function that allows only a certain tier or higher of refined ore to be refined in a given process
			//If can be smelted it can be refined
			var  refinableOre = (tier) => {
				let refinableOres = []
				global.oreParts.forEach((part) => {
					//processing has grade, refining has level
					if(part.grade >= tier && part.grade >= item.tier-1) {
						refinableOres.push(`#forge:ores/${part.name}/${item.material}`)
					}
				})
				return refinableOres
			}
			

			//Dust and Tier 1 Refining can be smelted
			let smeltRefinedOre = []
			global.oreRefiningParts.forEach((part) => {
				if (part.level == 1) {
					smeltRefinedOre.push(`#forge:ores/${part.name}/${item.material}`)
				}
			})
			smeltRefinedOre.push(`#forge:dusts/${item.material}`)


			
			//New Function that makes a byproduct! Exsample use: byproduct('washed', 0)
			var  byproduct = (type, tier) => {
				if (item.byproducts != null) {
					if (item.type != 'compound_ore') {
						if (Item.of(`#forge:ores/${type}/${item.byproducts[tier]}`) != null) {
							return `#forge:ores/${type}/${item.byproducts[tier]}`
						} else {
							return `#forge:ores/${type}/${item.material}`
						}
					} else {
						if (Item.of(`#forge:ores/${type}/${item.components[tier]}`) != null) {
							return `#forge:ores/${type}/${item.components[tier]}`
						} else {
							return `#forge:ores/grit/${item.material}`
						}
					}
				} else {
					return `#forge:ores/${type}/${item.material}` 
				}
			}
			
			

			//Can't Smelt Complicated Metal
			event.remove({output: `#forge:ingots/${item.material}`, type: 'minecraft:smelting'})
			event.remove({output: `#forge:ingots/${item.material}`, type: 'minecraft:blasting'})

			//Make some dust
			if (Item.of(`#forge:dusts/${item.material}`) != null) {
				//Washed Ore
				if (Item.of(`#forge:ores/washed/${item.material}`) != null) {
				event.recipes.immersiveengineeringCrusher(`#forge:dusts/${item.material}`, `#forge:ores/washed/${item.material}`).id(`mbm2:immersive/crushing/washed_${item.material}`)
				event.recipes.createMilling([`#forge:dusts/${item.material}`], [`#forge:ores/washed/${item.material}`]).id(`mbm2:create/crushing/washed_${item.material}`)
				event.recipes.mekanismCrushing(`#forge:dusts/${item.material}`, `#forge:ores/washed/${item.material}`).id(`mbm2:mekanism/crushing/washed_${item.material}`)
				}
				//Grit Washing
				if (Item.of(`#forge:ores/grit/${item.material}`) != null) {
				event.recipes.createSplashing([Item.of(`#forge:dusts/${item.material}`).withChance(0.75), Item.of('gravel').withChance(0.25)], `#forge:ores/grit/${item.material}`).id(`mbm2:washing/grit_${item.material}`)
				}
				//Fine Dust
				if (Item.of(`#forge:ores/fine_dust/${item.material}`) != null) {
					event.recipes.createsifterSifting([Item.of(`#forge:ores/fine_dust/${item.material}`).withChance(0.5), Item.of(`sand`).withChance(0.1)], [Item.of(`#forge:dusts/${item.material}`),'createsifter:brass_mesh']).processingTime(200).id(`mbm2:sifting/${item.material}_fine_dust`)
				}
			}

			if (item.type == 'base_metal' || item.type == 'compound_ore') {

				///////////////////// ORE PROCESSING STEP 1 //////////////////
				//Create Crushing
				event.recipes.createCrushing([
					`#forge:ores/crushed/${item.material}`,
					Item.of(byproduct('grit', 0)).withChance(0.1), 
					Item.of('create:experience_nugget').withChance(0.15)
				], `#forge:raw_materials/${item.material}`).id(`mbm2:crushing/raw_${item.material}`)

				//Ores give more byproduct or something
				event.recipes.createCrushing([
					`#forge:ores/crushed/${item.material}`,
					Item.of(byproduct('grit', 0)).withChance(0.25), 
					Item.of('create:experience_nugget').withChance(0.25)
				], `#forge:ores/${item.material}`).id(`mbm2:crushing/ore_${item.material}`)



				///////////////////// ORE PROCESSING STEP 2 //////////////////
				//IE Crushing
				global.ieCrusher(event, 
					{"count":1,"base_ingredient":Item.of(`#forge:ores/chunk/${item.material}`).toJson()}, //Output
					[{'chance': 0.1, 'output': Item.of(byproduct('grit', 0)).toJson()}, {chance: 0.15, output: {"item": 'immersiveengineering:slag_gravel'}}], 
					{"tag":`forge:ores/crushed/${item.material}`}, //Input
					6000, `mbm2:immersiveengineering/crushing/crushed_${item.material}`)

					

				///////////////////// ORE PROCESSING STEP 3 //////////////////
				//Water Filter
				event.shaped('4x kubejs:water_filter', [
					'SWS',
					'RWR',
					'SWS'
				], {
					W: 'thermal:white_rockwool',
					S: `#forge:sheets/white_alloy`,
					R: '#forge:rods/iron'
				}).id(`mbm2:water_filter`)

				//Filtered Water
				global.ieMixer(event, Fluid.of('kubejs:purified_water', 2000), {"tag":"minecraft:water","amount":2000}, Item.of('kubejs:water_filter'), 4000, 'mbm2:filtering_water')
				
				//Ore Flotation
				event.recipes.multiblocked.multiblock("flotation")
				.inputFluid(Fluid.of('water', 500))
				.inputItem(`#forge:ores/chunk/${item.material}`)
				.outputItem(Item.of(`#forge:ores/lump/${item.material}`))
				.outputFluid(Fluid.of('kubejs:sludge', 250))
				.setPerTick(true)
				.inputFE(4096)
				.duration(100)
				//Ore Flotation w/ Purified Water
				event.recipes.multiblocked.multiblock("flotation")
				.inputFluid(Fluid.of('kubejs:purified_water', 500))
				.inputItem(`#forge:ores/chunk/${item.material}`)
				.outputItem(Item.of(`#forge:ores/lump/${item.material}`))
				.setChance(0.25)
				.outputItem(Item.of(byproduct('washed', 1)))
				.setChance(1)
				.outputFluid(Fluid.of('kubejs:sludge', 250))
				.setPerTick(true)
				.inputFE(4096)
				.duration(100)
				///////////////////// ORE PROCESSING STEP 4 //////////////////
				//Ore Leaching
				event.recipes.multiblocked.multiblock("leaching")
				.inputFluid(Fluid.of('mekanism:sulfuric_acid', 100))
				.inputFluid(Fluid.of('chemlib:nitric_acid_fluid', 100))
				.inputItem(`#forge:ores/lump/${item.material}`)
				.outputItem(Item.of(`#forge:ores/leached/${item.material}`))
				.setPerTick(true)
				.inputFE(4096*4)
				.duration(200)
				//Ore Leaching w/ Hydroflouric Acid
				event.recipes.multiblocked.multiblock("leaching")
				.inputFluid(Fluid.of('mekanism:hydrofluoric_acid', 100))
				.inputFluid(Fluid.of('chemlib:nitric_acid_fluid', 100))
				.inputItem(`#forge:ores/lump/${item.material}`)
				.outputItem(Item.of(`#forge:ores/leached/${item.material}`))
				.setChance(0.25)
				.outputItem(Item.of(byproduct('grit', 2)))
				.setChance(1)
				.setPerTick(true)
				.inputFE(4096*4)
				.duration(200)

				///////////////////// ORE PROCESSING STEP 5 //////////////////


				//Slurry
				let slurry = `kubejs:${item.material}_slurry`
				let quotedSlurry = "'" +slurry+"'"
				event.custom({
					"input": [
						{
							'item': `kubejs:leached_${item.material}`
						}
					],
					"inputFluid": `{FluidName:'industrialforegoing:meat',Amount:200}`,
					"processingTime": 200,
					"output": {
					  "item": 'chemlib:protein',
					  "count": 2
					},
					"outputFluid": `{FluidName:${quotedSlurry},Amount:1000}`,
					"type": "industrialforegoing:dissolution_chamber"
				  }).id(`mbm2:${item.material}_slurry_from_leached`)

				//Mesh
				event.shaped('2x kubejs:mesh', [
					'WSW',
					'SSS',
					'WSW'
				], {
					W: 'stick',
					S: `string`,
				}).id(`mbm2:mesh`)

				//Zinc Mesh
				event.shaped('8x kubejs:zinc_mesh', [
					'MMM',
					'MZM',
					'MMM'
				], {
					M: 'kubejs:mesh',
					Z: '#forge:ores/fine_dust/zinc'
				}).id(`mbm2:zinc_mesh`)
				//Carbon Mesh
				//event.recipes.mekanismMetallurgicInfusing('kubejs:carbon_mesh', 'kubejs:mesh', 'mekanism:carbon', 10) //cant seem to change the amount from 10
				global.mekanismMetallurgicInfusing(event, Item.of('kubejs:carbon_mesh'), Item.of('kubejs:zinc_mesh'), 'mekanism:carbon', 20, `mbm2:carbon_mesh`)
				//Activated Carbon Mesh
				event.recipes.mekanismPurifying('kubejs:activated_carbon_mesh', 'kubejs:carbon_mesh', {gas: 'mekanism:oxygen', amount: 1})

				//Ore Deposting
				event.recipes.multiblocked.multiblock("deposition")
				.inputFluid(Fluid.of(`kubejs:${item.material}_slurry`, 1000))
				.inputItem('kubejs:zinc_mesh')
				.outputItem(Item.of(`#forge:ores/deposit/${item.material}`))
				.setPerTick(true)
				.inputFE(4096*8)
				.duration(200)
				//Ore Deposting
				event.recipes.multiblocked.multiblock("deposition")
				.inputFluid(Fluid.of(`kubejs:${item.material}_slurry`, 1000))
				.inputItem('kubejs:activated_carbon_mesh')
				.outputItem(Item.of(`#forge:ores/deposit/${item.material}`))
				.setChance(0.15)
				.outputItem(Item.of(byproduct('brick', 2)))
				.setChance(1)
				.setPerTick(true)
				.inputFE(4096*8)
				.duration(150)
				
				//Vaccum Chamber
				event.recipes.multiblocked.multiblock("vaccum")
				.inputFluid(Fluid.of(`kubejs:${item.material}_slurry`, 200))
				.outputFluid(Fluid.of(`kubejs:concentrated_${item.material}_slurry`, 20))
				.setPerTick(true)
				.inputFE(4096*4)
				.duration(40)


				//Crystal Growing
				//event.recipes.multiblocked.multiblock("crystallization")
				//.inputFluid(Fluid.of(`kubejs:${item.material}_slurry`, 1000))
				//.outputItem(Item.of(`#forge:ores/crystal/${item.material}`))
				//.setPerTick(true)
				//.inputFE(4096*12)
				//.duration(250)

				//Crystal Growing
				event.recipes.multiblocked.multiblock("crystallization")
				.inputFluid(Fluid.of(`kubejs:concentrated_${item.material}_slurry`, 100))
				//.inputItem(Item.of(`#forge:ores/shard/${item.material}`))
				.outputItem(Item.of(`#forge:ores/crystal/${item.material}`))
				//.outputFluid(Fluid.of(`kubejs:${item.material}_slurry`, 250))
				.setPerTick(true)
				.inputFE(4096*16)
				.duration(200)
			}
			if (item.type == 'base_metal') {

				///////////////////// ORE REFINING STEP 1 //////////////////
					//Create Washing 
					event.recipes.createSplashing([`${global.refiningMultiplier[1]}x #forge:ores/washed/${item.material}`, Item.of('gravel').withChance(0.50)], `#mbm2:ore_part/washable/${item.material}`/*refinableOre(1) in tag form because washing is spechlae*/).id(`mbm2:washing/${item.material}`)
					
					//Chain recipe
					event.recipes.createSplashing([`#forge:ores/washed/${item.material}`], `#forge:ores/imbued/${item.material}`).id(`mbm2:washing/imbued_ore_${item.material}`)
							

				///////////////////// ORE REFINING STEP 2 //////////////////
			
	 				//Imbuing
	 				global.arsImbument(event, `kubejs:imbued_${item.material}`, global.refiningMultiplier[2], refinableOre(2), 3000, [], `mbm2:imbuing/${item.material}`)

					//Chain recipe
	 				global.arsImbument(event, `kubejs:imbued_${item.material}`, 1, `#forge:ores/cluster/${item.material}`, 500, [], `mbm2:imbuing/cluster_${item.material}`)
					

		////////////////////////////////////////////////////////////////
		///////////////////// ORE PROCESSING CASH OUT //////////////////
		////////////////////////////////////////////////////////////////

		//Blast Furnace Data
		let coilHeatValues = [
			{
				name: 'constantan',
				heat: 100
			},
			{
				name: 'cobalt',
				heat: 200
			},
			{
				name: 'vibranium',
				heat: 500
			}
		]
		let coilPos = [
			{ x: -1, y: 0, z: 1 },
			{ x: 0, y: 0, z: 1 },
			{ x: 1, y: 0, z: 1 },
			{ x: -1, y: 1, z: 1 },
			{ x: 1, y: 1, z: 1 },
			{ x: -1, y: 2, z: 1 },
			{ x: 1, y: 2, z: 1 },
			{ x: -1, y: 3, z: 1 },
			{ x: 0, y: 3, z: 1 },
			{ x: 1, y: 3, z: 1 },

			{ x: -1, y: 0, z: -1 },
			{ x: 0, y: 0, z: -1 },
			{ x: 1, y: 0, z: -1 },
			{ x: -1, y: 1, z: -1 },
			{ x: 1, y: 1, z: -1 },
			{ x: -1, y: 2, z: -1 },
			{ x: 1, y: 2, z: -1 },
			{ x: -1, y: 3, z: -1 },
			{ x: 0, y: 3, z: -1 },
			{ x: 1, y: 3, z: -1 },
			
			{ x: -1, y: 0, z: 0 },
			{ x: 1, y: 0, z: 0 },
			{ x: -1, y: 3, z: 0 },
			{ x: 1, y: 3, z: 0 },
		]


				//Cash out at any time after refining

				////////////// TIER 1 OR BELOW /////////////////////
				if (item.tier <= 1) {
						//Ore Part Tier 1 Metal Smelting
						event.smelting(`#forge:ingots/${item.material}`, smeltProcessedOre).xp(0.5).id(`mbm2:smelting/t1_ore_part_${item.material}`)
						event.blasting(`#forge:ingots/${item.material}`, smeltProcessedOre).xp(1.0).id(`mbm2:blasting/t1_ore_part_${item.material}`)
						event.smelting(`#forge:ingots/${item.material}`, smeltRefinedOre).xp(0.5).id(`mbm2:smelting/ore_refined_part_${item.material}`)
						event.blasting(`#forge:ingots/${item.material}`, smeltRefinedOre).xp(1.0).id(`mbm2:blasting/ore_refined_part_${item.material}`)
						
						//Retro Smeltery
				  	if (item.fluid_id != null) {
						smeltRefinedOre.forEach((part) => {
							global.tinkersMeltingPlain(event, item.fluid_id, 90, Ingredient.of(part).toJson(), 1000, 75, `mbm2:smeltery/melting/${part.split(':')[1]}`)
						})
					}

						//Retro Arcing
						event.recipes.immersiveengineeringArcFurnace(Item.of(`#forge:ingots/${item.material}`), smeltProcessedOre).id(`mbm2:arc_furnace/${item.material}_t1_ore_part`)

						//Retro Blasting
						event.recipes.multiblocked.multiblock("ebf")
						.inputFluid(Fluid.of('mekanism:oxygen', 1000))
						.inputItem(smeltProcessedOre)
						.outputItem(Item.of(`#forge:ingots/${item.material}`))
						.setPerTick(true)
						.inputFE(4096)
						.duration(150)
						//Retro Blasting air
						event.recipes.multiblocked.multiblock("ebf")
						.inputFluid(Fluid.of('kubejs:liquid_air', 1000))
						.inputItem(smeltProcessedOre)
						.outputItem(Item.of(`#forge:ingots/${item.material}`))
						.setPerTick(true)
						.inputFE(4096)
						.duration(200)
					
				}

				////////////// TIER 2 /////////////////////
				if (item.tier == 2) {
					event.remove({id: `tconstruct:smeltery/melting/metal/${item.material}/ingot`})
				  	if (item.fluid_id != null) {
						
						smeltProcessedOre.forEach((part) => {
							//Foundry Processing for ores
							global.tinkersOreMelting(event, 'kubejs:molten_slag', 50,  item.fluid_id, 90, part, 1500, 150, `mbm2:foundry/melting/${part.split(':')[1]}`)
						})
						//Smeltery Processing for Metal
						smeltRefinedOre.forEach((part) => {
							global.tinkersMeltingPlain(event, item.fluid_id, 90, Ingredient.of(part).toJson(), 1200, 100, `mbm2:smeltery/melting/${part.split(':')[1]}`)
						})
						global.tinkersMeltingPlain(event, item.fluid_id, 90, Ingredient.of(`#forge:ingots/${item.material}`).toJson(), 1000, 125, `mbm2:smeltery/melting/metal/${item.material}/ingot`)

					} else {
						console.log(`ERROR: ${item.material} needs a fluid_id in Master Material List`)
					}
					//Retro Arcing
					event.recipes.immersiveengineeringArcFurnace(Item.of(`#forge:ingots/${item.material}`), smeltProcessedOre).id(`mbm2:arc_furnace/${item.material}_t2_ore_part`)
					//Retro Blasting
					event.recipes.multiblocked.multiblock("ebf")
					.inputFluid(Fluid.of('kubejs:liquid_air', 1000))
					.inputItem(smeltProcessedOre)
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					.setPerTick(true)
					.inputFE(4096)
					.duration(200)
					//Oxygen
					event.recipes.multiblocked.multiblock("ebf")
					.inputFluid(Fluid.of('mekanism:oxygen', 1000))
					.inputItem(smeltProcessedOre)
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					.setPerTick(true)
					.inputFE(4096)
					.duration(150)
				}
				
			////////////// TIER 3 /////////////////////
				if (item.tier == 3) {
						event.recipes.immersiveengineeringArcFurnace(Item.of(`#forge:ingots/${item.material}`), smeltProcessedOre).id(`mbm2:arc_furnace/${item.material}_t3_ore_part`)

						//Retro Blasting
						event.recipes.multiblocked.multiblock("ebf")
						.inputFluid(Fluid.of('kubejs:liquid_air', 1000))
						.inputItem(smeltProcessedOre)
						.outputItem(Item.of(`#forge:ingots/${item.material}`))
						.setPerTick(true)
						.inputFE(4096)
						.duration(200)
						//Oxygen
						event.recipes.multiblocked.multiblock("ebf")
						.inputFluid(Fluid.of('mekanism:oxygen', 1000))
						.inputItem(smeltProcessedOre)
						.outputItem(Item.of(`#forge:ingots/${item.material}`))
						.setPerTick(true)
						.inputFE(4096)
						.duration(150)
				}
				
				if (item.tier <= 3) {
					event.recipes.immersiveengineeringArcFurnace(Item.of(`#forge:ingots/${item.material}`), smeltRefinedOre).id(`mbm2:arc_furnace/${item.material}_ore_refined_part`)
				}

			////////////// TIER 4 /////////////////////
				if (item.tier == 4) {
					//Oxygen
					event.recipes.multiblocked.multiblock("ebf")
					.inputFluid(Fluid.of('mekanism:oxygen', 1000))
					.inputItem(smeltProcessedOre)
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					.setPerTick(true)
					.inputFE(4096)
					.duration(150)

					//Air
					event.recipes.multiblocked.multiblock("ebf")
					.inputFluid(Fluid.of('kubejs:liquid_air', 1000))
					.inputItem(smeltProcessedOre)
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					.setPerTick(true)
					.inputFE(4096)
					.duration(200)
				}
				if (item.tier <= 4) {
					//Oxygen
					event.recipes.multiblocked.multiblock("ebf")
					.inputFluid(Fluid.of('mekanism:oxygen', 1000))
					.inputItem(smeltRefinedOre)
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					.setPerTick(true)
					.inputFE(4096)
					.duration(150)

					//Air
					event.recipes.multiblocked.multiblock("ebf")
					.inputFluid(Fluid.of('kubejs:liquid_air', 1000))
					.inputItem(smeltRefinedOre)
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					.setPerTick(true)
					.inputFE(4096)
					.duration(200)
				}

				////////////// TIER 5 /////////////////////
				if (item.tier == 5) {
					let tier5Temp = 2000
						event.recipes.multiblocked.multiblock("ebf")
							.inputFluid(Fluid.of('mekanism:oxygen', 1000))
							.inputItem(smeltProcessedOre)
							.outputItem(Item.of(`#forge:ingots/${item.material}`))
							.setPerTick(true)
							.inputFE(4096)
							.duration(200)
							.data({ temperature: tier5Temp })
							.text(`    Heat: §6${tier5Temp}`)
							.predicate((recipe, recipeLogic) => {
								let reqTemp = recipe.getData().getInt("temperature")
								let controllerTe = recipeLogic.controller.self()
								let level = controllerTe.getLevel()
								let coilTotalHeat = 0
								coilPos.forEach(pos => {
									let coilName = level.getBlockState(controllerTe.getBlockPos().offset(pos.x, pos.y, pos.z)).getBlock()
									coilHeatValues.forEach(material => {
										if (Block.getBlock(`kubejs:${material.name}_coil`).equals(coilName)) {
											coilTotalHeat += material.heat
										}
									})
								})
								//If we have enough Heat, chillin
								if (reqTemp <= coilTotalHeat) {
									return true
								} else  {
									return false
								}
							}, Component.string('Requires at least Cobalt Coils'))
/*

						//EBF
						event.recipes.multiblocked.multiblock("ebf")
						.inputFluid(Fluid.of('mekanism:oxygen', 1000))
						.inputItem(smeltProcessedOre)
						.outputItem(Item.of(`#forge:ingots/${item.material}`))
						//.outputFluid(Fluid.of('mekanism:sulfuric_acid', 1000))
						.setPerTick(true)
						.inputFE(4096)
						.duration(200)

						//Air
						event.recipes.multiblocked.multiblock("ebf")
						.inputFluid(Fluid.of('mekanism:oxygen', 1000))
						.inputItem(smeltRefinedOre)
						.outputItem(Item.of(`#forge:ingots/${item.material}`))
						.setPerTick(true)
						.inputFE(4096)
						.duration(200)*/
				}

		}


			if (item.type == 'compound_ore') {
					console.log(`${item.material} is a compound ore!`);
					console.log(`${item.components[0]} is the first output!`);
					
					if (Item.of(`#forge:ingots/${item.components[0]}`) != null) {
						event.smelting(`#forge:ingots/${item.components[0]}`, [`#forge:raw_materials/${item.material}`,`#forge:dusts/${item.material}`,`#forge:ores/grit/${item.material}`]).id(`mbm2:smelting/raw_${item.material}`)
						event.blasting(`#forge:ingots/${item.components[0]}`, [`#forge:raw_materials/${item.material}`,`#forge:dusts/${item.material}`,`#forge:ores/grit/${item.material}`]).id(`mbm2:blasting/raw_${item.material}`)
					} else {
						//For non metalic components
						event.smelting(`2x #forge:dusts/${item.components[0]}`, [`#forge:raw_materials/${item.material}`, `#forge:dusts/${item.material}`])
						event.blasting(`2x #forge:dusts/${item.components[0]}`, [`#forge:raw_materials/${item.material}`, `#forge:dusts/${item.material}`])
					}
					

			/////////////////////////////////////////////////////////////////////////////////////////////
			///////////////////////////////////////// SORTING ///////////////////////////////////////////
			/////////////////////////////////////////////////////////////////////////////////////////////

			///////////////////////////////////////// TIER 1 SORTING ///////////////////////////////////////////

				  	//Sorting raw at tier 1
					  event.recipes.multiblocked.multiblock('sorter_mk1')
					  .inputItem(`4x #forge:raw_materials/${item.material}`)
					  .inputStress(64)
					  .outputItem(`2x #forge:raw_materials/${item.components[0]}`)
					  .outputItem(`1x #forge:raw_materials/${item.components[1]}`)
					  .outputItem('1x thermal:slag')
					  .duration(200)

				  	//Sorting F grade at tier 1
					event.recipes.multiblocked.multiblock('sorter_mk1')
						.inputItem(`8x #forge:ores/crushed/${item.material}`)
						.inputStress(64)
						.outputItem(`2x #forge:ores/crushed/${item.components[0]}`)
						.outputItem(`2x #forge:ores/crushed/${item.components[1]}`)
						.outputItem(`#forge:ores/crushed/${item.components[2]}`)
						.outputItem('3x thermal:slag')
						.duration(200)

					//Sorting E grade at tier 1
				  	event.recipes.multiblocked.multiblock('sorter_mk1')
				  		.inputItem(`12x #forge:ores/chunk/${item.material}`)
				  		.inputStress(64)
				  		.outputItem(`3x #forge:ores/chunk/${item.components[0]}`)
				  		.outputItem(`2x #forge:ores/chunk/${item.components[1]}`)
				  		.outputItem(`2x #forge:ores/chunk/${item.components[2]}`)
				  		.outputItem(`#forge:ores/chunk/${item.components[3]}`)
				  		.outputItem('4x thermal:slag')
				  		.duration(300)

					//Sorting D grade at tier 1
					event.recipes.multiblocked.multiblock('sorter_mk1')
						.inputItem(`16x #forge:ores/lump/${item.material}`)
						.inputStress(64)
						.outputItem(`4x #forge:ores/lump/${item.components[0]}`)
						.outputItem(`3x #forge:ores/lump/${item.components[1]}`)
						.outputItem(`2x #forge:ores/lump/${item.components[2]}`)
						.outputItem(`2x #forge:ores/lump/${item.components[3]}`)
						.outputItem(`#forge:ores/lump/${item.components[4]}`)
						.outputItem('4x thermal:slag')
						.duration(400)

			///////////////////////////////////////// TIER 2 SORTING ///////////////////////////////////////////

					//Sorting raw at tier 2
					event.recipes.multiblocked.multiblock('sorter_mk2')
					.inputItem(`8x #forge:raw_materials/${item.material}`)
					.outputItem(`3x #forge:raw_materials/${item.components[0]}`)
					.outputItem(`2x #forge:raw_materials/${item.components[1]}`)
					.outputItem('3x thermal:slag')
					.setPerTick(true)
				  	.inputFE(512)
					.duration(200)

					//Sorting F grade at tier 2
				  	event.recipes.multiblocked.multiblock('sorter_mk2')
				  	.inputItem(`16x #forge:ores/crushed/${item.material}`)
				  	.outputItem(`5x #forge:ores/crushed/${item.components[0]}`)
				  	.outputItem(`4x #forge:ores/crushed/${item.components[1]}`)
				  	.outputItem(`3x #forge:ores/crushed/${item.components[2]}`)
				  	.outputItem('4x thermal:slag')
						.setPerTick(true)
					.inputFE(512)
				  	.duration(200)

				  //Sorting E grade at tier 2
					event.recipes.multiblocked.multiblock('sorter_mk2')
					.inputItem(`20x #forge:ores/chunk/${item.material}`)
					.outputItem(`5x #forge:ores/chunk/${item.components[0]}`)
					.outputItem(`4x #forge:ores/chunk/${item.components[1]}`)
					.outputItem(`3x #forge:ores/chunk/${item.components[2]}`)
					.outputItem(`2x #forge:ores/chunk/${item.components[3]}`)
					.outputItem('6x thermal:slag')
						.setPerTick(true)
					.inputFE(512*4)
					.duration(200)

					//Sorting D grade at tier 2
					  event.recipes.multiblocked.multiblock('sorter_mk2')
					  .inputItem(`24x #forge:ores/lump/${item.material}`)
					  .outputItem(`6x #forge:ores/lump/${item.components[0]}`)
					  .outputItem(`5x #forge:ores/lump/${item.components[1]}`)
					  .outputItem(`4x #forge:ores/lump/${item.components[2]}`)
					  .outputItem(`3x #forge:ores/lump/${item.components[3]}`)
					  .outputItem(`2x #forge:ores/lump/${item.components[4]}`)
					  .outputItem('4x thermal:slag')
						  .setPerTick(true)
					  .inputFE(512*4)
					  .duration(200)

				  //Sorting C grade at tier 2
				  	event.recipes.multiblocked.multiblock('sorter_mk2')
				  	.inputItem(`28x #forge:ores/leached/${item.material}`)
				  	.outputItem(`7x #forge:ores/leached/${item.components[0]}`)
				  	.outputItem(`6x #forge:ores/leached/${item.components[1]}`)
				  	.outputItem(`4x #forge:ores/leached/${item.components[2]}`)
				  	.outputItem(`3x #forge:ores/leached/${item.components[3]}`)
				  	.outputItem(`2x #forge:ores/leached/${item.components[4]}`)
				  	.outputItem(`2x #forge:ores/leached/${item.components[5]}`)
				  	.outputItem('4x thermal:slag')
						.setPerTick(true)
					.inputFE(512*16)
				  	.duration(200)

					//Sorting B grade at tier 2
					event.recipes.multiblocked.multiblock('sorter_mk2')
					.inputItem(`32x #forge:ores/deposit/${item.material}`)
					.outputItem(`7x #forge:ores/deposit/${item.components[0]}`)
					.outputItem(`6x #forge:ores/deposit/${item.components[1]}`)
					.outputItem(`5x #forge:ores/deposit/${item.components[2]}`)
					.outputItem(`4x #forge:ores/deposit/${item.components[3]}`)
					.outputItem(`2x #forge:ores/deposit/${item.components[4]}`)
					.outputItem(`2x #forge:ores/deposit/${item.components[5]}`)
					.outputItem(`2x #forge:ores/deposit/${item.components[6]}`)
					.outputItem('4x thermal:slag')
						.setPerTick(true)
					.inputFE(512*64)
					.duration(200)

					//Sorting A grade at tier 2
					event.recipes.multiblocked.multiblock('sorter_mk2')
					.inputItem(`36x #forge:ores/crystal/${item.material}`)
					.outputItem(`7x #forge:ores/crystal/${item.components[0]}`)
					.outputItem(`6x #forge:ores/crystal/${item.components[1]}`)
					.outputItem(`5x #forge:ores/crystal/${item.components[2]}`)
					.outputItem(`4x #forge:ores/crystal/${item.components[3]}`)
					.outputItem(`3x #forge:ores/crystal/${item.components[4]}`)
					.outputItem(`3x #forge:ores/crystal/${item.components[5]}`)
					.outputItem(`2x #forge:ores/crystal/${item.components[6]}`)
					.outputItem(`2x #forge:ores/crystal/${item.components[7]}`)
					.outputItem('4x thermal:slag')
					  .setPerTick(true)
				  	.inputFE(512*256)
					.duration(200)


					//Gem Crafting
					if (item.gem_components != null) {
						if (Item.of(`#forge:gems/${item.gem_components[0]}`) != null) {
							global.thermalCrystallizer(event, 'water', 2000, Item.of(`#forge:gems/${item.gem_components[0]}`).toResultJson(), `forge:dusts/${item.material}`, `mbm2:crystallizer/${item.gem_components[0]}_from_${item.material}`)
							} else {
							console.log(`${item.gem_components[0]} has no gem!`);
						}
						if (Item.of(`#forge:gems/${item.gem_components[1]}`) != null) {
							global.pneumaticcraftThermoPlant(event, Item.of(`#forge:gems/${item.gem_components[1]}`), Ingredient.of(`#forge:ores/fine_dust/${item.material}`), {"type": "pneumaticcraft:fluid", "fluid": "kubejs:gemstone_catalyst_mixture", "amount": 250}, 423, 4, 0.75, 1.0, false, `mbm2:thermo_plant/${item.gem_components[1]}_from_${item.material}`)
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
			event.addSimpleBlock(`kubejs:${item.material}_ore_sample`, `#forge:dusts/${item.material}`)

			global.stoneTypes.forEach((type) => {
				event.addSimpleBlock(`kubejs:poor_${type.material}_${item.material}_ore`, `2x #forge:dusts/${item.material}`)
				event.addSimpleBlock(`kubejs:${type.material}_${item.material}_ore`, `5x #forge:dusts/${item.material}`)
			})
		  } else {
			event.addSimpleBlock(`kubejs:poor_${item.material}_ore`, `#forge:ores/grit/${item.material}`)
			event.addSimpleBlock(`kubejs:${item.material}_ore`, `#forge:raw_materials/${item.material}`)
			event.addSimpleBlock(`kubejs:${item.material}_ore_sample`, `#forge:raw_materials/${item.material}`)

			global.stoneTypes.forEach((type) => {
				event.addSimpleBlock(`kubejs:poor_${type.material}_${item.material}_ore`, `#forge:ores/grit/${item.material}`)
				event.addSimpleBlock(`kubejs:${type.material}_${item.material}_ore`, `#forge:raw_materials/${item.material}`)
			})
		  }
		}
	})
  });


  onEvent('tags.items', event => {
	global.createCrushed.forEach((item) => {
		event.add(`forge:ores/crushed/${item}`, `create:crushed_${item}_ore`)
		event.add(`forge:ores/crushed`, `create:crushed_${item}_ore`)
		 event.remove(`forge:ores/crushed/${item}`, `kubejs:crushed_${item}`)
	})

	//only really needed for washing, will come back to this
	global.newMaterialParts.forEach((item) => {
		

		//Copied from earlier, might streamline or something later
		var  refinableOre = (tier) => {
			let refinableOres = []
			global.oreParts.forEach((part) => {
				//processing has grade, refining has level
				if(part.grade >= tier && part.grade >= item.tier) {
					refinableOres.push(`#forge:ores/${part.name}/${item.material}`)
				}
			})
			return refinableOres
		}

		if(item.type == 'base_metal') {

			event.add(`mbm2:ore_part/washable/${item.material}`, refinableOre(1))
			
			//let refineProcessedOre = [] // this needs to be redone so that you're required to process to a certain grade before unlocking the next level of refining
			//global.oreProcessingParts.forEach((part) => {
			//	if (part.grade >= item.tier && part.grade != 0) {
			//		refineProcessedOre.push(`#forge:ores/${part.name}/${item.material}`)
			//	}
			//})
			////refineProcessedOre.forEach((part) => {
			//	//console.log(part + 'test')
			//	event.add(`mbm2:ore_part/refinable/${item.material}`, refineProcessedOre)
			////})
		}
	})
 });