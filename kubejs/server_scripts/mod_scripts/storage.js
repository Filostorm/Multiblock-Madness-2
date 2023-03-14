onEvent('recipes', event => {

//Broken Drawer Recipes
event.remove({id: 'functionalstorage:oak_drawer_alternate_x1'})
event.remove({id: 'functionalstorage:oak_drawer_alternate_x4'})
event.remove({id: 'functionalstorage:oak_drawer_alternate_x2'})


//Controller
  event.remove({id: 'functionalstorage:storage_controller'})
  event.shaped('functionalstorage:storage_controller', [
	'CPC',
	'DUD',
	'CPC'
  ], {
	U: ['sophisticatedstorage:gold_to_diamond_tier_upgrade', 'mekanism:enriched_diamond'],
	D: '#functionalstorage:drawer',
	C: 'create:brass_casing',
	P: '#forge:platings/bronze'
  }).id('mbm2:storage_controller')

//Coompacting
event.remove({id: 'functionalstorage:compacting_drawer'})
event.shaped('functionalstorage:compacting_drawer', [
  'CPC',
  'UDU',
  'CPC'
], {
  U: 'minecraft:piston',
  D: '#functionalstorage:drawer',
  C: 'kubejs:1x_compressed_cobblestone',
  P: '#forge:platings/iron'
}).id('mbm2:compacting_drawer')

  

});