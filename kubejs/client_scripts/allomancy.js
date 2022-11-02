onEvent('item.tooltip', tooltip => {
	//Allomantic
	global.newMaterialParts.forEach((item) => {
		if (item.allomancy != null) {
	
			console.log(`${item.material} is allomantic`);
			let toolTip = item.allomancy

			tooltip.addAdvanced(`allomancy:${item.material}_flakes`, (item, advanced, text) => {
				if (!tooltip.shift) {
				  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').aqua(), Text.of('to see allomantic uses.').gold()])
				} else {
				  text.add(1, Text.aqua(`${toolTip}`))
				}
			})
		}
		//Ferumantic
		if (item.feruchemy != null) {
	
			console.log(`${item.material} is ferumantic`);
			let toolTip = item.feruchemy

			tooltip.addAdvanced(`allomancy:${item.material}_flakes`, (item, advanced, text) => {
				if (!tooltip.ctrl) {
				  text.add(2, [Text.of('Hold ').gold(), Text.of('Ctrl ').green(), Text.of('to see feruchemy uses.').gold()])
				} else {
				  text.add(2, Text.of(toolTip).green())
				}
			})
		}
	})
});