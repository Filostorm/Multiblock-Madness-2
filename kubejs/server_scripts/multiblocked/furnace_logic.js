//kaka.fire_two
onEvent('mbd.structure_formed.kaka.fire_two', event => {
	let controller = event.getController()
	let world = controller.getLevel().asKJS()
	let controllerPos = controller.getBlockPos().immutable()

	let x = controllerPos.getX() + 0.5
	let y = controllerPos.getY() + 0.5
	let z = controllerPos.getZ() + 0.5

	if(controller.persistedData == null) {
		world.getServer().runCommandSilent(`execute in ${world.getDimension()} run particle minecraft:witch ${x} ${y} ${z} 0.4 0.3 0.4 0 24 normal`)
	}
})

let getStack = item => {
	return {Item: item.serializeNBT()}
}

let itemCap = MbdRegistry.getCapability('item')

onEvent('mbd.update_formed.kaka.fire_two', event => {
	let controller = event.getController()
	let controllerPos = controller.getBlockPos().immutable()
	let world = controller.getLevel()

	if(controller.persistedData == null) controller.persistedData = {'items': []}

	let recipeLogic = controller.getRecipeLogic()
	let recipeMap = controller.getDefinition().recipeMap

	let centerPos = controllerPos.relative(controller.getFrontFacing().getOpposite())
	let entities = world.asKJS().getEntitiesWithin(AABB.ofBlock(centerPos))

	entities.forEach(entity => {
		if(entity != null && entity.getType() == 'minecraft:item') {
			let item = entity.getItem()

			for(let recipe of recipeMap.allRecipes()) {
				let itemInputs = recipe.getInputContents(itemCap)
				let first = itemInputs[0].getContent().getItems()[0]

				if(first.sameItem(item)) controller.persistedData['items'].push(item)
			}

			entity.kill()
		}
	})

	for(let recipe of recipeMap.allRecipes()) {
		let itemInputs = recipe.getInputContents(itemCap)
		let first = itemInputs[0].getContent().getItems()[0]
		let fid = first.getItem().getId()
		let fc = first.getCount()

		let inputItems = controller.persistedData['items']

		aaa: for(let item of inputItems) {
			if(recipeLogic.isIdle()) {
				let id = item['id']
				let count = item.getInt('Count')
				let cc = count / fc

				if(id == fid) {
					if(cc >= 1) {
						recipeLogic.lastRecipe = recipe
						recipeLogic.setStatus('WORKING')
						recipeLogic.progress = 0
						recipeLogic.duration = recipe.duration
						recipeLogic.markDirty()

						let stack = first.copy()
						stack.setCount(count - fc)

						if(cc > 1) controller.persistedData['items'].push(stack.serializeNBT())
					}

					controller.persistedData['items'].remove(item)
				}
			} else break aaa
		}
	}
})

onEvent('mbd.recipe_finish.kaka.fire_two', event => {
	let recipeLogic = event.getRecipeLogic()
	let recipe = event.getRecipe()
	let controller = recipeLogic.controller
	let controllerPos = controller.getBlockPos().immutable()
	let world = controller.getLevel().asKJS()

	let facing = controller.getFrontFacing()

	let fX = facing.getX() * 0.11
	let fZ = facing.getZ() * 0.11

	let cX = controllerPos.getX() + 0.5
	let cY = controllerPos.getY() + 0.55
	let cZ = controllerPos.getZ() + 0.5

	let itemOutputs = recipe.getOutputContents(itemCap)

	for(let items of itemOutputs) {
		let item = items.getContent().getItems()[0]

		let entity = world.createEntity('minecraft:item')
		entity.mergeFullNBT(getStack(item))
		entity.setPosition(cX, cY, cZ)
		entity.setMotion(fX, 0, fZ)
		entity.spawn()
	}

	let xpOrb = world.createEntity('minecraft:experience_orb')
	xpOrb.mergeFullNBT({Value: 1})
	xpOrb.setPosition(cX, cY, cZ)
	xpOrb.spawn()

	world.getServer().runCommandSilent(`execute in ${world.getDimension()} run particle minecraft:lava ${cX} ${cY} ${cZ} 0.1 0.1 0.1 0 3 normal`)
})

onEvent('mbd.setup_recipe.kaka.fire_two', event => {
	event.cancel()
})

onEvent('mbd.create_ui.kaka.fire_two', event => {
	event.cancel()
})
