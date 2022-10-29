var newParts = {
	titanium: 0x4668cf,
	tungsten: 0x282c33,
	platinum: 0x6be6ff,
	cobalt: 0x2452c7,
	aluminum: 0x8c8a89,
	chromium: 0x3e224d,
	palladium: 0x522d22,
	iridium: 0x1942bf,
	zinc: 0x97c7b3,
	thorium: 0x543923,
	magnesium: 0x997996,
	boron: 0x20293b,
  
	brass: 0xe8bd5f,
	steel: 0xb5b3b3,
  
	arcane_gold: 0xc9881e,
	fluix_steel: 0x792be0,
	vinteum: 0x7ab1c2,
	manasteel: 0x69a7ff,
	terrasteel: 0x63e645,
	elementium: 0xf569b6,

	desh: 0xf569b6,
	iron: 0xf569b6,
	copper: 0xf569b6,
	gold: 0xf569b6,
	netherite: 0xf569b6,
	enderium: 0xf569b6,
	lumium: 0xf569b6,
	signalum: 0xf569b6,
	lead: 0xf569b6,
	nickel: 0xf569b6,
	silver: 0xf569b6,
	tin: 0xf569b6,
	bronze: 0xf569b6,
	constantan: 0xf569b6,
	electrum: 0xf569b6,
	invar: 0xf569b6,
	uranium: 0xf569b6,
	red_alloy: 0xb5b3b3,
	transmuted_silver: 0xb5b3b3,
}

var newIngots = {
	neptunium: 0x5a5863,
	plutonium: 0x9e785f,
	americium: 0x4a3a2f,
	curium: 0x8a3e50,
	berkelium: 0x755444,
	californium: 0x966248,
	einsteinium: 0x4a6da8,
	boron: 0x20293b,
	platinum: 0x6be6ff,
}

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
  


	for (var metal in newParts) {

	////////////////HAMMER///////////////
    if (Item.of(`#forge:hammers/${metal}`) != null) {
	event.shaped(`#forge:hammers/${metal}`, [
		' IS',
		' RI',
		'R  '
	  ], {
		I: `#forge:ingots/${metal}`,
		R: '#forge:rods/wooden',
		S: '#forge:string',
	  }).id(`kubejs:crafting/${metal}_hammer`)
	}


	
	////////////////PLATES///////////////
    if (Item.of(`#forge:plates/${metal}`) != null) {
	event.shaped(`#forge:plates/${metal}`, [
		'H',
		'I',
		'I'
	  ], {
		I: `#forge:ingots/${metal}`,
		H: Ingredient.of('#forge:hammers'),
	  }).damageIngredient(Ingredient.of('#forge:hammers')).id(`immersiveengineering:crafting/plate_${metal}_hammering`)

	//Plate Casing
  	global.casingTable(event, 'tconstruct:casts/multi_use/plate', false, `#forge:plates/${metal}`, `forge:molten_${metal}`, 90, 60, `tconstruct:smeltery/casting/metal/${metal}/plate_gold_cast`)
  	global.casingTable(event, 'tconstruct:casts/single_use/plate', true, `#forge:plates/${metal}`, `forge:molten_${metal}`, 90, 60, `tconstruct:smeltery/casting/metal/${metal}/plate_sand_cast`)

	//Create Plates
  	event.recipes.createPressing(`#forge:plates/${metal}`, `#forge:ingots/${metal}`).id(`create:pressing/${metal}_ingot`)

	//Immersive Plates
 	event.recipes.immersiveengineeringMetalPress(`#forge:plates/${metal}`, `#forge:ingots/${metal}`, 'immersiveengineering:mold_plate').id(`immersiveengineering:metalpress/plate_${metal}`)

	//Thermal Plates
	event.recipes.thermal.press(`2x #forge:plates/${metal}`, `3x #forge:ingots/${metal}`).id(`thermal:machines/press/press_${metal}_ingot_to_plate`)
	
	////////////////DENSE PLATES///////////////
    if (Item.of(`#forge:dense_plates/${metal}`) != null) {

	//Create Dense Plates
  	event.recipes.createPressing(`#forge:dense_plates/${metal}`, `#forge:storage_blocks/${metal}`).id(`create:pressing/dense_${metal}_plate`)

	//Immersive Dense Plates
 	event.recipes.immersiveengineeringMetalPress(`#forge:dense_plates/${metal}`, `#forge:storage_blocks/${metal}`, 'immersiveengineering:mold_plate').id(`immersiveengineering:metalpress/dense_plate_${metal}`)
	}

	////////////////SHEETMETAL///////////////
	if (Item.of(`#forge:sheetmetals/${metal}`) != null) {
		event.shaped(`4x #forge:sheetmetals/${metal}`, [
			' P ',
			'P P',
			' P '
		  ], {
			P: `#forge:plates/${metal}`,
		  }).id(`immersiveengineering:crafting/sheetmetal_${metal}`)
		  
		  //Sheetmetal Casing
	  global.casingBasinCast(event, 'forge:sheetmetal_cast', false, `#forge:sheetmetals/${metal}`, `forge:molten_${metal}`, 90, 80, `tconstruct:smeltery/casting/metal/${metal}/sheetmetal`)
		}
	}
	////////////////GEARS///////////////
    if (Item.of(`#forge:gears/${metal}`) != null) {
	event.shaped(`#forge:gears/${metal}`, [
		' P ',
		'PRP',
		' P '
	  ], {
		P: `#forge:plates/${metal}`,
		R: `#forge:rods/${metal}`
	  }).id(`thermal:parts/${metal}_gear`)

	//Gear Casing
  	global.casingTable(event, 'tconstruct:casts/multi_use/gear', false, `#forge:gears/${metal}`, `forge:molten_${metal}`, 360, 120, `tconstruct:smeltery/casting/metal/${metal}/gear_gold_cast`)
  	global.casingTable(event, 'tconstruct:casts/single_use/gear', true, `#forge:gears/${metal}`, `forge:molten_${metal}`, 360, 120, `tconstruct:smeltery/casting/metal/${metal}/gear_sand_cast`)

	//Immersive Gears
	event.recipes.immersiveengineeringMetalPress(`#forge:gears/${metal}`, `4x #forge:ingots/${metal}`, 'immersiveengineering:mold_gear').id(`immersiveengineering:metalpress/gear_${metal}`)

	//Thermal Gears
	event.recipes.thermal.press(`#forge:gears/${metal}`, [`5x #forge:ingots/${metal}`, 'thermal:press_gear_die']).id(`thermal:machines/press/press_${metal}_ingot_to_gear`)
	
	//////////////// MECHANICAL PART ///////////////
    if (Item.of(`#forge:mechanical_components/${metal}`) != null) {
	event.shaped(`#forge:mechanical_components/${metal}`, [
		'G G',
		' W ',
		'G G'
	  ], {
		W: `#forge:wires/${metal}`,
		G: `#forge:gears/${metal}`
	  }).id(`kubejs:parts/${metal}_mechanical_component`)
	}

	//////////////// COG BLOCK ///////////////
    if (Item.of(`#forge:cog_blocks/${metal}`) != null) {
		event.shaped(`4x #forge:cog_blocks/${metal}`, [
			'RGR',
			'G G',
			'RGR'
		  ], {
			R: `#forge:rods/${metal}`,
			G: `#forge:gears/${metal}`
		  }).id(`kubejs:parts/${metal}_cog_block`)
		}
	}
	
	////////////////RODS///////////////
    if (Item.of(`#forge:rods/${metal}`) != null) {
		
	event.shaped(`#forge:rods/${metal}`, [
		'H ',
		' I'
	  ], {
		I: `#forge:ingots/${metal}`,
		H: Ingredient.of('#forge:hammers'),
	  }).damageIngredient(Ingredient.of('#forge:hammers')).id(`kubejs:parts/${metal}_rod`)

	//Create Rods
	global.createRolling(event, `#forge:rods/${metal}`, 2, `forge:ingots/${metal}`, `createaddition:rolling/${metal}_ingot`)
	
	//Immersive Rods
	event.recipes.immersiveengineeringMetalPress(`2x #forge:rods/${metal}`, `#forge:ingots/${metal}`, 'immersiveengineering:mold_rod').id(`immersiveengineering:metalpress/rod_${metal}`)
	
    if (Fluid.of(`forge:molten_${metal}`) != null) {
	//Rod Casing
  	global.casingTable(event, 'tconstruct:casts/multi_use/rod', false, `#forge:rods/${metal}`, `forge:molten_${metal}`, 45, 20, `tconstruct:smeltery/casting/metal/${metal}/rod_gold_cast`)
  	global.casingTable(event, 'tconstruct:casts/single_use/rod', true, `#forge:rods/${metal}`, `forge:molten_${metal}`, 45, 20, `tconstruct:smeltery/casting/metal/${metal}/rod_sand_cast`)

	//Thermal Rods
	global.thermalChilling(event, `forge:molten_${metal}`, 60, `#forge:rods/${metal}`, 1, 'thermal:chiller_rod_cast', 5000, `thermal:machines/chiller/chiller_${metal}_rod`)
	}
	
		////////////////SCAFFOLDING///////////////
		if (Item.of(`#immersiveengineering:scaffoldings/${metal}`) != null) {
			event.shaped(`6x #immersiveengineering:scaffoldings/${metal}`, [
				'III',
				' R ',
				'R R'
			  ], {
				I: `#forge:ingots/${metal}`,
				R: `#forge:rods/${metal}`,
			  }).id(`immersiveengineering:crafting/${metal}_scaffolding_standard`)
			}
	}
	////////////////WIRES///////////////
    if (Item.of(`#forge:wires/${metal}`) != null) {

	//Hand Crafting
	event.shapeless(`#forge:wires/${metal}`, [`#forge:plates/${metal}`, Item.of('immersiveengineering:wirecutter').ignoreNBT(),]).id(`immersiveengineering:crafting/wire_${metal}`)

	//Create Wire
	global.createRolling(event, `#forge:wires/${metal}`, 2, `forge:plates/${metal}`, `createaddition:rolling/${metal}_plate`)

	//Immersive Wire
  	event.recipes.immersiveengineeringMetalPress(`2x #forge:wires/${metal}`, `#forge:ingots/${metal}`, 'immersiveengineering:mold_wire').id(`immersiveengineering:metalpress/wire_${metal}`)
	}

	
    if (Item.of(`#forge:dusts/${metal}`) != null) {
	event.recipes.createMilling([`#forge:dusts/${metal}`], [`#forge:ingots/${metal}`]).id(`kubejs:${metal}_ingot_2_dust`)
	}
}

	for (var metal in newIngots) {
	//Ingots
	event.shapeless(`9x #forge:nuggets/${metal}`, [`#forge:ingots/${metal}`])
	event.shaped(`#forge:ingots/${metal}`, [
		'NNN',
		'NNN',
		'NNN'
	  ], {
		N: `#forge:nuggets/${metal}`,
	  })
	//Blocks
	event.shapeless(`9x #forge:ingots/${metal}`, [`#forge:storage_blocks/${metal}`])
	event.shaped(`#forge:storage_blocks/${metal}`, [
		'III',
		'III',
		'III'
	  ], {
		I: `#forge:ingots/${metal}`,
	  })

	//temp recipe for elements
	event.shaped(`#forge:ingots/${metal}`, [
		'III',
		'III',
		'III'
	  ], {
		I: `chemlib:${metal}`,
	  })
	  
	//Ingot Casing
 	global.casingTable(event, 'tconstruct:casts/multi_use/ingot', false, `#forge:ingots/${metal}`, `forge:molten_${metal}`, 90, 60, `tconstruct:smeltery/casting/metal/${metal}/ingot_gold_cast`)
 	global.casingTable(event, 'tconstruct:casts/single_use/ingot', true, `#forge:ingots/${metal}`, `forge:molten_${metal}`, 90, 60, `tconstruct:smeltery/casting/metal/${metal}/ingot_sand_cast`)

	//Nugget Casing
 	global.casingTable(event, 'tconstruct:casts/multi_use/nugget', false, `#forge:nuggets/${metal}`, `forge:molten_${metal}`, 10, 10, `tconstruct:smeltery/casting/metal/${metal}/nugget_gold_cast`)
 	global.casingTable(event, 'tconstruct:casts/single_use/nugget', true, `#forge:nuggets/${metal}`, `forge:molten_${metal}`, 10, 10, `tconstruct:smeltery/casting/metal/${metal}/nugget_sand_cast`)

	//Block Casing
	global.casingBasin(event, `#forge:storage_blocks/${metal}`, `forge:molten_${metal}`, 810, 180, `tconstruct:smeltery/casting/metal/${metal}/block`)
	}





	
});
	