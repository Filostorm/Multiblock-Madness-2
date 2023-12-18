/*

onEvent('tags.items', event => {
	event.add(`forge:ingots`, `naturesaura:tainted_gold`)
	 event.remove(`create:crushed_ores/${item}`, `kubejs:crushed_${item}`)
 });
 */
onEvent('recipes', event => {

	global.compactCrafting(event, 'kubejs:standard_dyson_panel', 1, 'mekanism:ultimate_control_circuit',
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

	//Chip Combnonation 8
	event.shaped('kubejs:solar_chip_red', [
		'AAA',
		'A A',
		'AAA'
  	], {
		A: 'kubejs:solar_chip_blue'
  	}).id('mbm2:dyson_chip_8')

	//Chip Combnonation 64
	event.shaped('kubejs:solar_chip_green', [
		'AAA',
		'A A',
		'AAA'
  	], {
		A: 'kubejs:solar_chip_red'
  	}).id('mbm2:dyson_chip_64')
	
	//Chip Combnonation 512
	event.shaped('kubejs:solar_chip_purple', [
		'AAA',
		'A A',
		'AAA'
  	], {
		A: 'kubejs:solar_chip_green'
  	}).id('mbm2:dyson_chip_512')


		////Solar Railgunning W/battery
		//event.recipes.multiblocked.multiblock("railgun")
		//.inputItem('kubejs:standard_dyson_panel')
		//.inputItem('mekanism:ultimate_control_circuit')
		//.inputItem('16x kubejs:large_battery_full')
		//.outputItem('kubejs:solar_chip_blue')
		//.outputItem('16x kubejs:large_battery_empty')
		//.duration(800)

		//Solar Railgunning
		event.recipes.multiblocked.multiblock("railgun")
		.inputItem('kubejs:standard_dyson_panel')
		.inputItem('mekanism:ultimate_control_circuit')
		.outputItem('kubejs:solar_chip_blue')
		.inputFE(10000000) //10m, need the top tier energy input hatch for this
		//.setPerTick(true)
		//.inputFE(4096*16)
		.duration(100)

		//Solar Railgunning W/crystal
		event.recipes.multiblocked.multiblock("railgun")
		.inputItem('kubejs:standard_dyson_panel')
		.inputItem('mekanism:ultimate_control_circuit')
		.inputItem('8x kubejs:energy_crystal_full')
		.outputItem('kubejs:solar_chip_blue')
		.outputItem('8x kubejs:energy_crystal_empty')
		.duration(100)

		//Solar Railgunning W/orb
		event.recipes.multiblocked.multiblock("railgun")
		.inputItem('kubejs:standard_dyson_panel')
		.inputItem('mekanism:ultimate_control_circuit')
		.inputItem('kubejs:energy_orb_full')
		.outputItem('kubejs:solar_chip_blue')
		.outputItem('kubejs:energy_orb_empty')
		.duration(20)


		//Single Dyson Panel
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_blue')
		.setChance(1)
		.inputItem('kubejs:energy_crystal_empty')
		.outputItem('kubejs:energy_crystal_full')
		.duration(global.batteryStorage[2]/100000) //100,000/t
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_blue')
		.setChance(1)
		.inputItem('kubejs:energy_orb_empty')
		.outputItem('kubejs:energy_orb_full')
		.duration(global.batteryStorage[3]/100000)

		//8 Dyson Panel
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_red')
		.setChance(1)
		.inputItem('8x kubejs:energy_crystal_empty')
		.outputItem('8x kubejs:energy_crystal_full')
		.duration((global.batteryStorage[2]*8)/(100000*8))
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_red')
		.setChance(1)
		.inputItem('kubejs:energy_orb_empty')
		.outputItem('kubejs:energy_orb_full')
		.duration(global.batteryStorage[3]/(100000*8))

		//64 Dyson Panel
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_green')
		.setChance(1)
		.inputItem('8x kubejs:energy_orb_empty')
		.outputItem('8x kubejs:energy_orb_full')
		.duration((global.batteryStorage[3]*8)/(100000*64))
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_green')
		.setChance(1)
		.inputItem('kubejs:lapatron_crystal_empty')
		.outputItem('kubejs:lapatron_crystal_full')
		.duration(global.batteryStorage[4]/(100000*64))

		//512 Dyson Panel
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_purple')
		.setChance(1)
		.inputItem('8x kubejs:lapatron_crystal_empty')
		.outputItem('8x kubejs:lapatron_crystal_full')
		.duration((global.batteryStorage[4]*8)/(100000*512))
		event.recipes.multiblocked.multiblock("energy_receiver")
		.setChance(0)
		.inputItem('kubejs:solar_chip_purple')
		.setChance(1)
		.inputItem('kubejs:lapatron_orb_empty')
		.outputItem('kubejs:lapatron_orb_full')
		.duration(global.batteryStorage[5]/(100000*512))
		
	/*
	event.remove({output: 'tconstruct:smeltery_controller'})
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