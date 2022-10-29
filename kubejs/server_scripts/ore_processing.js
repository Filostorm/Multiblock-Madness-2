

onEvent('recipes', event => {
/*
//Thanks Nat!
//Fluid tags for outputs
fluidTagLookup = {}
Fluid.getTypes().forEach(fluid => {
  Fluid.of(fluid).tags.forEach(tag =>{
    if (tag in fluidTagLookup){
		fluidTagLookup[tag].push(fluid)
    } else {
		fluidTagLookup[tag] = [fluid]
    }
  })
})
console.log(fluidTagLookup[`forge:molten_${item.material}`][1]);*/

	global.newMaterialParts.forEach((item) => {
		if (item.ore && item.type == 'base_metal' && item.tier <= 1) {

			console.log(`${item.material} is at most a Tier 1 Metal!`);
			
		// Foundry Ore Melting
		global.tinkersOreMelting(event, item.fluid_id, 180, 'kubejs:molten_slag', 200, `forge:ores/${item.material}`, 700, 142, `tconstruct:smeltery/melting/metal/${item.material}/ore_singular`)
		global.tinkersOreMelting(event, item.fluid_id, 90, 'kubejs:molten_slag', 100, `forge:raw_materials/${item.material}`, 700, 142, `tconstruct:smeltery/melting/metal/${item.material}/raw`)

		//Making Dust
		//event.recipes.createMilling([`#forge:dusts/${item.material}`], [`#forge:raw_materials/${item.material}`])
		}
  	})


	  global.newMaterialParts.forEach((item) => {
		if (item.ore && item.type == 'compound_ore' && item.tier <= 1) {

			console.log(`${item.material} is a compound ore!`);
			console.log(`${item.components[0]} is the first output!`);

			if (Item.of(`#forge:ingots/${item.components[0]}`) != null) {
				event.smelting(`#forge:ingots/${item.components[0]}`, `#forge:raw_materials/${item.material}`)
				event.smelting(`#forge:ingots/${item.components[0]}`, `#forge:dusts/${item.material}`)
			} else {
				event.smelting(`2x #forge:dusts/${item.components[0]}`, `#forge:raw_materials/${item.material}`)
				event.smelting(`2x #forge:dusts/${item.components[0]}`, `#forge:dusts/${item.material}`)
			}
		}
  	})
	  
	
});

onEvent('block.loot_tables', event => {
	global.newMaterialParts.forEach((item) => {
		if (item.ore) {
		  if (item.type == 'base_gem') {
			event.addSimpleBlock(`kubejs:${item.material}_ore`, `#forge:gems/${item.material}`)
			event.addSimpleBlock(`kubejs:${item.material}_ore_sample`, `#forge:gems/${item.material}`)

			global.stoneTypes.forEach((type) => {
				event.addSimpleBlock(`kubejs:${type.material}_${item.material}_ore`, `#forge:gems/${item.material}`)
			})
		  } else if (item.type == 'base_dust') {
			event.addSimpleBlock(`kubejs:poor_${item.material}_ore`, `2x #forge:dusts/${item.material}`)
			event.addSimpleBlock(`kubejs:${item.material}_ore`, `5x #forge:dusts/${item.material}`)
			event.addSimpleBlock(`kubejs:rich_${item.material}_ore`, `10x #forge:dusts/${item.material}`)
			event.addSimpleBlock(`kubejs:${item.material}_ore_sample`, `#forge:dusts/${item.material}`)

			global.stoneTypes.forEach((type) => {
				event.addSimpleBlock(`kubejs:poor_${type.material}_${item.material}_ore`, `2x #forge:dusts/${item.material}`)
				event.addSimpleBlock(`kubejs:${type.material}_${item.material}_ore`, `5x #forge:dusts/${item.material}`)
				event.addSimpleBlock(`kubejs:rich_${type.material}_${item.material}_ore`, `10x #forge:dusts/${item.material}`)
			})
		  } else {
			event.addSimpleBlock(`kubejs:poor_${item.material}_ore`, `#forge:dusts/${item.material}`)
			event.addSimpleBlock(`kubejs:${item.material}_ore`, `#forge:raw_materials/${item.material}`)
			event.addSimpleBlock(`kubejs:rich_${item.material}_ore`, `2x #forge:raw_materials/${item.material}`)
			event.addSimpleBlock(`kubejs:${item.material}_ore_sample`, `#forge:raw_materials/${item.material}`)

			global.stoneTypes.forEach((type) => {
				event.addSimpleBlock(`kubejs:poor_${type.material}_${item.material}_ore`, `#forge:dusts/${item.material}`)
				event.addSimpleBlock(`kubejs:${type.material}_${item.material}_ore`, `#forge:raw_materials/${item.material}`)
				event.addSimpleBlock(`kubejs:rich_${type.material}_${item.material}_ore`, `2x #forge:raw_materials/${item.material}`)
			})
		  }
		}
	})
  });