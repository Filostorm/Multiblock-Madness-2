onEvent('recipes', event => {
  event.shaped('multiblocked:sludge_sifter', [
	'ABA',
	'CDC',
	'EFE'
  ], {
	A: 'create:cogwheel',
	B: '#forge:string',
	C: '#forge:glass/colorless',
	D: 'create:copper_casing',
	E: 'thermal:nickel_plate',
	F: 'thermal:gold_gear'
  })
});