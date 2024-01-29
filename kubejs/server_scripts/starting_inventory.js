const starterTome = Item.of('ftbquests:book', '{"akashictome:data":{apotheosis:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}},ars_nouveau:{Count:1b,id:"ars_nouveau:worn_notebook"},botania:{Count:1b,id:"botania:lexicon"},cloudstorage:{Count:1b,id:"cloudstorage:guide_book"},elementalcraft:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"elementalcraft:element_book"}},engineersdecor:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"engineersdecor:engineersdecor_manual"}},immersiveengineering:{Count:1b,id:"immersiveengineering:manual"},industrialforegoing:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"industrialforegoing:industrial_foregoing"}},integratedtunnels:{Count:1b,id:"integrateddynamics:on_the_dynamics_of_integration"},mna:{Count:1b,id:"mna:guide_book"},naturesaura:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"naturesaura:book"}},pneumaticcraft:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"pneumaticcraft:book"}},powah:{Count:1b,id:"powah:book",tag:{"akashictome:displayName":{text:\'{"translate":"item.powah.book"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.powah.book"}]}\'}}},tconstruct:{Count:1b,id:"tconstruct:materials_and_you"},thermal:{Count:1b,id:"patchouli:guide_book",tag:{display:{Name:\'{"text":"{"translate":"thermal.book.name"}"}\'},"patchouli:book":"thermal:guidebook"}}},"akashictome:displayName":{text:\'{"translate":"item.ftbquests.book"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.ftbquests.book"}]}\'}}')
const craftingTome = Item.of('akashictome:tome', '{"akashictome:data":{apotheosis:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}},ars_nouveau:{Count:1b,id:"ars_nouveau:worn_notebook"},botania:{Count:1b,id:"botania:lexicon"},cloudstorage:{Count:1b,id:"cloudstorage:guide_book"},elementalcraft:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"elementalcraft:element_book"}},engineersdecor:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"engineersdecor:engineersdecor_manual"}},ftbquests:{Count:1b,id:"ftbquests:book",tag:{"akashictome:displayName":{text:\'{"translate":"item.ftbquests.book"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.ftbquests.book"}]}\'}}},immersiveengineering:{Count:1b,id:"immersiveengineering:manual"},industrialforegoing:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"industrialforegoing:industrial_foregoing"}},integratedtunnels:{Count:1b,id:"integrateddynamics:on_the_dynamics_of_integration"},mna:{Count:1b,id:"mna:guide_book"},naturesaura:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"naturesaura:book"}},pneumaticcraft:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"pneumaticcraft:book"}},powah:{Count:1b,id:"powah:book",tag:{"akashictome:displayName":{text:\'{"translate":"item.powah.book"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.powah.book"}]}\'}}},tconstruct:{Count:1b,id:"tconstruct:materials_and_you"},thermal:{Count:1b,id:"patchouli:guide_book",tag:{display:{Name:\'{"text":"{"translate":"thermal.book.name"}"}\'},"patchouli:book":"thermal:guidebook"}}},"akashictome:is_morphing":1b}')
onEvent('player.logged_in', event => {
	// Check if player doesn't have "starting_items" stage yet
	if (!event.player.stages.has('starting_items')) {
	  // Add the stage
	  event.player.stages.add('starting_items')
	  // Give some items to player
	  //event.player.give('ftbquests:book')
	  event.player.give(starterTome)
	  event.player.give('allomancy:vial')
	}
  })

onEvent('recipes', event => {
  event.shaped(craftingTome, [
	  ' G ',
	  'GBG',
	  ' G '
	], {
	  B: '#forge:bookshelves',
	  G: '#forge:ingots/gold'
	}).id(`mbm2:full_tome`)
});