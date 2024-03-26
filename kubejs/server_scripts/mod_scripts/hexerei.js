
onEvent('recipes', event => {

    //Blood Sigil made harder
	event.replaceInput({id: 'hexerei:blood_sigil_from_mixing_cauldron'}, 'minecraft:redstone', 'tconstruct:bloodbone')
	event.replaceInput({id: 'hexerei:blood_sigil_from_mixing_cauldron'}, 'minecraft:polished_blackstone', 'elementalcraft:rune_slate')

});