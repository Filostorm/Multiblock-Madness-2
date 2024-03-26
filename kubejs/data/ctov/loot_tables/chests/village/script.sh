#!/bin/bash

function fix() {
    cp template "$1"
    sed -i -e "s/BIOME/$2/" -e "s/BUILD/$3/" "$1"
}



for biome in beach  jungle mountain mushroom swamp; do
    fix village_${biome}_house.json $biome generic
done

fix village_dark_forest_house.json halloween generic
fix village_badlands_house.json mesa generic

fix village_farm.json common farm
fix village_bakery.json mesa bakery
fix village_library.json common library
fix village_library.json common library
fix village_smith.json common smith
mkdir -p ../../../../ctovt/loot_tables/chests/village/
mv village_smith.json ../../../../ctovt/loot_tables/chests/village/


