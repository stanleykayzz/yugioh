
class Pendulum extends Monster {
    scale: number;
    pendulumFrame: FrameCard;
    rankOrLevel: rankLevel;
    hasMonsterEffects: any;

    public constructor(nom: string, des: string, star: number, scales:number, attribut: Attribute, type: MonsterType, atk: number, def: number, effect: Effects) {
        //utilisation du constructeur de la classe parente
        //super(nom, des, star, attribut, type, atk, def, effect);
        super(nom, des, star, attribut, type, atk, def);
        this.scale = scales;
        this.hasMonsterEffects = false;
        if (this.hasMonsterEffects == true) {
            this.pendulumFrame = FrameCard.greenOrange;
        }
        else {
            this.pendulumFrame = FrameCard.greenYellow;
        }
        this.rankOrLevel = rankLevel.level;
    }
    public ToString(): void {
        console.log("carte pendulum " + this.name + "avec " + this.rankOrLevel + " de " + this.stars + " étoiles avec une couleur " + this.pendulumFrame);
    }



}