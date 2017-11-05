
/**
La classe GameField est la classe du terrain entier composé du
terrain de jeu des deux duelistes donc des deux playerSideField
 */
class GameField {

    field1: PlayerSideField;
    field2: PlayerSideField;
    //field3: PlayerSideField;

    
    public constructor() {
        this.field1 = new PlayerSideField();
        this.field2 = new PlayerSideField();
    }
    /*
    public constructor(psf1: PlayerSideField, psf2: PlayerSideField) {
        this.field1 = psf1;
        this.field2 = psf2;
    }*/

}