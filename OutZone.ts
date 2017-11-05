
class OutZone {
    outZone: Array<Card>;

    public constructor() {
        this.outZone = new Array<Card>();
    }
    //recup�re le total des cartes hors jeu
    public getTotalOutCards(): number {
        return this.outZone.length;
    }

    //ajoute des cartes dans la zone hors jeu 
    public sendToOut(aCard: Card): void {
        this.outZone.push(aCard);
    }

    //recup�re une carte de la zone de hors jeu
    public getFromOut(aCard: Card): void {
        //  this.graveyard.
    }

}