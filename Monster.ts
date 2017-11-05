
// un monstre a soit un niveau soit un rang mais des etoiles dans tous les cas
enum rankLevel { rank, level };


class Monster extends Card {
    //level: number;
    stars: number;
    rankOrLevel: rankLevel;
    attribute: Attribute;
    type: MonsterType;
    attackPoints: number;
    defensePoints: number;
    effectsList: Effects;
    private frame: FrameCard;

    /*public constructor(nom: string, des: string, star: number, attribut: Attribute, type: MonsterType, atk: number, def: number, effect: Effects) {
        //utilisation du constructeur de la classe parente
        super(nom, des);
        this.attackPoints = atk;
        this.defensePoints = def;
        this.stars = star;
        this.type = type;
        this.attribute = attribut;
        this.rankOrLevel = rankLevel.level;
        //la couleur de la carte est jaune si le monstre n'as pas d'effet sinon elle est orange
        this.frame = FrameCard.yellow;
    }*/
    public constructor(nom: string, des: string, star: number, attribut: Attribute, type: MonsterType, atk: number, def: number) {
        //utilisation du constructeur de la classe parente
        super(nom, des);
        this.attackPoints = atk;
        this.defensePoints = def;
        this.stars = star;
        this.type = type;
        this.attribute = attribut;
        this.rankOrLevel = rankLevel.level;
        //la couleur de la carte est jaune si le monstre n'as pas d'effet sinon elle est orange
        this.frame = FrameCard.yellow;
    }

    
}