//Classe AudioDestinationNode cartes des cartes type piege
class Trap extends Card {
    effectList: Effects;
    type: TrapType;
    activable: boolean;
    public constructor(nom: string, def: string, ) {
        super(nom, def, );
        this.setFront();
        this.activable = false;
    }
        
    isActivable() :  void {
        // TODO implement here
    }

}