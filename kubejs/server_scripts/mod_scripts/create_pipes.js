
// By Quentin765

onEvent('block.right_click', event => {
    if(event.block.id == 'create:glass_fluid_pipe' && !event.player.crouching) {
		relPos = {
			x: event.player.x - event.block.x,
			y: event.player.y - event.block.y,
			z: event.player.z - event.block.z,
		}
		axis = event.block.properties.axis

		if (
			axis == 'x' && (
				event.facing == 'WEST' ||
				event.facing == 'EAST'
			) ||
			axis == 'y' && (
				event.facing == 'UP' ||
				event.facing == 'DOWN'
			) ||
			axis == 'z' && (
				event.facing == 'NORTH' ||
				event.facing == 'SOUTH'
			)
		) return

        if(event.item.id == 'create:cogwheel') {
			event.cancel()
			event.item.count--
			if (axis == 'x' && relPos.x > 0) facing = 'east'
			if (axis == 'x' && relPos.x < 0) facing = 'west'
			if (axis == 'y' && relPos.y > 0) facing = 'down'
			if (axis == 'y' && relPos.y < 0) facing = 'up'
			if (axis == 'z' && relPos.z > 0) facing = 'south'
			if (axis == 'z' && relPos.z < 0) facing = 'north'
            event.block.set('create:mechanical_pump',{facing:facing,waterlogged:event.block.properties.waterlogged})
        }

		if(event.item.id == 'create:brass_sheet') {
			if (axis == 'y') {
				facing = event.facing.toString().toLowerCase()
				face = 'wall'
			} else {
				if (axis == 'x' && relPos.x > 0) facing = 'west'
				if (axis == 'x' && relPos.x < 0) facing = 'east'
				if (axis == 'z' && relPos.z > 0) facing = 'north'
				if (axis == 'z' && relPos.z < 0) facing = 'south'
				face = 'floor'
			}

			event.block.set('create:smart_fluid_pipe',{facing:facing,face:face})
			event.item.count--
			event.cancel()
        }

		if(event.item.id == 'thermal:iron_plate') {
			event.item.count--
			event.cancel()

			if (axis == 'x') axis_along_first = false
			if (axis == 'z') axis_along_first = true
			if (axis == 'y') {
				if (event.facing == 'NORTH' || event.facing == 'SOUTH') {
					axis_along_first = true
				}
				if (event.facing == 'EAST' || event.facing == 'WEST') {
					axis_along_first = false
				}
			}

			facing = event.facing.toString().toLowerCase()

			event.block.set('create:fluid_valve',{facing:facing,axis_along_first:axis_along_first})
			event.item.count--
			event.cancel()
		}
    }

	if(event.item.id == 'create:wrench' && event.player.crouching) {
		prop = event.block.properties

		if (event.block.id == 'create:mechanical_pump') {
			if (prop.facing == 'south' || prop.facing == 'north') axis = 'z'
			if (prop.facing == 'west' || prop.facing == 'east') axis = 'x'
			if (prop.facing == 'up' || prop.facing == 'down') axis = 'y'

			event.cancel()
			event.block.set('create:glass_fluid_pipe',{waterlogged:event.block.properties.waterlogged,axis:axis})
			event.player.give('create:cogwheel')
		}

		if (event.block.id == 'create:smart_fluid_pipe') {
			if (prop.face == 'floor') {
				if (prop.facing == 'south' || prop.facing == 'north') axis = 'z'
				if (prop.facing == 'west' || prop.facing == 'east') axis = 'x'
			}
			if (prop.face == 'wall') axis = 'y'
			event.cancel()
			event.block.set('create:glass_fluid_pipe',{axis:axis})
			event.player.give('create:brass_sheet')
		}

		if (event.block.id == 'create:fluid_valve') {
			if (prop.axis_along_first == 'true') {
				if (prop.facing == 'north' || prop.facing == 'south') {
					axis = 'y'
				} else {
					axis = 'z'
				}
			} else {
				if (prop.facing == 'east' || prop.facing == 'west') {
					axis = 'y'
				} else {
					axis = 'x'
				}
			}
			event.cancel()
			event.block.set('create:glass_fluid_pipe',{axis:axis})
			event.player.give('create:iron_sheet')
		}
	}
})

/*
Version 2.0

MIT License:

Copyright (c) 2022 Quentin Farrell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/