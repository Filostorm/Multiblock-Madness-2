



///////////////// TINKERS ///////////////////////
////CASTING TABLE////
global.casingTable = (event, cast, consumed, outputItem, inputFluid, amount, cooling, ID) => {
	event.custom({
	  type: 'tconstruct:casting_table',
	  cast: {
		tag: cast
	  },
	  cast_consumed: consumed,
	  fluid: {
		tag: inputFluid,
		amount: amount
	  },
	  result: outputItem,
	  cooling_time: cooling
  }).id(ID)}

  ////CASTING BASIN////
global.casingBasin = (event, outputItem, inputFluid, amount, cooling, ID) => {
  event.custom({
	type: 'tconstruct:casting_basin',
	fluid: {
	  tag: inputFluid,
	  amount: amount
	},
	result: outputItem,
	cooling_time: cooling
}).id(ID)}

////CASTING BASIN WITH CAST////
global.casingBasinCast = (event, cast, consumed, outputItem, inputFluid, amount, cooling, ID) => {
event.custom({
  type: 'tconstruct:casting_basin',
  cast: {
	tag: cast
  },
  cast_consumed: consumed,
  fluid: {
	tag: inputFluid,
	amount: amount
  },
  result: outputItem,
  cooling_time: cooling
}).id(ID)}

//////// ORE MELTING /////////
global.tinkersOreMelting = (event, outputFluid, amount, byproductFluid, byproductAmount, inputItem, temperature, time, ID) => {
	event.custom({
		type: 'tconstruct:ore_melting',
		rate: 'metal',
		ingredient: {
			tag: inputItem
		},
		result: {
		  fluid: outputFluid, 
		  amount: amount //180
		},
		temperature: temperature, //700
		time: time, //142
		byproducts: [
		  {
			fluid: byproductFluid,
			amount: byproductAmount
		  }
		]
	  
}).id(ID)}

//////// MELTING w/ byproduct /////////
global.tinkersMelting = (event, outputFluid, amount, byproductFluid, byproductAmount, inputItem, temperature, time, ID) => {
	event.custom({
		type: 'tconstruct:melting',
		ingredient: {
			item: inputItem
		},
		result: {
		  fluid: outputFluid, 
		  amount: amount //180
		},
		temperature: temperature, //700
		time: time, //142
		byproducts: [
		  {
			fluid: byproductFluid,
			amount: byproductAmount
		  }
		]

}).id(ID)}

//////// MELTING /////////
global.tinkersMeltingPlain = (event, outputFluid, amount, inputItem, temperature, time, ID) => {
	event.custom({
		type: 'tconstruct:melting',
		ingredient: inputItem,
		result: {
		  fluid: outputFluid, 
		  amount: amount //180
		},
		temperature: temperature, //700
		time: time, //142

}).id(ID)}
//////// ALLOYING /////////
global.tinkersAlloying = (event, outputFluid, amount, inputFluids, temperature, ID) => {
	event.custom({
	type: 'tconstruct:alloy',
	inputs: inputFluids,
	result: {
	  fluid: outputFluid,
	  amount: amount
	},
	temperature: temperature
}).id(ID)}

///////////////////////////////////////////////////////////


///////////////// CREATE ADDITIONS ///////////////////////
	////ROLLING////
	global.createRolling = (event, outputItem, amount, inputItem, ID) => {
		event.custom({
			type: 'createaddition:rolling',
		input: {
			  tag: inputItem
		},
		result: 
		Item.of(outputItem, amount)
		
	}).id(ID)}

	////APPLYING////
	global.createApplying = (event, outputBlock, inputItem, inputBlock, ID) => {
		event.custom({
			type: 'create:item_application',
			ingredients: [
				inputBlock.toJson(),
				inputItem.toJson()
			  ],
		results: [
			{
			  item: outputBlock
			}
		  ]
		
	}).id(ID)}


	///////////////////////////////////////////////////////////

///////////////// THERMAL ///////////////////////
	////CHILLING////
	global.thermalChilling = (event, fluid, fluidAmount, outputItem, amount, cast, energy, ID) => {
		event.custom({
		type: 'thermal:chiller',
		ingredients: [
		  {
			fluid: fluid,
			//fluid_tag: fluid,
			amount: fluidAmount
		  },
		  {
			item: cast
		  }
		],
		result: 
		Item.of(outputItem, amount),

		energy: energy
		
	}).id(ID)}
	///////////////////////////////////////
	
	////crystallizer////
	global.thermalCrystallizer = (event, fluid, fluidAmount, outputItem, input, ID) => {
		event.custom({
		type: 'thermal:crystallizer',
		ingredients: [
		  {
			fluid: fluid,
			amount: fluidAmount
		  },
		  {
			tag: input
		  }
		],
		result: outputItem,
	}).id(ID)}
	/////////////////////////////////////////
///////////////////////////////////////////////////////////

///////////////// COMPACT CRAFTING ///////////////////////
	global.compactCrafting = (event, output, amount, catalyst, size, layers, components, ID) => {
		event.custom({
			type: 'compactcrafting:miniaturization',
			recipeSize: size,
			layers: layers,
			catalyst: {
				id: catalyst,
				Count: 1
			},
			components: components,
			outputs: [{
				id: output,
				Count: amount
			  }]
		  }).id(ID)}
///////////////////////////////////////////////////////////
///////////////// TRANSMUTING ///////////////////////
	global.mnaBlockTransmutation = (event, output, input, ID) => {
		event.custom({
			type: 'mna:transmutation',
			targetBlock: input,
			replaceBlock: output,
		  }).id(ID)}

		  global.mnaItemTransmutation = (event, output, looksLike, input, ID) => {
			event.custom({
				type: 'mna:transmutation',
				targetBlock: input,
				lootTable: output,
				representationItem: looksLike
			  }).id(ID)}
///////////////////////////////////////////////////////////


///////////////// IMBUING ///////////////////////

		  global.arsImbument = (event, output, amount, input, source, extraItems, ID) => {
			event.custom({
				type: 'ars_nouveau:imbuement',
				input: Ingredient.of(input).toJson(),
				output: output,
				count: amount,
				source: source,
				pedestalItems: extraItems
			  }).id(ID)}
  ///////////////////////////////////////////////////////////


///////////////// COMPRESSING ///////////////////////

global.pressureChamber = (event, output, input, pressure, ID) => {
	event.custom({
		type: 'pneumaticcraft:pressure_chamber',
		inputs: input,
		pressure: pressure,
		results: output,
	  }).id(ID)}
	  
///////////////// EXPLODING ///////////////////////
global.explosionCrafting = (event, output, input, loss_rate, ID) => {
	event.custom({
		type: 'pneumaticcraft:explosion_crafting',
		input: Ingredient.of(input).toJson(),
		results: [Item.of(output).toResultJson()],
		loss_rate: loss_rate,
	  }).id(ID)}
///////////////////////////////////////////////////////////
	  
///////////////// LASER ///////////////////////
global.AssemblyLaser = (event, output, input, ID) => {
	event.custom({
		type: 'pneumaticcraft:assembly_laser',
		input: input,
		result: Item.of(output).toResultJson(),
		program: 'laser', //laser, drill
	  }).id(ID)}
///////////////////////////////////////////////////////////


///////////////// NATURAL ALTAR ///////////////////////
	  global.naturesauraAltar = (event, output, input, aura_type, aura, time, ID) => {
		  event.custom({
			  type: 'naturesaura:altar',
			  input: {
				  item: input
			  },
			  output: {
				  item: output
			  },
			  aura_type: aura_type, //naturesaura:nether
			  aura: aura, //15000,
			  time: time //80
			}).id(ID)}
///////////////////////////////////////////////////////////
///////////////// TREE RITUAL ///////////////////////
	  global.naturesauraTreeRitual = (event, output, input, sapling, time, ID) => {
		event.custom({
			type: 'naturesaura:tree_ritual',
			ingredients: input,
			sapling: {
				item: sapling
			},
			output: {
				item: output
			},
			time: time //500
		  }).id(ID)}
///////////////////////////////////////////////////////////


///////////////// MIXER ///////////////////////
global.ieMixer = (event, fluidOutput, fluidInput, itemInput, energy, ID) => {
	event.custom({
		type: 'immersiveengineering:mixer',
		inputs: [
			itemInput.toJson()
		],
		result: fluidOutput.toJson(),
		//fluid: fluidInput.toJson(),
		fluid: fluidInput,
		energy: energy
	  }).id(ID)}
///////////////////////////////////////////////////////////

///////////////// SQUEEZER ///////////////////////
global.ieSqueezer = (event, fluidOutput, itemInput, energy, ID) => {
	event.custom({
		type: 'immersiveengineering:squeezer',
		input: itemInput.toJson(),
		fluid: fluidOutput.toJson(),
		energy: energy
	  }).id(ID)}
///////////////////////////////////////////////////////////


///////////////// blueprint ///////////////////////
global.ieBlueprint = (event, category, itemOutput, itemInput, ID) => {
	event.custom({
		type: 'immersiveengineering:blueprint',
		inputs: itemInput, //[{"count":2,"base_ingredient":{"tag":"forge:plates/steel"}},{"tag":"forge:ingots/copper"}]
		category: category, //"components",
		result: itemOutput.toResultJson(),
	  }).id(ID)}
///////////////////////////////////////////////////////////



///////////////// Generator Fuel ///////////////////////
global.ieGeneratorFuel = (event, fluidTag, burnTime) => {
	event.custom({
		type: 'immersiveengineering:generator_fuel',
		fluidTag: fluidTag, //forge:biodiesel
		burnTime: burnTime //250
	  })}
///////////////////////////////////////////////////////////


///////////////// pneumaticcraftThermoPlant ///////////////////////
global.pneumaticcraftThermoPlant = (event, itemOutput, itemInput, fluidInput, temperature, pressure, speed, air_use_multiplier, exothermic, ID) => {
	event.custom({
		type: 'pneumaticcraft:thermo_plant',
		item_input: itemInput.toJson(),
		fluid_input: fluidInput,
		item_output: itemOutput.toResultJson(),
		temperature: {
			"min_temp": temperature //773
		  },
		  "pressure": pressure, //7.5,
		  "speed": speed, //0.1,
		  "air_use_multiplier": air_use_multiplier, //10.0,
		  "exothermic": exothermic //false
	  }).id(ID)}
///////////////////////////////////////////////////////////


///////////////// Sifting ///////////////////////
global.createSifting = (event, itemInput, itemOutput, processingTime, ID) => {
	event.custom({
		type: 'createsifter:sifting',
		ingredients: itemInput,
		results: itemOutput,
		processingTime: processingTime
	  }).id(ID)}
///////////////////////////////////////////////////////////


///////////////// INFUSION ///////////////////////
global.elementalcraftInfusion = (event, itemInput, itemOutput, element_type, element_amount, ID) => {
	event.custom({
		type: 'elementalcraft:infusion',
		output: itemOutput.toJson(),
		element_type: element_type, //air
		element_amount: element_amount, //500
		input: itemInput.toJson() //tag
	  }).id(ID)}
///////////////////////////////////////////////////////////

///////////////// ENERGIZING ///////////////////////
global.powahEnergizing = (event, itemInput, itemOutput, energy, ID) => {
	event.custom({
		type: 'powah:energizing',
		ingredients: itemInput,
		energy: energy, //120000
		result: itemOutput.toJson()
	  }).id(ID)}
///////////////////////////////////////////////////////////

///////////////// DESSOLVING ///////////////////////
global.alchemistryDissolver = (event, itemOutput, itemInput, itemInputAmount, rolls, weighted, ID) => {
	event.custom({
		type: 'alchemistry:dissolver',
		group: 'alchemistry:dissolver',
		input: {
			ingredient: {
			  item: itemInput
			},
			count: itemInputAmount
		  },
		output: {
		  rolls: rolls,
		  weighted: weighted, //true
		  groups: itemOutput //[{'probability': 4.0,'results': [{'item': 'chemlib:aluminum_oxide'}]},]
		}
	  }).id(ID)}
///////////////////////////////////////////////////////////

///////////////// COMPACTING ///////////////////////
global.alchemistryCompacting = (event, itemOutput, itemInput, ID) => {
	event.custom({
		type: 'alchemistry:compactor',
		group: 'alchemistry:compactor',
		input: itemInput,
		result: itemOutput
	  }).id(ID)}
///////////////////////////////////////////////////////////
