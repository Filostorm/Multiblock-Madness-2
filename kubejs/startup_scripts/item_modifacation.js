onEvent('item.modification', event => {
    event.modify('minecraft:ender_pearl', item => {
      item.setMaxStackSize(64)
    })
    event.modify('rftoolsbase:infused_enderpearl', item => {
        item.setMaxStackSize(64)
      })
    event.modify('mythicbotany:faded_nether_star', item => {
        item.setMaxDamage(200000)
      })
});