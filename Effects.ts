//Classe effects

class Effects {
    /**
     * Les effets de cartes peuvent faire plusieurs choses, on va donc
    essayé de creer un attribut pour essayer de recouvrir tous les cas
     */
    //les cibles des effets (joueurs)
    
    x: number;
    y: number;
    public constructor() {
    }

    //les effets sont des fonctions
    //on créera aussi surement des variables ou des enum pour les json
    increaseLifePoints(): void {

    }
    decreaseLifePoints(): void {

    }
    drawCards(): void {

    }
    destroyAcard(carte: Card): void {

    }
    destroyMonster(monstre: Monster): void {

    }
    increaseAttackPoints(num: number): void {

    }

    increaseDefensePoints(num: number): void {

    }
}