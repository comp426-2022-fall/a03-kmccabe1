#!/usr/bin/env node
// Load dependencies
import minimist from 'minimist'
import { roll } from '../lib/roll.js'

// Parse cli args with minimist
const args = minimist(process.argv.slice(2))
// Set default values, but update if args given
let sides = 6
if (args.sides) {
	sides = args.sides
}
let dice = 2
if (args.dice) {
	dice = args.dice
}
let rolls = 1
if (args.rolls) {
	rolls = args.rolls
}

console.log(JSON.stringify(roll(sides, dice, rolls)))
