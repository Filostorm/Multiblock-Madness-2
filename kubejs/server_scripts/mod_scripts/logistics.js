onEvent('recipes', event => {

	//Basic Item Pipe
	event.remove({output: 'refinedpipes:basic_item_pipe'})
  	event.shaped('3x refinedpipes:basic_item_pipe', [
		'PPP',
		'BGB',
		'PPP'
  	], {
		P: '#forge:plates/tin',
		B: 'immersiveengineering:conveyor_basic',
		G: '#forge:glass/colorless'
  	}).id('mbm2:basic_item_pipe')

	//Improved Item Pipe
	event.remove({output: 'refinedpipes:improved_item_pipe'})
  	event.shaped('3x refinedpipes:improved_item_pipe', [
		'PPP',
		'BBB',
		'PPP'
  	], {
		P: '#forge:plates/bronze',
		B: 'refinedpipes:basic_item_pipe'
  	}).id('mbm2:improved_item_pipe')
	
	//Advanced Item Pipe
	event.remove({output: 'refinedpipes:advanced_item_pipe'})
  	event.shaped('3x refinedpipes:advanced_item_pipe', [
		'PPP',
		'BBB',
		'PPP'
  	], {
		P: '#forge:plates/lumium',
		B: 'refinedpipes:improved_item_pipe'
  	}).id('mbm2:advanced_item_pipe')

	
	//Basic Fluid Pipe
	event.remove({output: 'refinedpipes:basic_fluid_pipe'})
  	event.shaped('3x refinedpipes:basic_fluid_pipe', [
		'PPP',
		'BGB',
		'PPP'
  	], {
		P: '#forge:plates/copper',
		B: 'immersiveengineering:fluid_pipe',
		G: '#forge:glass/colorless'
  	}).id('mbm2:basic_fluid_pipe')

	//Improved Fluid Pipe
	event.remove({output: 'refinedpipes:improved_fluid_pipe'})
  	event.shaped('3x refinedpipes:improved_fluid_pipe', [
		'PPP',
		'BBB',
		'PPP'
  	], {
		P: '#forge:plates/constantan',
		B: 'refinedpipes:basic_fluid_pipe'
  	}).id('mbm2:improved_fluid_pipe')
	
	//Advanced Fluid Pipe
	event.remove({output: 'refinedpipes:advanced_fluid_pipe'})
  	event.shaped('3x refinedpipes:advanced_fluid_pipe', [
		'PPP',
		'BBB',
		'PPP'
  	], {
		P: '#forge:plates/enderium',
		B: 'refinedpipes:improved_fluid_pipe'
  	}).id('mbm2:advanced_fluid_pipe')
	
	//Elite Fluid Pipe
	event.remove({output: 'refinedpipes:elite_fluid_pipe'})
  	event.shaped('3x refinedpipes:elite_fluid_pipe', [
		'PPP',
		'BBB',
		'PPP'
  	], {
		P: '#forge:plates/osmium',
		B: 'refinedpipes:advanced_fluid_pipe'
  	}).id('mbm2:elite_fluid_pipe')
	
	//Ultimate Fluid Pipe
	event.remove({output: 'refinedpipes:ultimate_fluid_pipe'})
  	event.shaped('3x refinedpipes:ultimate_fluid_pipe', [
		'PPP',
		'BBB',
		'PPP'
  	], {
		P: '#forge:plates/titanium',
		B: 'refinedpipes:elite_fluid_pipe'
  	}).id('mbm2:ultimate_fluid_pipe')

	
	//Basic Energy Pipe
	event.remove({output: 'refinedpipes:basic_energy_pipe'})
  	event.shaped('3x refinedpipes:basic_energy_pipe', [
		'PPP',
		'BGB',
		'PPP'
  	], {
		P: '#forge:plates/red_alloy',
		B: 'immersiveengineering:connector_mv',
		G: '#forge:glass/colorless'
  	}).id('mbm2:basic_energy_pipe')

	//Improved Energy Pipe
	event.remove({output: 'refinedpipes:improved_energy_pipe'})
  	event.shaped('3x refinedpipes:improved_energy_pipe', [
		'PPP',
		'BBB',
		'PPP'
  	], {
		P: '#forge:plates/dielectric_alloy',
		B: 'refinedpipes:basic_energy_pipe'
  	}).id('mbm2:improved_energy_pipe')
	
	//Advanced Energy Pipe
	event.remove({output: 'refinedpipes:advanced_energy_pipe'})
  	event.shaped('3x refinedpipes:advanced_energy_pipe', [
		'PPP',
		'BBB',
		'PPP'
  	], {
		P: '#forge:plates/signalum',
		B: 'refinedpipes:improved_energy_pipe'
  	}).id('mbm2:advanced_energy_pipe')
	
	//Elite Energy Pipe
	event.remove({output: 'refinedpipes:elite_energy_pipe'})
  	event.shaped('3x refinedpipes:elite_energy_pipe', [
		'PPP',
		'BBB',
		'PPP'
  	], {
		P: '#forge:plates/platinum',
		B: 'refinedpipes:advanced_energy_pipe'
  	}).id('mbm2:elite_energy_pipe')
	
	//Ultimate Energy Pipe
	event.remove({output: 'refinedpipes:ultimate_energy_pipe'})
  	event.shaped('3x refinedpipes:ultimate_energy_pipe', [
		'PPP',
		'BBB',
		'PPP'
  	], {
		P: '#forge:plates/tungsten',
		B: 'refinedpipes:elite_energy_pipe'
  	}).id('mbm2:ultimate_energy_pipe')


	//Pipez Item Pipe
	event.remove({output: 'pipez:item_pipe'})
  	event.shaped('8x pipez:item_pipe', [
		'PPP',
		'BSB',
		'PPP'
  	], {
		P: '#forge:plates/titanite',
		B: 'refinedpipes:advanced_item_pipe',
		S: 'refinedpipes:basic_extractor_attachment'
  	}).id('mbm2:pipez/item_pipe')

	//Pipez Fluid Pipe
	event.remove({output: 'pipez:fluid_pipe'})
  	event.shaped('8x pipez:fluid_pipe', [
		'PPP',
		'BSB',
		'PPP'
  	], {
		P: '#forge:plates/duralumin',
		B: 'refinedpipes:advanced_fluid_pipe',
		S: 'refinedpipes:basic_extractor_attachment'
  	}).id('mbm2:pipez/fluid_pipe')

	//Pipez Energy Pipe
	event.remove({output: 'pipez:energy_pipe'})
  	event.shaped('8x pipez:energy_pipe', [
		'PPP',
		'BSB',
		'PPP'
  	], {
		P: '#forge:plates/reinforced_electrum',
		B: 'refinedpipes:advanced_energy_pipe',
		S: 'refinedpipes:basic_extractor_attachment'
  	}).id('mbm2:pipez/energy_pipe')

	//Pipez Gas Pipe
	event.remove({output: 'pipez:gas_pipe'})
  	event.shaped('8x pipez:gas_pipe', [
		'PPP',
		'BSB',
		'PPP'
  	], {
		P: '#forge:plates/chemically_inert_alloy',
		B: 'mekanism:alloy_infused',
		S: 'mekanism:basic_chemical_tank'
  	}).id('mbm2:pipez/gas_pipe')

	
  

});