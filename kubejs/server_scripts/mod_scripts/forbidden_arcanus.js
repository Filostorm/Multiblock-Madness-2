

onEvent('tags.items', event => {
	event.add(`forge:ores`, 'forbidden_arcanus:runic_stone')
	event.add(`forge:ores/runic`, 'forbidden_arcanus:runic_stone')
	event.add(`forge:ores`, 'forbidden_arcanus:runic_deepslate')
	event.add(`forge:ores/runic`, 'forbidden_arcanus:runic_deepslate')
	event.add(`forge:ores`, 'forbidden_arcanus:runic_darkstone')
	event.add(`forge:ores/runic`, 'forbidden_arcanus:runic_darkstone')
 });
onEvent('recipes', event => {
	//Soul Extractor
	event.remove({output: 'forbidden_arcanus:soul_extractor'})
  	event.shaped('forbidden_arcanus:soul_extractor', [
		'J  ',
		'NNB',
		'Q  '
  	], {
		B: 'minecraft:quartz_block',
		N: 'minecraft:nether_bricks',
		Q: '#forge:gems/quartz',
		J: 'forbidden_arcanus:utrem_jar'
  	}).id(`mbm2:forbidden_arcanus/soul_extractor`)

	//Arcane Gold Ingot
	event.remove({output: 'forbidden_arcanus:arcane_gold_ingot'})/*
  	event.shaped('forbidden_arcanus:arcane_gold_ingot', [
		'LML',
		'CIC',
		'LML'
  	], {
		L: 'kubejs:luminite',
		C: 'forbidden_arcanus:arcane_crystal_dust',
		M: 'forbidden_arcanus:mundabitur_dust',
		I: '#forge:ingots/auric_gold'
  	}).id(`mbm2:forbidden_arcanus/arcane_gold_ingot`)
*/
	//Corrupti Dust
	event.remove({output: 'forbidden_arcanus:corrupti_dust'})
	event.shapeless(`4x forbidden_arcanus:corrupti_dust`, ['forbidden_arcanus:obsidian_ingot', 'forbidden_arcanus:arcane_crystal_dust', 'forbidden_arcanus:ender_pearl_fragment', 'minecraft:blaze_powder', 'elementalcraft:air_silk']).id(`mbm2:forbidden_arcanus/corrupti_dust`)

	//Arcane Crystal Dust speck
	event.shapeless(`9x forbidden_arcanus:arcane_crystal_dust_speck`, ['forbidden_arcanus:arcane_crystal_dust']).id(`mbm2:arcane_dust_speck`)
	
	//Soul Automation
	event.custom({
		"type": "thermal:centrifuge",
		"ingredient": {
		  "item": "minecraft:soul_sand"
		},
		"result": [
		  {
			"item": "forbidden_arcanus:soul"
		  },
		  {
			"item": "forbidden_arcanus:soulless_sand",
			"chance": 0.50
		  },
		  {
			"fluid": "tconstruct:liquid_soul",
			"amount": 100
		  }
		],
		"energy": 10000
	  }).id('mbm2:centrifuge/soul_extraction_automatable')
	
	//Re-haunting Soul Sand
	event.recipes.createHaunting('minecraft:soul_sand', 'forbidden_arcanus:soulless_sand').id('mbm2:haunting/resouling_soul_sand')
	
	//Test Tube Blood Vial fix and filling
	event.remove({output: 'forbidden_arcanus:test_tube'})
	event.shapeless(Item.of('forbidden_arcanus:blood_test_tube', '{Blood:0}'), ['forbidden_arcanus:rune', 'minecraft:glass_bottle']).id(`mbm2:forbidden_arcanus/blood_test_tube`)
	/*event.shapeless(Item.of('forbidden_arcanus:blood_test_tube', '{Blood:333}'), ['forbidden_arcanus:blood_test_tube', 'hexerei:blood_bottle']).id('mbm2:blood_filling')
	.modifyResult(result => {
		let sacrifice = result.find(Ingredient.of('forbidden_arcanus:blood_test_tube').weakNBT())
		console.log(sacrifice)
		console.log(sacrifice.nbt)
		sacrifice.nbt.Blood += 333
		console.log(sacrifice) 
		return sacrifice
	})*/
});
