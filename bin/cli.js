#!/usr/bin/env node
// Load dependencies
import minimist from 'minimist'
import { roll } from '../lib/roll.js'

// Parse cli args with minimist
const args = minimist(process.argv.slice(2))
// Set default values, but update if args given
let sides = 6
if (args.sides > 0) {
	sides = args.sides
}else {
	console.log("Sides must be positive.")
}
let dice = 2
if (args.dice > 0) {
	dice = args.dice
}else {
	console.log("Dice must be positive.")
}
let rolls = 1
if (args.rolls > 0) {
	rolls = args.rolls
}else {
	console.log("Rolls must be positive.")
}

console.log(JSON.stringify(roll(sides, dice, rolls)))
process.exit(0)
