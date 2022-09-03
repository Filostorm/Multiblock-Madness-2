onEvent('recipes', event => {
  event.remove({id: 'immersiveengineering:crafting/stick_iron'})

  //Hammer
	event.remove({input:'immersiveengineering:hammer'}) // Random Crushing etc
	event.remove({output: 'immersiveengineering:hammer'})
	event.shaped('immersiveengineering:hammer', [
		'ABC',
		'ADB',
		'DAA'
	], {
		A: Item.empty,
		B: 'thermal:invar_ingot',
		C: 'immersiveengineering:hemp_fiber',
		D: '#forge:rods/wooden'
		})

	//Kiln Bricks
  	event.remove({id: 'immersiveengineering:crafting/alloybrick'})
	event.recipes.createPressing('kubejs:unfired_clay_brick', 'minecraft:clay_ball').id(`kubejs:pressing/unfired_clay_brick`)
	event.recipes.createCompacting('immersiveengineering:alloybrick', ['2x kubejs:unfired_clay_brick','2x engineersdecor:dense_grit_sand_block']).heated().id(`kubejs:compacting/kiln_bricks`)
});