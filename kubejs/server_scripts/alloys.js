


onEvent('tags.items', event => {
	global.newMaterialParts.forEach((item) => {
		if (item.type == 'alloy' && item.tier == 1) {
			event.add(`mbm2:alloys/tier_one`, `#forge:ingots/${item.material}`)
			event.add(`mbm2:alloys/dusts/tier_one`, `#forge:dusts/${item.material}`)
			event.add(`mbm2:alloys/plates/tier_one`, `#forge:plates/${item.material}`)
		} else if (item.type == 'alloy' && item.tier == 2) {
			event.add(`mbm2:alloys/tier_two`, `#forge:ingots/${item.material}`)
			event.add(`mbm2:alloys/dusts/tier_two`, `#forge:dusts/${item.material}`)
			event.add(`mbm2:alloys/plates/tier_two`, `#forge:plates/${item.material}`)
		} else if (item.type == 'alloy' && item.tier == 3) {
			event.add(`mbm2:alloys/tier_three`, `#forge:ingots/${item.material}`)
			event.add(`mbm2:alloys/dusts/tier_three`, `#forge:dusts/${item.material}`)
			event.add(`mbm2:alloys/plates/tier_three`, `#forge:plates/${item.material}`)
		} else if (item.type == 'alloy' && item.tier == 4) {
			event.add(`mbm2:alloys/tier_four`, `#forge:ingots/${item.material}`)
			event.add(`mbm2:alloys/dusts/tier_four`, `#forge:dusts/${item.material}`)
			event.add(`mbm2:alloys/plates/tier_four`, `#forge:plates/${item.material}`)
		} else if (item.type == 'alloy' && item.tier == 5) {
			event.add(`mbm2:alloys/tier_five`, `#forge:ingots/${item.material}`)
			event.add(`mbm2:alloys/dusts/tier_five`, `#forge:dusts/${item.material}`)
			event.add(`mbm2:alloys/plates/tier_five`, `#forge:plates/${item.material}`)
		} else if (item.type == 'alloy' && item.tier == 6) {
			event.add(`mbm2:alloys/tier_six`, `#forge:ingots/${item.material}`)
			event.add(`mbm2:alloys/dusts/tier_six`, `#forge:dusts/${item.material}`)
			event.add(`mbm2:alloys/plates/tier_six`, `#forge:plates/${item.material}`)
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
		 			event.recipes.multiblocked.multiblock('mixer')
		 			.inputItems(item.dust_input)
		 			.outputItem(`${item.amount}x #forge:dusts/${item.material}`)
					.setPerTick(true)
					.inputFE(256 * (2**item.tier))
		 			.duration(100 * item.amount)
				} else {
					console.log(`ERROR: ${item.material} needs an amount in MML to get a mixer recipe!`)
				}
			}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////// Each Tier check represents the lowest tier an action can be preformed in. ///////////////////
//// So if you want to add tinkers alloy recipes to any tier 2 or below, it goes in the tier 2 check /////
//////////////////////////////////////////////////////////////////////////////////////////////////////////



			////////////// TIER 1 OR BELOW /////////////////////
			if (item.tier <= 1) {
				console.log(`${item.material} can be made by tier 1 machines!`)

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
					console.log(`ERROR: ${item.material} needs an amount in MML to get create mixing recipes!`)
				}

				//Alloy Dust Smelting
				if (Item.of(`#forge:dusts/${item.material}`) != null && Item.of(`#forge:ingots/${item.material}`) != null) {
					event.smelting(`#forge:ingots/${item.material}`, `#forge:dusts/${item.material}`).id(`mbm2:${item.material}_furnace_smelting`)
					event.blasting(`#forge:ingots/${item.material}`, `#forge:dusts/${item.material}`).id(`mbm2:${item.material}_furnace_blasting`)
				}
			}
			////////////// TIER 2 OR BELOW /////////////////////
			if (item.tier <= 2) {
				console.log(`${item.material} can be made by tier 2 machines!`);
				if (item.tinkers_input != null) {
					//Tinkers Alloy
					global.tinkersAlloying(event, item.fluid_id, (item.amount*90), item.tinkers_input, 1000, `mbm2:smeltery/alloys/molten_${item.material}`)
				}
			}
			////////////// TIER 3 OR BELOW /////////////////////
			if (item.tier <= 3) {
				console.log(`${item.material} can be made by tier 3 machines!`);

				//Alloying
				if (item.ingot_input != null) {
					if (item.ingot_input.length <= 5) {
						//Arc Furnace
						event.recipes.immersiveengineeringArcFurnace(`${item.amount}x #forge:ingots/${item.material}`, item.ingot_input[0], item.ingot_input.slice(1)).id(`mbm2:arc_furnace/${item.material}_alloying`)
					}
					if (item.ingot_input.length <= 3) {
						//Induction
						event.recipes.thermal.smelter(`${item.amount}x #forge:ingots/${item.material}`, item.ingot_input).id(`mbm2:induction/${item.material}_ingot`)
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
				console.log(`${item.material} can be made by tier 4 machines!`);

				//Alloying is done in the Mixer for tier 4 and up
				

				//Dust Smelting
				if (Item.of(`#forge:dusts/${item.material}`) != null && Item.of(`#forge:ingots/${item.material}`) != null) {
					//EBF
					event.recipes.multiblocked.multiblock("ebf")
					.inputItem(Ingredient.of(`#forge:dusts/${item.material}`))
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					.setPerTick(true)
					.inputFE(512 * (2**item.tier))
					.duration(100)
					.id(`mbm2:ebf/dusts/${item.material}_ingot`)
				}
			}
  
		} else {
			console.log(`${item.material} is not an alloy`);
		}
	})
	

 
});
	