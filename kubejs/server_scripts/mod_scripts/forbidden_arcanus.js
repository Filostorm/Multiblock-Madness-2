

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
		L: 'kubejs:lumite',
		C: 'forbidden_arcanus:arcane_crystal_dust',
		M: 'forbidden_arcanus:mundabitur_dust',
		I: '#forge:ingots/auric_gold'
  	}).id(`mbm2:forbidden_arcanus/arcane_gold_ingot`)
*/
	//Corrupti Dust
	event.remove({output: 'forbidden_arcanus:corrupti_dust'})
	event.shapeless(`4x forbidden_arcanus:corrupti_dust`, ['forbidden_arcanus:obsidian_ingot', 'forbidden_arcanus:arcane_crystal_dust', 'forbidden_arcanus:ender_pearl_fragment', 'minecraft:blaze_powder', 'malum:hex_ash']).id(`mbm2:forbidden_arcanus/corrupti_dust`)
});
