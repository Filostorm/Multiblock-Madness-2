


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
			if (item.tier <= 1) {
				console.log(`${item.material} is at most a Tier 1 Alloy!`);

				if (item.dust_input != null) {
				//Mixing Dust
				event.recipes.createMixing([`${item.amount}x #forge:dusts/${item.material}`], item.dust_input).id(`kubejs:mixing/${item.material}_dust`)
				} 
				if (item.ingot_input != null) {
				//Mixing Ingots
				event.recipes.createMixing(`${item.amount}x #forge:ingots/${item.material}`, item.ingot_input).heated().id(`create:mixing/${item.material}_ingot`)
				}
			}
			if (item.tier <= 2) {
				console.log(`${item.material} is at most a Tier 2 Alloy!`);
				if (item.tinkers_input != null) {
					//Tinkers Alloy
					global.tinkersAlloying(event, item.fluid_id, (item.amount*90), item.tinkers_input, 1000, `tconstruct:smeltery/alloys/molten_${item.material}`)
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
	