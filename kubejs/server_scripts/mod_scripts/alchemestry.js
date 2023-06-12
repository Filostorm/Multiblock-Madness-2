/*
onEvent('tags.items', event => {
	event.add(`forge:ingots`, `naturesaura:tainted_gold`)
	 event.remove(`create:crushed_ores/${item}`, `kubejs:crushed_${item}`)
 });
 */
onEvent('recipes', event => {

	//Frame
	event.shaped('kubejs:alchemistry_frame', [
		'RPR',
		'PCP',
		'RPR'
  	], {
		C: '#forge:casings/titanium',
		P: '#forge:platings/chemically_inert_alloy',
		R: '#forge:rods/osmium'
  	}).id('mbm2:alchemistry_frame')

	//Reactor Casing
	  event.shaped('alchemistry:reactor_casing', [
		' P ',
		'PCP',
		' P '
  	], {
		P: '#forge:platings/chemically_inert_alloy',
		C: 'kubejs:alchemistry_frame'
  	}).id('mbm2:reactor_casing')
	  
//Fix Sulfur
event.custom({
	"type": "alchemistry:liquifier",
	"group": "alchemistry:liquifier",
	"input": {
	  "ingredient": {
		"item": "chemlib:sulfuric_acid"
	  },
	  "count": 8
	},
	"result": {
	  "fluid": "mekanism:sulfuric_acid",
	  "amount": "500"
	}
  }).id('alchemistry:liquifier/sulfuric_acid')
  
  //Fix Hydrogen
  event.custom({
	  "type": "alchemistry:liquifier",
	  "group": "alchemistry:liquifier",
	  "input": {
		"ingredient": {
		  "item": "chemlib:hydrogen"
		},
		"count": 8
	  },
	  "result": {
		"fluid": "mekanism:hydrogen",
		"amount": "500"
	  }
	}).id('alchemistry:liquifier/hydrogen')
  
	//Fix Oxygen
	event.custom({
		"type": "alchemistry:liquifier",
		"group": "alchemistry:liquifier",
		"input": {
		  "ingredient": {
			"item": "chemlib:oxygen"
		  },
		  "count": 8
		},
		"result": {
		  "fluid": "mekanism:oxygen",
		  "amount": "500"
		}
	}).id('alchemistry:liquifier/oxygen')

	//Missing Carbon Dust?
	event.custom({
		"type": "alchemistry:compactor",
		"group": "alchemistry:compactor",
		"input": {
		  "ingredient": {
			"item": "chemlib:carbon"
		  },
		  "count": 16
		},
		"result": {
		  "item": "chemlib:carbon_dust"
		}
	  })
//Temp recipes
event.replaceInput({id: 'alchemistry:atomizer'}, '#forge:dusts/redstone', 'kubejs:alchemistry_frame')
event.replaceInput({id: 'alchemistry:combiner'}, '#forge:dusts/redstone', 'kubejs:alchemistry_frame')
event.replaceInput({id: 'alchemistry:dissolver'}, '#forge:dusts/redstone', 'kubejs:alchemistry_frame')
event.replaceInput({id: 'alchemistry:liquifier'}, '#forge:dusts/redstone', 'kubejs:alchemistry_frame')
event.replaceInput({id: 'alchemistry:compactor'}, '#forge:dusts/redstone', 'kubejs:alchemistry_frame')

//Carbon
global.mekanismInfusionConversion(event, Item.of('chemlib:carbon'), 'mekanism:carbon', 10, 'mbm2:infuse/carbon_from_carbon')
global.mekanismInfusionConversion(event, Item.of('chemlib:carbon_dust'), 'mekanism:carbon', 160, 'mbm2:infuse/carbon_from_carbon_dust')
global.mekanismInfusionConversion(event, Item.of('chemlib:graphite_dust'), 'mekanism:carbon', 320, 'mbm2:infuse/carbon_from_graphite')

});
