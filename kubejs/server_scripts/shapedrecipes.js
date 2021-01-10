onEvent('recipes', event => {
	event.shaped(Item.of('refinedstorageaddons:wireless_crafting_grid', 1), ['ABA', 'ACA', 'ADA'], {
            A: 'refinedstorage:quartz_enriched_iron',
            B: 'refinedstorage:range_upgrade',
            C: 'refinedstorage:wireless_grid',
            D: 'minecraft:crafting_table'
        }),
	event.shaped(Item.of('minecraft:stick', 16), ['A', 'A'], {
			A: '#minecraft:logs'
		}),
	event.shaped(Item.of('simplefarming:fish_and_chips', 1), [' A ', 'BCB', ' A '], {
            A: '#forge:crops/potato',
            B: '#forge:grain',
            C: 'aquaculture:fish_fillet_cooked'
        }),
	event.shaped(Item.of('quantumstorage:tank', 1), ['CBC', 'BLB', 'CCC'], {
            L: 'mekanism:ultimate_fluid_tank',
            C: '#forge:ingots/compressed_iron',
            B: '#forge:glass_panes'
        }),
    event.shaped(Item.of('quantumstorage:qsu', 1), ['BBB', 'BLB', 'CCC'], {
            L: 'mekanism:ultimate_bin',
            C: '#forge:ingots/compressed_iron',
            B: '#forge:glass'
        }),
    event.shaped(Item.of('minecraft:furnace', 1), ['LLL', 'L L', 'LLL'], {
            L: '#forge:stone'
        }),
    event.shaped(Item.of('minecraft:tube_coral_block', 1), ['AA', 'AA'], {
            A: 'minecraft:tube_coral_fan'
        }),
    event.shaped(Item.of('minecraft:brain_coral_block', 1), ['AA', 'AA'], {
            A: 'minecraft:brain_coral_fan'
        }),
    event.shaped(Item.of('minecraft:bubble_coral_block', 1), ['AA', 'AA'], {
            A: 'minecraft:bubble_coral_fan'
        }),
    event.shaped(Item.of('minecraft:fire_coral_block', 1), ['AA', 'AA'], {
            A: 'minecraft:fire_coral_fan'
        }),
    event.shaped(Item.of('minecraft:horn_coral_block', 1), ['AA', 'AA'], {
            A: 'minecraft:horn_coral_fan'
        }),
    event.shaped(Item.of('minecraft:tube_coral_block', 1), ['AA', 'AA'], {
            A: 'minecraft:tube_coral'
        }),
    event.shaped(Item.of('minecraft:brain_coral_block', 1), ['AA', 'AA'], {
            A: 'minecraft:brain_coral'
        }),
    event.shaped(Item.of('minecraft:bubble_coral_block', 1), ['AA', 'AA'], {
            A: 'minecraft:bubble_coral'
        }),
    event.shaped(Item.of('minecraft:fire_coral_block', 1), ['AA', 'AA'], {
            A: 'minecraft:fire_coral'
        }),
    event.shaped(Item.of('minecraft:horn_coral_block', 1), ['AA', 'AA'], {
            A: 'minecraft:horn_coral'
        }),
    event.shaped(Item.of('decorative_blocks:lattice', 1), ['A A', '   ', 'A A'], {
            A: '#forge:rods/wooden'
        }),
	event.shaped(Item.of('immersiveengineering:stick_steel', 3), ['A', 'A', 'A'], {
            A: '#forge:ingots/steel'
        }),
    event.shaped(Item.of('valhelsia_structures:oak_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:oak_log'
        }),
    event.shaped(Item.of('valhelsia_structures:spruce_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:spruce_log'
        }),
    event.shaped(Item.of('valhelsia_structures:birch_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:birch_log'
        }),
    event.shaped(Item.of('valhelsia_structures:jungle_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:jungle_log'
        }),
    event.shaped(Item.of('valhelsia_structures:dark_oak_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:dark_oak_log'
        }),
    event.shaped(Item.of('valhelsia_structures:acacia_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:acacia_log'
        }),
    event.shaped(Item.of('minecraft:ladder', 4), ['A A', 'ABA', 'A A'], {
            A: '#forge:rods/wooden',
            B: '#minecraft:planks'
        }),
    event.shaped(Item.of('engineersdecor:slag_brick_block', 8), ['AAA', 'ABA', 'AAA'], {
            A: '#engineersdecor:brick_ingots',
            B: '#forge:slag'
        }),
	event.shaped(Item.of('scuba_gear:scuba_helmet', 1), [ 'BAB', 'ACA', 'A A' ], {
			A: '#forge:ingots/bronze',
			B: 'minecraft:iron_nugget',
			C: '#forge:glass'
		}),
	event.shaped(Item.of('scuba_gear:scuba_chestplate', 1), [ 'A A', 'BAB', 'AAA' ], {
			A: '#forge:ingots/bronze',
			B: 'minecraft:iron_nugget'
		}),
	event.shaped(Item.of('scuba_gear:scuba_leggings', 1), [ 'BBB', 'A A', 'A A' ], {
			A: '#forge:ingots/bronze',
			B: 'minecraft:iron_nugget'
		}),
	event.shaped(Item.of('scuba_gear:scuba_boots', 1), [ '   ', 'B B', 'A A' ], {
			A: '#forge:ingots/bronze',
			B: 'minecraft:iron_nugget'
		})
	//Remove some default recipes
	event.remove({id: 'refinedstorageaddons:wireless_crafting_grid', output: 'refinedstorageaddons:wireless_crafting_grid' });
	event.remove({id: 'quantumstorage:tank', output: 'quantumstorage:tank' });
	event.remove({id: 'quantumstorage:qsu', output: 'quantumstorage:qsu' });
});