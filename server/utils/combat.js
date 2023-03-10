class Character{
    constructor(health, attack, attackLow, attackHigh, defense, defenseLow, defenseHigh, speed){
        this.health = health
        this.attack = attack
        this.attackLow = attackLow
        this.attackHigh = attackHigh
        this.defense = defense
        this.defenseLow = defenseLow
        this.defenseHigh = defenseHigh
        this.speed = speed
    }

    async attackVal(){
        const min = this.attackLow
        const max = this.attackHigh
        let atkVal = Math.floor(Math.random()*(max - min + 1)) + min
        return atkVal
    }

    async defenseVal(){
        const min = this.defenseLow
        const max = this.defenseHigh
        let defVal = Math.floor(Math.random()*(max - min + 1)) + min
        return defVal
    }
}

class Gauntlet{
    constructor(player1, enemy){
        this.player1 = player1
        this.enemy = enemy
        this.turn = 0
        this.waves = 0

        this.enemyScale_healthScale = 1.1
        this.enemyScale_atkScale = 1.1
        this.enemyScale_defScale = 1.1
        this.enemyScale_spdScale = 1.1
    }

    async combatTurn(){
        this.turn++
        if(this.player1.speed > this.enemy.speed || this.player1.speed === this.enemy.speed){
            let atkRoll = this.player1.attackVal()
            let defRoll = this.enemy.attackVal()
            if(this.player1.speed > 2*this.enemy.speed || this.player1.speed === 2*this.enemy.speed){
                const secondAtkRoll = this.player1.attackVal()
                atkRoll+= secondAtkRoll
            }
            let healthHit = atkRoll - defRoll
            if(healthHit < 0){ //line 61
                healthHit = 0
            }
            // Need to add self damage for not breaking through defense; line 63
            this.enemy.health-= healthHit
            if(this.enemy.health > 0){
                atkRoll = this.enemy.attackVal()
                defRoll = this.enemy.defenseVal()
                healthHit = atkRoll - defRoll
                if(healthHit < 0){
                    healthHit = 0
                }
                // Need to add self damage for not breaking through defense; line 79
                this.player1.health-= healthHit
            }
        }else{
            let atkRoll = this.enemy.attackVal()
            let defRoll = this.player1.defenseVal()
            if(this.enemy.speed > 2*this.player1.speed || this.enemy.speed === 2*this.player1.speed){
                const secondAtkRoll = this.enemy.attackVal()
                atkRoll+= secondAtkRoll
            }
            let healthHit = atkRoll - defRoll
            if(healthHit < 0){ //line 96
                healthHit = 0
            }
            // Need to add self damage for not breaking through defense; line 63
            this.player1.health-= healthHit
            if(this.player1.health > 0){
                atkRoll = this.player1.attackVal()
                defRoll = this.player1.defenseVal()
                healthHit = atkRoll - defRoll
                if(healthHit < 0){
                    healthHit = 0
                }
                // Need to add self damage for not breaking through defense; line 79
                this.enemy.health-= healthHit
            }
        }
    }

    async combatWave(){
        this.waves++
        if(this.player1.health > 0 && this.enemy.health > 0){
            function fight(){
                this.combatTurn()
                if(this.player1.health > 0 && this.enemy.health > 0){
                    fight()
                }
            }
            fight()
        }
        let scaleEnemy = Math.floor(Math.random() * 4)
        if(scaleEnemy === 0){
            this.enemy.attack = this.enemy.attack*this.enemy.enemyScale_atkScale
        }else if(scaleEnemy === 1){
            this.enemy.health = this.enemy.health*this.enemy.enemyScale_healthScale
        }else if(scaleEnemy === 2){
            this.enemy.defense = this.enemy.defense*this.enemy.enemyScale_defScale
        }else{
            this.enemy.speed = this.enemy.speed*this.enemy.enemyScale_spdScale
        }
    }

    async combatGame(){
        if(this.player1.health > 0){
            function game(){
                this.combatWave()
                if(this.player1.health > 0){
                    game()
                }
            }
            game()
            console.log(`Your character made it to wave `+this.waves+`!`)
        }
    }
}