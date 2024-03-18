

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

	var partAmounts = {
		'ingot':90,
		'plate':90,
		'gear':360,
		'rod':45,
		'wire':45,
		'nugget':10,
		'coin':30,
	}
	global.newMaterialParts.forEach((item) => {
		
	if(item.type == 'gem') {
		console.log(Item.of(`#forge:gems/${item.material}`) + `: tier ${item.tier} ${item.type}`);
	} else {
		console.log(Item.of(`#forge:ingots/${item.material}`) + `: tier ${item.tier} ${item.type}`);
	}

	
	////////////////PLATES///////////////
    if (Item.of(`#forge:plates/${item.material}`) != null && item.material != 'plastic') {

	  if (item.fluid_id != null) {
		//Plate Casting
		event.remove({id:`tconstruct:smeltery/casting/metal/${item.material}/plate_gold_cast`})
		event.remove({id:`tconstruct:smeltery/casting/metal/${item.material}/plate_sand_cast`})
		event.recipes.tconstruct.casting_table(Item.of(`#forge:plates/${item.material}`), item.fluid_id, 90).multiUseCast('plate').coolingTime(60).id(`mbm2:smeltery/casting/metal/${item.material}/plate_gold_cast`)
		event.recipes.tconstruct.casting_table(Item.of(`#forge:plates/${item.material}`), item.fluid_id, 90).singleUseCast('plate').coolingTime(60).id(`mbm2:smeltery/casting/metal/${item.material}/plate_sand_cast`)
		console.log('adding plate casting');

		//Mega Plate Casting
	  event.recipes.multiblocked.multiblock("casting")
	  	.inputFluid(Fluid.of(`${item.fluid_id}`, plateCasting*90))
	  	.inputItem(`${plateCasting}x #tconstruct:casts/single_use/plate`)
	  	.outputItem(`${plateCasting}x #forge:plates/${item.material}`)
	  	.setPerTick(true)
	  	.inputFE(1000)
	  	.duration(50)
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
		  }).id(`mbm2:crafting/${item.material}_rocket_fins`)
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
		 }).id(`mbm2:crafting/${item.material}_rocket_nose_cones`)
	   }
	}

	////////////////COMPONENTS///////////////
    if (Item.of(`#forge:components/${item.material}`) != null) {
		//Hand Crafted Components
		event.shaped(`#forge:components/${item.material}`, [
			'P P',
			' I ',
			'P P'
		  ], {
			I: `#forge:ingots/copper`,
			P: `#forge:plates/${item.material}`,
		  }).id(`mbm2:crafting/${item.material}_component`)

	global.ieBlueprint(event, 'mechanical_components', Item.of(`#forge:components/${item.material}`), [{count:2, base_ingredient: {tag: `forge:plates/${item.material}`}}, {tag: `forge:ingots/copper`}], `mbm2:${item.material}_component`)
	
			//Cheaper recipe
			event.recipes.multiblocked.multiblock("mechanical_crafting")
			.inputItem(`2x #forge:plates/${item.material}`)
			.outputItem(Item.of(`#forge:components/${item.material}`))
			.setPerTick(true)
			.inputFE(2000)
			.duration(100)
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
	  }).id(`mbm2:crafting/${item.material}_casing`)
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

		  if (item.fluid_id != null) {
		  	//Sheetmetal Casting
	  		//global.casingBasinCast(event, 'forge:sheetmetal_cast', false, `#forge:sheetmetals/${item.material}`, `forge:molten_${item.material}`, 90, 80, `mbm2:smeltery/casting/metal/${item.material}/sheetmetal`)
		  }
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
				event.shaped(`#forge:cog_blocks/${item.material}`, [
					'RGR',
					'G G',
					'RGR'
				  ], {
					R: `#forge:rods/${item.material}`,
					G: `#forge:gears/${item.material}`
				  }).id(`mbm2:parts/${item.material}_cog_block`)
				  if (Item.of(`#forge:scaffoldings/${item.material}`) != null) {
					  event.shaped(`#forge:cog_blocks/${item.material}`, [
						  ' G ',
						  'GSG',
						  ' G '
						], {
						  S: `#forge:scaffoldings/${item.material}`,
						  G: `#forge:gears/${item.material}`
						}).id(`mbm2:parts/${item.material}_cog_block_with_scaffoldings`)
					}
				  
			//Cheaper recipe
			event.recipes.multiblocked.multiblock("mechanical_crafting")
			.inputItems([`3x #forge:gears/${item.material}`,`3x #forge:rods/${item.material}`])
			.outputItem(Item.of(`#forge:cog_blocks/${item.material}`))
			.setPerTick(true)
			.inputFE(2000)
			.duration(200)
			}
		}

	  if (item.fluid_id != null) {
		
		//Gear Casing
		event.remove({id:`tconstruct:smeltery/casting/metal/${item.material}/gear_gold_cast`})
		event.remove({id:`tconstruct:smeltery/casting/metal/${item.material}/gear_sand_cast`})
		//let gearCoolingTime = parseInt(((item.tier + 1)* partAmounts.gear)/3)
		event.recipes.tconstruct.casting_table(Item.of(`#forge:gears/${item.material}`), item.fluid_id, 360).multiUseCast('gear').coolingTime(120).id(`mbm2:smeltery/casting/metal/${item.material}/gear_gold_cast`)
		event.recipes.tconstruct.casting_table(Item.of(`#forge:gears/${item.material}`), item.fluid_id, 360).singleUseCast('gear').coolingTime(120).id(`mbm2:smeltery/casting/metal/${item.material}/gear_sand_cast`)
		
		//global.casingTable(event, 'tconstruct:casts/multi_use/gear', false, `#forge:gears/${item.material}`, `forge:molten_${item.material}`, 360, 120, `mbm2:smeltery/casting/metal/${item.material}/gear_gold_cast`)
		//global.casingTable(event, 'tconstruct:casts/single_use/gear', true, `#forge:gears/${item.material}`, `forge:molten_${item.material}`, 360, 120, `mbm2:smeltery/casting/metal/${item.material}/gear_sand_cast`)

	//Mega Gear Casing
	  event.recipes.multiblocked.multiblock("casting")
	  	.inputFluid(Fluid.of(`${item.fluid_id}`, gearCasting*360))
	  	.inputItem(`${gearCasting}x #tconstruct:casts/single_use/gear`)
	  	.outputItem(`${gearCasting}x #forge:gears/${item.material}`)
	  	.setPerTick(true)
	  	.inputFE(1000)
	  	.duration(50)
	  }
	    
	  let gearPressedMaterial = `#forge:ingots/${item.material}`
	  if(item.type == 'gem') gearPressedMaterial = `#forge:gems/${item.material}`
	//Immersive Gears
	  event.recipes.immersiveengineeringMetalPress(`#forge:gears/${item.material}`, `4x ${gearPressedMaterial}`, 'immersiveengineering:mold_gear').id(`immersiveengineering:metalpress/gear_${item.material}`)
  
	//Thermal Gears
	  event.recipes.thermal.press(`#forge:gears/${item.material}`, [`5x ${gearPressedMaterial}`, 'thermal:press_gear_die']).id(`thermal:machines/press/press_${item.material}_ingot_to_gear`)
	
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

			//Cheaperer recipe
			event.recipes.multiblocked.multiblock("mechanical_crafting")
			.inputItem(`3x #forge:gears/${item.material}`)
			.outputItem(Item.of(`#forge:interlocking_components/${item.material}`))
			.setPerTick(true)
			.inputFE(2000)
			.duration(200)

			} else { console.log(`${item.material}` + "needs gears enabled to make an interlocking component recipe");}
		}
		
	//////////////// ROBOT ARM ///////////////
    if (Item.of(`#forge:robot_arms/${item.material}`) != null) {
			if (Item.of(`#forge:wires/${item.material}`) != null && Item.of(`#forge:rods/${item.material}`) != null) { 
				event.shaped(`#forge:robot_arms/${item.material}`, [
					'ABA',
					'CDA',
					'E A'
				  ], {
					A: `#forge:rods/${item.material}`,
					B: 'create:belt_connector',
					E: `#forge:gears/${item.material}`,
					C: `minecraft:chain`,
					D: `#forge:rods/steel`,
				}).id(`mbm2:parts/${item.material}_robot_arm`)
			}

			event.recipes.multiblocked.multiblock("mechanical_crafting")
			.inputItems([`4x #forge:rods/${item.material}`, 'create:belt_connector', `#forge:gears/${item.material}`])
			.outputItem(Item.of(`#forge:robot_arms/${item.material}`))
			.setPerTick(true)
			.inputFE(4000)
			.duration(400)
		
		}
	}
	////////////////END OF GEARS///////////////
	
	////////////////RODS///////////////
    if (Item.of(`#forge:rods/${item.material}`) != null) {
		if (Item.of(`#forge:ingots/${item.material}`) != null) {
			//Create Rods
			global.createRolling(event, `#forge:rods/${item.material}`, 1, `forge:ingots/${item.material}`, `createaddition:rolling/${item.material}_ingot`)

			//Immersive Rods
			event.recipes.immersiveengineeringMetalPress(`2x #forge:rods/${item.material}`, `#forge:ingots/${item.material}`, 'immersiveengineering:mold_rod').id(`immersiveengineering:metalpress/rod_${item.material}`)
		}

    if (item.fluid_id != null) {
		//Rod Casing
		event.remove({id:`tconstruct:smeltery/casting/metal/${item.material}/rod_gold_cast`})
		event.remove({id:`tconstruct:smeltery/casting/metal/${item.material}/rod_sand_cast`})
		event.recipes.tconstruct.casting_table(Item.of(`#forge:rods/${item.material}`), item.fluid_id, 45).multiUseCast('rod').coolingTime(40).id(`mbm2:smeltery/casting/metal/${item.material}/rod_gold_cast`)
		event.recipes.tconstruct.casting_table(Item.of(`#forge:rods/${item.material}`), item.fluid_id, 45).singleUseCast('rod').coolingTime(40).id(`mbm2:smeltery/casting/metal/${item.material}/rod_sand_cast`)
		//global.casingTable(event, 'tconstruct:casts/multi_use/rod', false, `#forge:rods/${item.material}`, `forge:molten_${item.material}`, 45, 40, `mbm2:smeltery/casting/metal/${item.material}/rod_gold_cast`)
		//global.casingTable(event, 'tconstruct:casts/single_use/rod', true, `#forge:rods/${item.material}`, `forge:molten_${item.material}`, 45, 40, `mbm2:smeltery/casting/metal/${item.material}/rod_sand_cast`)

		//Thermal Rods
		global.thermalChilling(event, `${item.fluid_id}`, 45, `#forge:rods/${item.material}`, 1, 'thermal:chiller_rod_cast', 5000, `thermal:machines/chiller/chiller_${item.material}_rod`)
	
		//Mega Rod Casing
		  event.recipes.multiblocked.multiblock("casting")
			  .inputFluid(Fluid.of(`${item.fluid_id}`, rodCasting*45))
			  .inputItem(`${rodCasting}x #tconstruct:casts/single_use/rod`)
			  .outputItem(`${rodCasting}x #forge:rods/${item.material}`)
			  .setPerTick(true)
			  .inputFE(1000)
			  .duration(50)
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
			  
			//Cheaper recipe
			event.recipes.multiblocked.multiblock("mechanical_crafting")
			.inputItem(`6x #forge:rods/${item.material}`)
			.outputItem(Item.of(`2x #forge:scaffoldings/${item.material}`))
			.setPerTick(true)
			.inputFE(2000)
			.duration(100)

			} else { console.log(`${item.material}` + "needs rods enabled to make a scaffolding recipe");}
			
			////////////////FRAME BOXES///////////////
			if (Item.of(`#forge:frame_boxs/${item.material}`) != null) {
				event.shaped(`#forge:frame_boxs/${item.material}`, [
					'BPB',
					'PSP',
					'BPB'
				  ], {
					S: `#forge:scaffoldings/${item.material}`,
					B: `#forge:bolts/${item.material}`,
					P: `#forge:platings/${item.material}`,
				  }).id(`mbm2:crafting/${item.material}_frame_box`)

				//Cheaper recipe
				event.recipes.multiblocked.multiblock("mechanical_crafting")
				.inputItem(`#forge:scaffoldings/${item.material}`)
				.inputItem(`3x #forge:platings/${item.material}`)
				.inputItem(`4x #forge:bolts/${item.material}`)
				.outputItem(Item.of(`#forge:frame_boxs/${item.material}`))
				.setPerTick(true)
				.inputFE(2000)
				.duration(100)

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

						//Cheaper recipe
						event.recipes.multiblocked.multiblock("mechanical_crafting")
						.inputItem(`#forge:frame_boxs/${item.material}`)
						.inputItem(`3x #forge:hull_panels/${item.material}`)
						.inputItem(`4x #forge:bolts/${item.material}`)
						.outputItem(Item.of(`2x #forge:hull_casings/${item.material}`))
						.setPerTick(true)
						.inputFE(2000)
						.duration(100)
					}
				}
		}

		
	///////SPROCKETS///////////////
		if (Item.of(`#forge:sprockets/${item.material}`) != null) {
			event.recipes.botania.mana_infusion(Item.of(`#forge:rings/${item.material}`), `#forge:rods/${item.material}`, 2000)
			event.shaped(`#forge:sprockets/${item.material}`, [
				' R ',
				'RRR',
				' R '
			  ], {
				R: `#forge:rings/${item.material}`,
			  }).id(`mbm2:crafting/${item.material}_sprockets`)
		}
	}

	///////HULL_PANNELS///////////////
	if (Item.of(`#forge:hull_panels/${item.material}`) != null) {
		if (item.fluid_id != null) {
		//Mega Hull Panels
		  event.recipes.multiblocked.multiblock("casting")
		  .inputFluid(Fluid.of(`${item.fluid_id}`, hullCasting*900))
		  .inputItem(`${hullCasting}x kubejs:hull_panel_sand_cast`)
		  .outputItem(`${hullCasting}x #forge:hull_panels/${item.material}`)
		  .setPerTick(true)
		  .inputFE(1000)
		  .duration(200)
		}
	}

	///////BOLTS///////////////
	if (Item.of(`#forge:bolts/${item.material}`) != null) {
	
		//Casting Bolts
		
		//if (item.fluid_id != null) {
		//	if (item.tier <= 2) {
		//		event.recipes.tconstruct.casting_table(Item.of(`#forge:bolts/${item.material}`), item.fluid_id, 180).cast('#forge:rods/iron').coolingTime(60).consumeCast().id(`mbm2:smeltery/casting/metal/${item.material}/bolt`)//.switchSlots()
		//	} else {
		//		event.recipes.tconstruct.casting_table(Item.of(`#forge:bolts/${item.material}`), item.fluid_id, 180).cast('#forge:rods/steel').coolingTime(60).consumeCast().id(`mbm2:smeltery/casting/metal/${item.material}/bolt`)//.switchSlots()
		//	}
		//} else { console.log(`[MM2 ERROR] ${item.material}` + "needs a fluid_id or bolts casting");}

		//Sintering Bolts
		  event.recipes.multiblocked.multiblock("sintering")
		  .setChance(0)
		  .inputItem('kubejs:bolt_mold')
		  .setChance(1)
		  .inputItem(Item.of(`#forge:dusts/${item.material}`, 2))
		  .inputItem(Item.of(`#forge:dusts/steel`))
		  .inputFluid(Fluid.of(`kubejs:hot_air`, 250))
		  .outputItem(Item.of(`2x #forge:bolts/${item.material}`))
		  .setPerTick(true)
		  .inputFE(2000)
		  .duration(60)

		  //Sintering Bolts 4x
			event.recipes.multiblocked.multiblock("sintering")
			.setChance(0)
			.inputItem('kubejs:bolt_mold')
			.setChance(1)
			.inputItem(Item.of(`#forge:dusts/${item.material}`, 2))
			.inputItem(Item.of(`#forge:dusts/stainless_steel`))
			.inputFluid(Fluid.of(`kubejs:hot_air`, 250))
			.outputItem(Item.of(`4x #forge:bolts/${item.material}`))
			.setPerTick(true)
			.inputFE(2000)
			.duration(60)
	}
	///////WIRES///////////////
    if (Item.of(`#forge:wires/${item.material}`) != null) {

	//Hand Crafting
	event.shapeless(`#forge:wires/${item.material}`, [`#forge:plates/${item.material}`, Item.of('immersiveengineering:wirecutter').ignoreNBT(),]).id(`immersiveengineering:crafting/wire_${item.material}`)

	//Create Wire
	global.createRolling(event, `#forge:wires/${item.material}`, 1, `forge:plates/${item.material}`, `createaddition:rolling/${item.material}_plate`)

	//Immersive Wire
  	event.recipes.immersiveengineeringMetalPress(`2x #forge:wires/${item.material}`, `#forge:ingots/${item.material}`, 'immersiveengineering:mold_wire').id(`immersiveengineering:metalpress/wire_${item.material}`)
	

	  if (item.fluid_id != null) {
		//Wire Casing
		event.remove({id:`tconstruct:smeltery/casting/metal/${item.material}/wire_gold_cast`})
		event.remove({id:`tconstruct:smeltery/casting/metal/${item.material}/wire_sand_cast`})
		event.recipes.tconstruct.casting_table(Item.of(`#forge:wires/${item.material}`), item.fluid_id, 45).multiUseCast('wire').coolingTime(40).id(`mbm2:smeltery/casting/metal/${item.material}/wire_gold_cast`)
		event.recipes.tconstruct.casting_table(Item.of(`#forge:wires/${item.material}`), item.fluid_id, 45).singleUseCast('wire').coolingTime(40).id(`mbm2:smeltery/casting/metal/${item.material}/wire_sand_cast`)
		//global.casingTable(event, 'tconstruct:casts/multi_use/wire', false, `#forge:wires/${item.material}`, `forge:molten_${item.material}`, 45, 40, `mbm2:smeltery/casting/metal/${item.material}/wire_gold_cast`)
		//global.casingTable(event, 'tconstruct:casts/single_use/wire', true, `#forge:wires/${item.material}`, `forge:molten_${item.material}`, 45, 40, `mbm2:smeltery/casting/metal/${item.material}/wire_sand_cast`)
		//Mega Wire Casing
		  event.recipes.multiblocked.multiblock("casting")
			  .inputFluid(Fluid.of(`${item.fluid_id}`, wireCasting*45))
			  .inputItem(`${wireCasting}x #tconstruct:casts/single_use/wire`)
			  .outputItem(`${wireCasting}x #forge:wires/${item.material}`)
			  .setPerTick(true)
			  .inputFE(1000)
			  .duration(50)
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
			if (item.tier <= 2) {
				event.shaped(`#forge:wire_coils/${item.material}`, [
					' W ',
					'WSW',
					' W '
				  ], {
					S: `#forge:rods/iron`,
					W: `#forge:spools/${item.material}`
				  }).id(`mbm2:crafting/${item.material}_wire_coil`)
			} else {
				event.shaped(`#forge:wire_coils/${item.material}`, [
					' W ',
					'WSW',
					' W '
				  ], {
					S: `#forge:rods/aluminum`,
					W: `#forge:spools/${item.material}`
				  }).id(`mbm2:crafting/${item.material}_wire_coil`)

			}
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
		if (item.fluid_id != null) {
			global.tinkersMeltingPlain(event, item.fluid_id, 90, Item.of(`#forge:dusts/${item.material}`).toJson(), 800, 142, `mbm2:smeltery/melting/${item.material}_dust`)
		}
		if (item.type == 'gem') {
			event.recipes.createMilling([`#forge:dusts/${item.material}`], [`#forge:gems/${item.material}`]).id(`mbm2:create/crushing/${item.material}_${item.type}`)
			event.recipes.immersiveengineeringCrusher(`#forge:dusts/${item.material}`, `#forge:gems/${item.material}`).id(`mbm2:immersive/crushing/${item.material}_${item.type}`)
			event.recipes.mekanismCrushing(`#forge:dusts/${item.material}`, `#forge:gems/${item.material}`).id(`mbm2:mekanism/crushing/${item.material}_${item.type}`)
		} else if (item.type == 'stone') {
			event.recipes.createMilling([`#forge:dusts/${item.material}`], [`#forge:${item.material}`]).id(`mbm2:create/crushing/${item.material}_${item.type}`)
			event.recipes.immersiveengineeringCrusher(`#forge:dusts/${item.material}`, `#forge:${item.material}`).id(`mbm2:immersive/crushing/${item.material}_${item.type}`)
			event.recipes.mekanismCrushing(`#forge:dusts/${item.material}`, `#forge:${item.material}`).id(`mbm2:mekanism/crushing/${item.material}_${item.type}`)
		} else {
			if (Item.of(`#forge:ingots/${item.material}`) != null && item.type != 'compound_ore') {
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
	  if (item.fluid_id != null && (item.type == 'base_metal' || item.type == 'alloy'))
	  {
    	if (Item.of(`#forge:ingots/${item.material}`) != null) {
		//Ingot Casting
		event.remove({id:`tconstruct:smeltery/casting/metal/${item.material}/ingot_gold_cast`})
		event.remove({id:`tconstruct:smeltery/casting/metal/${item.material}/ingot_sand_cast`})
		event.recipes.tconstruct.casting_table(Item.of(`#forge:ingots/${item.material}`), item.fluid_id, 90).multiUseCast('ingot').coolingTime(60).id(`mbm2:smeltery/casting/metal/${item.material}/ingot_gold_cast`)
		event.recipes.tconstruct.casting_table(Item.of(`#forge:ingots/${item.material}`), item.fluid_id, 90).singleUseCast('ingot').coolingTime(60).id(`mbm2:smeltery/casting/metal/${item.material}/ingot_sand_cast`)


		//global.casingTable(event, 'tconstruct:casts/single_use/ingot', true, `#forge:ingots/${item.material}`, `forge:molten_${item.material}`, 90, 60, `mbm2:smeltery/casting/metal/${item.material}/ingot_sand_cast`)
		//global.casingTable(event, 'tconstruct:casts/multi_use/ingot', false, `#forge:ingots/${item.material}`, `forge:molten_${item.material}`, 90, 60, `mbm2:smeltery/casting/metal/${item.material}/ingot_gold_cast`)
		}
		 if (Item.of(`#forge:nuggets/${item.material}`) != null) {
		//Nugget Casting
		event.remove({id:`tconstruct:smeltery/casting/metal/${item.material}/nugget_gold_cast`})
		event.remove({id:`tconstruct:smeltery/casting/metal/${item.material}/nugget_sand_cast`})
		event.recipes.tconstruct.casting_table(Item.of(`#forge:nuggets/${item.material}`), item.fluid_id, 90).multiUseCast('nugget').coolingTime(10).id(`mbm2:smeltery/casting/metal/${item.material}/nugget_gold_cast`)
		event.recipes.tconstruct.casting_table(Item.of(`#forge:nuggets/${item.material}`), item.fluid_id, 90).singleUseCast('nugget').coolingTime(10).id(`mbm2:smeltery/casting/metal/${item.material}/nugget_sand_cast`)

		//global.casingTable(event, 'tconstruct:casts/multi_use/nugget', false, `#forge:nuggets/${item.material}`, `forge:molten_${item.material}`, 10, 10, `mbm2:smeltery/casting/metal/${item.material}/nugget_gold_cast`)
		//global.casingTable(event, 'tconstruct:casts/single_use/nugget', true, `#forge:nuggets/${item.material}`, `forge:molten_${item.material}`, 10, 10, `mbm2:smeltery/casting/metal/${item.material}/nugget_sand_cast`)
	  	}
		 if (Item.of(`#forge:storage_blocks/${item.material}`) != null){
		//Block Casting
		global.casingBasin(event, `#forge:storage_blocks/${item.material}`, `forge:molten_${item.material}`, 810, 180, `mbm2:smeltery/casting/metal/${item.material}/block`)
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
		if (item.fluid_id != null) {
			for (var part in partAmounts) {
				if (Item.of(`#forge:${part}s/${item.material}`) != null) {
					event.recipes.thermal.crucible(Fluid.of(item.fluid_id, partAmounts[part]), `#forge:${part}s/${item.material}`).id(`mbm2:crucible/${item.material}_${part}`)
					if(item.fluid_id.includes('kubejs')) {
						global.tinkersMeltingPlain(event, item.fluid_id, partAmounts[part], Item.of(`#forge:${part}s/${item.material}`).toJson(), 800, 142, `mbm2:smeltery/melting/${item.material}_${part}`)
					}
				}
			}
		}

		//Chemlib compat
		if (Item.of(`chemlib:${item.material}`) != null && item.type != 'element') {
			event.remove({id: `alchemistry:compactor/${item.material}_dust`})
			global.alchemistryCompacting(event, Item.of(`#forge:dusts/${item.material}`).toJson(), Item.of(`chemlib:${item.material}`, 16).toJson(), `mbm2:alchemistry/${item.material}_compacting`)
		}
		//Compound Ingots
		if(item.type == 'compound_ore') {
			let componentList = []
			item.components.forEach(material => {
				if (material != item.components[8]) {
				componentList.push(Item.of(`#forge:ingots/${material}`))
				}
			});
			event.recipes.multiblocked.multiblock("ebf")
			.inputFluid(Fluid.of('kubejs:liquid_air', 1000))
			.inputItems(componentList)
			.outputItem(Item.of(`#forge:ingots/${item.material}`))
			.setPerTick(true)
			.inputFE(16000)
			.duration(500)
			//Oxygen
			event.recipes.multiblocked.multiblock("ebf")
			.inputFluid(Fluid.of('mekanism:oxygen', 1000))
			.inputItems(componentList)
			.outputItem(Item.of(`#forge:ingots/${item.material}`))
			.setPerTick(true)
			.inputFE(16000)
			.duration(400)
		}
	})
});
	
