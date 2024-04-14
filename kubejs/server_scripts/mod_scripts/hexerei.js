
onEvent('recipes', event => {

    //Blood Sigil made harder
	event.replaceInput({id: 'hexerei:blood_sigil_from_mixing_cauldron'}, 'minecraft:redstone', 'tconstruct:bloodbone')
	event.replaceInput({id: 'hexerei:blood_sigil_from_mixing_cauldron'}, 'minecraft:polished_blackstone', 'elementalcraft:rune_slate')
    //Mixing Cauldron recipe change
	//event.remove({output: 'hexerei:mixing_cauldron'})
	//event.shaped('hexerei:mixing_cauldron', ['A A','BCB','BDB'], {A: '#supplementaries:candle_holders',B: 'kubejs:manasteel_plate',C: 'reliquary:apothecary_cauldron',D: 'elementalcraft:fireite_ingot'})

    //Liquid Quicksilver
	global.mixingCauldron(event, Item.of('#forge:dusts/slag'), [Item.of('kubejs:quicksilver').toJson(), Item.of('kubejs:quicksilver').toJson(), Item.of('kubejs:quicksilver').toJson(), Item.of('kubejs:quicksilver').toJson(), Item.of('kubejs:quicksilver').toJson(), Item.of('kubejs:quicksilver').toJson(), Item.of('kubejs:quicksilver').toJson(), Item.of('kubejs:quicksilver').toJson()], 'minecraft:lava', 'hexerei:quicksilver_fluid', 0, 'mbm2:quicksilver_melting')
});
