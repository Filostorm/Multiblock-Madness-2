// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {			
	global.removeAndHide.forEach((item) => {
		event.hide(item)
	})

	global.transitionalItems.forEach((item) => {
		event.hide(`kubejs:incomplete_${item}`)
	})
})
onEvent('jei.remove.categories', event => {
	console.log(event.getCategoryIds()) //log a list of all category ids to logs/kubejs/client.txt
})