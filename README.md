# Battleship Assessment - React Developer Role

This repository contains my solution to the Battleship game logic assessment for Tendo Technologies. The instructions can be found in Question.pdf.

## 📋 Problem Summary

Given a list of ships and player guesses, the task is to compute:
- The total number of **hits** (guessed positions that match any ship),
- The total number of **sinks** (ships where all positions are hit).

Each ship is defined by its start and end coordinates and can be placed either vertically or horizontally on the board.

## 🧠 Approach

I followed a simple and clear algorithm:

1. For each ship:
   - Generate all the positions the ship occupies.
   - Track which of these positions are hit based on player guesses.
2. If all positions of a ship are hit, count it as a sink.
3. Otherwise, count how many positions were hit.

## 🧪 Example

```js
const ships = ["E1,E3", "A4,C4"];
const guesses = ["A4", "B4", "C4", "D3", "D2", "E1"];
const [hits, sinks] = calculateHitsAndSinks(ships, guesses);
console.log(`Result: (${hits},${sinks})`); // Output: (4,1)
