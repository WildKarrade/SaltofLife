events.listen('jei.information', (event) => {
    // var data = {
    //     items: [
    //         { item: 'mekanism:jetpack', description: 'Cannot be enchanted.' },
    //         { item: 'mekanism:jetpack_armored', description: 'Cannot be enchanted.' }
    //     ]
    // };
    // data.items.forEach(function (pair) {
    //     event.add(pair.item, pair.description);
    // });

    global.disabledItems.forEach((item) => {
        event.add(
            item,
            "This item has been disabled"
        );
    });
});
