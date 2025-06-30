const ItemCapabilityHandler = java('net.minecraftforge.items.CapabilityItemHandler')
const MBDItemCap = java('com.lowdragmc.multiblocked.common.capability.ItemMultiblockCapability')
const MBDIO = java('com.lowdragmc.multiblocked.api.capability.IO')

const AccelerationUpgrades = {
    'kubejs:multiblock_accelerator_mk1': {
        'duration': (duration) => duration / 2,
        'rfCostMult': 2.0
    },
    'kubejs:multiblock_accelerator_mk2': {
        'duration': (duration) => duration / 4,
        'rfCostMult': 4.0
    }
}
const acceleratable_multiblocks =[ //Controller MUST have a item input slot! Add one to the machine's controller before adding to this list!
    'mixer_mk1',
    //'mana_compressor',
    'ebf',
    'mechanical_crafter',
    'flotation',
]
acceleratable_multiblocks.forEach(mbm2Multiblock => {
    

onEvent(`mbd.setup_recipe.mbm2.${mbm2Multiblock}`, event => {
    if (event.getRecipeLogic().dynamic) return
    
    let componentData = event.getComponentData()
    let upgradecheck = componentData.get(Block.getBlock('kubejs:tier_2_electrical_alloy_coil').defaultBlockState())
    let handler = event.getHandlerFromRecipe()
    //let duration = upgradecheck > 0 ? event.getRecipe().duration / (2) : event.getRecipe().duration;
    

    let controller = event.getRecipeLogic().controller
       let upgradeSlotItem = controller.getProxies("BOTH", MBDItemCap.CAP).get(controller.self().getBlockPos()).getCapability(ItemCapabilityHandler.ITEM_HANDLER_CAPABILITY).getStackInSlot(0).asKJS()
       console.log(upgradeSlotItem.id)
       if (AccelerationUpgrades[upgradeSlotItem.id]){
        if (AccelerationUpgrades[upgradeSlotItem.id].duration)
        handler.duration(AccelerationUpgrades[upgradeSlotItem.id].duration(event.getRecipe().duration))
        
        if (AccelerationUpgrades[upgradeSlotItem.id].rfCostMult)
        handler.inputMultiplier(true, 'forge_energy', AccelerationUpgrades[upgradeSlotItem.id].rfCostMult)
       }
    //let duration = AccelerationUpgrades[upgradeSlotItem.id] ? AccelerationUpgrades[upgradeSlotItem.id](event.getRecipe().duration) : event.getRecipe().duration;


    console.log(componentData)
    console.log(upgradecheck)
    console.log(handler)
    event.setRecipe(handler.apply())
})
});