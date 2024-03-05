onEvent('recipes', event => {

let colors = [
	'white',
	'orange',
	'magenta',
	'light_blue',
	'yellow',
	'lime',
	'pink',
	'gray',
	'light_gray',
	'purple',
	'blue',
	'cyan',
	'brown',
	'green', 
	'red',
	'black',
]


// Red Alloy Wire
	event.remove({id:`projectred_transmission:red_alloy_wire`})
	event.shaped('3x projectred_transmission:red_alloy_wire', [
		'R',
		'R',
		'R'
	  ], {
		R: '#forge:ingots/red_alloy'
  	}).id(`mbm2:red_alloy_wire`)

  //Insulated Wire
	colors.forEach(color => {
		event.remove({id:`projectred_transmission:${color}_insulated_wire`})
		event.shaped(`projectred_transmission:${color}_insulated_wire`, [
			'WC',
		  ], {
			C: 'projectred_transmission:red_alloy_wire',
			W: `#forge:wool/${color}`
		}).id(`mbm2:${color}_insulated_wire`)
	});


});