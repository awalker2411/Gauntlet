class Character {
    constructor(health, attack, defense, speed) {
        this.health = health
        this.attack = attack
        this.defense = defense
        this.speed = speed
    }
}

class Gauntlet {
    constructor(player1, enemy) {

        this.player1 = player1
        this.enemy = enemy

    }
}

function combatGame(gauntlet) {
    let waves = 0
    let i
    let atkVal
    let defVal
    let valRan
    let playerOneHealth = gauntlet.player1.health
    let playerOneAttack = gauntlet.player1.attack
    let playerOneDefense = gauntlet.player1.defense
    let playerOneSpeed = gauntlet.player1.speed
    let enemyHealth = gauntlet.enemy.health
    let enemyAttack = gauntlet.enemy.attack
    let enemyDefense = gauntlet.enemy.defense
    let enemySpeed = gauntlet.enemy.speed


    function attackVal(attack) {
        const min = 1
        const max = 10
        const characterAtk = attack
        valRan = Math.floor(Math.random() * (max - min + 1)) + min
        atkVal = valRan * characterAtk
        return atkVal
    }

    function defenseVal(defense) {
        const min = 1
        const max = 8
        const characterDef = defense
        valRan = Math.floor(Math.random() * (max - min + 1)) + min
        defVal = valRan * characterDef
        return defVal
    }




    function combatTurn(p1a, p1d, p1h, p1s, ea, ed, eh, es) {

        if (p1s > es || p1s === es) {
            attackVal(p1a)
            defenseVal(ed)
            if (p1s > 2 * es || p1s === 2 * es) {
                const secondAtkRoll = attackVal(p1a)
                atkVal += secondAtkRoll
            }
            let healthHit = atkVal - defVal
            if (healthHit < 0) { //line 61
                healthHit = 0
            }
            // Need to add self damage for not breaking through defense; line 63
            eh -= healthHit
            if (eh > 0) {
                attackVal(ea)
                defenseVal(p1d)
                healthHit = atkVal - defVal
                if (healthHit < 0) {
                    healthHit = 0
                }
                // Need to add self damage for not breaking through defense; line 79
                p1h -= healthHit
            }
        } else {
            attackVal(ea)
            defenseVal(p1d)
            if (es > 2 * p1s || es === 2 * p1s) {
                const secondAtkRoll = attackVal(ea)
                atkVal += secondAtkRoll
            }
            let healthHit = atkVal - defVal
            if (healthHit < 0) { //line 96
                healthHit = 0
            }
            // Need to add self damage for not breaking through defense; line 63
            p1h -= healthHit
            if (p1h > 0) {
                attackVal(p1a)
                defenseVal(ed)
                healthHit = atkVal - defVal
                if (healthHit < 0) {
                    healthHit = 0
                }
                // Need to add self damage for not breaking through defense; line 79
                eh -= healthHit
            }
        }
        playerOneHealth = p1h
        enemyHealth = eh
        return playerOneHealth, enemyHealth
    }

    function combatWave(p1a, p1d, p1h, p1s, ea, ed, eh, es) {
        if (playerOneHealth > 0 && enemyHealth > 0) {
            function fight(index) {
                if (index > 1000){
                    return;
                }
                index++
                combatTurn(p1a, p1d, playerOneHealth, p1s, ea, ed, enemyHealth, es)
                if (playerOneHealth > 0 && enemyHealth > 0) {
                    index++
                    fight(index)
                }
            }
            fight(0)
        }

        enemyHealth = eh
        let scaleEnemy = Math.floor(Math.random() * 4)
        if (scaleEnemy === 0) {
            ea = ea * 1.1
            enemyAttack = ea
            return enemyAttack, playerOneHealth
        } else if (scaleEnemy === 1) {
            eh = eh * 1.1
            enemyHealth = eh
            return enemyHealth, playerOneHealth
        } else if (scaleEnemy === 2) {
            ed = ed * 1.1
            enemyDefense = ed
            return enemyDefense, playerOneHealth
        } else {
            es = es * 1.1
            enemySpeed = es
            return enemySpeed, playerOneHealth
        }
    }

    if (playerOneHealth > 0) {
        function game(index) {
            waves = index
            if (waves > 100) {
                return i;
            }
            waves++
            combatWave(playerOneAttack, playerOneDefense, playerOneHealth, playerOneSpeed, enemyAttack, enemyDefense, enemyHealth, enemySpeed)
            if (playerOneHealth > 0) {
                waves++
                game(waves)
            }
            return waves
        }
        game(0)
    }
    
    console.log(enemyHealth, playerOneHealth)
    console.log(`Your character made it to wave ` + waves + `!`)
    localStorage.setItem('waves', waves)
}


export default function createCharacter(characterType) {
    let player1;
    let enemy
    let arena

    function getStats(characterType) {
        switch (characterType) {
            case "Arcanist":
                player1 = new Character(150, 40, 30, 10)
                enemy = new Character(200, 20, 20, 20)
                arena = new Gauntlet(player1, enemy)
                break;
            case "Brute":
                player1 = new Character(600, 100, 20, 10)
                enemy = new Character(200, 20, 20, 20)
                arena = new Gauntlet(player1, enemy)
                break;
            case "Bulwark":
                player1 = new Character(1000, 17.5, 50, 5)
                enemy = new Character(200, 20, 20, 20)
                arena = new Gauntlet(player1, enemy)
                break;
            case "Dread Knight":
                player1 = new Character(200, 30, 30.5, 10)
                enemy = new Character(200, 20, 20, 20)
                arena = new Gauntlet(player1, enemy)
                break;
            case "Engineer":
                player1 = new Character(100, 69, 17, 25)
                enemy = new Character(200, 20, 20, 20)
                arena = new Gauntlet(player1, enemy)
                break;
            case "Shadowblade":
                player1 = new Character(50, 45, 10, 75)
                enemy = new Character(200, 20, 20, 20)
                arena = new Gauntlet(player1, enemy)
                break;
            default:
                player1 = new Character(200, 30, 30.5, 10)
                enemy = new Character(200, 20, 20, 20)
                arena = new Gauntlet(player1, enemy)
        }
        return arena
    }

    getStats(characterType)

    combatGame(arena)



    // console.log(enemy)
    // console.log(player1)

    // combatGame(arena)
    // console.log(arena)

}