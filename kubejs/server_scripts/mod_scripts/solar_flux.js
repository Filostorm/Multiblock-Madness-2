onEvent('recipes', event => {

// [| solarflux:mirror |] //
//event.remove({output: 'solarflux:mirror'})
event.shaped('3x solarflux:mirror', [
	'BBB',
	'CCC'
], {
	B: '#forge:glass/colorless',
	C: 'thermal:silver_plate'
}).id("solarflux:mirror")

//mirror inside Mechanical Crafter
event.recipes.multiblocked.multiblock('mechanical_crafting')
.inputItems(['3x #forge:glass/colorless', '3x #forge:plates/silver'])
.outputItem('6x solarflux:mirror')
.setPerTick(true)
.inputFE(2000)
.duration(100);
	
	  //Tier 1 Solar
	  event.shaped('solarflux:sp_1', ['AAA','BCB','BBB'], {A: 'solarflux:mirror',B: '#forge:treated_wood',C: '#forge:gears/dielectric_alloy'}).id("solarflux:solar_panel_1")
	
	  //Tier 2 Solar
	  event.shaped('solarflux:sp_2', ['AAA','ABA','AAA'], {A: 'solarflux:sp_1',B: 'kubejs:tier_1_electrical_alloy_wire_coil'}).id("solarflux:solar_panel_2")

	  //Photovoltaic Cell II
	  event.shaped('solarflux:photovoltaic_cell_2', ['AAA','BBB','CDC'], {A: 'pneumaticcraft:plastic',B: 'projectred_core:electrotine_dust',C: 'solarflux:mirror',D: 'solarflux:photovoltaic_cell_1'}).id('solarflux:photovoltaic_cell_2')
	  
	  //Photovoltaic Cell III
	  event.shaped('solarflux:photovoltaic_cell_3', ['AAA','EBE','CDC'], {A: 'ae2:quartz_vibrant_glass',B: 'kubejs:luminite',C: 'create:sturdy_sheet',D: 'solarflux:photovoltaic_cell_2',E: 'elementalcraft:burnt_glass_pane'}).id('solarflux:photovoltaic_cell_3')

	  //Photovoltaic Cell IV
	  event.shaped('solarflux:photovoltaic_cell_4', ['AAA','BCB','DED'], {A: 'solarflux:blazing_coating',B: 'kubejs:charged_coil',C: 'elementalcraft:solar_prism',D: 'botania:blaze_quartz',E: 'solarflux:photovoltaic_cell_3'}).id('solarflux:photovoltaic_cell_4')
	  
	  //Photovoltaic Cell V
	  event.shaped('solarflux:photovoltaic_cell_5', ['AAA','BCB','CDC'], {A: 'solarflux:emerald_glass',B: 'botania:lens_normal',C: 'pneumaticcraft:solar_cell',D: 'solarflux:photovoltaic_cell_4'}).id("solarflux:photovoltaic_cell_5")

	  //Photovoltaic Cell VI
	  event.shaped('solarflux:photovoltaic_cell_6', ['AAA','BCB','BDB'], {A: 'solarflux:ender_glass',B: 'mekanism:alloy_atomic',C: 'botania:sunny_quartz',D: 'solarflux:photovoltaic_cell_5'}).id("solarflux:photovoltaic_cell_6")

	//Upgrades
	  //Blank Upgrade
	  event.shaped('2x solarflux:blank_upgrade', [' A ','BCB','DDD'], {A: 'kubejs:tier_1_structural_alloy_component',B: 'immersiveengineering:component_iron',C: 'projectred_core:electrotine_silicon',D: 'projectred_core:plate'}).id("solarflux:blank_upgrade")

	  //Efficency Upgrade
	  event.shaped('solarflux:efficiency_upgrade', [' A ','BCB',' D '], {A: 'powah:lens_of_ender',B: 'immersiveengineering:component_electronic',C: 'solarflux:blank_upgrade',D: 'solarflux:photovoltaic_cell_3'}).id("solarflux:efficiency_upgrade")

	  //Capacity Upgrade
  	  event.shaped('2x solarflux:capacity_upgrade', ['ABA','CDC','ABA'], {A: 'kubejs:battery_alloy_plate',B: 'kubejs:small_battery_empty',C: 'solarflux:blank_upgrade',D: 'powah:battery_hardened'}).id("solarflux:capacity_upgrade")

  	  //Transfer Rate Upgrade
	  event.shaped('solarflux:transfer_rate_upgrade', ['ABA','CDC','ABA'], {A: 'kubejs:red_alloy_wire',B: 'powah:energy_cable_hardened',C: 'thermal:rf_coil_xfer_augment',D: 'solarflux:blank_upgrade'}).id("solarflux:transfer_rate_upgrade")

});
