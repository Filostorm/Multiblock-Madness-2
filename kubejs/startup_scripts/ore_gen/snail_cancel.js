onEvent('entity.check_spawn', event => {
    if(event.entity.type == 'naturalist:snail' && event.level.dimension == 'java:void')
    {
        event.cancel();
        event.level.server.tell('Canceled snail spawning')
}
})