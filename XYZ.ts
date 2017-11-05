//classe des monsre xyz

class XYZ extends Monster {

    //rank: number;
    xyzFrame : FrameCard;
    rankOrL : rankLevel;

    public constructor(nom: string, des: string, star: number, attribut: Attribute, type: MonsterType, atk: number, def: number, effect: Effects) {
        //utilisation du constructeur de la classe parente
        super(nom, des, star, attribut, type, atk, def);
//        super(nom, des, star, attribut, type, atk, def, effect);
        this.xyzFrame = FrameCard.black;
        this.rankOrL = rankLevel.rank;
    }

    public ToString(): void {
        console.log("carte xyz " + this.name + "avec " + this.rankOrLevel + " de " + this.stars + " étoiles avec une couleur " + this.xyzFrame);
    }
}