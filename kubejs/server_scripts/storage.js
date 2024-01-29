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

event.remove({id: 'functionalstorage:simple_compacting_drawer'})
event.shaped('functionalstorage:simple_compacting_drawer', [
  'CCC',
  'CDU',
  'CPC'
], {
  U: 'minecraft:piston',
  D: '#functionalstorage:drawer',
  C: 'kubejs:1x_compressed_cobblestone',
  P: '#forge:platings/iron'
}).id('mbm2:compacting_drawer_simple')

event.remove({id: 'functionalstorage:compacting_framed_drawer'})
event.shaped('functionalstorage:compacting_framed_drawer', [
  'CPC',
  'UDU',
  'CPC'
], {
  U: 'minecraft:piston',
  D: '#functionalstorage:drawer',
  C: '#forge:nuggets/iron',
  P: '#forge:platings/iron'
}).id('mbm2:compacting_drawer_framed')


//Upgrades require processing, the lazy way
let upgradeMaterials = [
  'iron',
  'gold',
  'silver',
  'copper'
]
let upgradeMods = [
  'ironfurnaces',
  'sophisticatedbackpacks',
  'sophisticatedstorage',
  'functionalstorage'
]

upgradeMods.forEach(modID => {
  upgradeMaterials.forEach(material => {
    if (modID == 'functionalstorage') {
      event.replaceInput({mod: modID}, `#forge:ingots/${material}`, `#forge:platings/${material}`)
    } else {
      event.replaceInput({mod: modID}, `#forge:ingots/${material}`, `#forge:plates/${material}`)
    }
  });
});

//Iron Backpack
event.remove({id: 'sophisticatedbackpacks:iron_backpack'})
event.custom({
  "type": "sophisticatedbackpacks:backpack_upgrade",
  "conditions": [
    {
      "itemRegistryName": "sophisticatedbackpacks:iron_backpack",
      "type": "sophisticatedcore:item_enabled"
    }
  ],
  "pattern": [
    "III",
    "IBI",
    "III"
  ],
  "key": {
    "I": {
      "tag": "forge:plates/iron"
    },
    "B": {
      "item": "sophisticatedbackpacks:backpack"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:iron_backpack"
  }
})

//Gold Backpack
event.remove({id: 'sophisticatedbackpacks:gold_backpack'})
event.custom({
  "type": "sophisticatedbackpacks:backpack_upgrade",
  "conditions": [
    {
      "itemRegistryName": "sophisticatedbackpacks:gold_backpack",
      "type": "sophisticatedcore:item_enabled"
    }
  ],
  "pattern": [
    "III",
    "IBI",
    "III"
  ],
  "key": {
    "I": {
      "tag": "forge:plates/gold"
    },
    "B": {
      "item": "sophisticatedbackpacks:iron_backpack"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:gold_backpack"
  }
})

});