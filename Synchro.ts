//classe pour les monstre syncro

class Synchro extends Monster {

    synchroFrame: FrameCard;
    rankOrLevel: rankLevel;

    public constructor(nom: string, des: string, star: number, attribut: Attribute, type: MonsterType, atk: number, def: number, effect: Effects) {
    //utilisation du constructeur de la classe parente
        super(nom, des, star, attribut, type, atk, def);
        //super(nom, des, star, attribut, type, atk, def, effect);
        this.synchroFrame = FrameCard.white;
        this.rankOrLevel = rankLevel.level;
}
    public ToString(): void {
        console.log("carte synchro " + this.name + "avec " + this.rankOrLevel + " de " + this.stars + " étoiles avec une couleur " + this.synchroFrame);
    }
}