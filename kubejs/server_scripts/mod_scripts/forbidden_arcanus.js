

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
  	})

	//Corrupti Dust
	event.remove({output: 'forbidden_arcanus:corrupti_dust'})
	event.shapeless(`4x forbidden_arcanus:corrupti_dust`, ['forbidden_arcanus:obsidian_ingot', 'forbidden_arcanus:arcane_crystal_dust', 'forbidden_arcanus:ender_pearl_fragment', 'minecraft:blaze_powder', 'malum:hex_ash']).id(`mbm2:forbidden_arcanus/corrupti_dust`)
});
