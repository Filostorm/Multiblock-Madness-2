/*

onEvent('tags.items', event => {
	event.add(`forge:ingots`, `naturesaura:tainted_gold`)
	 event.remove(`create:crushed_ores/${item}`, `kubejs:crushed_${item}`)
 });
 
onEvent('recipes', event => {
	event.remove({output: 'tconstruct:smeltery_controller'})
  	event.shaped('tconstruct:smeltery_controller', [
		'AAA',
		'ABA',
		'AAA'
  	], {
		A: 'tconstruct:seared_brick',
		B: '#forge:gears/steel'
  	}).id('mbm2:hardened_tank')
  	event.shapeless(`kubejs:carbon_covered_iron`, [`#forge:ingots/iron`, '#forge:dusts/coal_coke']).id(`mbm2:carbon_covered_iron`)
	//Item.of(`#forge:grits/${item.material}`).withChance(0.25)
	event.recipes.createMixing(`${item.amount}x #forge:ingots/${item.material}`, item.ingot_input).heated().id(`create:mixing/${item.material}_ingot`).id('mbm2:hardened_tank')
		
	global.newMaterialParts.forEach((item) => {
		if (item.type == "compound_ore") {
			const materialNameUpper = item.material.charAt(0).toUpperCase() + item.material.slice(1)
			const veinName = materialNameUpper + ' Vein'
			
			//.charAt(0).toUpperCase()
			event.recipes.createoreexcavation.drilling([Item.of(`#forge:raw_materials/${item.material}`), Item.of(`#forge:grits/${item.material}`).withChance(0.25)], `{"text": "${veinName}"}`, 75, 200).id(`mbm2:drilling/${item.material}_vein`);
		}
	})

	
    event.replaceInput({id: 'immersiveengineering:crafting/blueprint_components'}, '#forge:ingots/aluminum', '#forge:ingots/constantan')

	
event.remove({id:'sophisticatedbackpacks:gold_backpack'})
event.shapeless('sophisticatedbackpacks:gold_backpack',[
    'sophisticatedbackpacks:iron_backpack',
    'quark:ravager_hide'
]).modifyResult((inventory, itemstack) => {
        item = inventory.find(Item.of('sophisticatedbackpacks:iron_backpack').ignoreNBT())
    if (item.nbt == null) return itemstack
    nbt = item.nbt
    nbt.inventorySlots = 54
    nbt.upgradeSlots = 4
    return itemstack.withNBT(nbt)
})


});



*/