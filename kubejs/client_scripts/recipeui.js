onEvent('mbd.recipe_ui.baka', event => {
	let recipeWidget = event.getRecipeWidget()
	let itemCap = MbdRegistry.getCapability('item')

	recipeWidget.clearAllWidgets()

	let background = new ImageWidget(-1, 0, 178, 84, new ResourceTexture('multiblocked:textures/gui/yuhuo.png'))
	recipeWidget.addWidget(background)

	let recipe = recipeWidget.recipe

	let input = recipe.getInputContents(itemCap)[0]
	let itemIn = itemCap.createContentWidget()

	itemIn.setContent('IN', input, false)
	itemIn.setSelfPosition(19, 32)
	recipeWidget.addWidget(itemIn)

	let outputs = recipe.getOutputContents(itemCap)
	let i = 0

	let itemBound = new ImageWidget(149, 22, 20, 40, new ResourceTexture('multiblocked:textures/gui/yuhuo_two.png'))
	
	if(outputs.length > 1) recipeWidget.addWidget(itemBound)

	for(let output of outputs) {
		let itemOut = itemCap.createContentWidget()

		itemOut.setContent('OUT', output, false)

		if(i == 0) {
			itemOut.setSelfPosition(114, 32)
		} else itemOut.setSelfPosition(140, 32)

		i++

		recipeWidget.addWidget(itemOut)
	}
})