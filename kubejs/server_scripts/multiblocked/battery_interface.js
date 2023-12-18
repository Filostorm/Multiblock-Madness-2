
  onEvent('recipes', event => {
	
	global.batteryItems.forEach((item, index) => {
		event.recipes.multiblocked.multiblock("battery_converter")
		.inputItem(`kubejs:${item}_empty`)
		.outputItem(`kubejs:${item}_full`)
		.setPerTick(true)
		.inputFE(global.batteryStorage[index]/(10**index+1))
		.duration(10**index+1)
		event.recipes.multiblocked.multiblock("battery_converter")
		.inputItem(`kubejs:${item}_full`)
		.outputItem(`kubejs:${item}_empty`)
		.setPerTick(true)
		.outputFE(global.batteryStorage[index]/(10**index+1))
		.duration(10**index+1)
	})
  })