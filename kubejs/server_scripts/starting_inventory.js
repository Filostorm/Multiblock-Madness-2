onEvent('player.logged_in', event => {
	// Check if player doesn't have "starting_items" stage yet
	if (!event.player.stages.has('starting_items')) {
	  // Add the stage
	  event.player.stages.add('starting_items')
	  // Give some items to player
	  //event.player.give('ftbquests:book')
	  event.player.give(Item.of('ftbquests:book', '{"akashictome:data":{apotheosis:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}},ars_nouveau:{Count:1b,id:"ars_nouveau:worn_notebook"},botania:{Count:1b,id:"botania:lexicon"},byg:{Count:1b,id:"byg:biomepedia"},cloudstorage:{Count:1b,id:"cloudstorage:guide_book"},elementalcraft:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"elementalcraft:element_book"}},malum:{Count:1b,id:"malum:encyclopedia_arcana"},mna:{Count:1b,id:"mna:guide_book"},naturesaura:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"naturesaura:book"}},powah:{Count:1b,id:"powah:book",tag:{"akashictome:displayName":{text:\'{"translate":"item.powah.book"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.powah.book"}]}\'}}},tconstruct:{Count:1b,id:"tconstruct:materials_and_you"}},"akashictome:displayName":{text:\'{"translate":"item.ftbquests.book"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.ftbquests.book"}]}\'}}'))
	  event.player.give('allomancy:vial')
	}
  })