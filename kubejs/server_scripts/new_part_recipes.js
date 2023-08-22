

/*
onEvent('tags.items', event => {
	
	global.newMaterialParts.forEach((item) => {

    if (event.get(`#forge:storage_blocks/${item.material}`).getObjectIds() == null) {
		console.log(`${item.material} does not have a block`)
		event.add(`forge:storage_blocks`, `chemlib:${item.material}_metal_block`)
		event.add(`forge:storage_blocks/${item.material}`, `chemlib:${item.material}_metal_block`)
		} else {
			console.log(`${item.material} does have a block`)
			console.log(Item.of(`#forge:storage_blocks/${item.material}`))}
	})
  });
*/


onEvent('recipes', event => {

	var plateCasting = 8
	var gearCasting = 4
	var rodCasting = 16
	var wireCasting = 16
	var hullCasting = 1

	global.newMaterialParts.forEach((item) => {
		
		console.log(Item.of(`#forge:ingots/${item.material}`) + `: tier ${item.tier} ${item.type}`);
		


	
	////////////////PLATES///////////////
    if (Item.of(`#forge:plates/${item.material}`) != null && item.material != 'plastic') {

	  if (item.fluid_id != null) {
		//Plate Casing
		  global.casingTable(event, 'tconstruct:casts/multi_use/plate', false, `#forge:plates/${item.material}`, `forge:molten_${item.material}`, 90, 60, `tconstruct:smeltery/casting/metal/${item.material}/plate_gold_cast`)
		  global.casingTable(event, 'tconstruct:casts/single_use/plate', true, `#forge:plates/${item.material}`, `forge:molten_${item.material}`, 90, 60, `tconstruct:smeltery/casting/metal/${item.material}/plate_sand_cast`)

		//Mega Plate Casing
	  event.recipes.multiblocked.multiblock("casting")
	  	.inputFluid(Fluid.of(`${item.fluid_id}`, plateCasting*90))
	  	.inputItem(`${plateCasting}x #tconstruct:casts/single_use/plate`)
	  	.outputItem(`${plateCasting}x #forge:plates/${item.material}`)
	  	.setPerTick(true)
	  	.inputFE(1024)
	  	.duration(100)
	  }
	//Create Plates
  	event.recipes.createPressing(`#forge:plates/${item.material}`, `#forge:ingots/${item.material}`).id(`create:pressing/${item.material}_ingot`)

	//Immersive Plates
 	event.recipes.immersiveengineeringMetalPress(`#forge:plates/${item.material}`, `#forge:ingots/${item.material}`, 'immersiveengineering:mold_plate').id(`immersiveengineering:metalpress/plate_${item.material}`)

	//Thermal Plates
	event.recipes.thermal.press(`2x #forge:plates/${item.material}`, `3x #forge:ingots/${item.material}`).id(`thermal:machines/press/press_${item.material}_ingot_to_plate`)
	

	////////////////SHEETS///////////////
    if (Item.of(`#forge:sheets/${item.material}`) != null) {

		//Create Sheet
		event.recipes.createCutting(`12x #forge:sheets/${item.material}`, `#forge:storage_blocks/${item.material}`).id(`mbm2:create_cutting/${item.material}_sheet`)
	
		//Immersive Sheet
		event.custom({type:'immersiveengineering:sawmill',
			secondaries:[
				{output:Item.of(`#forge:dusts/${item.material}`).toJson(), stripping:'false'}
			],
			result:Item.of(`16x #forge:sheets/${item.material}`).toResultJson(),
			input:Ingredient.of(`#forge:storage_blocks/${item.material}`).toJson(),
			energy:1000
		}).id(`mbm2:ie_sawmill/sheet_${item.material}`)
		//event.recipes.immersiveengineeringMetalPress(`2x #forge:sheets/${item.material}`, `#forge:plates/${item.material}`, 'immersiveengineering:mold_plate').id(`mbm2:metalpress/sheet_${item.material}`)

		//Mek Sheets
		event.recipes.mekanismSawing(`12x #forge:sheets/${item.material}`, `#forge:storage_blocks/${item.material}`).id(`mbm2:mek_sawmill/sheet_${item.material}`)

	}
	////////////////PLATING///////////////
    if (Item.of(`#forge:platings/${item.material}`) != null) {

	//Create Plating
  	event.recipes.createPressing(`#forge:platings/${item.material}`, `#forge:storage_blocks/${item.material}`).id(`mbm2:pressing/${item.material}_plating`)

	//Immersive Plating
 	event.recipes.immersiveengineeringMetalPress(`#forge:platings/${item.material}`, `4x #forge:plates/${item.material}`, 'immersiveengineering:mold_plate').id(`mbm2:metalpress/plating_${item.material}`)

	////////////////ROCKET FINS///////////////
	if (Item.of(`#forge:reinforced_platings/${item.material}`) != null) {
		//reinforced_platings
		event.recipes.immersiveengineeringMetalPress(`#forge:reinforced_platings/${item.material}`, `4x #forge:platings/${item.material}`, 'immersiveengineering:mold_plate').id(`mbm2:metalpress/reinforced_platings_${item.material}`)
	}
	////////////////ROCKET FINS///////////////
	 if (Item.of(`#forge:rocket_fins/${item.material}`) != null) {
		//Hand Crafted Rocket Fins
		event.shaped(`#forge:rocket_fins/${item.material}`, [
			' I ',
			'PIP',
			'GIG'
		  ], {
			G: `#forge:platings/${item.material}`,
			I: `#forge:ingots/${item.material}`,
			P: `#forge:plates/${item.material}`,
		  }).id(`kubejs:crafting/${item.material}_rocket_fins`)
		}
	////////////////NOSE CONES///////////////
	if (Item.of(`#forge:rocket_nose_cones/${item.material}`) != null) {
	   //Hand Crafted Rocket Nose Cones
	   event.shaped(`#forge:rocket_nose_cones/${item.material}`, [
		   ' T ',
		   ' I ',
		   'IGI'
		 ], {
		   G: `#forge:platings/${item.material}`,
		   I: `#forge:ingots/${item.material}`,
		   T: 'minecraft:redstone_torch',
		 }).id(`kubejs:crafting/${item.material}_rocket_nose_cones`)
	   }
	}

	////////////////COMPONENTS///////////////
    if (Item.of(`#forge:components/${item.material}`) != null) {
	global.ieBlueprint(event, 'components', Item.of(`#forge:components/${item.material}`), [{count:2, base_ingredient: {tag: `forge:plates/${item.material}`}}, {tag: `forge:ingots/copper`}], `mbm2:${item.material}_component`)
	}



	////////////////CASING///////////////
    if (Item.of(`#forge:casings/${item.material}`) != null) {

	//Hand Crafted Casings
	event.shaped(`#forge:casings/${item.material}`, [
		'PPP',
		'P P',
		'PPP'
	  ], {
		P: `#forge:plates/${item.material}`,
	  }).id(`kubejs:crafting/${item.material}_casing`)
	}

	////////////////SHEETMETAL///////////////
	if (Item.of(`#forge:sheetmetals/${item.material}`) != null) {
		//event.remove({id:`tconstruct:smeltery/melting/metal/${item.material}/sheetmetal`})

		
		event.shaped(`2x #forge:sheetmetals/${item.material}`, [
			' P ',
			'P P',
			' P '
		  ], {
			P: `#forge:plates/${item.material}`,
		  }).id(`immersiveengineering:crafting/sheetmetal_${item.material}`)

		  if (Item.of(`#forge:sheets/${item.material}`) != null) {
			event.shaped(`2x #forge:sheetmetals/${item.material}`, [
				' P ',
				'P P',
				' P '
			  ], {
				P: `#forge:sheets/${item.material}`,
			  }).id(`mbm2:crafting/sheetmetal_from_sheets_${item.material}`)
		  }


		  //Sheetmetal Casing
	  global.casingBasinCast(event, 'forge:sheetmetal_cast', false, `#forge:sheetmetals/${item.material}`, `forge:molten_${item.material}`, 90, 80, `tconstruct:smeltery/casting/metal/${item.material}/sheetmetal`)
		}
	}
	////////////////GEARS///////////////
    if (Item.of(`#forge:gears/${item.material}`) != null) {
		event.remove({id:`thermal:parts/${item.material}_gear`})
		if (Item.of(`#forge:rods/${item.material}`) != null) {
			event.shaped(`#forge:gears/${item.material}`, [
				' P ',
				'PRP',
				' P '
			  ], {
				P: `#forge:plates/${item.material}`,
				R: `#forge:rods/${item.material}`
			}).id(`mbm2:parts/${item.material}_gear`)

			//////////////// COG BLOCK ///////////////
			if (Item.of(`#forge:cog_blocks/${item.material}`) != null) {
				event.shaped(`2x #forge:cog_blocks/${item.material}`, [
					'RGR',
					'G G',
					'RGR'
				  ], {
					R: `#forge:rods/${item.material}`,
					G: `#forge:gears/${item.material}`
				  }).id(`mbm2:parts/${item.material}_cog_block`)
			}
		}

	  if (item.fluid_id != null) {
		
		//Gear Casing
		global.casingTable(event, 'tconstruct:casts/multi_use/gear', false, `#forge:gears/${item.material}`, `forge:molten_${item.material}`, 360, 120, `tconstruct:smeltery/casting/metal/${item.material}/gear_gold_cast`)
		global.casingTable(event, 'tconstruct:casts/single_use/gear', true, `#forge:gears/${item.material}`, `forge:molten_${item.material}`, 360, 120, `tconstruct:smeltery/casting/metal/${item.material}/gear_sand_cast`)

	//Mega Gear Casing
	  event.recipes.multiblocked.multiblock("casting")
	  	.inputFluid(Fluid.of(`${item.fluid_id}`, gearCasting*360))
	  	.inputItem(`${gearCasting}x #tconstruct:casts/single_use/gear`)
	  	.outputItem(`${gearCasting}x #forge:gears/${item.material}`)
	  	.setPerTick(true)
	  	.inputFE(1024)
	  	.duration(400)
	  }
	//Immersive Gears
	event.recipes.immersiveengineeringMetalPress(`#forge:gears/${item.material}`, `4x #forge:ingots/${item.material}`, 'immersiveengineering:mold_gear').id(`immersiveengineering:metalpress/gear_${item.material}`)

	//Thermal Gears
	event.recipes.thermal.press(`#forge:gears/${item.material}`, [`5x #forge:ingots/${item.material}`, 'thermal:press_gear_die']).id(`thermal:machines/press/press_${item.material}_ingot_to_gear`)
	
	//////////////// INTERLOCKING PART ///////////////
    if (Item.of(`#forge:interlocking_components/${item.material}`) != null) {
		if (Item.of(`#forge:gears/${item.material}`) != null) {
			if (Item.of(`#forge:wires/${item.material}`) != null){ 
				event.shaped(`#forge:interlocking_components/${item.material}`, [
					'G G',
					' W ',
					'G G'
				  ], {
					W: `#forge:wires/${item.material}`,
					G: `#forge:gears/${item.material}`
				}).id(`mbm2:parts/${item.material}_interlocking_component`)
			}
			//Cheaper recipe
			global.ieBlueprint(event, 'interlocking_components', Item.of(`#forge:interlocking_components/${item.material}`), [{count:4, base_ingredient: {tag: `forge:gears/${item.material}`}}], `mbm2:${item.material}_interlocking_component`)

			} else { console.log(`${item.material}` + "needs gears enabled to make an interlocking component recipe");}
		}
	}
	////////////////END OF GEARS///////////////
	
	////////////////RODS///////////////
    if (Item.of(`#forge:rods/${item.material}`) != null) {
	//Create Rods
	global.createRolling(event, `#forge:rods/${item.material}`, 1, `forge:ingots/${item.material}`, `createaddition:rolling/${item.material}_ingot`)
	
	//Immersive Rods
	event.recipes.immersiveengineeringMetalPress(`2x #forge:rods/${item.material}`, `#forge:ingots/${item.material}`, 'immersiveengineering:mold_rod').id(`immersiveengineering:metalpress/rod_${item.material}`)
	

    if (item.fluid_id != null) {
		//Rod Casing
		global.casingTable(event, 'tconstruct:casts/multi_use/rod', false, `#forge:rods/${item.material}`, `forge:molten_${item.material}`, 45, 20, `tconstruct:smeltery/casting/metal/${item.material}/rod_gold_cast`)
		global.casingTable(event, 'tconstruct:casts/single_use/rod', true, `#forge:rods/${item.material}`, `forge:molten_${item.material}`, 45, 20, `tconstruct:smeltery/casting/metal/${item.material}/rod_sand_cast`)

		//Thermal Rods
		global.thermalChilling(event, `${item.fluid_id}`, 60, `#forge:rods/${item.material}`, 1, 'thermal:chiller_rod_cast', 5000, `thermal:machines/chiller/chiller_${item.material}_rod`)
	
		//Mega Rod Casing
		  event.recipes.multiblocked.multiblock("casting")
			  .inputFluid(Fluid.of(`${item.fluid_id}`, rodCasting*45))
			  .inputItem(`${rodCasting}x #tconstruct:casts/single_use/rod`)
			  .outputItem(`${rodCasting}x #forge:rods/${item.material}`)
			  .setPerTick(true)
			  .inputFE(1024)
			  .duration(100)
		  }
	
		////////////////SCAFFOLDING///////////////
		if (Item.of(`#forge:scaffoldings/${item.material}`) != null) {
			if (Item.of(`#forge:rods/${item.material}`) != null) {
			event.shaped(`2x #forge:scaffoldings/${item.material}`, [
				'RRR',
				'R R',
				'RRR'
			  ], {
				R: `#forge:rods/${item.material}`,
			  }).id(`mbm2:crafting/${item.material}_scaffolding`)
			} else { console.log(`${item.material}` + "needs rods enabled to make a scaffolding recipe");}
			
			////////////////FRAME BOXES///////////////
			if (Item.of(`#forge:frame_boxs/${item.material}`) != null) {
				event.shaped(`#forge:frame_boxs/${item.material}`, [
					' P ',
					'PSP',
					' P '
				  ], {
					S: `#forge:scaffoldings/${item.material}`,
					P: `#forge:platings/${item.material}`,
				  }).id(`mbm2:crafting/${item.material}_frame_box`)

				  ////////////////HULL CASINGS///////////////
				  if (Item.of(`#forge:hull_casings/${item.material}`) != null && Item.of(`#forge:hull_panels/${item.material}`) != null) {
					  event.shaped(`#forge:hull_casings/${item.material}`, [
						  'BPB',
						  'PFP',
						  'BPB'
						], {
						  F: `#forge:frame_boxs/${item.material}`,
						  P: `#forge:hull_panels/${item.material}`,
						  B: `#forge:bolts/${item.material}`,
						}).id(`mbm2:crafting/${item.material}_hull_casing`)
					}
				}
		}
	}
	
	if (Item.of(`#forge:hull_panels/${item.material}`) != null) {
		//Mega Hull Panels
		  event.recipes.multiblocked.multiblock("casting")
		  .inputFluid(Fluid.of(`${item.fluid_id}`, hullCasting*900))
		  .inputItem(`${hullCasting}x kubejs:hull_panel_sand_cast`)
		  .outputItem(`${hullCasting}x #forge:hull_panels/${item.material}`)
		  .setPerTick(true)
		  .inputFE(1024)
		  .duration(100)
	}
	////////////////WIRES///////////////
    if (Item.of(`#forge:wires/${item.material}`) != null) {

	//Hand Crafting
	event.shapeless(`#forge:wires/${item.material}`, [`#forge:plates/${item.material}`, Item.of('immersiveengineering:wirecutter').ignoreNBT(),]).id(`immersiveengineering:crafting/wire_${item.material}`)

	//Create Wire
	global.createRolling(event, `#forge:wires/${item.material}`, 1, `forge:plates/${item.material}`, `createaddition:rolling/${item.material}_plate`)

	//Immersive Wire
  	event.recipes.immersiveengineeringMetalPress(`2x #forge:wires/${item.material}`, `#forge:ingots/${item.material}`, 'immersiveengineering:mold_wire').id(`immersiveengineering:metalpress/wire_${item.material}`)
	

	  if (item.fluid_id != null) {
		//Mega Wire Casing
		  event.recipes.multiblocked.multiblock("casting")
			  .inputFluid(Fluid.of(`${item.fluid_id}`, wireCasting*45))
			  .inputItem(`${wireCasting}x #tconstruct:casts/single_use/wire`)
			  .outputItem(`${wireCasting}x #forge:wires/${item.material}`)
			  .setPerTick(true)
			  .inputFE(1024)
			  .duration(100)
		  }

		/////////////// Spools //////////////////
    	if (Item.of(`#forge:spools/${item.material}`) != null) {
		event.shaped(`#forge:spools/${item.material}`, [
			' W ',
			'WSW',
			' W '
		  ], {
			W: `#forge:wires/${item.material}`,
			S: 'createaddition:spool'
		  }).id(`mbm2:crafting/${item.material}_spool`)
		}
		/////////////// Coil Item //////////////////
    	if (Item.of(`#forge:wire_coils/${item.material}`) != null) {
		event.shaped(`#forge:wire_coils/${item.material}`, [
			' W ',
			'WSW',
			' W '
		  ], {
			S: `#forge:rods/aluminum`,
			W: `#forge:spools/${item.material}`
		  }).id(`mbm2:crafting/${item.material}_wire_coil`)
		}
		/////////////// Coil Block //////////////////
    	if (Item.of(`#forge:coils/${item.material}`) != null) {
			if (item.tier <= 2) {
				event.shaped(`#forge:coils/${item.material}`, [
					'PPP',
					'CCC',
					'PPP'
				], {
					P: `#forge:plates/aluminum`,
					C: `#forge:wire_coils/${item.material}`
				}).id(`mbm2:crafting/${item.material}_coil_block`)
			} else if (item.tier > 2) {
				event.shaped(`#forge:coils/${item.material}`, [
					'PPP',
					'CCC',
					'PPP'
				], {
					P: `#forge:plates/magnesium`,
					C: `#forge:wire_coils/${item.material}`
				}).id(`mbm2:crafting/${item.material}_coil_block`)
			}
		}
	}

	////////////////////// DUST //////////////////////
    if (Item.of(`#forge:dusts/${item.material}`) != null) {
		if (item.type == 'gem') {
			event.recipes.createMilling([`#forge:dusts/${item.material}`], [`#forge:gems/${item.material}`]).id(`mbm2:create/crushing/${item.material}_${item.type}`)
			event.recipes.immersiveengineeringCrusher(`#forge:dusts/${item.material}`, `#forge:gems/${item.material}`).id(`mbm2:immersive/crushing/${item.material}_${item.type}`)
			event.recipes.mekanismCrushing(`#forge:dusts/${item.material}`, `#forge:gems/${item.material}`).id(`mbm2:mekanism/crushing/${item.material}_${item.type}`)
		} else if (item.type == 'stone') {
			event.recipes.createMilling([`#forge:dusts/${item.material}`], [`#forge:${item.material}`]).id(`mbm2:create/crushing/${item.material}_${item.type}`)
			event.recipes.immersiveengineeringCrusher(`#forge:dusts/${item.material}`, `#forge:${item.material}`).id(`mbm2:immersive/crushing/${item.material}_${item.type}`)
			event.recipes.mekanismCrushing(`#forge:dusts/${item.material}`, `#forge:${item.material}`).id(`mbm2:mekanism/crushing/${item.material}_${item.type}`)
		} else {
			if (Item.of(`#forge:ingots/${item.material}`) != null) {
			event.recipes.createMilling([`#forge:dusts/${item.material}`], [`#forge:ingots/${item.material}`]).id(`mbm2:create/crushing/${item.material}_${item.type}`)
			event.recipes.immersiveengineeringCrusher(`#forge:dusts/${item.material}`, `#forge:ingots/${item.material}`).id(`mbm2:immersive/crushing/${item.material}_${item.type}`)
			event.recipes.mekanismCrushing(`#forge:dusts/${item.material}`, `#forge:ingots/${item.material}`).id(`mbm2:mekanism/crushing/${item.material}_${item.type}`)
			}
		}
	}

    if (Item.of(`#forge:ingots/${item.material}`) != null) {
		//Ingots
    	if (item.itemParts.includes('nugget')) {
			event.shapeless(`9x #forge:nuggets/${item.material}`, [`#forge:ingots/${item.material}`])
			event.shaped(`#forge:ingots/${item.material}`, [
				'NNN',
				'NNN',
				'NNN'
			  ], {
				N: `#forge:nuggets/${item.material}`,
			})
		}
	}

		if (item.blockParts.includes('storage_block')) {
			if(item.type == 'gem') {
				//Blocks
				event.shapeless(`9x #forge:gems/${item.material}`, [`#forge:storage_blocks/${item.material}`])
				event.shaped(`#forge:storage_blocks/${item.material}`, [
					'III',
					'III',
					'III'
				  ], {
					I: `#forge:gems/${item.material}`,
				  })
			} else {
					//Blocks
					event.shapeless(`9x #forge:ingots/${item.material}`, [`#forge:storage_blocks/${item.material}`])
					event.shaped(`#forge:storage_blocks/${item.material}`, [
						'III',
						'III',
						'III'
					  ], {
						I: `#forge:ingots/${item.material}`,
					  })
					}
		}
	  if (item.fluid != null && (item.type == 'base_metal' || item.type == 'alloy'))
	  {
    	if (Item.of(`#forge:ingots/${item.material}`) != null) {
		//Ingot Casing
		 global.casingTable(event, 'tconstruct:casts/single_use/ingot', true, `#forge:ingots/${item.material}`, `forge:molten_${item.material}`, 90, 60, `tconstruct:smeltery/casting/metal/${item.material}/ingot_sand_cast`)
		 global.casingTable(event, 'tconstruct:casts/multi_use/ingot', false, `#forge:ingots/${item.material}`, `forge:molten_${item.material}`, 90, 60, `tconstruct:smeltery/casting/metal/${item.material}/ingot_gold_cast`)
		}
		 if (Item.of(`#forge:nuggets/${item.material}`) != null) {
		//Nugget Casing
		 global.casingTable(event, 'tconstruct:casts/multi_use/nugget', false, `#forge:nuggets/${item.material}`, `forge:molten_${item.material}`, 10, 10, `tconstruct:smeltery/casting/metal/${item.material}/nugget_gold_cast`)
		 global.casingTable(event, 'tconstruct:casts/single_use/nugget', true, `#forge:nuggets/${item.material}`, `forge:molten_${item.material}`, 10, 10, `tconstruct:smeltery/casting/metal/${item.material}/nugget_sand_cast`)
	  	}
		 if (Item.of(`#forge:storage_blocks/${item.material}`) != null){
		//Block Casing
		global.casingBasin(event, `#forge:storage_blocks/${item.material}`, `forge:molten_${item.material}`, 810, 180, `tconstruct:smeltery/casting/metal/${item.material}/block`)
	  }
	}
		if (item.raw_ore) {
		//Raw Blocks
		event.shapeless(`9x #forge:raw_materials/${item.material}`, [`#forge:storage_blocks/raw_${item.material}`]).id(`mbm2:raw_${item.material}_unpacking`)
		event.shaped(`#forge:storage_blocks/raw_${item.material}`, [
			'III',
			'III',
			'III'
		  ], {
			I: `#forge:raw_materials/${item.material}`,
		  }).id(`mbm2:raw_${item.material}_packing`)
		}

		//Meelt that metal down bruh
		var partAmounts = {
			'ingot':90,
			'plate':90,
			'gear':360,
			'rod':45,
			'wire':45,
			'nugget':10,
			'coin':30,
		}
		if (item.fluid_id != null) {
			for (var part in partAmounts) {
				if (Item.of(`#forge:${part}s/${item.material}`) != null) {
					event.recipes.thermal.crucible(Fluid.of(item.fluid_id, partAmounts[part]), `#forge:${part}s/${item.material}`).id(`mbm2:crucible/${item.material}_${part}`)
				}
			}
		}
		//Chemlib compat
		if (Item.of(`chemlib:${item.material}`) != null && item.type != 'element') {
			event.remove({id: `alchemistry:compactor/${item.material}_dust`})
			global.alchemistryCompacting(event, Item.of(`#forge:dusts/${item.material}`).toJson(), Item.of(`chemlib:${item.material}`, 16).toJson(), `mbm2:alchemistry/${item.material}_compacting`)
		}
	})
});
	