onEvent('recipes', event => {
  event.remove({output: 'tconstruct:smeltery_controller'})
  event.shaped('tconstruct:smeltery_controller', [
	'AAA',
	'ABA',
	'AAA'
  ], {
	A: 'tconstruct:seared_brick',
	B: '#forge:gears/steel'
  })


});