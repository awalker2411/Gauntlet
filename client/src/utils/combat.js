class Character {
    constructor(health, attack, defense, speed) {
        this.health = health
        this.attack = attack
        this.attackLow = 1
        this.attackHigh = 10
        this.defense = defense
        this.defenseLow = 1
        this.defenseHigh = 8
        this.speed = speed
    }

    async attackVal() {
        const min = this.attackLow
        const max = this.attackHigh
        let atkVal = Math.floor(Math.random() * (max - min + 1)) + min
        return atkVal
    }

    async defenseVal() {
        const min = this.defenseLow
        const max = this.defenseHigh
        let defVal = Math.floor(Math.random() * (max - min + 1)) + min
        return defVal
    }
}

class Gauntlet {
    constructor(player1, enemy, turn, waves) {

        this.player1 = player1
        this.enemy = enemy

        this.enemyScale_healthScale = 1.1
        this.enemyScale_atkScale = 1.1
        this.enemyScale_defScale = 1.1
        this.enemyScale_spdScale = 1.1
    }
}

function combatGame(gauntlet) {
    let waves = 0
    let turn = 0

    function combatTurn(turn, player1, enemy) {
        turn++
        if (player1.speed > enemy.speed || player1.speed === enemy.speed) {
            let atkRoll = player1.attackVal()
            let defRoll = enemy.attackVal()
            if (player1.speed > 2 * enemy.speed || player1.speed === 2 * enemy.speed) {
                const secondAtkRoll = player1.attackVal()
                atkRoll += secondAtkRoll
            }
            let healthHit = atkRoll - defRoll
            if (healthHit < 0) { //line 61
                healthHit = 0
            }
            // Need to add self damage for not breaking through defense; line 63
            enemy.health -= healthHit
            if (enemy.health > 0) {
                atkRoll = enemy.attackVal()
                defRoll = enemy.defenseVal()
                healthHit = atkRoll - defRoll
                if (healthHit < 0) {
                    healthHit = 0
                }
                // Need to add self damage for not breaking through defense; line 79
                this.player1.health -= healthHit
            }
        } else {
            let atkRoll = enemy.attackVal()
            let defRoll = player1.defenseVal()
            if (enemy.speed > 2 * player1.speed || enemy.speed === 2 * player1.speed) {
                const secondAtkRoll = enemy.attackVal()
                atkRoll += secondAtkRoll
            }
            let healthHit = atkRoll - defRoll
            if (healthHit < 0) { //line 96
                healthHit = 0
            }
            // Need to add self damage for not breaking through defense; line 63
            player1.health -= healthHit
            if (player1.health > 0) {
                atkRoll = player1.attackVal()
                defRoll = player1.defenseVal()
                healthHit = atkRoll - defRoll
                if (healthHit < 0) {
                    healthHit = 0
                }
                // Need to add self damage for not breaking through defense; line 79
                enemy.health -= healthHit
            }
        }
    }

    function combatWave(waves, player1, enemy, turn) {
        waves++
        if (player1.health > 0 && enemy.health > 0) {
            function fight() {
                combatTurn(turn, player1, enemy)
                if (player1.health > 0 && enemy.health > 0) {
                    fight()
                }
            }
            fight()
        }
        let scaleEnemy = Math.floor(Math.random() * 4)
        if (scaleEnemy === 0) {
            enemy.attack = enemy.attack * enemy.enemyScale_atkScale
        } else if (scaleEnemy === 1) {
            enemy.health = enemy.health * enemy.enemyScale_healthScale
        } else if (scaleEnemy === 2) {
            enemy.defense = enemy.defense * enemy.enemyScale_defScale
        } else {
            enemy.speed = enemy.speed * enemy.enemyScale_spdScale
        }
    }

    if (gauntlet.player1.health > 0) {
        function game(gauntlet, index) {
            if (index >= 50) {
                return;
            }
            index++
            combatWave(waves, gauntlet.player1, gauntlet.enemy, turn)
            if (gauntlet.player1.health > 0) {
                index++
                game(gauntlet, index)
            }
        }
        game(gauntlet, 1)
        console.log(`Your character made it to wave ` + waves + `!`)
        localStorage.setItem('waves', waves)
    }
}


export default function createCharacter(characterType) {
    let waves = localStorage.getItem('waves') || 0
    let player1;
    let enemy

    switch (characterType) {
        case "Arcanist":
            player1 = new Character(150, 40, 30, 10)
            enemy = new Character(200, 20, 20, 20)
            break;
        case "Brute":
            player1 = new Character(600, 100, 20, 10)
            enemy = new Character(200, 20, 20, 20)
            break;
        case "Bulwark":
            player1 = new Character(1000, 17.5, 50, 5)
            enemy = new Character(200, 20, 20, 20)
            break;
        case "Dread Knight":
            player1 = new Character(200, 30, 30.5, 10)
            enemy = new Character(200, 20, 20, 20)
            break;
        case "Engineer":
            player1 = new Character(100, 69, 17, 25)
            enemy = new Character(200, 20, 20, 20)
            break;
        case "Shadowblade":
            player1 = new Character(50, 45, 10, 75)
            enemy = new Character(200, 20, 20, 20)
            break;
        default:
            player1 = new Character(200, 30, 30.5, 10)
            enemy = new Character(200, 20, 20, 20)
    }

    console.log(enemy)
    console.log(player1)

    const Arena = new Gauntlet(player1, enemy, 0, 0)
    combatGame(Arena)
    console.log(Arena)
    //Arena.combatGame()
}