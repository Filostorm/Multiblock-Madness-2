
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


//This is also in material_tooltips
global.refiningMultiplier = [
	1, //this is just to take up the 0 slot
	2,
	4,
	8,
	16,
	32,
	64,
]


onEvent('recipes', event => {
	global.createCrushed.forEach((item) => {
		event.remove({id: `create:crushing/raw_${item}_ore`})
		event.remove({id: `create:crushing/raw_${item}_block`})
		event.remove({id: `create:crushing/raw_${item}`})
		event.remove({id: `create:crushing/${item}_ore`})
		event.remove({id: `create:crushing/deepslate_${item}_ore`})
		event.remove({id: `create:splashing/crushed_raw_${item}`})
		event.remove({id: `create:splashing/thermal/crushed_raw_${item}`})
		event.remove({id: `create:splashing/mekanism/crushed_raw_${item}`})
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
	global.ieSqueezer(event, Fluid.of('pneumaticcraft:memory_essence', 100), Item.of('create:experience_nugget'), 6400, 'kubejs:squeezer/experience')

	event.shaped('4x kubejs:catalyst_empty', [' A ','BBB',' A '], {A: 'thermal:iron_plate',B: 'minecraft:glass'})
	event.shaped('16x kubejs:catalyst_empty', [' A ','BBB',' A '], {A: 'kubejs:steel_plate',B: 'minecraft:glass'})
	event.shaped('64x kubejs:catalyst_empty', [' A ','BBB',' A '], {A: 'kubejs:stainless_steel_plate',B: 'minecraft:glass'})


	let fillingAmount = 250

	//////basic Catlyst//////
	//global.ieMixer(event, Fluid.of('kubejs:basic_catalyst_mixture', 1000), {"tag":"forge:experience","amount":1000}, Item.of('apotheosis:gem_dust'), 4000, 'mbm2:mixer/basic_catalyst_mixture')
	global.ieMixer(event, Fluid.of('kubejs:basic_catalyst_mixture', 250), {"tag":"forge:experience","amount":250}, Item.of('kubejs:slag_dust'), 4000, 'mbm2:mixer/basic_catalyst_mixture_slag')
	
	//Filling
	event.recipes.createFilling('kubejs:catalyst_basic', [Fluid.of('kubejs:basic_catalyst_mixture', fillingAmount), 'kubejs:catalyst_empty']).id('mbm2:filling/catalyst_basic')
	global.ieBottling(event, [Item.of('kubejs:catalyst_basic').toJson()], Item.of('kubejs:catalyst_empty').toJson(), {"tag":"forge:basic_catalyst_mixture","amount":fillingAmount}, 'mbm2:ie/bottling/catalyst_basic')
	event.recipes.thermal.bottler('kubejs:catalyst_basic', ['kubejs:catalyst_empty', Fluid.of('kubejs:basic_catalyst_mixture', fillingAmount)]).id('mbm2:thermal/bottling/catalyst_basic')



	//////Crystal Catlyst//////
	global.ieMixer(event, Fluid.of('kubejs:crystal_catalyst_mixture', 1000), {"tag":"forge:experience","amount":1000}, Item.of('apotheosis:gem_dust'), 4000, 'mbm2:mixer/crystal_catalyst_mixture')
	global.ieMixer(event, Fluid.of('kubejs:crystal_catalyst_mixture', 250), {"tag":"forge:experience","amount":250}, Item.of('kubejs:crystal_slag_dust'), 4000, 'mbm2:mixer/crystal_catalyst_mixture_slag')
	
	//Filling
	event.recipes.createFilling('kubejs:catalyst_gem', [Fluid.of('kubejs:crystal_catalyst_mixture', fillingAmount), 'kubejs:catalyst_empty']).id('mbm2:filling/catalyst_gem')
	global.ieBottling(event, [Item.of('kubejs:catalyst_gem').toJson()], Item.of('kubejs:catalyst_empty').toJson(), {"tag":"forge:crystal_catalyst_mixture","amount":fillingAmount}, 'mbm2:ie/bottling/catalyst_gem')
	event.recipes.thermal.bottler('kubejs:catalyst_gem', ['kubejs:catalyst_empty', Fluid.of('kubejs:crystal_catalyst_mixture', fillingAmount)]).id('mbm2:thermal/bottling/catalyst_gem')



	//////magic Catlyst//////
	global.ieMixer(event, Fluid.of('kubejs:magic_catalyst_mixture', 1000), {"tag":"forge:experience","amount":1000}, Item.of('ars_nouveau:source_gem'), 4000, 'mbm2:mixer/magic_catalyst_mixture')
	global.ieMixer(event, Fluid.of('kubejs:magic_catalyst_mixture', 500), {"tag":"forge:experience","amount":500}, Item.of('botania:mana_powder'), 4000, 'mbm2:mixer/magic_catalyst_mixture_slag')
	
	//Filling
	event.recipes.createFilling('kubejs:catalyst_magic', [Fluid.of('kubejs:magic_catalyst_mixture', fillingAmount), 'kubejs:catalyst_empty']).id('mbm2:filling/catalyst_magic')
	global.ieBottling(event, [Item.of('kubejs:catalyst_magic').toJson()], Item.of('kubejs:catalyst_empty').toJson(), {"tag":"forge:magic_catalyst_mixture","amount":fillingAmount}, 'mbm2:ie/bottling/catalyst_magic')
	event.recipes.thermal.bottler('kubejs:catalyst_magic', ['kubejs:catalyst_empty', Fluid.of('kubejs:magic_catalyst_mixture', fillingAmount)]).id('mbm2:thermal/bottling/catalyst_magic')

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

		event.remove({id: `mekanism:processing/${item.material}/slurry/dirty/from_ore`})
		event.remove({id: `mekanism:processing/${item.material}/slurry/dirty/from_raw_ore`})
		event.remove({id: `mekanism:processing/${item.material}/slurry/clean`})
		event.remove({id: `mekanism:processing/${item.material}/crystal/from_slurry`})

		event.remove({id: `mekanism:processing/${item.material}/clump/from_raw_block`})
		event.remove({id: `mekanism:processing/${item.material}/shard/from_raw_block`})
		event.remove({id: `mekanism:processing/${item.material}/slurry/dirty/from_raw_block`})
		event.remove({id: `mekanism:processing/${item.material}/dust/from_raw_ore`})
		event.remove({id: `mekanism:processing/${item.material}/dust/from_dirty_dust`})
		event.remove({id: `mekanism:processing/${item.material}/dust/from_raw_block`})
		event.remove({id: `elementalcraft:pure_ore/mekanism/processing/${item.material}/dust/from_ore`})
		event.remove({id: `elementalcraft:pure_ore/mekanism/processing/${item.material}/dust/from_ore`})
		event.remove({id: `elementalcraft:forge_${item.material}_to_pure_ore`})
		
		if (item.ore) {
		// Fragmets
		if(Item.of(`#forge:ores/raw/${item.material}`) != null) {
		event.shaped(Item.of(`#forge:ores/raw/${item.material}`), [
			'FF',
			'FF'
		  ], {
			F: Item.of(`#forge:ores/fragment/${item.material}`)
		  }).id(`mbm2:${item.material}_fragment_merge`)
		  event.shapeless(`4x #forge:ores/fragment/${item.material}`, [`#forge:ores/raw/${item.material}`]).id(`mbm2:${item.material}_fragment_split`)
		}
	  
			
			//This makes a list of every smeltable/refinable part based on the grade 
			let refineProcessedOre = []
			let smeltProcessedOre = []
			global.oreProcessingParts.forEach((part) => {
				if (part.grade >= item.tier-1 && Item.of(`#forge:ores/${part.name}/${item.material}`) != null) {
					refineProcessedOre.push(`#forge:ores/${part.name}/${item.material}`)
					smeltProcessedOre.push(`#forge:ores/${part.name}/${item.material}`)
				}
				//Grit can also be smelted
				//if (part.name == 'grit' /*part.grade == 0 && item.tier != 0*/) {
					smeltProcessedOre.push(`#forge:ores/grit/${item.material}`)
				//}
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


			
			//New Function that makes a byproduct! Exsample use: byproduct('washed', 1)
			var  byproduct = (type, tier) => {
				if (item.byproducts != null) {
					if (item.type != 'compound_ore') {
						if (Item.of(`#forge:ores/${type}/${item.byproducts[tier-1]}`) != null) {
							return `#forge:ores/${type}/${item.byproducts[tier-1]}`
						} else {
							return `#forge:ores/${type}/${item.material}`
						}
					} else {
						if (Item.of(`#forge:ores/${type}/${item.components[tier-1]}`) != null) {
							return `#forge:ores/${type}/${item.components[tier-1]}`
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
				if (Item.of(`#forge:ores/pure/${item.material}`) != null) {
				//event.recipes.immersiveengineeringCrusher(`#forge:dusts/${item.material}`, `#forge:ores/pure/${item.material}`).id(`mbm2:immersive/crushing/pure_${item.material}`)
				event.recipes.createMilling([`#forge:dusts/${item.material}`], [`#forge:ores/pure/${item.material}`]).id(`mbm2:create/crushing/pure_${item.material}`)
				event.recipes.mekanismCrushing(`#forge:dusts/${item.material}`, `#forge:ores/pure/${item.material}`).id(`mbm2:mekanism/crushing/pure_${item.material}`)
				}
				//Crush Smetable Ore
				if (refineProcessedOre != null) {
					refineProcessedOre.forEach((part) => {
						let partName = part.split('#forge:ores/')[1]
						//event.recipes.immersiveengineeringCrusher(`#forge:dusts/${item.material}`, part).id(`mbm2:immersive/crushing/${partName}`)
						event.recipes.createMilling([`#forge:dusts/${item.material}`], part).id(`mbm2:create/crushing/${partName}`)
						event.recipes.mekanismCrushing(`#forge:dusts/${item.material}`, part).id(`mbm2:mekanism/crushing/${partName}`)
					})
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

			if (item.type == 'base_metal' || item.type == 'compound_ore' || item.type == 'rare_metal') {

				///////////////////// ORE PROCESSING STEP 1 //////////////////
				//Create Crushing
				event.recipes.createCrushing([
					`#forge:ores/crushed/${item.material}`,
					Item.of(byproduct('grit', 1)).withChance(0.1), 
					Item.of('create:experience_nugget').withChance(0.15)
				], `#forge:raw_materials/${item.material}`).id(`mbm2:crushing/raw_${item.material}`)

				//Ores give more byproduct or something
				event.recipes.createCrushing([
					`#forge:ores/crushed/${item.material}`,
					Item.of(byproduct('grit', 1)).withChance(0.25), 
					Item.of('create:experience_nugget').withChance(0.25)
				], `#forge:ores/${item.material}`).id(`mbm2:crushing/ore_${item.material}`)



				///////////////////// ORE PROCESSING STEP 2 //////////////////
				//IE Crushing
				global.ieCrusher(event, 
					{"count":1,"base_ingredient":Item.of(`#forge:ores/chunk/${item.material}`).toJson()}, //Output
					[{'chance': 0.1, 'output': Item.of(byproduct('grit', 2)).toJson()}, {chance: 0.15, output: {"item": 'immersiveengineering:slag_gravel'}}], 
					{"tag":`forge:ores/crushed/${item.material}`}, //Input
					6000, `mbm2:immersiveengineering/crushing/crushed_${item.material}`)

					

				///////////////////// ORE PROCESSING STEP 3 //////////////////
				//Water Filter
				event.shaped('kubejs:water_filter', [
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
				.inputFluid(Fluid.of('water', 250))
				.inputItem(`#forge:ores/chunk/${item.material}`)
				.outputItem(Item.of(`#forge:ores/lump/${item.material}`))
				.outputFluid(Fluid.of('kubejs:sludge', 250))
				.setPerTick(true)
				.inputFE(4000)
				.duration(100)
				//Ore Flotation w/ Purified Water
				event.recipes.multiblocked.multiblock("flotation")
				.inputFluid(Fluid.of('kubejs:purified_water', 250))
				.inputItem(`#forge:ores/chunk/${item.material}`)
				.outputItem(Item.of(`#forge:ores/lump/${item.material}`))
				.setChance(0.25)
				.outputItem(Item.of(byproduct('pure', 3)))
				.setChance(1)
				.outputFluid(Fluid.of('kubejs:sludge', 250))
				.setPerTick(true)
				.inputFE(4000)
				.duration(100)

				///////////////////// ORE PROCESSING STEP 4 //////////////////
				//Slurry
				let slurry = `kubejs:${item.material}_slurry`
				let quotedSlurry = "'" +slurry+"'"
				event.custom({
					"input": [
						{
							'item': `kubejs:lump_${item.material}`
						}
					],
					"inputFluid": `{FluidName:'mekanism:hydrogen_chloride',Amount:200}`,
					"processingTime": 200,
					"output": {
					  "item": 'kubejs:crystal_slag',
					  "count": 1
					},
					"outputFluid": `{FluidName:${quotedSlurry},Amount:1000}`,
					"type": "industrialforegoing:dissolution_chamber"
				  }).id(`mbm2:${item.material}_slurry_from_lump`)

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
				global.mekanismMetallurgicInfusing(event, Item.of('kubejs:carbon_mesh'), Item.of('kubejs:zinc_mesh'), 'mekanism:carbon', 10, `mbm2:carbon_mesh`)
				//Activated Carbon Mesh
				event.recipes.mekanismPurifying('kubejs:activated_carbon_mesh', 'kubejs:carbon_mesh', {gas: 'mekanism:oxygen', amount: 1})

				//Ore Deposting
				event.recipes.multiblocked.multiblock("deposition")
				.inputFluid(Fluid.of(`kubejs:${item.material}_slurry`, 1000))
				.inputItem('kubejs:zinc_mesh')
				.outputItem(Item.of(`#forge:ores/deposit/${item.material}`))
				.setPerTick(true)
				.inputFE(4000*4)
				.duration(200)
				//Ore Deposting
				event.recipes.multiblocked.multiblock("deposition")
				.inputFluid(Fluid.of(`kubejs:${item.material}_slurry`, 1000))
				.inputItem('kubejs:activated_carbon_mesh')
				.outputItem(Item.of(`#forge:ores/deposit/${item.material}`))
				.setChance(0.15)
				.outputItem(Item.of(byproduct('brick', 4)))
				.setChance(1)
				.setPerTick(true)
				.inputFE(4000*4)
				.duration(150)
				
				///////////////////// ORE PROCESSING STEP 5 //////////////////


				//Ore Leaching
				event.recipes.multiblocked.multiblock("leaching")
				.inputFluid(Fluid.of('mekanism:sulfuric_acid', 100))
				.inputFluid(Fluid.of('chemlib:nitric_acid_fluid', 100))
				.inputItem(`#forge:ores/deposit/${item.material}`)
				.outputItem(Item.of(`#forge:ores/leached/${item.material}`))
				.setPerTick(true)
				.inputFE(4000*8)
				.duration(200)
				//Ore Leaching w/ Hydroflouric Acid
				event.recipes.multiblocked.multiblock("leaching")
				.inputFluid(Fluid.of('mekanism:hydrofluoric_acid', 500))
				.inputFluid(Fluid.of('chemlib:nitric_acid_fluid', 100))
				.inputItem(`#forge:ores/deposit/${item.material}`)
				.outputItem(Item.of(`#forge:ores/leached/${item.material}`))
				.setChance(0.25)
				.outputItem(Item.of(byproduct('grit', 5)))
				.setChance(1)
				.setPerTick(true)
				.inputFE(4000*8)
				.duration(200)


				///////////////////// ORE PROCESSING STEP 6 //////////////////
				//Vaccum Chamber
				event.recipes.multiblocked.multiblock("vaccum")
				.inputFluid(Fluid.of(`industrialforegoing:ether_gas`, 100))
				.inputItem(Item.of(`#forge:ores/leached/${item.material}`))
				.outputFluid(Fluid.of(`kubejs:concentrated_${item.material}_slurry`, 100))
				.setPerTick(true)
				.inputFE(4000*4)
				.duration(40)


				//Crystal Growing
				//event.recipes.multiblocked.multiblock("crystallization")
				//.inputFluid(Fluid.of(`kubejs:${item.material}_slurry`, 1000))
				//.outputItem(Item.of(`#forge:ores/crystal/${item.material}`))
				//.setPerTick(true)
				//.inputFE(4000*12)
				//.duration(250)

				//Crystal Growing
				event.recipes.multiblocked.multiblock("crystallization")
				.inputFluid(Fluid.of(`kubejs:concentrated_${item.material}_slurry`, 100))
				//.inputItem(Item.of(`#forge:ores/shard/${item.material}`))
				.outputItem(Item.of(`#forge:ores/crystal/${item.material}`))
				//.outputFluid(Fluid.of(`kubejs:${item.material}_slurry`, 250))
				.setPerTick(true)
				.inputFE(4000*16)
				.duration(200)
			}
			if (item.ore && (item.type == 'base_metal' || item.type == 'rare_metal')) {

				///////////////////// ORE REFINING STEP 1 //////////////////
					//Create Washing 
					event.recipes.createSplashing([`#forge:dusts/${item.material}`, Item.of(`#forge:ores/grit/${item.material}`).withChance(0.25), Item.of('gravel').withChance(0.25)], `#mbm2:ore_part/refinable_tier_1/${item.material}`/*refinableOre(1) in tag form because washing is spechlae*/).id(`mbm2:washing/${item.material}`)
					
					//Chain recipe
					//event.recipes.createSplashing([`#forge:ores/washed/${item.material}`], `#forge:ores/${global.oreRefiningParts[2].name}/${item.material}`).id(`mbm2:washing/${global.oreRefiningParts[2].name}_ore_${item.material}`)
					
	  				//Purifing
					let pureOre = Item.of(`#forge:ores/pure/${item.material}`).toString().split("'")[1]
	  				global.arsImbuement(event, pureOre, global.refiningMultiplier[1], `#mbm2:ore_part/refinable_tier_1/${item.material}`, 2000, [{"item": {"item": 'ars_nouveau:glyph_crush'}},{"item": Item.of('elementalcraft:scroll', '{elementalcraft:{spell:"elementalcraft:purification"}}').toJson()},{"item": {"item": 'elementalcraft:pristine_earth_gem'}}], `mbm2:purifing/${item.material}`)
					
					//Chain recipe
					global.arsImbuement(event, pureOre, 1, `#forge:ores/${global.oreRefiningParts[2].name}/${item.material}`, 500, [{"item": {"item": 'ars_nouveau:glyph_crush'}},{"item": Item.of('elementalcraft:scroll', '{elementalcraft:{spell:"elementalcraft:purification"}}').toJson()},{"item": {"item": 'elementalcraft:pristine_earth_gem'}}], `mbm2:purifing/${global.oreRefiningParts[2].name}_ore_${item.material}`)
					

				///////////////////// ORE REFINING STEP 2 //////////////////
			
					//NA Crushing
					global.naturesauraAltar(event, `${global.refiningMultiplier[2]}x kubejs:${global.oreRefiningParts[2].name}_${item.material}`, `#mbm2:ore_part/refinable_tier_2/${item.material}`, 'naturesaura:crushing_catalyst', 'overworld', 10000, 80, `mbm2:${global.oreRefiningParts[2].name}/${item.material}`)
					//Chain recipe
					global.naturesauraAltar(event, `kubejs:${global.oreRefiningParts[2].name}_${item.material}`, `kubejs:${global.oreRefiningParts[3].name}_${item.material}`, 'naturesaura:crushing_catalyst', 'overworld', 2000, 40, `mbm2:chain_recipe/${global.oreRefiningParts[2].name}/${item.material}`)

	 				////Imbuing
	 				//global.arsImbuement(event, `kubejs:${global.oreRefiningParts[2]}_${item.material}`, global.refiningMultiplier[2], refinableOre(2), 3000, [], `mbm2:${global.oreRefiningParts[2]}/${item.material}`)
//
					////Chain recipe
	 				//global.arsImbuement(event, `kubejs:${global.oreRefiningParts[2]}_${item.material}`, 1, `#forge:ores/cluster/${item.material}`, 500, [], `mbm2:${global.oreRefiningParts[2]}/${global.oreRefiningParts[3]}_${item.material}`)
					 
				///////////////////// ORE REFINING STEP 3 //////////////////
			
				//Compressing
				event.recipes.multiblocked.multiblock("mana_compressor")
				.inputItem(refinableOre(3))
				.inputItem(Item.of('pneumaticcraft:air_canister', '{"pneumaticcraft:air":30000}'))
				.inputFluid(Fluid.of(`kubejs:liquid_mana`, 100))
				.outputItem(Item.of(`${global.refiningMultiplier[3]}x #forge:ores/${global.oreRefiningParts[3].name}/${item.material}`))
				.outputItem('pneumaticcraft:air_canister')
				.setPerTick(true)
				.inputFE(4000)
				.duration(200)

				//Compressing Chain
				event.recipes.multiblocked.multiblock("mana_compressor")
				.inputItem(Item.of(`4x #forge:ores/${global.oreRefiningParts[4].name}/${item.material}`))
				.inputItem(Item.of('pneumaticcraft:air_canister', '{"pneumaticcraft:air":30000}'))
				.inputFluid(Fluid.of(`kubejs:liquid_mana`, 100))
				.outputItem(Item.of(`4x #forge:ores/${global.oreRefiningParts[3].name}/${item.material}`))
				.outputItem('pneumaticcraft:air_canister')
				.setPerTick(true)
				.inputFE(4000)
				.duration(100)
					
				 

				///////////////////// ORE REFINING STEP 4 //////////////////
				//Ore Processing Deposits
				event.custom({
					"type": "elementalcraft:pureinfusion",
					"element_amount": 16000,
					"ingredients": [
						 refinableOre(4),
						{ "item": 'elementalcraft:springaline_shard'},
						{ "item": 'elementalcraft:contained_crystal'},
						{ "item": 'elementalcraft:contained_crystal'},
						{ "item": 'elementalcraft:springaline_shard'}
					],
					"output": 
						Item.of(`#forge:ores/${global.oreRefiningParts[4].name}/${item.material}`, global.refiningMultiplier[4])
				
				}).id(`mbm2:${global.oreRefiningParts[4].name}/${item.material}`);

				//Infusion Chain
				event.custom({
					"type": "elementalcraft:pureinfusion",
					"element_amount": 500,
					"ingredients": [
						 Item.of(`#forge:ores/${global.oreRefiningParts[5].name}/${item.material}`),
						{ "item": 'minecraft:prismarine_crystals'},
						{ "item": 'forbidden_arcanus:arcane_crystal_dust_speck'},
						{ "item": 'forbidden_arcanus:arcane_crystal_dust_speck'},
						{ "item": 'minecraft:prismarine_crystals'}
					],
					"output": 
						Item.of(`#forge:ores/${global.oreRefiningParts[4].name}/${item.material}`)
					
				}).id(`mbm2:chain_recipe/${global.oreRefiningParts[4].name}/${item.material}`)


		////////////////////////////////////////////////////////////////
		///////////////////// ORE PROCESSING CASH OUT //////////////////
		////////////////////////////////////////////////////////////////

		//Blast Furnace Data
		global.coilHeatValues = [
			{
				name: 'white_alloy',
				heat: 100
			},
			{
				name: 'desh',
				heat: 200
			},
			{
				name: 'tungsten',
				heat: 300
			},
			{
				name: 'adamantium',
				heat: 400
			},
			{
				name: 'vibranium',
				heat: 1000
			}
		]
		global.coilPos = [
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


				//Cash out at any time after Processing

				////////////// TIER 1 OR BELOW /////////////////////
				if (item.tier <= 1) {
						//Ore Part Tier 1 Metal Smelting
						event.smelting(`#forge:ingots/${item.material}`, smeltProcessedOre).xp(0.5).id(`mbm2:smelting/t1_ore_part_${item.material}`)
						event.blasting(`#forge:ingots/${item.material}`, smeltProcessedOre).xp(1.0).id(`mbm2:blasting/t1_ore_part_${item.material}`)
						event.smelting(`#forge:ingots/${item.material}`, smeltRefinedOre).xp(0.5).id(`mbm2:smelting/ore_refined_part_${item.material}`)
						event.blasting(`#forge:ingots/${item.material}`, smeltRefinedOre).xp(1.0).id(`mbm2:blasting/ore_refined_part_${item.material}`)
						
						event.smelting(`2x #forge:nuggets/${item.material}`, `#forge:ores/fragment/${item.material}`).xp(0.5).id(`mbm2:smelting/fragment_${item.material}`)
						event.blasting(`2x #forge:nuggets/${item.material}`, `#forge:ores/fragment/${item.material}`).xp(1.0).id(`mbm2:blasting/fragment_${item.material}`)

						//Retro Smeltery
				  	if (item.fluid_id != null) {
						smeltProcessedOre.forEach((part) => {
							//Foundry Processing for ores
							global.tinkersOreMelting(event, 'kubejs:molten_slag', 50,  item.fluid_id, 90, part, 1000, 150, `mbm2:foundry/melting/${part.split(':')[1]}`)
						})
						smeltRefinedOre.forEach((part) => {
							global.tinkersMeltingPlain(event, item.fluid_id, 90, Ingredient.of(part).toJson(), 900, 75, `mbm2:smeltery/melting/${part.split(':')[1]}`)
						})
					}

						//Retro Arcing
						event.recipes.immersiveengineeringArcFurnace(Item.of(`#forge:ingots/${item.material}`), smeltProcessedOre).id(`mbm2:arc_furnace/${item.material}_t1_ore_part`)

						//Retro Blasting
						event.recipes.multiblocked.multiblock("ebf")
						.inputFluid(Fluid.of('mekanism:oxygen', 500))
						.inputItem(smeltProcessedOre)
						.outputItem(Item.of(`#forge:ingots/${item.material}`))
						.setPerTick(true)
						.inputFE(4000)
						.duration(150)
						//Retro Blasting air
						event.recipes.multiblocked.multiblock("ebf")
						.inputFluid(Fluid.of('kubejs:liquid_air', 500))
						.inputItem(smeltProcessedOre)
						.outputItem(Item.of(`#forge:ingots/${item.material}`))
						.setPerTick(true)
						.inputFE(4000)
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
						console.log(`KJS-ERROR: ${item.material} needs a fluid_id in Master Material List`)
					}
					//Retro Arcing
					event.recipes.immersiveengineeringArcFurnace(Item.of(`#forge:ingots/${item.material}`), smeltProcessedOre).id(`mbm2:arc_furnace/${item.material}_t2_ore_part`)
					//Retro Blasting
					event.recipes.multiblocked.multiblock("ebf")
					.inputFluid(Fluid.of('kubejs:liquid_air', 500))
					.inputItem(smeltProcessedOre)
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					.setPerTick(true)
					.inputFE(4000)
					.duration(200)
					//Oxygen
					event.recipes.multiblocked.multiblock("ebf")
					.inputFluid(Fluid.of('mekanism:oxygen', 500))
					.inputItem(smeltProcessedOre)
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					.setPerTick(true)
					.inputFE(4000)
					.duration(150)
				}
				
			////////////// TIER 3 /////////////////////
				if (item.tier == 3) {
						event.recipes.immersiveengineeringArcFurnace(Item.of(`#forge:ingots/${item.material}`), smeltProcessedOre).id(`mbm2:arc_furnace/${item.material}_t3_ore_part`)

						//Retro Blasting
						event.recipes.multiblocked.multiblock("ebf")
						.inputFluid(Fluid.of('kubejs:liquid_air', 500))
						.inputItem(smeltProcessedOre)
						.outputItem(Item.of(`#forge:ingots/${item.material}`))
						.setPerTick(true)
						.inputFE(4000)
						.duration(200)
						//Oxygen
						event.recipes.multiblocked.multiblock("ebf")
						.inputFluid(Fluid.of('mekanism:oxygen', 500))
						.inputItem(smeltProcessedOre)
						.outputItem(Item.of(`#forge:ingots/${item.material}`))
						.setPerTick(true)
						.inputFE(4000)
						.duration(150)
				}
				
				if (item.tier <= 3) {
					event.recipes.immersiveengineeringArcFurnace(Item.of(`#forge:ingots/${item.material}`), smeltRefinedOre).id(`mbm2:arc_furnace/${item.material}_ore_refined_part`)
				}

			////////////// TIER 4 /////////////////////
				if (item.tier == 4) {
					//Oxygen
					event.recipes.multiblocked.multiblock("ebf")
					.inputFluid(Fluid.of('mekanism:oxygen', 500))
					.inputItem(smeltProcessedOre)
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					.setPerTick(true)
					.inputFE(4000)
					.duration(150)

					//Air
					event.recipes.multiblocked.multiblock("ebf")
					.inputFluid(Fluid.of('kubejs:liquid_air', 500))
					.inputItem(smeltProcessedOre)
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					.setPerTick(true)
					.inputFE(4000)
					.duration(200)
				}
				if (item.tier <= 4) {
					//Oxygen
					event.recipes.multiblocked.multiblock("ebf")
					.inputFluid(Fluid.of('mekanism:oxygen', 500))
					.inputItem(smeltRefinedOre)
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					.setPerTick(true)
					.inputFE(4000)
					.duration(150)

					//Air
					event.recipes.multiblocked.multiblock("ebf")
					.inputFluid(Fluid.of('kubejs:liquid_air', 500))
					.inputItem(smeltRefinedOre)
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					.setPerTick(true)
					.inputFE(4000)
					.duration(200)
				}

				////////////// TIER 5 /////////////////////
				if (item.tier == 5) {
					let tier5Temp = 2000
						event.recipes.multiblocked.multiblock("ebf")
							.inputFluid(Fluid.of('mekanism:oxygen', 500))
							.inputItem(smeltProcessedOre)
							.outputItem(Item.of(`#forge:ingots/${item.material}`))
							.setPerTick(true)
							.inputFE(4000)
							.duration(200)
							.data({ temperature: tier5Temp })
							.text(`    Heat: §6${tier5Temp}`)
							.predicate((recipe, recipeLogic) => {
								let reqTemp = recipe.getData().getInt("temperature")
								let controllerTe = recipeLogic.controller.self()
								let level = controllerTe.getLevel()
								let coilTotalHeat = 0
								global.coilPos.forEach(pos => {
									let coilName = level.getBlockState(controllerTe.getBlockPos().offset(pos.x, pos.y, pos.z)).getBlock()
									global.coilHeatValues.forEach(material => {
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
							}, Component.string('Requires at least Desh Coils'))
												event.recipes.multiblocked.multiblock("ebf")
							.inputFluid(Fluid.of('mekanism:oxygen', 500))
							.inputItem(smeltRefinedOre)
							.outputItem(Item.of(`#forge:ingots/${item.material}`))
							.setPerTick(true)
							.inputFE(4000)
							.duration(200)
							.data({ temperature: tier5Temp })
							.text(`    Heat: §6${tier5Temp}`)
							.predicate((recipe, recipeLogic) => {
								let reqTemp = recipe.getData().getInt("temperature")
								let controllerTe = recipeLogic.controller.self()
								let level = controllerTe.getLevel()
								let coilTotalHeat = 0
								global.coilPos.forEach(pos => {
									let coilName = level.getBlockState(controllerTe.getBlockPos().offset(pos.x, pos.y, pos.z)).getBlock()
									global.coilHeatValues.forEach(material => {
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
							}, Component.string('Requires at least Desh Coils'))
				}
				////////////// TIER 6 /////////////////////
				if (item.tier == 6) {
					let tier6Temp = 3000
						event.recipes.multiblocked.multiblock("ebf")
							.inputFluid(Fluid.of('chemlib:argon_fluid', 500))
							.inputItem(smeltProcessedOre)
							.outputItem(Item.of(`#forge:ingots/${item.material}`))
							.setPerTick(true)
							.inputFE(4000*4)
							.duration(200)
							.data({ temperature: tier6Temp })
							.text(`    Heat: §6${tier6Temp}`)
							.predicate((recipe, recipeLogic) => {
								let reqTemp = recipe.getData().getInt("temperature")
								let controllerTe = recipeLogic.controller.self()
								let level = controllerTe.getLevel()
								let coilTotalHeat = 0
								global.coilPos.forEach(pos => {
									let coilName = level.getBlockState(controllerTe.getBlockPos().offset(pos.x, pos.y, pos.z)).getBlock()
									global.coilHeatValues.forEach(material => {
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
							}, Component.string('Requires at least Tungsten Coils'))
				}
				////////////// TIER 7 /////////////////////
				if (item.tier == 7) {
					let tier7Temp = 4000
						event.recipes.multiblocked.multiblock("ebf")
							.inputFluid(Fluid.of('chemlib:xenon_fluid', 500))
							.inputItem(smeltProcessedOre)
							.outputItem(Item.of(`#forge:ingots/${item.material}`))
							.setPerTick(true)
							.inputFE(4000*4)
							.duration(200)
							.data({ temperature: tier7Temp })
							.text(`    Heat: §6${tier7Temp}`)
							.predicate((recipe, recipeLogic) => {
								let reqTemp = recipe.getData().getInt("temperature")
								let controllerTe = recipeLogic.controller.self()
								let level = controllerTe.getLevel()
								let coilTotalHeat = 0
								global.coilPos.forEach(pos => {
									let coilName = level.getBlockState(controllerTe.getBlockPos().offset(pos.x, pos.y, pos.z)).getBlock()
									global.coilHeatValues.forEach(material => {
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
							}, Component.string('Requires at least Adamantium Coils'))
				}

		}

		////////////////////////////////////////////////////////////////
		///////////////////// COMPOUND ORE STUFFFFFFS //////////////////
		////////////////////////////////////////////////////////////////

			if (item.type == 'compound_ore') {
					console.log(`${item.material} is a compound ore!`);
					console.log(`${item.components[0]} is the first output!`);
					
					if (Item.of(`#forge:ingots/${item.components[0]}`) != null) {
						event.smelting(`#forge:ingots/${item.components[0]}`, [`#forge:raw_materials/${item.material}`,`#forge:dusts/${item.material}`,`#forge:ores/grit/${item.material}`]).id(`mbm2:smelting/raw_${item.material}`)
						event.blasting(`#forge:ingots/${item.components[0]}`, [`#forge:raw_materials/${item.material}`,`#forge:dusts/${item.material}`,`#forge:ores/grit/${item.material}`]).id(`mbm2:blasting/raw_${item.material}`)

						event.smelting(`2x #forge:nuggets/${item.components[0]}`, `#forge:ores/fragment/${item.material}`).xp(0.5).id(`mbm2:smelting/fragment_${item.material}`)
						event.blasting(`2x #forge:nuggets/${item.components[0]}`, `#forge:ores/fragment/${item.material}`).xp(1.0).id(`mbm2:blasting/fragment_${item.material}`)
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
						.outputItem(`3x #forge:ores/crushed/${item.components[0]}`)
						.outputItem(`2x #forge:ores/crushed/${item.components[1]}`)
						.outputItem(`#forge:ores/crushed/${item.components[2]}`)
						.outputItem('2x thermal:slag')
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
				  	.inputFE(500)
					.duration(200)

					//Sorting F grade at tier 2
				  	event.recipes.multiblocked.multiblock('sorter_mk2')
				  	.inputItem(`16x #forge:ores/${global.oreProcessingParts[1].name}/${item.material}`)
				  	.outputItem(`5x #forge:ores/${global.oreProcessingParts[1].name}/${item.components[0]}`)
				  	.outputItem(`4x #forge:ores/${global.oreProcessingParts[1].name}/${item.components[1]}`)
				  	.outputItem(`3x #forge:ores/${global.oreProcessingParts[1].name}/${item.components[2]}`)
				  	.outputItem('4x thermal:slag')
						.setPerTick(true)
					.inputFE(500)
				  	.duration(200)

				  //Sorting E grade at tier 2
					event.recipes.multiblocked.multiblock('sorter_mk2')
					.inputItem(`20x #forge:ores/${global.oreProcessingParts[2].name}/${item.material}`)
					.outputItem(`5x #forge:ores/${global.oreProcessingParts[2].name}/${item.components[0]}`)
					.outputItem(`4x #forge:ores/${global.oreProcessingParts[2].name}/${item.components[1]}`)
					.outputItem(`3x #forge:ores/${global.oreProcessingParts[2].name}/${item.components[2]}`)
					.outputItem(`2x #forge:ores/${global.oreProcessingParts[2].name}/${item.components[3]}`)
					.outputItem('6x thermal:slag')
						.setPerTick(true)
					.inputFE(500*4)
					.duration(200)

					//Sorting D grade at tier 2
					  event.recipes.multiblocked.multiblock('sorter_mk2')
					  .inputItem(`24x #forge:ores/${global.oreProcessingParts[3].name}/${item.material}`)
					  .outputItem(`6x #forge:ores/${global.oreProcessingParts[3].name}/${item.components[0]}`)
					  .outputItem(`5x #forge:ores/${global.oreProcessingParts[3].name}/${item.components[1]}`)
					  .outputItem(`4x #forge:ores/${global.oreProcessingParts[3].name}/${item.components[2]}`)
					  .outputItem(`3x #forge:ores/${global.oreProcessingParts[3].name}/${item.components[3]}`)
					  .outputItem(`2x #forge:ores/${global.oreProcessingParts[3].name}/${item.components[4]}`)
					  .outputItem('4x thermal:slag')
						  .setPerTick(true)
					  .inputFE(500*4)
					  .duration(200)

				  //Sorting C grade at tier 2
				  	event.recipes.multiblocked.multiblock('sorter_mk2')
				  	.inputItem(`28x #forge:ores/${global.oreProcessingParts[4].name}/${item.material}`)
				  	.outputItem(`7x #forge:ores/${global.oreProcessingParts[4].name}/${item.components[0]}`)
				  	.outputItem(`6x #forge:ores/${global.oreProcessingParts[4].name}/${item.components[1]}`)
				  	.outputItem(`4x #forge:ores/${global.oreProcessingParts[4].name}/${item.components[2]}`)
				  	.outputItem(`3x #forge:ores/${global.oreProcessingParts[4].name}/${item.components[3]}`)
				  	.outputItem(`2x #forge:ores/${global.oreProcessingParts[4].name}/${item.components[4]}`)
				  	.outputItem(`2x #forge:ores/${global.oreProcessingParts[4].name}/${item.components[5]}`)
				  	.outputItem('4x thermal:slag')
						.setPerTick(true)
					.inputFE(500*16)
				  	.duration(200)

					//Sorting B grade at tier 2
					event.recipes.multiblocked.multiblock('sorter_mk2')
					.inputItem(`32x #forge:ores/${global.oreProcessingParts[5].name}/${item.material}`)
					.outputItem(`7x #forge:ores/${global.oreProcessingParts[5].name}/${item.components[0]}`)
					.outputItem(`6x #forge:ores/${global.oreProcessingParts[5].name}/${item.components[1]}`)
					.outputItem(`5x #forge:ores/${global.oreProcessingParts[5].name}/${item.components[2]}`)
					.outputItem(`4x #forge:ores/${global.oreProcessingParts[5].name}/${item.components[3]}`)
					.outputItem(`2x #forge:ores/${global.oreProcessingParts[5].name}/${item.components[4]}`)
					.outputItem(`2x #forge:ores/${global.oreProcessingParts[5].name}/${item.components[5]}`)
					.outputItem(`2x #forge:ores/${global.oreProcessingParts[5].name}/${item.components[6]}`)
					.outputItem('4x thermal:slag')
						.setPerTick(true)
					.inputFE(500*64)
					.duration(200)

					//Sorting A grade at tier 2
					event.recipes.multiblocked.multiblock('sorter_mk2')
					.inputItem(`36x #forge:ores/${global.oreProcessingParts[6].name}/${item.material}`)
					.outputItem(`7x #forge:ores/${global.oreProcessingParts[6].name}/${item.components[0]}`)
					.outputItem(`6x #forge:ores/${global.oreProcessingParts[6].name}/${item.components[1]}`)
					.outputItem(`5x #forge:ores/${global.oreProcessingParts[6].name}/${item.components[2]}`)
					.outputItem(`4x #forge:ores/${global.oreProcessingParts[6].name}/${item.components[3]}`)
					.outputItem(`3x #forge:ores/${global.oreProcessingParts[6].name}/${item.components[4]}`)
					.outputItem(`3x #forge:ores/${global.oreProcessingParts[6].name}/${item.components[5]}`)
					.outputItem(`2x #forge:ores/${global.oreProcessingParts[6].name}/${item.components[6]}`)
					.outputItem(`2x #forge:ores/${global.oreProcessingParts[6].name}/${item.components[7]}`)
					.outputItem('4x thermal:slag')
					  .setPerTick(true)
				  	.inputFE(500*256)
					.duration(200)

					

	//Compound Ore Catlyst Usage
	let oreMixer = (event, amount, output, input, power) => {
		event.recipes.multiblocked.multiblock('mixer')
			.inputItems(input)
			.outputItem(Item.of(output, amount))
			.setPerTick(true)
			.inputFE(500*power)
			.duration(100*amount)
	}
	
	//Tier 1
	//oreMixer(event, 4, '#forge:ores/raw/nickel', ['kubejs:catalyst_basic', '2x kubejs:raw_kharaxium', '2x kubejs:raw_vincyte'], 2)
	oreMixer(event, 4, '#forge:ores/raw/zinc', ['kubejs:catalyst_basic', '2x kubejs:raw_jimmium', '2x kubejs:raw_vincyte'], 2)
	oreMixer(event, 4, '#forge:ores/raw/lead', ['kubejs:catalyst_basic', '2x kubejs:raw_densite','2x kubejs:raw_potentium'], 2)
	oreMixer(event, 4, '#forge:ores/raw/silver', ['kubejs:catalyst_basic', '2x kubejs:raw_potentium','2x kubejs:raw_imortite'], 2)

	oreMixer(event, 2, '#forge:ores/raw/arcanite', ['kubejs:catalyst_magic', '2x #forge:ores/compound/raw'], 2)
	
	//Tier 2
	oreMixer(event, 3, '#forge:ores/crushed/cobalt', ['kubejs:catalyst_basic', '2x kubejs:crushed_vincyte','2x kubejs:crushed_imortite'], 4)
	oreMixer(event, 3, '#forge:ores/crushed/aluminum', ['kubejs:catalyst_basic', '2x kubejs:crushed_densite','2x kubejs:crushed_kharaxium'], 4)
	oreMixer(event, 3, '#forge:ores/crushed/nickel', ['kubejs:catalyst_basic', '2x kubejs:crushed_jimmium','2x kubejs:crushed_vincyte'], 4)
	//oreMixer(event, 3, '#forge:ores/crushed/thorium', ['kubejs:catalyst_basic', '2x kubejs:crushed_jimmium','2x kubejs:crushed_vincyte'], 4)
	oreMixer(event, 3, '#forge:ores/crushed/mithril', ['kubejs:catalyst_magic', '2x kubejs:crushed_potentium','2x kubejs:crushed_densite'], 4)
	
	//Tier 3
	oreMixer(event, 2, '#forge:ores/chunk/magnesium', ['kubejs:catalyst_basic', '2x kubejs:chunk_densite','2x kubejs:chunk_kharaxium'], 8)
	oreMixer(event, 2, '#forge:ores/chunk/titanium', ['kubejs:catalyst_basic', '2x kubejs:chunk_vincyte','2x kubejs:chunk_jimmium'], 8)
	oreMixer(event, 2, '#forge:ores/chunk/uranium', ['kubejs:catalyst_basic', '2x kubejs:chunk_imortite','2x kubejs:chunk_densite'], 8)
	oreMixer(event, 2, '#forge:ores/chunk/rune', ['kubejs:catalyst_magic', '2x kubejs:chunk_potentium','2x kubejs:chunk_vincyte'], 8)

	//Tier 4
	oreMixer(event, 3, '#forge:ores/lump/platinum', ['kubejs:catalyst_basic', '2x kubejs:lump_kharaxium','2x kubejs:lump_imortite','2x kubejs:lump_vincyte'], 16)
	oreMixer(event, 3, '#forge:ores/lump/osmium', ['kubejs:catalyst_basic', '2x kubejs:lump_densite','2x kubejs:lump_jimmium','2x kubejs:lump_potentium'], 16)
	oreMixer(event, 3, '#forge:ores/lump/cadmium', ['kubejs:catalyst_basic', '2x kubejs:lump_kharaxium','2x kubejs:lump_jimmium','2x kubejs:lump_imortite'], 16)
	oreMixer(event, 3, '#forge:ores/lump/desh', ['kubejs:catalyst_basic', '2x kubejs:lump_potentium','2x kubejs:lump_vincyte','2x kubejs:lump_densite'], 16)

	//Tier 5
	oreMixer(event, 2, '#forge:ores/deposit/ostrum', ['kubejs:catalyst_basic', '2x kubejs:deposit_kharaxium','2x kubejs:deposit_densite','2x kubejs:deposit_imortite'], 32)
	oreMixer(event, 2, '#forge:ores/deposit/tungsten', ['kubejs:catalyst_basic', '2x kubejs:deposit_vincyte','2x kubejs:deposit_jimmium','2x kubejs:deposit_densite'], 32)
	oreMixer(event, 2, '#forge:ores/deposit/orichalcum', ['kubejs:catalyst_magic', '2x kubejs:deposit_imortite','2x kubejs:deposit_potentium','2x kubejs:deposit_kharaxium'], 32)

	//Tier 6
	oreMixer(event, 1, '#forge:ores/leached/iridium', ['kubejs:catalyst_basic', '2x kubejs:leached_vincyte','2x kubejs:leached_densite','2x kubejs:leached_jimmium'], 64)
	oreMixer(event, 1, '#forge:ores/leached/calorite', ['kubejs:catalyst_basic', '2x kubejs:leached_potentium','2x kubejs:leached_jimmium','2x kubejs:leached_imortite'], 64)
	oreMixer(event, 1, '#forge:ores/leached/adamantium', ['kubejs:catalyst_magic', '2x kubejs:leached_imortite','2x kubejs:leached_kharaxium','2x kubejs:leached_potentium'], 64)

	//Tier 7
	oreMixer(event, 1, '#forge:ores/crystal/vibranium', ['kubejs:catalyst_basic', '3x kubejs:crystal_imortite','3x kubejs:crystal_potentium','3x kubejs:crystal_kharaxium'], 128)
	oreMixer(event, 1, '#forge:ores/crystal/uru', ['kubejs:catalyst_basic', '3x kubejs:crystal_jimmium','3x kubejs:crystal_vincyte','3x kubejs:crystal_densite'], 128)



				//Gem Crafting
				if (item.gem_components != null) {
					if (Item.of(`#forge:gems/${item.gem_components[0]}`) != null) {
						global.thermalCrystallizer(event, 'water', 2000, Item.of(`#forge:gems/${item.gem_components[0]}`).toResultJson(), `#forge:dusts/${item.material}`, `mbm2:crystallizer/${item.gem_components[0]}_from_${item.material}`)
						} else {
						console.log(`${item.gem_components[0]} has no gem!`);
					}
					if (Item.of(`#forge:gems/${item.gem_components[1]}`) != null) {
						global.pneumaticcraftThermoPlant(event, Item.of(`#forge:gems/${item.gem_components[1]}`), Ingredient.of(`#forge:ores/fine_dust/${item.material}`), {"type": "pneumaticcraft:fluid", "fluid": "kubejs:crystal_catalyst_mixture", "amount": 250}, 423, 4, 0.75, 1.0, false, `mbm2:thermo_plant/${item.gem_components[1]}_from_${item.material}`)
					} else {
						console.log(`${item.gem_components[1]} has no gem!`);
					}
				}
			}
		}
		if (item.type == 'compound_rare_metal') {
				event.recipes.multiblocked.multiblock('mixer')
				.inputItems(item.dust_input)
				.outputItem(`${item.amount}x kubejs:${item.material}_blend_chunk`)
		   		.setPerTick(true)
		   		.inputFE(2000)
				.duration(100)

			global.alchemistryDissolver(event, [
				{'probability': 3.0,'results': [{'item': `chemlib:${item.components[0]}`,'count': 4}]},
				{'probability': 1.0,'results': [{'item': `chemlib:${item.components[1]}`,'count': 4}]},
				{'probability': 1.0,'results': [{'item': `chemlib:${item.components[2]}`,'count': 4}]},
				{'probability': 1.0,'results': [{'item': `chemlib:${item.components[3]}`,'count': 4}]},
			], `kubejs:${item.material}_blend_chunk`, 1, 4, true, `mbm2:dissolving/${item.material}_blend_chunk`)


			event.recipes.thermal.centrifuge([
				Item.of(`#forge:dusts/${item.components[0]}`).withChance(0.75),
				Item.of(`#forge:dusts/${item.components[1]}`).withChance(0.50),
				Item.of(`#forge:dusts/${item.components[2]}`).withChance(0.25),
				Fluid.of(`mekanism:${item.components[3]}`, 250)
			], `kubejs:${item.material}_blend_chunk`).id(`mbm2:centrifuge/${item.material}_blend_chunk`)

		}
	})
});


var elementalMobDrops = [
	{
	  'element': 'fire',
	  'drops': ['gunpowder', 'magma_cream', 'blaze_rod'],
	},
	{
	  'element': 'water',
	  'drops': ['slime_ball', 'prismarine_shard', 'prismarine_crystals'],
	},
	{
	  'element': 'air',
	  'drops': ['spider_eye', 'phantom_membrane', 'ender_pearl'],
	},
	{
	  'element': 'earth',
	  'drops': ['rotten_flesh', 'bone', 'wither_skeleton_skull'],
	},
]




onEvent("lootjs", (event) => {
	event.enableLogging();
		event.addBlockLootModifier('#forge:ores/cheese')
			.removeLoot(Item.of('#forge:cheese/cheese'))
			.pool((pool) => {
					pool.addLoot('#forge:cheese/cheese');
					pool.applyOreBonus("minecraft:fortune");
			});
		event.addBlockLootModifier('#forge:ores/runic')
			.removeLoot(Item.of('forbidden_arcanus:rune'))
			.pool((pool) => {
					pool.addLoot('forbidden_arcanus:rune');
					pool.applyOreBonus("minecraft:fortune");
			});
		global.newMaterialParts.forEach((item) => {
			if (item.ore /*&& item.material != 'arcanite'*/) {
				console.log('adding ore drops for: ' + item.material)
				////////////ORE DROPS//////////////////
				event.addBlockLootModifier(`#forge:ores/${item.material}`)
				    .removeLoot(Item.of(`#forge:ores/raw/${item.material}`))
					.pool((pool) => {
						if (item.type == 'gem') {
							//Gems
							pool.addWeightedLoot([
								Item.of(`#forge:gems/${item.material}`).withChance(90),
								Item.of(`#forge:dusts/${item.material}`).withChance(10),
							])
						} else if (item.type == 'element') {
							//Element
							pool.addWeightedLoot([
								Item.of(`elementalcraft:powerful_${item.material}_shard`).withChance(90),
								//Item.of(`elementalcraft:powerful_${item.material}_shard`).withChance(30),
								//Item.of(`elementalcraft:${item.material}crystal`).withChance(12),
							])
						} else if (item.type == 'dust') {
							//Dust
							pool.addWeightedLoot([3, 6], [
								Item.of(`#forge:dusts/${item.material}`).withChance(50),
							])
						} else if (Item.of (`#forge:ores/raw/${item.material}`) != null) {
							//Normal Ores
							pool.addLoot(`#forge:ores/raw/${item.material}`);
						}
						pool.applyOreBonus("minecraft:fortune");
					})
					.apply((ctx) => {
						let player = ctx.player;
						if (!player) return;
						if (ItemFilter.hasEnchantment("minecraft:silk_touch").test(player.mainHandItem)) {
							ctx.removeLoot(Ingredient.getAll().filter(Ingredient.of(`#forge:ores/${item.material}`).not()))
						} else {
							ctx.removeLoot(`#forge:ores/${item.material}`)
						}
					});

					/////////Poor Ores///////////
					if (Item.of(`#forge:poor_ores/${item.material}`) != null) {
						event.addBlockLootModifier(`#forge:poor_ores/${item.material}`)
							.pool((pool) => {
								if (item.type == 'dust') {
									//(Poor) Dust
									pool.addWeightedLoot([1, 2], [
										Item.of(`#forge:dusts/${item.material}`),
									])
								} else {
									//Normal (Poor) Ores
									//pool.addLoot(`#forge:ores/grit/${item.material}`);
									pool.addWeightedLoot([2, 4], [
										Item.of(`#forge:ores/fragment/${item.material}`),
									])
								}
								pool.applyOreBonus("minecraft:fortune");
							})
							.apply((ctx) => {
								let player = ctx.player;
								if (!player) return;
								if (ItemFilter.hasEnchantment("minecraft:silk_touch").test(player.mainHandItem)) {
									ctx.removeLoot(Ingredient.getAll().filter(Ingredient.of(`#forge:poor_ores/${item.material}`).not()))
								} else {
									ctx.removeLoot(`#forge:poor_ores/${item.material}`)
								}
							});
					}
					//Samples (only the raw one actually spawns but still)
					if (item.type == 'gem') {
						event.addBlockLootModifier(`kubejs:${item.material}_ore_sample`)
       						.replaceLoot(`kubejs:${item.material}_ore_sample`, `#forge:gems/${item.material}`);
					} else if (item.type == 'dust') {
						event.addBlockLootModifier(`kubejs:${item.material}_ore_sample`)
       						.replaceLoot(`kubejs:${item.material}_ore_sample`, `#forge:dusts/${item.material}`);
					} else if (item.type != 'element') {
						event.addBlockLootModifier(`kubejs:${item.material}_ore_sample`)
       						.replaceLoot(`kubejs:${item.material}_ore_sample`, `#forge:raw_materials/${item.material}`);
					}
				}
				//Elements
				if (item.type == 'element') {
					elementalMobDrops.forEach(element => {
						if(element.element == item.material) {
							console.log('adding mob drops for: ' + item.material)

							event.addBlockLootModifier(`#forge:ores/${item.material}`)
								.pool((pool) => {
									pool.addWeightedLoot([0,1], [
										Item.of(element.drops[0]).withChance(30),
										Item.of(element.drops[1]).withChance(20),
										Item.of(element.drops[2]).withChance(10)
									])
								})
						}
					});
				}

		})
		//Arcanite
		console.log('adding drops for: arcanite')
			event.addBlockLootModifier('#forge:ores/arcanite')
				.removeLoot(Item.of(`#forge:ores/raw/arcanite`))
				.pool((pool) => {
					pool.addWeightedLoot([
						Item.of(`#forge:raw_materials/arcanite`).withChance(70),
						Item.of('elementalcraft:inert_crystal').withChance(25),
						Item.of('forbidden_arcanus:arcane_crystal').withChance(5)
					])
					pool.applyOreBonus("minecraft:fortune");
				})
				//.apply((ctx) => {
				//	let player = ctx.player;
				//	if (!player) return;
				//	if (ItemFilter.hasEnchantment("minecraft:silk_touch").test(player.mainHandItem)) {
				//		ctx.removeLoot(Ingredient.getAll().filter(Ingredient.of(`#forge:ores/arcanite`).not()))
				//	} else {
				//		ctx.removeLoot('#forge:ores/arcanite')
				//	}
				//})


});
/*
onEvent("lootjs", (event) => {
    event.addBlockLootModifier("#forge:ores/copper")
	.removeLoot("raw_copper")
	//.removeLoot("copper_ore")
        .apply((lootContext) => {
            let player = lootContext.player;
            if (!player) return;
			
			

            if (ItemFilter.hasEnchantment("minecraft:silk_touch").test(player.mainHandItem)) {
                //lootContext.addLoot("copper_ore");
                return;
            }

            let copperItem = LootEntry.of("raw_copper");
            if (ItemFilter.hasEnchantment("minecraft:fortune").test(player.mainHandItem)) {
                copperItem.applylootContextBonus("minecraft:fortune");
            }
			let isMekFake = lootContext.entity && lootContext.entity.minecraftEntity.class.simpleName === "MekFakePlayer"
			console.log('lootContext.entity = ' + lootContext.entity)
			console.log('lootContext.entity.class.simpleName = ' + lootContext.entity.class.simpleName)
			console.log('isMekFake = ' + isMekFake)
			//let miner = lootContext.getLevel().minecraftLevel.getBlockEntity(lootContext.getPosition());
			console.log(lootContext.getPosition() + ' = world pos') 
			//console.log(lootContext.getPlayer().getData() +' = player data') 
			//console.log(miner +' = miner data') 
			

			//if (!miner) {
			//  	console.log('miner could not be found');
			//} else {
			//	console.log('miner is found!');
			//}
			//if (miner.getSilkTouch()) {
			//	console.log('miner has silk touch active');
			//  // miner has silk touch active, do whatever you want here
			//  	return;
			//}
			lootContext.addLoot(copperItem);
        });
});*/

  onEvent('tags.items', event => {
	global.createCrushed.forEach((item) => {
		event.add(`forge:ores/crushed/${item}`, `create:crushed_raw_${item}`)
		event.add(`forge:ores/crushed`, `create:crushed_raw_${item}`)
		 event.remove(`forge:ores/crushed/${item}`, `kubejs:crushed_${item}`)
	})

	//only really needed for washing, will come back to this
	global.newMaterialParts.forEach((item) => {
		

		//Copied from earlier, might streamline or something later
		var  refinableOre = (tier) => {
			let refinableOres = []
			global.oreParts.forEach((part) => {
				//this is just for washing. if an ore can be smelted (tier-1 <= partGrade) then it can be washed
				if(part.grade >= tier && part.grade >= item.tier-1) {
					refinableOres.push(`#forge:ores/${part.name}/${item.material}`)
				}
			})
			return refinableOres
		}

		if(item.type == 'base_metal' || item.type == 'rare_metal') {

			event.add(`mbm2:ore_part/refinable_tier_1/${item.material}`, refinableOre(1))
			event.add(`mbm2:ore_part/refinable_tier_2/${item.material}`, refinableOre(2))
			
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
