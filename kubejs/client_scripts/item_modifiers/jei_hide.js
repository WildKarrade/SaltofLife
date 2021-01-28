events.listen('jei.hide.items', (event) => {
    global.materialsToUnify.forEach((material) => {
        itemsToHide.push(
            'emendatusenigmatica:' + material + '_andesite_ore',
            'emendatusenigmatica:' + material + '_gabbro_ore',
            'emendatusenigmatica:' + material + '_c_limestone_ore',
            'emendatusenigmatica:' + material + '_scoria_ore',
            'emendatusenigmatica:' + material + '_weathered_limestone_ore',
            'emendatusenigmatica:' + material + '_jasper_ore',
            'emendatusenigmatica:' + material + '_marble_ore',
            'emendatusenigmatica:' + material + '_slate_ore',
            'titanium:' + material + '_gear',
            'thermal:' + material,
            'thermal:' + material + '_nugget',
            'thermal:' + material + '_ore',
            'tmechworks:' + material + '_ingot',
            'tmechworks:' + material + '_nugget',
            'tmechworks:' + material + '_ore',
            'pedestals:dust' + material,
            'mekanism:' + material + '_gem',
            'mekanism:' + material + '_ore',
            'mekanism:nugget_' + material,
            'minecraft:' + material + '_ore',
            'immersiveengineering:nugget_' + material,
            'immersiveengineering:ore_' + material,
            'bloodmagic:' + material + 'fragment',
            'bloodmagic:' + material + 'gravel',
            'bloodmagic:' + material + 'sand',
            'create:' + material + '_nugget'
        );
    });

    itemsToHide.forEach((disabledItem) => {
        if (!item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });

    global.disabledItems.forEach((disabledItem) => {
        if (!item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });
});
