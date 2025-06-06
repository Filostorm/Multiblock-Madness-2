onEvent('recipes', (event) => {
    // [| solarflux:mirror |] //
    //event.remove({output: 'solarflux:mirror'})
    event
        .shaped('3x solarflux:mirror', ['BBB', 'CCC'], {
            B: '#forge:glass/colorless',
            C: 'thermal:silver_plate'
        })
        .id('solarflux:mirror');

    //Tier 1 Solar
    event
        .shaped('solarflux:sp_1', ['AAA', 'BCB', 'BBB'], {
            A: 'solarflux:mirror',
            B: '#forge:treated_wood',
            C: '#forge:gears/dielectric_alloy'
        })
        .id('solarflux:solar_panel_1');

    //Tier 2 Solar
    event
        .shaped('solarflux:sp_2', ['AAA', 'ABA', 'AAA'], {
            A: 'solarflux:sp_1',
            B: 'kubejs:tier_1_electrical_alloy_wire_coil'
        })
        .id('solarflux:solar_panel_2');
});
