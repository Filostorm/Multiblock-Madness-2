// priority: 0

settings.logAddedRecipes = false
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')


onEvent('recipes', event => {
	global.newMaterialParts.forEach((item) => {
		console.log(item.material);
	})
    //recipe logging
    event.forEachRecipe({ type: 'tconstruct:casting_table'}, r => {
    console.log(r.json)})
})