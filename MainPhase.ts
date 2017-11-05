//classe mainphase
//durant la mainphase le joueur pose, invoque, des monstres et des cartes pièges et magique

class MainPhase {
    nextPhase: any;
    public constructor() {
        console.log("mainphase en cours, je peux invoquer, poser des cartes etc...");
    }

    /*
    on pose une carte qu'on passe en paramètre et dont on choisi la position
    params (Carte, position)
    */
    public setMonsterCard(carte:Card,position: MonsterZone): void {
        console.log("Je pose un monstre");
    }

    public setMagicAndTrapCard(): void {
        console.log("Je pose une carte magie ou piege");
    }
    
}