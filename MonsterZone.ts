
class MonsterZone {


    monsterPosition: Array<Card>;

    public constructor() {
        this.monsterPosition = new Array<Card>();
    }
}

enum monsterPositionOnField {
    faceUpAttack,
    faceUpDefense,
    faceDownAttack,
    faceDownDefense
}