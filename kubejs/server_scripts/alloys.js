


onEvent('tags.items', event => {
	global.newMaterialParts.forEach((item) => {
		if ((item.type == 'alloy' ||item.type == 'magic_alloy') && item.tier == 1) {
			event.add(`mbm2:alloys/tier_one`, `#forge:ingots/${item.material}`)
			event.add(`mbm2:alloys/dusts/tier_one`, `#forge:dusts/${item.material}`)
			event.add(`mbm2:alloys/plates/tier_one`, `#forge:plates/${item.material}`)
		} else if ((item.type == 'alloy' ||item.type == 'magic_alloy') && item.tier == 2) {
			event.add(`mbm2:alloys/tier_two`, `#forge:ingots/${item.material}`)
			event.add(`mbm2:alloys/dusts/tier_two`, `#forge:dusts/${item.material}`)
			event.add(`mbm2:alloys/plates/tier_two`, `#forge:plates/${item.material}`)
		} else if ((item.type == 'alloy' ||item.type == 'magic_alloy') && item.tier == 3) {
			event.add(`mbm2:alloys/tier_three`, `#forge:ingots/${item.material}`)
			event.add(`mbm2:alloys/dusts/tier_three`, `#forge:dusts/${item.material}`)
			event.add(`mbm2:alloys/plates/tier_three`, `#forge:plates/${item.material}`)
		} else if ((item.type == 'alloy' ||item.type == 'magic_alloy') && item.tier == 4) {
			event.add(`mbm2:alloys/tier_four`, `#forge:ingots/${item.material}`)
			event.add(`mbm2:alloys/dusts/tier_four`, `#forge:dusts/${item.material}`)
			event.add(`mbm2:alloys/plates/tier_four`, `#forge:plates/${item.material}`)
		} else if ((item.type == 'alloy' ||item.type == 'magic_alloy') && item.tier == 5) {
			event.add(`mbm2:alloys/tier_five`, `#forge:ingots/${item.material}`)
			event.add(`mbm2:alloys/dusts/tier_five`, `#forge:dusts/${item.material}`)
			event.add(`mbm2:alloys/plates/tier_five`, `#forge:plates/${item.material}`)
		} else if ((item.type == 'alloy' ||item.type == 'magic_alloy') && item.tier == 6) {
			event.add(`mbm2:alloys/tier_six`, `#forge:ingots/${item.material}`)
			event.add(`mbm2:alloys/dusts/tier_six`, `#forge:dusts/${item.material}`)
			event.add(`mbm2:alloys/plates/tier_six`, `#forge:plates/${item.material}`)
		} else if ((item.type == 'alloy' ||item.type == 'magic_alloy') && item.tier == 7) {
			event.add(`mbm2:alloys/tier_seven`, `#forge:ingots/${item.material}`)
			event.add(`mbm2:alloys/dusts/tier_seven`, `#forge:dusts/${item.material}`)
			event.add(`mbm2:alloys/plates/tier_seven`, `#forge:plates/${item.material}`)
		}
	})
});

onEvent('recipes', event => {

	global.newMaterialParts.forEach((item) => {

		if (item.type == 'alloy') {
			event.remove({id: `immersiveengineering:alloysmelter/${item.material}`})
			event.remove({id: `thermal:machines/smelter/smelter_alloy_${item.material}`})
			event.remove({id: `thermal:smelting/${item.material}_ingot_from_dust_smelting`})
			event.remove({id: `createaddition:compat/tconstruct/${item.material}`})
			event.remove({id: `immersiveengineering:arcfurnace/alloy_${item.material}`})
			event.remove({id: `tconstruct:smeltery/alloys/molten_${item.material}`})
			event.remove({id: `beyond_earth:smeltery/melting/metal/${item.material}/compresseds`})

			
			event.remove({output: `#forge:ingots/${item.material}`, type: 'minecraft:smelting'})
			event.remove({output: `#forge:ingots/${item.material}`, type: 'minecraft:blasting'})

			
			

			
			
					  
			//Mixing
			if (item.dust_input != null && item.tier != null) {
				if (item.amount != null) {
					if (item.fluid_input != null) {
		 				event.recipes.multiblocked.multiblock('mixer')
		 				.inputItems(item.dust_input)
						.inputFluid(Fluid.of(item.fluid_input, item.fluid_amount*item.amount))
		 				.outputItem(`${item.amount}x #forge:dusts/${item.material}`)
						.setPerTick(true)
						.inputFE(250 * (2**item.tier))
		 				.duration(100 * item.amount)
					} else {
						event.recipes.multiblocked.multiblock('mixer')
						.inputItems(item.dust_input)
						.outputItem(`${item.amount}x #forge:dusts/${item.material}`)
					    .setPerTick(true)
					    .inputFE(250 * (2**item.tier))
						.duration(100 * item.amount)
					}
				} else {
					console.log(`[MBM2 ERROR]: ${item.material} needs an amount in MML to get a mixer recipe!`)
				}
			}
			if (item.base && item.fluid_input != null && item.tier <= 3) {
				global.anyFilling(event, `#forge:ingots/${item.material}`, `#forge:base_ingots/${item.material}`, Fluid.of(item.fluid_input, item.fluid_amount))
			}


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////// Each Tier check represents the lowest tier an action can be preformed in. ///////////////////
//// So if you want to add tinkers alloy recipes to any tier 2 or below, it goes in the tier 2 check /////
//////////////////////////////////////////////////////////////////////////////////////////////////////////



			////////////// TIER 1 OR BELOW /////////////////////
			if (item.tier <= 1) {

				if (item.amount != null) {
					if (item.dust_input != null) {
						//Mixing Dust
						event.recipes.createMixing([`${item.amount}x #forge:dusts/${item.material}`], item.dust_input).id(`mbm2:create/mixing/${item.material}_dust`)
					} 
					if (item.ingot_input != null) {
						//Mixing Ingots
						event.recipes.createMixing(`${item.amount}x #forge:ingots/${item.material}`, item.ingot_input).heated().id(`mbm2:create/mixing/${item.material}_ingot`)
					
						if (item.ingot_input.length == 2) {
							//Kiln
							event.recipes.immersiveengineeringAlloy(`${item.amount}x #forge:ingots/${item.material}`, item.ingot_input[0], item.ingot_input[1]).id(`mbm2:kiln/${item.material}_ingot`)	
						}
					}
				} else {
					console.log(`[MBM2 ERROR]: ${item.material} needs an amount in MML to get create mixing recipes!`)
				}

				//Alloy Dust Smelting
				if (Item.of(`#forge:dusts/${item.material}`) != null && Item.of(`#forge:ingots/${item.material}`) != null) {
					event.smelting(`#forge:ingots/${item.material}`, `#forge:dusts/${item.material}`).id(`mbm2:${item.material}_furnace_smelting`)
					event.blasting(`#forge:ingots/${item.material}`, `#forge:dusts/${item.material}`).id(`mbm2:${item.material}_furnace_blasting`)
				}

				//caldera_forge
				event.recipes.multiblocked.multiblock("caldera_forge")
				.setChance(0)
				.inputItem('kubejs:ingot_mold')
				.setChance(1)
				.inputFluid(Fluid.of('mekanism:sodium', 50))
				.inputItem(Item.of(`#forge:dusts/${item.material}`))
				.outputItem(Item.of(`#forge:ingots/${item.material}`))
				.outputFluid(Fluid.of('mekanism:superheated_sodium',50))
				.setPerTick(true)
				.duration(item.tier*20)
			}
			////////////// TIER 2 OR BELOW /////////////////////
			if (item.tier <= 2) {
				if (item.tinkers_input != null) {
					//Tinkers Alloy
					global.tinkersAlloying(event, item.fluid_id, (item.amount*90), item.tinkers_input, 1000, `mbm2:smeltery/alloys/molten_${item.material}`)
				}
			}
			////////////// TIER 3 OR BELOW /////////////////////
			if (item.tier <= 3) {

				//Alloying
				if (item.ingot_input != null) {
					if (item.ingot_input.length <= 5) {
						if (item.base) {
							//Arc Furnace
							event.recipes.immersiveengineeringArcFurnace(`${item.amount}x #forge:base_ingots/${item.material}`, item.ingot_input[0], item.ingot_input.slice(1)).id(`mbm2:arc_furnace/${item.material}_alloying_base_ingot`)
						} else {
							//Arc Furnace
							event.recipes.immersiveengineeringArcFurnace(`${item.amount}x #forge:ingots/${item.material}`, item.ingot_input[0], item.ingot_input.slice(1)).id(`mbm2:arc_furnace/${item.material}_alloying`)
						}
					}
					if (item.ingot_input.length <= 3) {
						if (item.base) {
							//Induction
							event.recipes.thermal.smelter(`${item.amount}x #forge:base_ingots/${item.material}`, item.ingot_input).id(`mbm2:induction/${item.material}_base_ingot`)
						} else {
							//Induction
							event.recipes.thermal.smelter(`${item.amount}x #forge:ingots/${item.material}`, item.ingot_input).id(`mbm2:induction/${item.material}_ingot`)
						}
					}
				}

				//Dust Smelting
				if (Item.of(`#forge:dusts/${item.material}`) != null && Item.of(`#forge:ingots/${item.material}`) != null) {
					//Arc Furnace
					event.recipes.immersiveengineeringArcFurnace(`#forge:ingots/${item.material}`, `#forge:dusts/${item.material}`).id(`mbm2:arc_furnace/${item.material}_ingot_from_dust`)
				}
			}
			
			////////////// TIER 4 OR BELOW /////////////////////
			if (item.tier <= 4) {

				//Alloying is done in the Mixer for tier 4 and up
				
				//Dust Smelting
				if (Item.of(`#forge:dusts/${item.material}`) != null && Item.of(`#forge:ingots/${item.material}`) != null) {
					//EBF
					event.recipes.multiblocked.multiblock("ebf")
					.inputItem(Ingredient.of(`#forge:dusts/${item.material}`))
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					.setPerTick(true)
					.inputFE(1000 * (2**item.tier))
					.duration(100)
					.id(`mbm2:ebf/dusts/${item.material}_ingot`)
				}
			}
  			////////////// TIER 5 /////////////////////
			  if (item.tier == 5) {

				//Dust Smelting
				if (Item.of(`#forge:dusts/${item.material}`) != null && Item.of(`#forge:ingots/${item.material}`) != null) {
					//EBF
				let tier5Temp = 2000
					event.recipes.multiblocked.multiblock("ebf")
					.inputItem(Ingredient.of(`#forge:dusts/${item.material}`))
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					.setPerTick(true)
					.inputFE(1000*(2**item.tier))
					.duration(100)
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
			}
			///////////// TIER 6 /////////////////////
			 if (item.tier == 6) {

				//Dust Smelting
				if (Item.of(`#forge:dusts/${item.material}`) != null && Item.of(`#forge:ingots/${item.material}`) != null) {
					//EBF
				let tier6Temp = 3000
					event.recipes.multiblocked.multiblock("ebf")
					.inputItem(Ingredient.of(`#forge:dusts/${item.material}`))
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					.setPerTick(true)
					.inputFE(1000*(2**item.tier))
					.duration(100)
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
			}
			///////////// TIER 7 /////////////////////
			if (item.tier == 7) {

				//Dust Smelting
				if (Item.of(`#forge:dusts/${item.material}`) != null && Item.of(`#forge:ingots/${item.material}`) != null) {
					//EBF
				let tier7Temp = 4000
					event.recipes.multiblocked.multiblock("ebf")
					.inputItem(Ingredient.of(`#forge:dusts/${item.material}`))
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					.setPerTick(true)
					.inputFE(1000*(2**item.tier))
					.duration(100)
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
		} else {
			console.log(`[MBM2 INFO]: ${item.material} is not an alloy`);
		}
	})
});
	
