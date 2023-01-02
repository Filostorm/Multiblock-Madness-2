


onEvent('tags.items', event => {
	global.newMaterialParts.forEach((item) => {
		if (item.type == 'alloy' && item.tier == 1) {
		event.add(`mbm2:alloys/tier_one`, `#forge:ingots/${item.material}`)
		event.add(`mbm2:alloys/dusts/tier_one`, `#forge:dusts/${item.material}`)
		event.add(`mbm2:alloys/plates/tier_one`, `#forge:plates/${item.material}`)
		}
		if (item.type == 'alloy' && item.tier == 2) {
		event.add(`mbm2:alloys/tier_two`, `#forge:ingots/${item.material}`)
		event.add(`mbm2:alloys/dusts/tier_two`, `#forge:dusts/${item.material}`)
		event.add(`mbm2:alloys/plates/tier_two`, `#forge:plates/${item.material}`)
		}
	})
});

onEvent('recipes', event => {


	global.newMaterialParts.forEach((item) => {
		if (item.type == 'alloy') {
			event.remove({id: `immersiveengineering:alloysmelter/${item.material}`})
			event.remove({id: `thermal:machines/smelter/smelter_alloy_${item.material}`})

			if (item.tier <= 1) {
				console.log(`${item.material} can be made by tier 1 machines!`)

				if (item.dust_input != null) {
				//Mixing Dust
				event.recipes.createMixing([`${item.amount}x #forge:dusts/${item.material}`], item.dust_input).id(`mbm2:mixing/${item.material}_dust`)
				} 
				if (item.ingot_input != null) {
				//Mixing Ingots
				event.recipes.createMixing(`${item.amount}x #forge:ingots/${item.material}`, item.ingot_input).heated().id(`create:mixing/${item.material}_ingot`)					
				//Kiln
				if (item.ingot_input.length == 2) {
					event.recipes.immersiveengineeringAlloy(`${item.amount}x #forge:ingots/${item.material}`, item.ingot_input[0], item.ingot_input[1]).id(`mbm2:kiln/${item.material}_ingot`)	
				}
				}
			}
			if (item.tier <= 2) {
				console.log(`${item.material} can be made by tier 2 machines!`);
				if (item.tinkers_input != null) {
					//Tinkers Alloy
					global.tinkersAlloying(event, item.fluid_id, (item.amount*90), item.tinkers_input, 1000, `tconstruct:smeltery/alloys/molten_${item.material}`)
				}
			}
			if (item.tier <= 3) {
				console.log(`${item.material} can be made by tier 3 machines!`);
				if (item.ingot_input != null) {
					//Arc Furnace
					event.recipes.immersiveengineeringArcFurnace(`${item.amount}x #forge:ingots/${item.material}`, item.ingot_input[0], item.ingot_input.slice(1)).id(`mbm2:arc_furnace/${item.material}_alloying`)
				}
				if (item.dust_input != null) {
					//Arc Furnace
					event.recipes.immersiveengineeringArcFurnace(`${item.amount}x #forge:ingots/${item.material}`, item.dust_input[0], item.dust_input.slice(1))
				}
				//Induction
				if (item.ingot_input != null) {
					if (item.ingot_input.length <= 3) {
						event.recipes.thermal.smelter(`${item.amount}x #forge:ingots/${item.material}`, item.ingot_input).id(`mbm2:induction/${item.material}_ingot`)
					}
				}
				if (item.dust_input != null) {
					if (item.dust_input.length <= 3) {
						event.recipes.thermal.smelter(`${item.amount}x #forge:ingots/${item.material}`, item.dust_input).id(`mbm2:induction/${item.material}_ingot_from_dust`)	
					}
				}
			}
			
  
		} else {
			console.log(`${item.material} is not an alloy`);
		}
	})

	//Missing Ingot Smelting
		event.smelting(`#forge:ingots/red_alloy`, `#forge:dusts/red_alloy`)
		event.smelting(`#forge:ingots/brass`, `#forge:dusts/brass`)
		event.smelting(`#forge:ingots/pewter`, `#forge:dusts/pewter`)
	

});
	