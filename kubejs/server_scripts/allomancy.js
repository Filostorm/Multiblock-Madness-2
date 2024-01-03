//onEvent('item.right_click', event => {
//    const { player, block, item, hand, server } = event //gets some data from the event.
//  if(item == 'allomancy:iron_flakes'){
//    event.server.runCommand(`allomancy get`)
//  }
//})
onEvent('item.right_click', event => {
	global.newMaterialParts.forEach((item) => {
		//Allomantic command for flakes
		if (item.allomancy != null) {
	    if(event.item.id == `allomancy:${item.material}_flakes`) {
        event.server.runCommand(`allomancy get @p`)
        event.server.runCommand(`say Add your other flake to a Metal Mind for Feruchemy`)
      }
    }
  })
})