

onEvent('tags.items', event => {
	event.add(`elementalcraft:basic_infused`, 'elementalcraft:drenched_iron_ingot')
	event.add(`elementalcraft:basic_infused`, 'elementalcraft:air_silk')
	event.add(`elementalcraft:basic_infused`, 'elementalcraft:whiterock')
	event.add(`elementalcraft:basic_infused`, 'elementalcraft:burnt_glass')
});
 
onEvent('recipes', event => {
	//Nether Wart
	global.elementalcraftInfusion(event, Ingredient.of('#forge:mushrooms'), Item.of('minecraft:nether_wart'), 'fire', 1000, 'mbm:infusion/nether_wart')
	
	
	event.replaceInput({mod: 'elementalcraft'}, '#forge:ingots/iron', '#forge:ingots/arcanite')
	event.replaceInput({mod: 'elementalcraft'}, '#forge:nuggets/iron', '#forge:nuggets/arcanite')
	
	event.replaceInput({id: 'elementalcraft:pureinfusion/purerock'}, 'minecraft:obsidian', 'beyond_earth:mars_stone')
	

	
	//Container Upgrade
	//event.remove({id: 'druidcraftrg:beam'})
	event.shaped('elementalcraft:container', [
		'DCD',
		'PGP',
		'RRR'
	  ], {
		R: 'elementalcraft:whiterock',
		G: 'elementalcraft:burnt_glass',
		P: 'elementalcraft:elementpipe',
		D: 'elementalcraft:drenched_iron_ingot',
		C: 'elementalcraft:small_container',
	  }).modifyResult((inventory, itemstack) => {
        	let item = inventory.find(Item.of('elementalcraft:small_container').ignoreNBT())
		    if (item.nbt == null) return itemstack
		    let nbt = item.nbt
		    nbt.BlockEntityTag.element_storage.element_capacity = 100000
		    return itemstack.withNBT(nbt)
		}).id("mbm2:elementalcraft/container")





});
