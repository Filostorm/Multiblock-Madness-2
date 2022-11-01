

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
  


	global.newMaterialParts.forEach((item) => {

	////////////////HAMMER///////////////
    if (Item.of(`#forge:hammers/${item.material}`) != null) {
	event.shaped(`#forge:hammers/${item.material}`, [
		' IS',
		' RI',
		'R  '
	  ], {
		I: `#forge:ingots/${item.material}`,
		R: '#forge:rods/wooden',
		S: '#forge:string',
	  }).id(`kubejs:crafting/${item.material}_hammer`)
	}


	
	////////////////PLATES///////////////
    if (Item.of(`#forge:plates/${item.material}`) != null) {
	event.shaped(`#forge:plates/${item.material}`, [
		'H',
		'I',
		'I'
	  ], {
		I: `#forge:ingots/${item.material}`,
		H: Ingredient.of('#forge:hammers'),
	  }).damageIngredient(Ingredient.of('#forge:hammers')).id(`immersiveengineering:crafting/plate_${item.material}_hammering`)

	//Plate Casing
  	global.casingTable(event, 'tconstruct:casts/multi_use/plate', false, `#forge:plates/${item.material}`, `forge:molten_${item.material}`, 90, 60, `tconstruct:smeltery/casting/metal/${item.material}/plate_gold_cast`)
  	global.casingTable(event, 'tconstruct:casts/single_use/plate', true, `#forge:plates/${item.material}`, `forge:molten_${item.material}`, 90, 60, `tconstruct:smeltery/casting/metal/${item.material}/plate_sand_cast`)

	//Create Plates
  	event.recipes.createPressing(`#forge:plates/${item.material}`, `#forge:ingots/${item.material}`).id(`create:pressing/${item.material}_ingot`)

	//Immersive Plates
 	event.recipes.immersiveengineeringMetalPress(`#forge:plates/${item.material}`, `#forge:ingots/${item.material}`, 'immersiveengineering:mold_plate').id(`immersiveengineering:metalpress/plate_${item.material}`)

	//Thermal Plates
	event.recipes.thermal.press(`2x #forge:plates/${item.material}`, `3x #forge:ingots/${item.material}`).id(`thermal:machines/press/press_${item.material}_ingot_to_plate`)
	
	////////////////DENSE PLATES///////////////
    if (Item.of(`#forge:dense_plates/${item.material}`) != null) {

	//Create Dense Plates
  	event.recipes.createPressing(`#forge:dense_plates/${item.material}`, `#forge:storage_blocks/${item.material}`).id(`create:pressing/dense_${item.material}_plate`)

	//Immersive Dense Plates
 	event.recipes.immersiveengineeringMetalPress(`#forge:dense_plates/${item.material}`, `#forge:storage_blocks/${item.material}`, 'immersiveengineering:mold_plate').id(`immersiveengineering:metalpress/dense_plate_${item.material}`)
	}

	////////////////SHEETMETAL///////////////
	if (Item.of(`#forge:sheetmetals/${item.material}`) != null) {
		event.shaped(`4x #forge:sheetmetals/${item.material}`, [
			' P ',
			'P P',
			' P '
		  ], {
			P: `#forge:plates/${item.material}`,
		  }).id(`immersiveengineering:crafting/sheetmetal_${item.material}`)
		  
		  //Sheetmetal Casing
	  global.casingBasinCast(event, 'forge:sheetmetal_cast', false, `#forge:sheetmetals/${item.material}`, `forge:molten_${item.material}`, 90, 80, `tconstruct:smeltery/casting/metal/${item.material}/sheetmetal`)
		}
	}
	////////////////GEARS///////////////
    if (Item.of(`#forge:gears/${item.material}`) != null) {
	event.shaped(`#forge:gears/${item.material}`, [
		' P ',
		'PRP',
		' P '
	  ], {
		P: `#forge:plates/${item.material}`,
		R: `#forge:rods/${item.material}`
	  }).id(`thermal:parts/${item.material}_gear`)

	//Gear Casing
  	global.casingTable(event, 'tconstruct:casts/multi_use/gear', false, `#forge:gears/${item.material}`, `forge:molten_${item.material}`, 360, 120, `tconstruct:smeltery/casting/metal/${item.material}/gear_gold_cast`)
  	global.casingTable(event, 'tconstruct:casts/single_use/gear', true, `#forge:gears/${item.material}`, `forge:molten_${item.material}`, 360, 120, `tconstruct:smeltery/casting/metal/${item.material}/gear_sand_cast`)

	//Immersive Gears
	event.recipes.immersiveengineeringMetalPress(`#forge:gears/${item.material}`, `4x #forge:ingots/${item.material}`, 'immersiveengineering:mold_gear').id(`immersiveengineering:metalpress/gear_${item.material}`)

	//Thermal Gears
	event.recipes.thermal.press(`#forge:gears/${item.material}`, [`5x #forge:ingots/${item.material}`, 'thermal:press_gear_die']).id(`thermal:machines/press/press_${item.material}_ingot_to_gear`)
	
	//////////////// MECHANICAL PART ///////////////
    if (Item.of(`#forge:mechanical_components/${item.material}`) != null) {
	event.shaped(`#forge:mechanical_components/${item.material}`, [
		'G G',
		' W ',
		'G G'
	  ], {
		W: `#forge:wires/${item.material}`,
		G: `#forge:gears/${item.material}`
	  }).id(`kubejs:parts/${item.material}_mechanical_component`)
	}

	//////////////// COG BLOCK ///////////////
    if (Item.of(`#forge:cog_blocks/${item.material}`) != null) {
		event.shaped(`4x #forge:cog_blocks/${item.material}`, [
			'RGR',
			'G G',
			'RGR'
		  ], {
			R: `#forge:rods/${item.material}`,
			G: `#forge:gears/${item.material}`
		  }).id(`kubejs:parts/${item.material}_cog_block`)
		}
	}
	
	////////////////RODS///////////////
    if (Item.of(`#forge:rods/${item.material}`) != null) {
		
	event.shaped(`#forge:rods/${item.material}`, [
		'H ',
		' I'
	  ], {
		I: `#forge:ingots/${item.material}`,
		H: Ingredient.of('#forge:hammers'),
	  }).damageIngredient(Ingredient.of('#forge:hammers')).id(`kubejs:parts/${item.material}_rod`)

	//Create Rods
	global.createRolling(event, `#forge:rods/${item.material}`, 2, `forge:ingots/${item.material}`, `createaddition:rolling/${item.material}_ingot`)
	
	//Immersive Rods
	event.recipes.immersiveengineeringMetalPress(`2x #forge:rods/${item.material}`, `#forge:ingots/${item.material}`, 'immersiveengineering:mold_rod').id(`immersiveengineering:metalpress/rod_${item.material}`)
	
    if (Fluid.of(`forge:molten_${item.material}`) != null) {
	//Rod Casing
  	global.casingTable(event, 'tconstruct:casts/multi_use/rod', false, `#forge:rods/${item.material}`, `forge:molten_${item.material}`, 45, 20, `tconstruct:smeltery/casting/metal/${item.material}/rod_gold_cast`)
  	global.casingTable(event, 'tconstruct:casts/single_use/rod', true, `#forge:rods/${item.material}`, `forge:molten_${item.material}`, 45, 20, `tconstruct:smeltery/casting/metal/${item.material}/rod_sand_cast`)

	//Thermal Rods
	global.thermalChilling(event, `forge:molten_${item.material}`, 60, `#forge:rods/${item.material}`, 1, 'thermal:chiller_rod_cast', 5000, `thermal:machines/chiller/chiller_${item.material}_rod`)
	}
	
		////////////////SCAFFOLDING///////////////
		if (Item.of(`#immersiveengineering:scaffoldings/${item.material}`) != null) {
			event.shaped(`6x #immersiveengineering:scaffoldings/${item.material}`, [
				'III',
				' R ',
				'R R'
			  ], {
				I: `#forge:ingots/${item.material}`,
				R: `#forge:rods/${item.material}`,
			  }).id(`immersiveengineering:crafting/${item.material}_scaffolding_standard`)
			}
	}
	////////////////WIRES///////////////
    if (Item.of(`#forge:wires/${item.material}`) != null) {

	//Hand Crafting
	event.shapeless(`#forge:wires/${item.material}`, [`#forge:plates/${item.material}`, Item.of('immersiveengineering:wirecutter').ignoreNBT(),]).id(`immersiveengineering:crafting/wire_${item.material}`)

	//Create Wire
	global.createRolling(event, `#forge:wires/${item.material}`, 2, `forge:plates/${item.material}`, `createaddition:rolling/${item.material}_plate`)

	//Immersive Wire
  	event.recipes.immersiveengineeringMetalPress(`2x #forge:wires/${item.material}`, `#forge:ingots/${item.material}`, 'immersiveengineering:mold_wire').id(`immersiveengineering:metalpress/wire_${item.material}`)
	}

	
    if (Item.of(`#forge:dusts/${item.material}`) != null) {
	event.recipes.createMilling([`#forge:dusts/${item.material}`], [`#forge:ingots/${item.material}`]).id(`kubejs:${item.material}_ingot_2_dust`)
	}


	//Ingots
      if (item.itemParts.includes("ingot" || "custom_ingot")) {
	event.shapeless(`9x #forge:nuggets/${item.material}`, [`#forge:ingots/${item.material}`])
	event.shaped(`#forge:ingots/${item.material}`, [
		'NNN',
		'NNN',
		'NNN'
	  ], {
		N: `#forge:nuggets/${item.material}`,
	  })
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
	  if (item.fluid != null && (item.type == 'base_metal' || item.type == 'alloy'))
	  {
		//Ingot Casing
		 global.casingTable(event, 'tconstruct:casts/multi_use/ingot', false, `#forge:ingots/${item.material}`, `forge:molten_${item.material}`, 90, 60, `tconstruct:smeltery/casting/metal/${item.material}/ingot_gold_cast`)
		 global.casingTable(event, 'tconstruct:casts/single_use/ingot', true, `#forge:ingots/${item.material}`, `forge:molten_${item.material}`, 90, 60, `tconstruct:smeltery/casting/metal/${item.material}/ingot_sand_cast`)
	
		//Nugget Casing
		 global.casingTable(event, 'tconstruct:casts/multi_use/nugget', false, `#forge:nuggets/${item.material}`, `forge:molten_${item.material}`, 10, 10, `tconstruct:smeltery/casting/metal/${item.material}/nugget_gold_cast`)
		 global.casingTable(event, 'tconstruct:casts/single_use/nugget', true, `#forge:nuggets/${item.material}`, `forge:molten_${item.material}`, 10, 10, `tconstruct:smeltery/casting/metal/${item.material}/nugget_sand_cast`)
	
		//Block Casing
		global.casingBasin(event, `#forge:storage_blocks/${item.material}`, `forge:molten_${item.material}`, 810, 180, `tconstruct:smeltery/casting/metal/${item.material}/block`)
	}

    if (item.type == "base_metal") {
		//temp recipe for elements
		event.shaped(`#forge:ingots/${item.material}`, [
			'III',
			'III',
			'III'
		  ], {
			I: `chemlib:${item.material}`,
		  })
		if (item.raw_ore) {
		//Raw Blocks
		event.shapeless(`9x #forge:raw_materials/${item.material}`, [`#forge:storage_blocks/raw_${item.material}`]).id(`kubejs:raw_${item.material}_unpacking`)
		event.shaped(`#forge:storage_blocks/raw_${item.material}`, [
			'III',
			'III',
			'III'
		  ], {
			I: `#forge:raw_materials/${item.material}`,
		  }).id(`kubejs:raw_${item.material}_packing`)
		}
	}
})

	
});
	