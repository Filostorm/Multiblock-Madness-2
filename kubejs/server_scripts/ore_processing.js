

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
	 event.add(`create:crushed_ores/${item}`, `create:crushed_${item}_ore`)
	 event.remove(`create:crushed_ores/${item}`, `kubejs:crushed_${item}`)
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
	
	global.newMaterialParts.forEach((item) => {
		event.remove({id: `tconstruct:smeltery/melting/metal/${item.material}/raw_block`})
		event.remove({id: `immersiveengineering:crusher/raw_block_${item.material}`})
		event.remove({id: `mekanism:processing/${item.material}/slurry/dirty/from_raw_block`})
		event.remove({id: `mekanism:processing/${item.material}/clump/from_raw_block`})
		event.remove({id: `mekanism:processing/${item.material}/shard/from_raw_block`})
		event.remove({id: `immersiveengineering:arcfurnace/raw_block_${item.material}`})
		event.remove({id: `immersiveengineering:arcfurnace/dust_${item.material}`})

		

		if (item.tier > 1) {
			event.remove({id: `tconstruct:smeltery/melting/metal/${item.material}/dust`})
			event.remove({id: `tconstruct:smeltery/melting/metal/${item.material}/raw`})
			event.remove({id: `tconstruct:smeltery/melting/metal/${item.material}/ore_singular`})
			event.remove({id: `tconstruct:common/materials/${item.material}_ingot_smelting`})
			event.remove({id: `immersiveengineering:arcfurnace/ore_${item.material}`})
			event.remove({id: `immersiveengineering:arcfurnace/raw_ore_${item.material}`})
			
		}
		if (item.ore) {

			//Make some dust
			if (Item.of(`#forge:dusts/${item.material}`) != null) {
				//Crushed Ore
				if (Item.of(`#create:crushed_ores/${item.material}`) != null) {
				event.recipes.immersiveengineeringCrusher(`#forge:dusts/${item.material}`, `#create:crushed_ores/${item.material}`).id(`mbm2:immersive/crushing/crushed_${item.material}`)
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
			if (item.type == 'base_metal') {
		
				//Can't Smelt Complicated Metal
				event.remove({input: `#forge:dusts/${item.material}`, type: 'minecraft:smelting'})
				event.remove({input: `#forge:dusts/${item.material}`, type: 'minecraft:blasting'})

				

				//Foundry Processing
	  			//	if (item.fluid_id != null){
				//		global.tinkersOreMelting(event, item.fluid_id, 180, 'kubejs:molten_slag', 200, `forge:ores/${item.material}`, 700, 142, `tconstruct:smeltery/melting/metal/${item.material}/ore_singular`)
				//		global.tinkersOreMelting(event, item.fluid_id, 90, 'kubejs:molten_slag', 100, `forge:raw_materials/${item.material}`, 700, 142, `tconstruct:smeltery/melting/metal/${item.material}/raw`)
				//	}

				//Create Crushing
				event.recipes.createCrushing([
					`#create:crushed_ores/${item.material}`,
					Item.of(`#forge:grits/${item.material}`).withChance(0.25), 
					Item.of('create:experience_nugget').withChance(0.5)
				  ], `#forge:raw_materials/${item.material}`).id(`mbm2:crushing/raw_${item.material}`)

				//Create Washing 
				event.recipes.createSplashing([`#forge:grits/${item.material}`, Item.of(`#forge:grits/${item.material}`).withChance(0.75), Item.of('gravel').withChance(0.25)], `#create:crushed_ores/${item.material}`).id(`mbm2:washing/crushed_${item.material}`)

				
				if (item.tier <= 1) {
					//Make some ingots
					event.remove({input: `#forge:dusts/${item.material}`, type: 'minecraft:smelting'})
					event.remove({input: `#forge:dusts/${item.material}`, type: 'minecraft:blasting'})
					event.smelting(`#forge:ingots/${item.material}`, `#forge:grits/${item.material}`).id(`mbm2:smelting/grit_${item.material}`)
					event.blasting(`#forge:ingots/${item.material}`, `#forge:grits/${item.material}`).id(`mbm2:blasting/grit_${item.material}`)
					event.smelting(`#forge:ingots/${item.material}`, `#forge:dusts/${item.material}`).id(`mbm2:smelting/dust_${item.material}`)
					event.blasting(`#forge:ingots/${item.material}`, `#forge:dusts/${item.material}`).id(`mbm2:blasting/dust_${item.material}`)
					event.smelting(`#forge:ingots/${item.material}`, `#create:crushed_ores/${item.material}`).id(`mbm2:smelting/crushed_${item.material}`)
					event.blasting(`#forge:ingots/${item.material}`, `#create:crushed_ores/${item.material}`).id(`mbm2:blasting/crushed_${item.material}`)
					event.smelting(`#forge:ingots/${item.material}`, `#forge:washed_ores/${item.material}`).id(`mbm2:smelting/washed_${item.material}`)
					event.blasting(`#forge:ingots/${item.material}`, `#forge:washed_ores/${item.material}`).id(`mbm2:blasting/washed_${item.material}`)
				}

				if (item.tier <= 2) {
					//But they can be Arc Furnaced
					if (Item.of(`#forge:ingots/${item.material}`) != null) {
						event.recipes.immersiveengineeringArcFurnace(Item.of(`#forge:ingots/${item.material}`), `#forge:dusts/${item.material}`).id(`mbm2:arc_furnace/${item.material}_dust`)
					}
				}
				
				if (item.tier == 3) {
					//But they can be Blast Furnaced
					event.recipes.multiblocked.multiblock("ebf")
					.inputFluid(Fluid.of('mekanism:oxygen', 1000))
					.inputItem(Ingredient.of(`#forge:dusts/${item.material}`))
					.outputItem(Item.of(`#forge:ingots/${item.material}`))
					//.outputFluid(Fluid.of('mekanism:sulfuric_acid', 1000))
					.setPerTick(true)
					.inputFE(4096)
					.duration(200)
					.id(`mbm2:ebf/base_metals/${item.material}_ingot`)
				}
				
			}
			if (item.type == 'compound_ore') {
					console.log(`${item.material} is a compound ore!`);
					console.log(`${item.components[0]} is the first output!`);
					
					if (Item.of(`#forge:ingots/${item.components[0]}`) != null) {
						event.smelting(`#forge:ingots/${item.components[0]}`, `#forge:raw_materials/${item.material}`).id(`mbm2:smelting/raw_${item.material}`)
						event.blasting(`#forge:ingots/${item.components[0]}`, `#forge:raw_materials/${item.material}`).id(`mbm2:blasting/raw_${item.material}`)
						event.smelting(`#forge:ingots/${item.components[0]}`, `#forge:dusts/${item.material}`).id(`mbm2:smelting/dust_${item.material}`)
						event.blasting(`#forge:ingots/${item.components[0]}`, `#forge:dusts/${item.material}`).id(`mbm2:blasting/dust_${item.material}`)
						event.smelting(`#forge:ingots/${item.components[0]}`, `#forge:grits/${item.material}`).id(`mbm2:smelting/grit_${item.material}`)
						event.blasting(`#forge:ingots/${item.components[0]}`, `#forge:grits/${item.material}`).id(`mbm2:blasting/grit_${item.material}`)
					} else {
						//For non metalic components
						event.smelting(`2x #forge:dusts/${item.components[0]}`, `#forge:raw_materials/${item.material}`)
						event.smelting(`2x #forge:dusts/${item.components[0]}`, `#forge:dusts/${item.material}`)
						event.blasting(`2x #forge:dusts/${item.components[0]}`, `#forge:raw_materials/${item.material}`)
						event.blasting(`2x #forge:dusts/${item.components[0]}`, `#forge:dusts/${item.material}`)
					}
					
					//Create Crushing
					event.recipes.createCrushing([
						`#create:crushed_ores/${item.material}`,
						Item.of(`#forge:grits/${item.material}`).withChance(0.25),
						Item.of('create:experience_nugget').withChance(0.5)
					  ], `#forge:raw_materials/${item.material}`).id(`mbm2:crushing/raw_${item.material}`)

				  	//Sorting grade 1 at tier 1
					event.recipes.multiblocked.multiblock('sorter_mk1')
					.inputItem(`4x #create:crushed_ores/${item.material}`)
					.inputStress(64)
					.outputItem(`#create:crushed_ores/${item.components[0]}`)
					.outputItem(`#create:crushed_ores/${item.components[1]}`)
					.outputItem('2x thermal:slag')
					.duration(200)

					//Sorting grade 2 at tier 1
				  	event.recipes.multiblocked.multiblock('sorter_mk1')
				  	.inputItem(`8x #forge:chunks/${item.material}`)
				  	.inputStress(64)
				  	.outputItem(`2x #forge:chunks/${item.components[0]}`)
				  	.outputItem(`#forge:chunks/${item.components[1]}`)
				  	.outputItem(`#forge:chunks/${item.components[2]}`)
				  	.outputItem('4x thermal:slag')
				  	.duration(200)

					//Sorting grade 1 at tier 2
				  	event.recipes.multiblocked.multiblock('sorter_mk2')
				  	.inputItem(`5x #create:crushed_ores/${item.material}`)
				  	.outputItem(`2x #create:crushed_ores/${item.components[0]}`)
				  	.outputItem(`2x #create:crushed_ores/${item.components[1]}`)
				  	.outputItem('1x thermal:slag')
						.setPerTick(true)
					.inputFE(1024)
				  	.duration(200)

				  //Sorting grade 2 at tier 2
					event.recipes.multiblocked.multiblock('sorter_mk2')
					.inputItem(`10x #forge:chunks/${item.material}`)
					.outputItem(`3x #forge:chunks/${item.components[0]}`)
					.outputItem(`3x #forge:chunks/${item.components[1]}`)
					.outputItem(`2x #forge:chunks/${item.components[2]}`)
					.outputItem('2x thermal:slag')
						.setPerTick(true)
					.inputFE(1024)
					.duration(200)

				  //Sorting grade 3 at tier 2
				  	event.recipes.multiblocked.multiblock('sorter_mk2')
				  	.inputItem(`15x #forge:clumps/${item.material}`)
				  	.outputItem(`4x #forge:clumps/${item.components[0]}`)
				  	.outputItem(`3x #forge:clumps/${item.components[1]}`)
				  	.outputItem(`2x #forge:clumps/${item.components[2]}`)
				  	.outputItem(`2x #forge:clumps/${item.components[3]}`)
				  	.outputItem('3x thermal:slag')
						.setPerTick(true)
					.inputFE(1024)
				  	.duration(200)

					//Gem Crafting
					if (item.gem_components != null) {
						if (Item.of(`#forge:gems/${item.gem_components[0]}`) != null) {
							console.log(Item.of(`#forge:dusts/${item.material}`));
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
			event.addSimpleBlock(`kubejs:rich_${item.material}_ore`, `10x #forge:dusts/${item.material}`)
			event.addSimpleBlock(`kubejs:${item.material}_ore_sample`, `#forge:dusts/${item.material}`)

			global.stoneTypes.forEach((type) => {
				event.addSimpleBlock(`kubejs:poor_${type.material}_${item.material}_ore`, `2x #forge:dusts/${item.material}`)
				event.addSimpleBlock(`kubejs:${type.material}_${item.material}_ore`, `5x #forge:dusts/${item.material}`)
				event.addSimpleBlock(`kubejs:rich_${type.material}_${item.material}_ore`, `10x #forge:dusts/${item.material}`)
			})
		  } else {
			event.addSimpleBlock(`kubejs:poor_${item.material}_ore`, `#forge:grits/${item.material}`)
			event.addSimpleBlock(`kubejs:${item.material}_ore`, `#forge:raw_materials/${item.material}`)
			event.addSimpleBlock(`kubejs:rich_${item.material}_ore`, `2x #forge:raw_materials/${item.material}`)
			event.addSimpleBlock(`kubejs:${item.material}_ore_sample`, `#forge:raw_materials/${item.material}`)

			global.stoneTypes.forEach((type) => {
				event.addSimpleBlock(`kubejs:poor_${type.material}_${item.material}_ore`, `#forge:grits/${item.material}`)
				event.addSimpleBlock(`kubejs:${type.material}_${item.material}_ore`, `#forge:raw_materials/${item.material}`)
				event.addSimpleBlock(`kubejs:rich_${type.material}_${item.material}_ore`, `2x #forge:raw_materials/${item.material}`)
			})
		  }
		}
	})
  });