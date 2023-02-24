
onEvent('item.tooltip', tooltip => {

	//Multiblocked Tooltips
	
	tooltip.addAdvanced(`multiblocked:energy_input_mk1`, (item, advanced, text) => {
		  text.add(1, [Text.of('Max transfer: ').gold(), Text.of('16,384').green()])
	})
	tooltip.addAdvanced(`multiblocked:energy_input_mk2`, (item, advanced, text) => {
		  text.add(1, [Text.of('Max transfer: ').gold(), Text.of('65,536').green()])
	})
	tooltip.addAdvanced(`multiblocked:energy_input_mk3`, (item, advanced, text) => {
		  text.add(1, [Text.of('Max transfer: ').gold(), Text.of('262,144').green()])
	})
});