
/**
 * 
 */
class Fusion extends Monster {

    fusionFrame: FrameCard;
    rankOrLevel: rankLevel;

    public constructor(nom: string, des: string, star: number, attribut: Attribute, type: MonsterType, atk: number, def: number, effect: Effects) {
        //utilisation du constructeur de la classe parente
        super(nom, des, star, attribut, type, atk, def);
//        super(nom, des, star, attribut, type, atk, def, effect);
        this.fusionFrame = FrameCard.purple;
        this.rankOrLevel = rankLevel.level;
    }
    public ToString(): void {
       // console.log("carte fusion " + this.name + "avec " + this.rankOrLevel + " de " + this.stars + " étoiles avec une couleur " + this.synchroFrame);
    }

}