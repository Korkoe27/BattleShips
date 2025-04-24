// this is a JS program to count the number of hits, sinks and misses made by a player of the popular Battleships game
function hitsAndsinks (ships, playerGuesses) {

    let sinks = 0
    let hits = 0

    for (const ship of ships) {
        const coor1_firstpart = ship[0][0].toUpperCase()
        const coor1_secondpart = ship[0].slice(1)

        const coor2_firstpart = ship[1][0].toUpperCase()
        const coor2_secondpart = ship[1].slice(1)

        let positions = []

        // if coor1_firstpart = coor2_firstpart, then it is a vertical ship
        if (coor1_firstpart === coor2_firstpart) {

            // since it is a horizontal ship convert the second parts to numbers and increment to get all the positions
            const coor1_secondpart_number = Number(coor1_secondpart)
            const coor2_secondpart_number = Number(coor2_secondpart)

            // generate all possible positions
            positions = Array.from({ length: coor2_secondpart_number - coor1_secondpart_number + 1 }, (_, i) => coor1_secondpart_number + i)
            positions = positions.map(num => `${coor1_firstpart}${num}`);

        }

        // else if the second parts are equal then it's a horizontal ship
        else {

            positions = Array.from( { length: coor2_firstpart.charCodeAt(0) - coor1_firstpart.charCodeAt(0) + 1 }, (_, i) => String.fromCharCode(coor1_firstpart.charCodeAt(0) + i) );
            positions = positions.map(letter => `${letter}${coor1_secondpart}`);
        }

        
        // create boolean values of hit and no hit positions
        const hitPosition = positions.map((pos) => playerGuesses.includes(pos))

        // check if all the positions were hit
        const sinkShip = hitPosition.every(val => val === true)

        // update sinks if all postions were hit
        if (sinkShip) sinks = sinks + 1

        // update the number of hits
        hits = hits + hitPosition.filter(val => val === true).length
        
    }

    return [hits, sinks]
}

console.log(hitsAndsinks([['E1', 'E3'], ['A4', 'C4'], ['C8', 'C20'], ['M1', 'M4']], ['A4', 'B4', 'C4', 'D3', 'D2', 'E1', 'C15', 'C20', 'M1', 'M2', 'M3', 'M4']))
