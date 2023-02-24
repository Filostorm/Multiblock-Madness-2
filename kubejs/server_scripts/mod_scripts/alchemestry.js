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
		R: '#forge:rods/chromium'
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
	  
//Temp recipes
event.replaceInput({id: 'alchemistry:atomizer'}, '#forge:dusts/redstone', 'kubejs:alchemistry_frame')
event.replaceInput({id: 'alchemistry:combiner'}, '#forge:dusts/redstone', 'kubejs:alchemistry_frame')
event.replaceInput({id: 'alchemistry:dissolver'}, '#forge:dusts/redstone', 'kubejs:alchemistry_frame')
event.replaceInput({id: 'alchemistry:liquifier'}, '#forge:dusts/redstone', 'kubejs:alchemistry_frame')
event.replaceInput({id: 'alchemistry:compactor'}, '#forge:dusts/redstone', 'kubejs:alchemistry_frame')
});
