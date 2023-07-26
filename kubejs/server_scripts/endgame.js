/*

onEvent('tags.items', event => {
	event.add(`forge:ingots`, `naturesaura:tainted_gold`)
	 event.remove(`create:crushed_ores/${item}`, `kubejs:crushed_${item}`)
 });
 */
onEvent('recipes', event => {

	global.compactCrafting(event, 'kubejs:standard_dyson_panel', 1, 'immersiveengineering:component_electronic',
	7, [
	  {
		  type: 'compactcrafting:mixed',
		  pattern: [
			  ['P', 'P', 'P', 'S', 'P' ,'P', 'P'],
			  ['P', 'P', 'P', 'S', 'P' ,'P', 'P'],
			  ['P', 'P', 'P', 'S', 'P' ,'P', 'P'],
			  ['S', 'S', 'S', 'S', 'S' ,'S', 'S'],
			  ['P', 'P', 'P', 'S', 'P' ,'P', 'P'],
			  ['P', 'P', 'P', 'S', 'P' ,'P', 'P'],
			  ['P', 'P', 'P', 'S', 'P' ,'P', 'P'],
		  ]
	  },
	  ], {
	  'P': {
		type: 'compactcrafting:block',
		block: 'kubejs:solar_panel'
	  },
	  'S': {
		type: 'compactcrafting:block',
		block: 'kubejs:solar_bar'
	  },
	},  'mbm2:compacting/standard_dyson_panel')



		//Solar Railgunning
		event.recipes.multiblocked.multiblock("railgun")
		.inputItem('kubejs:standard_dyson_panel')
		.outputItem('kubejs:solar_chip_blue')
		.inputFE(4000*(16**2)) //1048576
		//.setPerTick(true)
		//.inputFE(4096*16)
		.duration(50)

		//Solar Railgunning W/battery
		event.recipes.multiblocked.multiblock("railgun")
		.inputItem('kubejs:standard_dyson_panel')
		.inputItem('8x kubejs:large_battery_full')
		.outputItem('kubejs:solar_chip_blue')
		.outputItem('8x kubejs:large_battery_empty')
		.duration(50)

		//Solar Railgunning W/crystal
		event.recipes.multiblocked.multiblock("railgun")
		.inputItem('kubejs:standard_dyson_panel')
		.inputItem('kubejs:energy_crystal_full')
		.outputItem('kubejs:solar_chip_blue')
		.outputItem('kubejs:energy_crystal_empty')
		.duration(40)

		//Solar Railgunning W/orb
		event.recipes.multiblocked.multiblock("railgun")
		.inputItem('kubejs:standard_dyson_panel')
		.inputItem('kubejs:energy_orb_full')
		.outputItem('kubejs:solar_chip_blue')
		.outputItem('kubejs:energy_orb_empty')
		.duration(5)

		//Small Battery
		event.shaped('kubejs:small_battery_empty', ['ABA','BCB','ABA'], {A: 'mna:arcane_ash',B: 'kubejs:tier_1_electrical_alloy_plate',C: 'powah:battery_basic'})

	/*
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
})*/

});