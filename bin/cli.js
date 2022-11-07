#!/usr/bin/env node
// Load dependencies
import minimist from 'minimist'
import { roll } from '../lib/roll.js'

// Parse cli args with minimist
const args = minimist(process.argv.slice(2))
// Set default values, but update if args given
let sides = 6
// Update sides if positive integer is given
if (args.sides > 0 && (args.sides % 1 == 0)) {
	sides = args.sides
}else {
	console.log("Invalid sides argument.")
	process.exit(1)
}
let dice = 2
// Update dice if positive integer is given
if (args.dice > 0 && (args.dice % 1 == 0)) {
	dice = args.dice
}else {
	console.log("Invalid dice argument.")
	process.exit(1)
}
let rolls = 1
// Update rolls if positive integer is given
if (args.rolls > 0 && (args.rolls % 1 == 0)) {
	rolls = args.rolls
}else {
	console.log("Invalid rolls argument.")
	process.exit(1)
}

console.log(JSON.stringify(roll(sides, dice, rolls)))
process.exit(0)
