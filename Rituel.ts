//classe des monstres rituel

class Rituel extends Monster {

    ritFrame: FrameCard;
    rol: rankLevel;
    
    public constructor(nom: string, des: string, star: number, scales: number, attribut: Attribute, type: MonsterType, atk: number, def: number, effect: Effects) {
        //utilisation du constructeur de la classe parente
        super(nom, des, star, attribut, type, atk, def);
        //super(nom, des, star, attribut, type, atk, def, effect);
        this.ritFrame = FrameCard.blue;
        this.rol = rankLevel.level;
    }

    public ToString(): void {
        console.log("carte rituel " + this.name + "avec " + this.rankOrLevel + " de " + this.stars + " étoiles avec une couleur " + this.ritFrame);
    }

}